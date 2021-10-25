import express from 'express';

const app = express();
const port = 3030;

app.get('/', function(req,res){
    res.send('test1');
});

app.listen(port, function(){
    console.log('listening on port: ' + port);
});

