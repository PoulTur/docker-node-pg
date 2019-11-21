const { Pool, Client } = require('pg')
const connectionString  = 'postgresql://postgres:postgres@db:5432/sample';

module.exports = {

    readFromDb: function() {
        
        let promise = new Promise(function(resolve, reject){

            const client = new Client({
                connectionString: connectionString,
            })

            client.connect()
            client.query('SELECT * from users;', (err, res) => {
                resolve(res.rows);
                client.end()

            })

        });

        return promise;
     
    }

}

