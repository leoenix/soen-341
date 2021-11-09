import pool from "./pool.js";

export function getPostTotal(questionid) {
	pool
		.select(pool.raw("count(*) as c"))
		.from("votes")
		.where({ questionid: questionid });
}
