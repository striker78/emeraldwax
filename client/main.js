
//
// routing
//
Router.configure({
	layoutTemplate: 'ApplicationLayout'
});

//Router.route('/', function() {
//  this.render('welcome', {
//	  to:"main"
//	});
//});

//Router.route('/categories', function() {
Router.route('/', function() {
  this.render('navbar', {
	  to:"navbar"
	});
  this.render('categories', {
	  to:"main"
	});
});

Router.route('/products/:_id', function() {
  this.render('navbar', {
	  to:"navbar"
	});
  this.render('products', {
	  to:"main",
	  data:function() {
		  return Categories.findOne({_id:this.params._id});
	  }
	});
});


//
// inifinite scroll
//
// set limit of viewable category to 3 
Session.set("categoryLimit", 3);
lastScrollTop = 0;
$(window).scroll(function(event){
	// test if near btm of window
	if ($(window).scrollTop() + $(window).height() > $(document).height() - 100 ) {
		// get current scroll location on page
		var scrollTop = $(this).scrollTop();
		// test if moving downwards
		if (scrollTop > lastScrollTop) {
			//console.log("at btm of page - going downwards ...");
			Session.set("categoryLimit", Session.get("categoryLimit") + 3);
			console.log("at btm of page - going downwards ...categoryLimit: " +Session.get("categoryLimit"));
		}
		lastScrollTop = scrollTop;
	}
})
	
//
// Template helpers - bind data to template
//
// pass in an object with a single property called categories and this property 
// is an array of images (instead of passing array in directly)
//Template.categories.helpers({categories:category_data});

// pass in db contents - sort categories by most recently added
// set a scrolling limit and applies infinite scroll
Template.categories.helpers({
	categories:function() {
		return Categories.find({}, {sort:{createdOn: -1}, limit:Session.get("categoryLimit")});
	}
});

//
// Template events - bind events to template
//
Template.categories.events({
	/*
	'click .js-category':function(event){
		//console.log(event);
		$(event.target).css("width", "50px");
	},
	*/
	'click .js-show-category-products':function(event){
		console.log("Display this category's products")
	}
});