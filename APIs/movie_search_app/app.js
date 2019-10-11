const express = require('express');
const app = express();
const request = require('request');

app.get('/results', function(req, res){
    request('http://www.omdbapi.com/?s=harry&apikey=thewdb', (error, response, body) => {
    if(!error && response.statusCode === 200);
    let results = JSON.parse(body);
    res.send(results['Search'][0]['Title']); 

    });

}); 



app.listen(3000, function(){
    console.log("Movie App  started!");
});