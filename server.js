const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const mongooes = require('mongoose');
const articleRoute = require('./src/resource/article/articleRoute');
const userRoute = require('./src/resource/user/userRoute');
const cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

  //app.use(bodyParser.urlencoded({ extended: true }));
  //app.use(bodyParser.json());
  //app.use(express.bodyParser());
  //app.use(express.json());
  //app.use(bodyParser.urlencoded({extended: true}));
  //app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
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

 

const port = process.env.PORT||8000;

app.listen(port, () =>{
    console.log('Running on port ' + port);
})
