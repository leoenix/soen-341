import pool from "./pool.js";

export function getPostTotal(questionid) {
	return new Promise((resolve, reject) => {
		pool
			.select(pool.raw("sum(vote) as c"))
			.from("votes")
			.where({ questionid: questionid })
			.first()
			.then((row) => resolve(row.c === null ? 0 : row.c))
			.catch(reject);
	});
}
