import knex from "knex";

const pool = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        database: 'stackoverflow',
        password: 'password'
    }
});

export default pool;
