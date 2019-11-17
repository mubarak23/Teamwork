const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongooes = require('mongoose');
const articleRoute = require('./src/resource/article/articleRoute');
const userRoute = require('./src/resource/user/userRoute');
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  const db = mongooes.connect("mongodb://root:root123@ds251240.mlab.com:51240/nodehome",
   {useNewUrlParser: true },
    (error) =>{
      if(error){
          console.log('internal server error with mlab ');
      }else{
          console.log('Mongooes is connected to mlab DB');
      }
   });

  // app.use('/api/article', articleRoute);





app.post('/api', function(req, res) {
    res.status(200).json('Corecting issues with data');
})

app.use('/api/article', articleRoute);
app.use('/api/user', userRoute);

app.get('/api', function (req, res) {
    res.send('hello world')
  })

  app.post('/api/test', function (req, res) {
    //res.send('hello world')
    console.log(req.body);
    //res.json(req.body);
  })

 

const port = process.env.PORT||3000;

app.listen(port, () =>{
    console.log('Running on port ' + port);
})
