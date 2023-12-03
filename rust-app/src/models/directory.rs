use std::time::SystemTime;

use super::super::schema::directories;
use diesel::{pg::Pg, prelude::*};

#[derive(Queryable, Selectable, Debug, Clone)]
#[diesel(table_name = directories)]
#[diesel(check_for_backend(Pg))]
pub struct Directory {
    pub id: String,
    pub name: String,
    pub content: Option<String>,
    pub parent_id: Option<String>,
    pub created_at: SystemTime,
    pub updated_at: SystemTime,
}

impl Directory {
    pub fn find_all(conn: &mut PgConnection) -> Vec<Directory> {
        directories::table
            .order(directories::created_at.desc())
            .load::<Directory>(conn)
            .expect("Error loading directories")
    }

    pub fn find_by_id(conn: &mut PgConnection, id: String) -> Directory {
        directories::table
            .find(id)
            .first::<Directory>(conn)
            .expect("Error loading directory")
    }
}

#[derive(Insertable, Debug)]
#[diesel(table_name = directories)]
#[diesel(check_for_backend(Pg))]
pub struct NewDirectory {
    pub id: String,
    pub name: String,
    pub content: Option<String>,
    pub parent_id: Option<String>,
}

impl NewDirectory {
    pub fn new(name: String, content: Option<String>, parent_id: Option<String>) -> Self {
        Self {
            id: uuid::Uuid::new_v4().to_string(),
            name,
            content,
            parent_id,
        }
    }

    pub fn insert(&self, conn: &mut PgConnection) -> Directory {
        diesel::insert_into(directories::table)
            .values(self)
            .get_result(conn)
            .expect("Error saving new directory")
    }
}
