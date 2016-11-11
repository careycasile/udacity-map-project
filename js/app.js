var map;

var initMap = function() {
	'use strict'
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.440187, lng: -79.9778809},
		zoom: 12
	});

	//MODEL
	var information = [{
		name: 'Kennywood Park',
		address: '4800 Kennywood Blvd, West Mifflin, PA 15122',
		lat: 40.3878578,
		lng: -79.8664746,
		website: 'www.kennywood.com',
		description: "Amusement park has 30+ rides from wooden & modern roller coasters to water slides & kids' carousel.", 
		icon: 'att',
		direction: 56.03
	}, {
		name: 'Heinz Field',
		address: '100 Art Rooney Ave, Pittsburgh, PA 15212',
		lat: 40.4450268,
		lng: -80.0147185,
		website: 'www.steelers.com',
		description: "Riverside, steel stadium is home of the Steelers & University of Pittsburgh Panthers football teams.", 
		icon: 'ent',
		direction: 348.16
	}, {
		name: 'PNC Park',
		address: '115 Federal St, Pittsburgh, PA 15212',
		lat: 40.4466038,
		lng: -80.0037089,
		website: 'www.pittsburgh.pirates.mlb.com',
		description: 'Riverside baseball stadium with classic architecture hosts Pirates games, restaurants & retail.', 
		icon: 'ent',
		direction: 288.73
	}, {
		name: 'Burgatory',
		address: 'Waterworks Mall, 932 Freeport Rd, Pittsburgh, PA 15238',
		lat: 40.4890197,
		lng: -79.8929552,
		website: 'www.burgatorybar.com',
		description: 'Irreverent local chain serving gourmet burgers, hand-spun shakes & cocktails in a hip setting.', 
		icon: 'food',
		direction: 9.85
	}, {
		name: 'Heinz Hall',
		address: '600 Penn Ave, Pittsburgh, PA 15222',
		lat: 40.4427075,
		lng: -80.0021267,
		website: 'www.theheinzhall.com',
		description: 'Circa-1927 home of the Pittsburgh Symphony Orchestra is a grand space for concerts & musicals.', 
		icon: 'ent',
		direction: 106.16
	}, {
		name: 'Sandcastle',
		address: '1000 Sandcastle Drive, Pittsburgh, PA 15120',
		lat: 40.3984575,
		lng: -79.9290318,
		website: 'www.sandcastlewaterpark.com',
		description: 'Water park has tube slides, a lazy river & a jumbo wave pool, plus kiddie rides, go-karts & buffets. ', 
		icon: 'att',
		direction: 238.39
	}, {
		name: 'Benedum Hall',
		address: '237 7th St, Pittsburgh, PA 15222',
		lat: 40.4431114,
		lng: -80.0002219,
		website: 'www.trustarts.org',
		description: '2,800-seat venue hosting local ballet, theater & opera companies, plus touring shows & musicians.', 
		icon: 'ent',
		direction: 94.19
	}, {
		name: 'Pittsburgh Zoo and Aquarium',
		address: '7340 Butler St, Pittsburgh, PA 15206',
		lat: 40.4845337,
		lng: -79.9224315,
		website: 'www.pittsburghzoo.com',
		description: 'Animal center features an African Savanna, Asian Forest, Bear park, PPG Aquarium & Kids Kingdom. ', 
		icon: 'att',
		direction: 136.04
	}, {
		name: 'Nola On The Square',
		address: '24 Market Square, Pittsburgh, PA 15222',
		lat: 40.441092,
		lng: -80.0027532,
		website: 'www.nolaonthesquare.com',
		description: 'New Orleans-themed eatery is a colorful space with Creole fare, live jazz & sidewalk seats.', 
		icon: 'food',
		direction: 301.79
	}, {
		name: 'The Grand Concourse',
		address: '100 W Station Square Dr, Pittsburgh, PA 15219',
		lat: 40.4330079,
		lng: -80.0036566,
		website: 'www.grandconcourserestaurant.com',
		description: 'Train station turned upscale restaurant with seafood & steaks plus a more casual attached saloon.', 
		icon: 'food',
		direction: 2.87
	}, {
		name: 'Hofbräuhaus Pittsburgh',
		address: 'SouthSide Works Cinema, 2705 S Water St, Pittsburgh, PA 15203',
		lat: 40.4287488,
		lng: -79.9650287,
		website: 'www.hofbrauhauspittsburgh.com',
		description: 'German brewery modeled like the Munich original has seasonal beer, Bavarian fare & costumed servers.', 
		icon: 'food',
		direction: 77.62
	}, {
		name: 'Primanti Brothers',
		address: '46 18th St, Pittsburgh, PA 15222',
		lat: 40.4508194,
		lng: -79.9854957,
		website: 'www.primantibros.com',
		description: 'Long-running Pittsburgh-born chain known for its sandwiches piled high with coleslaw & french fries.', 
		icon: 'food',
		direction: 209.56
	}, {
		name: "Pamela's Diner",
		address: '3703 Forbes Ave, Pittsburgh, PA 15213',
		lat: 40.4411653,
		lng: -79.9575128,
		website: 'www.pamelasdiner.com',
		description: 'Charming, retro breakfast & lunch spot for specialty crepe-hotcakes, omelets & burgers. Cash only.', 
		icon: 'food',
		direction: 333.67
	}, {
		name: 'Andy Warhol Museum',
		address: "117 Sandusky St, Pittsburgh, PA 15212",
		lat: 40.4485951,
		lng: -80.0023082,
		website: 'www.warhol.org',
		description: "Museum where Warhol's art is the star & the inspiration for new works, performances & lectures. ", 
		icon: 'att',
		direction: 212.85
	}, {
		name: 'Phipps Conservatory',
		address: '1 Schenley Drive, Pittsburgh, PA 15213',
		lat: 40.4392995,
		lng: -79.9472416,
		website: 'www.phipps.conservatory.org',
		description: "Schenley Park's horticulture hub features botanical gardens & a steel-&-glass Victorian greenhouse.", 
		icon: 'att',
		direction: 236.01
	}];

	//Class creator to make instances of each data element
	var InfoItem = function(data) {
		'use strict'
		var self = this;
		this.name = data.name;
		this.address = data.address;
		this.lat = data.lat;
		this.lng = data.lng;
		this.website = data.website;
		this.description = data.description;
		this.icon = data.icon;
		this.direction = data.direction;
		//If loop matches a font awesome icon to the item's icon type
		if (this.icon === 'att') {
			self.display = '<i class="fa fa-camera" aria-hidden="true"></i>';
			self.descriptionIcon = 'attraction ' + self.description.toLowerCase();
		} else if (this.icon === 'food') {
			self.display = '<i class="fa fa-cutlery" aria-hidden="true"></i>';
			self.descriptionIcon = 'food restaurant ' + self.description.toLowerCase();			
		} else if ( this.icon === 'ent') {
			self.descriptionIcon = 'entertainment fun ' + self.description.toLowerCase();
			self.display = '<i class="fa fa-users" aria-hidden="true"></i>';
		} 
	};

	//VIEWMODEL
	var ViewModel = function(){
		'use strict'
		var self = this;
		this.filterStatus = ko.observable(true);
		this.resetStatus = ko.observable(false);

		//All Data items
		this.fullArray = [];
		for (var x = 0; x < information.length; x++) {
			self.fullArray.push(new InfoItem(information[x]));
		}

		//Data items visible before and after the filter sort
		this.currentArray = self.fullArray.slice(0);


		//TODO item is clicked, google map populates info
		this.itemClick = function() {
			'use strict'
			console.log('item clicked');
		};

		//TODO Reset is clicked and all data items are visible
		this.resetClick = function() {
			'use strict'
			self.currentArray = self.fullArray.slice(0);
			self.filterStatus = true;
			self.resetStatus = false;

			//$('.reset-container').remove();
			//$('.left').prepend('<div class="input-filter"><input class="input" placeholder="Restaurant, Museum..."><button class="filter" data-bind="click: filterClick">Filter</button></div>');
			//$('.reset-container').attr('display', 'hide');
			//$('.input-filter').attr('display', 'flex');
			console.log('reset clicked');
		};


		//TODO Collect the filter word, iterate over array, filter list, make the filter 
		//button disappear and show reset button
		this.filterClick = function(){
			'use strict'
			self.filterStatus = false;
			self.resetStatus = true;

			//$('.input-filter').remove();
			//$('.left').prepend('<div class="reset-container"><button class="reset" data-bind="click: resetClick">Reset</button></div>');
			//$('.reset-container').attr('display', 'flex');
			//$('.input-filter').attr('display', 'hide');
			console.log('filter clicked');
		};
	};

	ko.applyBindings(new ViewModel());

	//TODO create popup windows after side list items are clicked

};