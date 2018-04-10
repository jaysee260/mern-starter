

exports.port = process.env.PORT || 3000;
exports.init = function() { return require('./config.json') };
