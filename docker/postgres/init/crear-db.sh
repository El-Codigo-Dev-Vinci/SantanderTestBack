#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE USER desapp WITH PASSWORD 'desarrollo';

  CREATE DATABASE desapp_dev;
  GRANT ALL PRIVILEGES ON DATABASE desapp_dev TO desapp;

  CREATE DATABASE unahur_desapp_test;
  GRANT ALL PRIVILEGES ON DATABASE desapp_test TO desapp;
EOSQL
