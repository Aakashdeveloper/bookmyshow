import express from 'express';
const app = express();
const port = 7600;
const database = require('./database/mongoconnect')

app.get('/latest',(req,res) => {
    let out = database.prototype.getData('latestMovies')
    res.send(out)
});

app.get('/latest/:id',(req,res) => {
    var {id} = req.params
    let out = database.prototype.getDetails('latestMovies',id)
    res.send(out)
});


app.get('/upcomingMovies',(req,res) => {
    let out = database.prototype.getData('upcomingMovies')
    res.send(out)
});

app.get('/upcoming/:id',(req,res) => {
    var {id} = req.params
    let out = database.prototype.getDetails('upcomingMovies',id)
    res.send(out)
});

app.get('/events',(req,res) => {
    let out = database.prototype.getData('events')
    res.send(out)
});

app.get('/about',(req,res) => {
    res.send('<h1>On about Page</h1>')
});


app.listen(port,(err)=>{
    console.log(`server is running on port ${port}`)
});
