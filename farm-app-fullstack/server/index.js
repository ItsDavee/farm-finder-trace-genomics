const express = require('express');
const farmServiceClass = require('./farm_service');
const farmService = new farmServiceClass('farm_data.json');

let app = express();

//Set up serving FE
app.use(express.static(__dirname + '/../client/dist'));

app.use(function(req, res, next){
	res.set({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': '*'
	})
	next();
});

app.get('/farm', (req, res) => {
	res.json(farmService.getAllFarms());
});

app.get('/farm/search/name/:farm', (req, res) => {
	let search = req.params.farm;
	let results = farmService.searchByName(search);
	res.json(results);
});

app.get('/farm/search/revenue/:rev', (req, res) => {
	let revenue = parseInt(req.params.rev);
	let results = farmService.searchByMinimumRevenue(revenue);
	res.json(results);
});

let port = 8000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});