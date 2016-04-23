exports.usersShow = {
  name: "usersShow",
  description: "I add a user",
  inputs: {
    userName: {required: false}
  },
  authenticated: false,
  outputExample: {
	  userName: "Bob"
  },
  version: 1.0,
  run: function(api, data, next) {
	api.mongo.usersShow({
		
	}, function(err, res) {
		
		data.response.users = res;
		next(err);
	});
	//next(null);
  }
};