-- Database: tvtrader

-- DROP DATABASE tvtrader;

CREATE DATABASE tvtrader
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Table: public.alert-table

-- DROP TABLE public."alert-table";

-- Table: public.alert-table

-- DROP TABLE public."alert-table";

CREATE TABLE public.alert
(
    symbol varchar(100) COLLATE pg_catalog."default" NOT NULL,
    time_frame varchar(100) COLLATE pg_catalog."default" NOT NULL,
    trade varchar(100) COLLATE pg_catalog."default" NOT NULL,
    "time" date NOT NULL,
    id varchar(100) COLLATE pg_catalog."default" NOT NULL,
    created_at date,
    updated_at date,
    CONSTRAINT "alert-table_pkey" PRIMARY KEY (id)
);

TABLESPACE pg_default;

ALTER TABLE public."alert-table"
    OWNER to postgres;