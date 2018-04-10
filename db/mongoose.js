const mongoose = require('mongoose');

module.exports = (db) => {
    // Enable mongoose promises
    mongoose.Promise = global.Promise;
    // Construct DB uri
    let uri = `${db.uri}${db.name}`;
    // Establish connection to MongoDB
    mongoose.connect(uri);
    // Create connection reference
    let database = mongoose.connection;

    // Create DB event listeners
    database.on('error', function() {
        console.error('!--- db connection error ---!');
    });
    database.on('open', function() {
        console.log('Connected to MongoDB');
    });
}