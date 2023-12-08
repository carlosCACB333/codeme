use crate::models::user::{NewUser, User};
use crate::pb;
use diesel::{r2d2, PgConnection};
use tonic::{Code, Response, Status};
use tonic_types::{ErrorDetails, StatusExt};
use validator::Validate;

#[derive(Debug)]
pub struct AuthSvc {
    pub pool: r2d2::Pool<r2d2::ConnectionManager<PgConnection>>,
}

impl AuthSvc {
    pub fn new(pool: r2d2::Pool<r2d2::ConnectionManager<PgConnection>>) -> Self {
        Self { pool }
    }
    pub fn get_svc(self) -> pb::auth_svc_server::AuthSvcServer<AuthSvc> {
        pb::auth_svc_server::AuthSvcServer::new(self)
    }
}

#[tonic::async_trait]
impl pb::auth_svc_server::AuthSvc for AuthSvc {
    async fn sign_up(
        &self,
        _req: tonic::Request<pb::SignUpReq>,
    ) -> std::result::Result<tonic::Response<pb::SignUpRes>, tonic::Status> {
        let conn = &mut self.pool.get().expect("Error getting connection");
        let req = _req.into_inner();

        let user = NewUser::new(
            req.username,
            req.email,
            req.first_name,
            req.last_name,
            req.password,
            req.gender,
            req.phone,
            req.picture,
        );

        let validation = user.validate();

        if validation.is_err() {
            let errors = validation.err().unwrap();
            let mut details = ErrorDetails::new();
            for (field, errors) in errors.field_errors() {
                for error in errors {
                    details.add_bad_request_violation(field, error.to_string());
                }
            }
            return Err(Status::with_error_details(
                Code::InvalidArgument,
                "Datos incorrectos",
                details,
            ));
        }

        let user = user.insert(conn);

        if user.is_err() {
            return Err(Status::from_error(user.err().unwrap().into()));
        }

        let user = user.unwrap();

        let token = user.encode_jwt().ok();

        Ok(Response::new(pb::SignUpRes {
            status: pb::Status::Ok as i32,
            token,
            user: Some(pb::User {
                id: user.id,
                username: user.username,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                gender: user.gender,
                password: user.password,
                picture: user.picture,
                status: user.status,
                phone: user.phone,
                created_at: Some(user.created_at.into()),
                updated_at: Some(user.updated_at.into()),
            }),
        }))
    }

    async fn sign_in(
        &self,
        _req: tonic::Request<pb::SignInReq>,
    ) -> std::result::Result<tonic::Response<pb::SignInRes>, tonic::Status> {
        let req = _req.into_inner();
        let conn = &mut self.pool.get().expect("Error getting connection");
        let user = User::find_by_username(conn, req.username);

        if user.is_err() {
            return Err(tonic::Status::from_error(user.err().unwrap().into()));
        }

        let user = user.unwrap();

        if !user.verify_password(req.password) {
            return Err(tonic::Status::unauthenticated("Invalid password"));
        }

        let token = user.encode_jwt().ok();

        Ok(Response::new(pb::SignInRes {
            status: pb::Status::Ok as i32,
            token,
            user: Some(pb::User {
                id: user.id,
                username: user.username,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                gender: user.gender,
                password: user.password,
                picture: user.picture,
                status: user.status,
                phone: user.phone,
                created_at: Some(user.created_at.into()),
                updated_at: Some(user.updated_at.into()),
            }),
        }))
    }
}
