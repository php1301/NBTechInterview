-- SCHEMA: keyword

-- DROP SCHEMA IF EXISTS keyword ;

CREATE SCHEMA IF NOT EXISTS keyword
    AUTHORIZATION postgres;


-- Table: keyword.keywords

-- DROP TABLE IF EXISTS keyword.keywords;

CREATE TABLE IF NOT EXISTS keyword.keywords
(
    id integer NOT NULL DEFAULT nextval('keyword.keywords_id_seq'::regclass),
    keyword_name text COLLATE pg_catalog."default" NOT NULL,
    total_adwords text COLLATE pg_catalog."default",
    total_links text COLLATE pg_catalog."default",
    total_search_results text COLLATE pg_catalog."default",
    html_code text COLLATE pg_catalog."default",
    CONSTRAINT keywords_pkey PRIMARY KEY (id),
    CONSTRAINT keyword_name_unique UNIQUE (keyword_name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS keyword.keywords
    OWNER to postgres;

-- Table: keyword.users

-- DROP TABLE IF EXISTS keyword.users;

CREATE TABLE IF NOT EXISTS keyword.users
(
    id integer NOT NULL DEFAULT nextval('keyword.users_id_seq'::regclass),
    email text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT email_unique UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS keyword.users
    OWNER to postgres;


-- Table: keyword.user_keyword

-- DROP TABLE IF EXISTS keyword.user_keyword;

CREATE TABLE IF NOT EXISTS keyword.user_keyword
(
    user_email text COLLATE pg_catalog."default" NOT NULL,
    keyword_name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_keyword_pk PRIMARY KEY (user_email, keyword_name),
    CONSTRAINT user_keyword_keyword_name_fkey FOREIGN KEY (keyword_name)
        REFERENCES keyword.keywords (keyword_name) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE NO ACTION,
    CONSTRAINT user_keyword_user_email_fkey FOREIGN KEY (user_email)
        REFERENCES keyword.users (email) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS keyword.user_keyword
    OWNER to postgres;