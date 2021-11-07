import pool from './pool.js';


export function getPostTotal(questionid) {
    return new Promise((resolve, reject) => {
        pool.select(pool.raw('sum(vote) as `count`'))
            .from('votes')
            .where({
                questionid: questionid,
            })
            .first()
            .then(row => resolve(row.count || 0))
            .catch(reject);
    });
}