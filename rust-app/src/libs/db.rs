use diesel::pg::PgConnection;
use diesel::r2d2::{ConnectionManager, Pool};
use std::env;

pub fn create_pool() -> Pool<ConnectionManager<PgConnection>> {
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let manager = ConnectionManager::<PgConnection>::new(database_url);
    Pool::builder()
        .max_size(15)
        .build(manager)
        .expect("Failed to create pool.")
}
