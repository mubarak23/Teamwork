const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


cont port = process.env.PORT||3000;

app.listen(port, () =>{
    console.log('Running on port ' + port);
})
