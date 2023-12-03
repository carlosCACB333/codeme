// @generated automatically by Diesel CLI.

diesel::table! {
    directories (id) {
        #[max_length = 255]
        id -> Varchar,
        #[max_length = 255]
        name -> Varchar,
        content -> Nullable<Text>,
        #[max_length = 255]
        parent_id -> Nullable<Varchar>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}
