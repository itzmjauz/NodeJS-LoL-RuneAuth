var unirest = require('unirest');
var crypto = require('crypto');
var apiKey = "";
var url = "https://na.api.pvp.net/api/lol/na/";

//Username:****,ID:****
var summoners = [];

module.exports = {
	Generate: function(summoner, fn) {
		GenerateID(function(id) {
			summoners.push({'username':summoner, 'id':id});
			fn(id);
		});
	},
	Check: function(summoner, fn) {
		var user;
		summoners.some(function(s) { if(s.username == summoner) { user = s; return true; } });
		GetID(summoner, function(id) {
			GetPages(id, function(pages) {
				var that = user;
				pages.some(function(page) {
					if(page['name'] == that.id) {		
						fn(true);
						return true;
					}
				});
				fn(false);
			});
		});
	}
};

function GenerateID(fn) {
	crypto.randomBytes(12, function(ex, buf) {
		fn(buf.toString('hex'));
	});
}

function GetID(summoner, fn) {
	unirest.get(url + 'v1.4/summoner/by-name/'+summoner+'?api_key=' + apiKey)
		.header('Accept', 'application/json')
		.end(function (response) {
			var data = response.body[summoner.toLowerCase().replace(/ /g,'')];
			fn(data['id']);
		});
}

function GetPages(id, fn) {
	unirest.get(url + 'v1.4/summoner/'+id+'/runes?api_key=' + apiKey)
		.header('Accept', 'application/json')
		.end(function (response) {
			var data = response.body[id];
			fn(data['pages']);
		});
}



