#[macro_use] extern crate actix_web;

use actix_web::{ web, App, HttpServer };

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(move || {
        App::new()
    })
    .bind("127.0.0.1:8000")?
    .run()
    .await
}
