
/*
 * GET home page.
 */

/*Landing Aqueduct page. Just a listing of pages*/
exports.index = function(req, res){
  res.render('index', { 
  	title: 'Index page',
  	pages: 
	  	[
	  		{
		  		title: "Home",
		  		url: "home"
		  	}

		  ]
	  });
};

exports.home = function(req, res){
  res.render('home', { 
  	title: 'Home page',
  	bannerType: 'carousel'
  });
};


