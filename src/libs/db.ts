import { Pool } from "pg";

const conn = new Pool({
    user: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASSWORD,
    host: process.env.PGSQL_HOST,
    port: process.env.PGSQL_PORT as unknown as number,
    database: process.env.PGSQL_DATABASE,
});

export default conn;
