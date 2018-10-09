var Twitter = require('twitter');
var credentials = require('../credentials.js');
var Bitly = require('./bitly.js');

var client = new Twitter({
	  consumer_key: credentials.twitter.consumer_key,
	  consumer_secret: credentials.twitter.consumer_secret,
	  access_token_key: credentials.twitter.access_token_key,
	  access_token_secret: credentials.twitter.access_token_secret
});

Twitter.tweet = function(title,url,blogname) {
	var theTweet = title.substring(0,100);
	var shortUrl = '';
	Bitly.getShortUrl(url,function(err,response) {
		if (typeof response === "undefined") {
			shortUrl = "http://www.cfblog.me";
		} else {
			shortUrl = response;
		}
		theTweet = blogname + " | " + theTweet + " " + shortUrl + " @coldfusion #cfml #lucee #webdev #cfsummit2018";
		//console.log(theTweet);
		client.post('statuses/update', {status: theTweet },  function(error, theTweet, response) {
			if(error) { 
				throw error; 
			} else {
				console.log("I Tweeted " + theTweet);
			}
			//console.log(tweet);  // Tweet body.
			//console.log(response);  // Raw response object.
		});
	});
}

module.exports = Twitter;


