Meteor.startup(function(){
	if (Categories.find().count() == 0) {
		
		var name = ["Kids", "Dresses", "Skirts", "T-Shirts", "Bags",
						"For the Home", "Accessories"];
		var src = ["kids_12042893_511412345692777_9143418498747906238_n.jpg",
					"dress_12790832_555511637949514_3901663683670939515_n.jpg",
					"10984604_514879088679436_4279478993328298479_n.jpg",
					"tee_12235102_515353795298632_3531766755667656826_n.jpg",
					"bags_12066059_510788185755193_6361576878895106669_n.jpg",
					"baskets_1609658_549595118541166_4012745280466114637_n.jpg",
					"purses_12187912_514877092012969_6794572581364959169_n.jpg"];
		var desc = ["Kids",
					"Dresses",
					"Skirts",
					"T-Shirts",  
					"Bags",
					"For the Home - pillows, baskets", 
					"Accessories - purses, scarves, brooches, belts"];
					
		var products = [
			[
				{
					image1 : "11051929_446119775555368_8555291030865402677_n.jpg",
					name : "Wax print Appliqué organic t-shirt",
					description : "Something for both little guys and dolls. Wax print Appliqué organic t-shirt. Available in sizes 6mths, 12ths and 3-4 years."
				},
				{
					image1 : "10649566_424390047728341_8061836006251212449_n.jpg",
					name : "Girl's Dress",
					description : "Girl's Dress"
				},
				{
					image1 : "11044501_424327281067951_906038929172657886_n.jpg",
					name : "Girl's Kimono Dress",
					description : "Girl's Kimono Dress"
				},
				{
					image1 : "11270385_452002208300458_4555017055385682053_o.jpg",
					name : "Kid's House Pants",
					description : "Kid's House Pants"
				},
			],
			[
				{
					image1 : "11051929_446119775555368_8555291030865402677_n.jpg",
					name : "Wax print Appliqué organic t-shirt",
					description : "Something for both little guys and dolls. Wax print Appliqué organic t-shirt. Available in sizes 6mths, 12ths and 3-4 years."
				},
				{
					image1 : "10649566_424390047728341_8061836006251212449_n.jpg",
					name : "Girl's Dress",
					description : "Girl's Dress"
				},
				{
					image1 : "11044501_424327281067951_906038929172657886_n.jpg",
					name : "Girl's Kimono Dress",
					description : "Girl's Kimono Dress"
				},
				{
					image1 : "11270385_452002208300458_4555017055385682053_o.jpg",
					name : "Kid's House Pants",
					description : "Kid's House Pants"
				},
			],
			[
				{
					image1 : "11051929_446119775555368_8555291030865402677_n.jpg",
					name : "Wax print Appliqué organic t-shirt",
					description : "Something for both little guys and dolls. Wax print Appliqué organic t-shirt. Available in sizes 6mths, 12ths and 3-4 years."
				},
				{
					image1 : "10649566_424390047728341_8061836006251212449_n.jpg",
					name : "Girl's Dress",
					description : "Girl's Dress"
				},
				{
					image1 : "11044501_424327281067951_906038929172657886_n.jpg",
					name : "Girl's Kimono Dress",
					description : "Girl's Kimono Dress"
				},
				{
					image1 : "11270385_452002208300458_4555017055385682053_o.jpg",
					name : "Kid's House Pants",
					description : "Kid's House Pants"
				},
			],
			[
				{
					image1 : "11051929_446119775555368_8555291030865402677_n.jpg",
					name : "Wax print Appliqué organic t-shirt",
					description : "Something for both little guys and dolls. Wax print Appliqué organic t-shirt. Available in sizes 6mths, 12ths and 3-4 years."
				},
				{
					image1 : "10649566_424390047728341_8061836006251212449_n.jpg",
					name : "Girl's Dress",
					description : "Girl's Dress"
				},
				{
					image1 : "11044501_424327281067951_906038929172657886_n.jpg",
					name : "Girl's Kimono Dress",
					description : "Girl's Kimono Dress"
				},
				{
					image1 : "11270385_452002208300458_4555017055385682053_o.jpg",
					name : "Kid's House Pants",
					description : "Kid's House Pants"
				},
			],
			[
				{
					image1 : "11051929_446119775555368_8555291030865402677_n.jpg",
					name : "Wax print Appliqué organic t-shirt",
					description : "Something for both little guys and dolls. Wax print Appliqué organic t-shirt. Available in sizes 6mths, 12ths and 3-4 years."
				},
				{
					image1 : "10649566_424390047728341_8061836006251212449_n.jpg",
					name : "Girl's Dress",
					description : "Girl's Dress"
				},
				{
					image1 : "11044501_424327281067951_906038929172657886_n.jpg",
					name : "Girl's Kimono Dress",
					description : "Girl's Kimono Dress"
				},
				{
					image1 : "11270385_452002208300458_4555017055385682053_o.jpg",
					name : "Kid's House Pants",
					description : "Kid's House Pants"
				},
			],
			[
				{
					image1 : "11051929_446119775555368_8555291030865402677_n.jpg",
					name : "Wax print Appliqué organic t-shirt",
					description : "Something for both little guys and dolls. Wax print Appliqué organic t-shirt. Available in sizes 6mths, 12ths and 3-4 years."
				},
				{
					image1 : "10649566_424390047728341_8061836006251212449_n.jpg",
					name : "Girl's Dress",
					description : "Girl's Dress"
				},
				{
					image1 : "11044501_424327281067951_906038929172657886_n.jpg",
					name : "Girl's Kimono Dress",
					description : "Girl's Kimono Dress"
				},
				{
					image1 : "11270385_452002208300458_4555017055385682053_o.jpg",
					name : "Kid's House Pants",
					description : "Kid's House Pants"
				},
			],
			[
				{
					image1 : "11051929_446119775555368_8555291030865402677_n.jpg",
					name : "Wax print Appliqué organic t-shirt",
					description : "Something for both little guys and dolls. Wax print Appliqué organic t-shirt. Available in sizes 6mths, 12ths and 3-4 years."
				},
				{
					image1 : "10649566_424390047728341_8061836006251212449_n.jpg",
					name : "Girl's Dress",
					description : "Girl's Dress"
				},
				{
					image1 : "11044501_424327281067951_906038929172657886_n.jpg",
					name : "Girl's Kimono Dress",
					description : "Girl's Kimono Dress"
				},
				{
					image1 : "11270385_452002208300458_4555017055385682053_o.jpg",
					name : "Kid's House Pants",
					description : "Kid's House Pants"
				},
			]
		]
	
	//db.users.insert([{name:'Jon', email:'Jon_Doe@mail.com'},{name:'Jane', email:'Jane_Doe@mail.com'}])
	
		for (var i=0; i < 7; i++) {
			Categories.insert(
				{
					img_alt:name[i],
					img_src:src[i],
					desc:desc[i],
					products:products[i],
					createdOn:new Date(),
				}
			);
		}
		console.log("startup.js - inserted categories: ", Categories.find().count());
	}
});
