let request = require("request");
request('http://google.com', function(error, response, body){
    if(error){
        console.log("Something went wrong!");
        console.log(error);
    } else {
        if(response.statusCode === 200){
            // Things worked ok!
            console.log(body);
        }
    }
});
 