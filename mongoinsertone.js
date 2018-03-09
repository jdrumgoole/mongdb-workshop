var MongoClient = require('mongodb').MongoClient ;

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, client) {

    if ( err ) {
        console.log( err );
        process.exit( 1 ) ;
    } else {
        console.log("Successfully connected to server: ", url );
    }

    //console.log( db ) ;
    // Find some documents in our collection

    db = client.db( "test" ) ;
    db.collection('test').insertOne({ "hello" : "World!"}, function(err, res ) {

        if ( err ) {
            console.log( err ) ;
            process.exit( 1 )
        } else {
            console.log( `Inserted ${ res.insertedCount } document` ) ;
            console.log( `objeectID : ${res.insertedId}`)
        }
    });

    // Close the client
    client.close();

    // Declare success
    console.log("Called insertOne()");
});


