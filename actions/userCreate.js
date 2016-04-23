exports.userCreate = {
  name: "userCreate",
  description: "I add a user",
  inputs: {
    name: {required: true},
	email: {required: true},
	password: {required: true}
  },
  authenticated: false,
  outputExample: {
	  userName: "Bob"
  },
  version: 1.0,
  run: function(api, data, next) {
	
	api.mongo.userCreate({
		
		name: data.params.name,
		email: data.params.email,
		password: data.params.password
		
	}, function(err, res) {
		
		data.response.user = res;
		next(err);
		
	});
	
  }
};