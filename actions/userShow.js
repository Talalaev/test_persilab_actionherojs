exports.userShow = {
  name: "userShow",
  description: "I add a user",
  inputs: {
    userName: {required: false},
    id: {required: false}
  },
  authenticated: false,
  outputExample: {
	  userName: "Bob"
  },
  version: 1.0,
  run: function(api, data, next) {
    //data.response.user = data.params;
    //data.response.id = data.connection.rawConnection.req.uri.pathname.match(/\/([^\/]+)$/)[1];
	console.log(data.id);
	api.mongo.userShow({
		id: data.params.id,
		data: data
	}, function(err, res) {
		if ( err ) {
			data.response.user = "User not Found";
			next(null);
		} else {
			data.response.user = res;
			next(err);
		}
		
		
	});
	//next(null);
  }
};