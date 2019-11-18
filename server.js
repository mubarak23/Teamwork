const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongooes = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();    
});


const db = mongooes.connect('mongodb://root:root123@ds251240.mlab.com:51240/nodehome',
{useNewUrlParser: true}, 
(error) => {
    if(error){
     console.log('Unable to connect to DB');   
    }else{
        console.log('Successfully connect to DB');
    }
})



const port = process.env.PORT||3000;

app.listen(port, () =>{
    console.log('Running on port ' + port);
})
