import pool from "./pool.js";

export function getLoggedInUser(token) {
    return pool.select('*').from("users").where({'users.token': token}).first();
}
