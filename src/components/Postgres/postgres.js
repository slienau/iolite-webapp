var pg = require('pg');
//or native libpq bindings

var conString = "postgres://cbierylt:bHR1U-GeMOvdGyee401bogLcaFE9f92K@stampy.db.elephantsql.com:5432/cbierylt";

var client = new pg.Client(conString);
client.connect(function(err) {
    if(err) {
        return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM person;', function(err, result) {
        if(err) {
            return console.error('error running query', err);
        }
        console.log(result.rows);
        client.end();
    });
});