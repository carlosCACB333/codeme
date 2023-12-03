use crate::models::directory::{Directory, NewDirectory};
use crate::pb::dir_service_server::DirService;
use crate::pb::{CreateDirReq, DirRes, Empty, GenericReq};
use diesel::r2d2::{ConnectionManager, Pool};
use diesel::PgConnection;
use tokio_stream::wrappers::ReceiverStream;
use tonic::{Request, Response, Status};

#[derive(Debug)]
pub struct MyDirService {
    pub pool: Pool<ConnectionManager<PgConnection>>,
}

impl MyDirService {
    pub fn new(pool: Pool<ConnectionManager<PgConnection>>) -> Self {
        Self { pool }
    }
}

#[tonic::async_trait]
impl DirService for MyDirService {
    async fn get_by_id(&self, _request: Request<GenericReq>) -> Result<Response<DirRes>, Status> {
        let conn = &mut self.pool.get().expect("Error getting connection");
        let directories = Directory::find_by_id(conn, _request.get_ref().id.clone());

        let reply = DirRes {
            id: directories.id.clone(),
            name: directories.name.clone(),
            parent_id: directories.parent_id.clone(),
            content: directories.content.clone(),
            created_at: Some(directories.created_at.into()),
            updated_at: Some(directories.updated_at.into()),
        };

        Ok(Response::new(reply))
    }
    async fn create(&self, req: Request<CreateDirReq>) -> Result<Response<DirRes>, Status> {
        let conn = &mut self.pool.get().expect("Error getting connection");
        let new_directory = NewDirectory::new(
            req.get_ref().name.clone(),
            req.get_ref().content.clone(),
            req.get_ref().parent_id.clone(),
        );
        let directory = new_directory.insert(conn);

        let reply = DirRes {
            id: directory.id.clone(),
            name: directory.name.clone(),
            parent_id: directory.parent_id.clone(),
            content: directory.content.clone(),
            created_at: Some(directory.created_at.into()),
            updated_at: Some(directory.updated_at.into()),
        };

        Ok(Response::new(reply))
    }

    type GetAllStream = ReceiverStream<Result<DirRes, Status>>;

    async fn get_all(
        &self,
        _request: Request<Empty>,
    ) -> Result<Response<Self::GetAllStream>, Status> {
        let conn = &mut self.pool.get().expect("Error getting connection");
        let directories = Directory::find_all(conn);

        let (tx, rx) = tokio::sync::mpsc::channel(4);

        tokio::spawn(async move {
            for directory in directories {
                let reply = DirRes {
                    id: directory.id.clone(),
                    name: directory.name.clone(),
                    parent_id: directory.parent_id.clone(),
                    content: directory.content.clone(),
                    created_at: Some(directory.created_at.into()),
                    updated_at: Some(directory.updated_at.into()),
                };
                tx.send(Ok(reply)).await.unwrap();
            }
        });

        Ok(Response::new(ReceiverStream::new(rx)))
    }
}
