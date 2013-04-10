var 
	Mbsy = require('./lib/mbsy');

// Export as main entry point in this module
/**
 * The main mbsy constructor, takes the api key, api username and additional options
 * Visit https://getambassador.com/api for api id and key
 * @param {String} api_username The users API id
 * @param {String} api_key The users API key
 * @param {Object} options Optional options
 * @return {mbsy}
 */
module.exports.createClient = function(api_username, api_key, options) {
	var mbsy = new Mbsy(api_username, api_key, options);

	return {
		Event: {
			/**
			 * Records an instance of a campaign referral event.
			 * @param  {Object} params as described on https://getambassador.com/#v2_method_event_record
			 * @param  {Function} cb The callback function with the results
			 * @return {void}
			 */		
			record: function(params, cb) {
				if (!params || !params.campaign_uid) return cb('Required params missing: campaign_uid');
				if (!params || !params.email) return cb('Required params missing: email');
				mbsy._doRequest(mbsy._generateNiceUrl(params, 'event/record'), cb);
			}
		},
		Ambassador: {
			/**
			 * Retrieves details about a given ambassador including their active share links. 
			 * Automatically creates the requested ambassador if they do not exist yet.
			 * @param  {Object} params as described on https://getambassador.com/#v2_method_ambassador_get
			 * @param  {Function} cb The callback function with the results
			 * @return {void}
			 */						
			get: function(params, cb) {
				if (!params || !params.email) return cb('Required params missing: email');
				mbsy._doRequest(mbsy._generateNiceUrl(params, 'ambassador/get'), cb);
			}
		},
		Custom: {
			/**
			 * Generic api call
			 * Check all available methods on https://getambassador.com/api
			 * @param  {String} method eg. "company/get"
			 * @param  {Object} method params
			 * @param  {Function} cb The callback function with the results
			 * @return {void}
			 */				
			get: function(method, params, cb) {
				mbsy._doRequest(mbsy._generateNiceUrl(params, method), cb);
			}
		}
	}
}