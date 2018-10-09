var credentials = require('../credentials.js');

var BitlyAPI = require("node-bitlyapi");
var Bitly = new BitlyAPI({
        client_id: credentials.bitly.client_id,
        client_secret: credentials.bitly.client_secret
});

Bitly.setAccessToken(credentials.bitly.accessToken);

module.exports = {
		getShortUrl: function (theUrl, callback) {
			Bitly.shorten({longUrl: theUrl}, function(err, results) {
				response = JSON.parse(results);
				callback(err, response.data.url);
			});
		}
};
