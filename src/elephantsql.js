const pg = require('pg');
const conString = 'postgres://mkoiytik:9Wm5fNK9EZvEyTpgDd82JJdlCsPWSem6@manny.db.elephantsql.com:5432/mkoiytik';
const client = new pg.Client(conString);
client.connect(function(err){
    if(err){
        return console.log('Failed to connect to Postgres SQL', err);
    }
    client.query('SELECT NOW() AS "thetime"', function(err, result){
        if(err){
            return console.log('Error Running Query');
        }
        return console.log(result.rows[0].thetime);
    });
    client.end();
})