var MongoClient = require('mongodb').MongoClient ;

var url = 'mongodb://localhost:27017/MUGS';


MongoClient.connect(url, function(err, client) {

    if ( err ) {
        console.log( err );
        process.exit( 1 ) ;
    } else {
        console.log("Successfully connected to server: ", url );
    }

    db = client.db( "MUGS" ) ;

    updater = { "$set" : { 'registration_url' : "elephant"}}
    db.collection( "mug_groups" ).updateOne( { "urlname" : "DublinMUG" }, updater, ( err, res ) => {
        if ( err ) {
            throw err ;
        } else {
            console.log( res )
        }
        client.close();
    } );

    console.log("updateOne");
});


