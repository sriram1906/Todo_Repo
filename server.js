/**
 * Created by sriram on 10/22/16.
 */
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
    id : 1,
    Description : "Learn node js",
    Completed : false
}, {
        id : 2,
        Description : "health",
        Completed : false
    },{
    id : 3,
    Description : "drink boost",
    Completed : true
}]

app.get('/', function(req,res)
{
    res.send("Todo API Root");
});

app.get('/todos', function(req,res)
{
    res.json(todos);
});

app.get('/todos/:id', function(req,res)
{
    res.json("Asking for todo with id of " + req.params.id);
});


app.listen(PORT,function () {
    console.log("Listening!");
});

