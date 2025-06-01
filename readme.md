# Database

Run a postgres instance using docker with this command:

```bash
docker run --name postgres-fts -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres
```

you can connect to it using psql:

```
psql postgres://postgres:password@localhost:5432/postgres
```

This url is also stored in the nextjs project's .env file

