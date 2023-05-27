## USING NPM

- npm i OR npm i --legacy-peer-deps
- npm run dev

## DB

docker pull postgres:latest

docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=myuser -e POSTGRES_DB=mydatabase -p 5432:5432 -d postgres:latest
