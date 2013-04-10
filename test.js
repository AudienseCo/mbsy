var msby = require('./').createClient('socialbro', '9525763b0f6b1cf586cac4a71b93978a');

msby.Ambassador.get(
	{
		email: 'aartiles@gmail.com',
		auto_create: 1,
		custom1: 'testing'
	},
	function(err, data) {
		console.log(err, data);
	}
);