use std::time::SystemTime;

use crate::libs::jwt;
use crate::schema::users;
use diesel::{pg::Pg, prelude::*};

enum UserStatus {
    PendingEmailVerification,
}

impl UserStatus {
    fn to_string(&self) -> String {
        match self {
            UserStatus::PendingEmailVerification => "PENDING_EMAIL_VERIFICATION".to_string(),
        }
    }
}

#[derive(Queryable, Selectable, Debug, Clone)]
#[diesel(table_name = users)]
#[diesel(check_for_backend(Pg))]

pub struct User {
    pub id: String,
    pub username: String,
    pub email: String,
    pub first_name: String,
    pub last_name: String,
    pub password: String,
    pub gender: Option<String>,
    pub phone: Option<String>,
    pub picture: Option<String>,
    pub status: String,
    pub created_at: SystemTime,
    pub updated_at: SystemTime,
}

#[derive(Insertable, Debug)]
#[diesel(table_name = users)]
#[diesel(check_for_backend(Pg))]
pub struct NewUser {
    pub id: String,
    pub username: String,
    pub email: String,
    pub first_name: String,
    pub last_name: String,
    pub password: String,
    pub gender: Option<String>,
    pub phone: Option<String>,
    pub picture: Option<String>,
    pub status: String,
}

impl User {
    pub fn find_by_username(
        conn: &mut PgConnection,
        username: String,
    ) -> Result<Self, diesel::result::Error> {
        users::table
            .filter(users::username.eq(username))
            .first(conn)
    }

    pub fn find_by_id(conn: &mut PgConnection, id: String) -> Result<Self, diesel::result::Error> {
        users::table.filter(users::id.eq(id)).first(conn)
    }

    pub fn encode_jwt(&self) -> Result<String, String> {
        let secret = std::env::var("JWT_SECRET").expect("JWT_SECRET must be set");
        let jwt = jwt::Jwt::new(secret);
        jwt.encode(self.id.clone())
    }

    pub fn verify_password(&self, password: String) -> bool {
        bcrypt::verify(password, &self.password).unwrap()
    }
}

impl NewUser {
    pub fn new(
        username: String,
        email: String,
        first_name: String,
        last_name: String,
        password: String,
        gender: Option<String>,
        phone: Option<String>,
        picture: Option<String>,
    ) -> Self {
        let id = uuid::Uuid::new_v4().to_string();
        let status = UserStatus::PendingEmailVerification.to_string();
        let mut user = Self {
            id,
            username,
            email,
            first_name,
            last_name,
            password,
            gender,
            phone,
            picture,
            status,
        };
        user.hash_password();
        user
    }

    pub fn insert(&self, conn: &mut PgConnection) -> Result<User, diesel::result::Error> {
        diesel::insert_into(users::table)
            .values(self)
            .get_result(conn)
    }

    pub fn hash_password(&mut self) {
        self.password = bcrypt::hash(self.password.clone(), bcrypt::DEFAULT_COST).unwrap();
    }
}
