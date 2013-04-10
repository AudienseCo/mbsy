var
	csv = require('csv');

var argv = require('optimist')
  .usage('Usage: $0 -f [geonamesFile]')
  .demand(['f'])
  .alias('f', 'file')
  .argv;

var timezones = {};

csv()
	.from.path(argv.file, {
	  delimiter : '\t',
	  columns : [
	    'CountryCode', 
	    'TimeZoneId', 
	    'GMT_Offset', 
	    'DST_Offset', 
	    'RAW_Offset'
	  ]
	})
	.on('record', function(data, index) {
		timezones[data.TimeZoneId.toLowerCase()] = {
			gmt_offset: parseFloat(data.GMT_Offset),
			dst_offset: parseFloat(data.DST_Offset),
			raw_offset: parseFloat(data.RAW_Offset),
		}	
	})
	.on('end', function(count) {		  
	  console.log(JSON.stringify(timezones));
	  process.exit();
	})
	.on('error', function(err) {
	  console.error(err);
	  process.exit();
	}); 			

