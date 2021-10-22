const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "soen341stack",
    host: "localhost",
    port: 5432,
    database: "stackclone341"
});

module.exports = pool;