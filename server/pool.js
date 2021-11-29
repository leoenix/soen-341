import knex from "knex";

const pool = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        database: 'stackoverflow',
        password: 'rootpassword'
    }
});

export default pool;
