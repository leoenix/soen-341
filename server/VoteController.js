import express from 'express';
import pool from './pool.js';
import { getLoggedInUser } from './UserFunctions.js';
import { getPostTotal } from './VoteFunctions.js';

const VoteController = express.Router();

VoteController.post('/vote/:direction/:questionid', (req, res) => {
    const token = req.cookies.token;
    getLoggedInUser(token).then(user => {

        const questionid  = req.params.questionid;
        const direction = req.params.direction === 'up' ? 1 : -1;
        pool.select('*')
            .from('votes')
            .where({
                questionid: questionid,
                userid : user.id,
            })
            .first()
            .then(vote => {

                // if we don't have a vote
                if (!vote) {
                  
                   return pool('votes').insert({
                        questionid : questionid,
                        userid : user.id,
                        vote: direction,
                    })
                    .then( () => 
                        getPostTotal(questionid)
                        .then(count => res.json(count).sendStatus(200))
                        .catch( e => console.log(e) && res.status(422).send() ))
                    .catch( e => console.log(e) && res.status(422).send() );
                }
                
                else if (direction === vote.vote) {
     
                    // delete vote
                    return pool('votes').where({ id: vote.id }).del()
                        .then( () => 
                            getPostTotal(questionid)
                            .then(count => res.json(count).sendStatus(200))
                            .catch( e => console.log(e) && res.status(422).send() ))
                        .catch( e => console.log(e) && res.status(422).send() );

                } else {

                    // update vote
                    return pool('votes').where({id: vote.id}).update({vote: direction})
                    .then( () => 
                    getPostTotal(questionid)
                    .then(count => res.json(count).sendStatus(200))
                    .catch( e => console.log(e) && res.status(422).send() ))
                    .catch( e => console.log(e) && res.status(422).send() );

                }
            })
            .catch(e => {console.log(e); res.status(422).send();});
    });

});

export default VoteController;