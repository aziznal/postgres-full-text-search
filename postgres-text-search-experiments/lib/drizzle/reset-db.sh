#!/bin/bash

set -a
source .env
set +a

echo "Terminating all connections"
PGPASSWORD="$DB_PASSWORD" psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d template1 -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '$DB_NAME' AND pid <> pg_backend_pid();"

echo "Dropping database"
PGPASSWORD="$DB_PASSWORD" dropdb -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" --if-exists "$DB_NAME"

echo "Drop successful"
echo "Creating new database"
PGPASSWORD="$DB_PASSWORD" createdb -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" "$DB_NAME"

echo "Done!"
