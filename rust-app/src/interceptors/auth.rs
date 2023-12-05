use diesel::{
    r2d2::{ConnectionManager, Pool},
    PgConnection,
};
use tonic::{Request, Status};

use crate::{libs::jwt, models::user};

pub struct Context {
    pub user: user::User,
}

pub fn check_auth(
    pool: Pool<ConnectionManager<PgConnection>>,
) -> impl FnMut(Request<()>) -> Result<Request<()>, Status> + Clone {
    move |mut req: Request<()>| {
        let conn = &mut pool.get().expect("Error getting connection");
        let meta = req.metadata();
        let auth = meta.get("authorization");

        if auth.is_none() {
            return Err(Status::unauthenticated("No auth token"));
        }

        let auth = auth.unwrap().to_str().unwrap();
        let auth = auth.split(" ").collect::<Vec<&str>>();
        let token = auth[1];

        let secret = std::env::var("JWT_SECRET").expect("JWT_SECRET must be set");
        let jwt = jwt::Jwt::new(secret);
        let id = jwt.decode(token);

        if id.is_err() {
            return Err(Status::unauthenticated("No valid auth token"));
        }

        let id = id.unwrap();

        let user = user::User::find_by_id(conn, id);

        if user.is_err() {
            return Err(Status::unauthenticated("No valid auth token"));
        }

        // set user to context
        req.extensions_mut().insert(Context {
            user: user.unwrap(),
        });

        Ok(req)
    }
}
