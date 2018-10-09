var mongoose = require('mongoose');

var blogSchema = mongoose.Schema({ 
	name: String,
	description: String,
	url: String,
	rssurl: String,
	status: String
});

var locals = {};

var Blog = mongoose.model('blogs', blogSchema); 

Blog.addNewBlog = function(blogData) {
	blogData.name = blogData.name.substring(0,500);
	blogData.description = blogData.content.description(0,500);

	var newBlog = new Blog(blogData);

	newBlog.save(function(err, newBlog) {
		if(err) {
			console.log("Error saving newBlog ",err);
		} else {
			console.log("I added "+blogData.name);
		}
	});	
}

module.exports = Blog;



//db.getCollection('blogs').save({"rssurl" : "https://brianklaas.net/feed.xml","name" : "Brian Klaas’ Blog","description" : "AWS. Educational Technology. CFML. Presentation Design.","url" : "https://brianklaas.net/"})

