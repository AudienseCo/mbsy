var
	Geonames = require('../index');

var argv = require('optimist')
  .usage('Usage: $0 -d [mongodb://localhost/database] -p "New york"')
  .demand(['d', 'p'])
  .alias('d', 'database')
  .describe('d', 'Mongo DB URI, e.g. mongodb://localhost/database')
  .alias('p', 'place')
  .describe('place', 'Place, e.g. New York')  
  .alias('u', 'utc_offset')
  .default('u', -4)
  .describe('utc_offset', 'UTC Offset, e.g. -8')  
  .argv;

var db = Geonames.connect(argv.database);


	console.log('******* Place ', argv.place, argv.utc_offset, ' *********');
	Geonames.findByLocation(argv.place, argv.utc_offset, function(err, results) {
		console.log('WINNER', results);
		process.exit();
	});
	
