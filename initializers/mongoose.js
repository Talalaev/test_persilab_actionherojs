var mongoose   = require('mongoose');

module.exports = {
  loadPriority:  1000,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function(api, next){
    api.mongo = {};

    next();
  },
  start: function(api, next){
 
      mongoose.connect(api.config.mongo.host);

      var db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function callback() {
          console.log('Connection opened');
      });

      var Schema = mongoose.Schema,
          Types = mongoose.Schema.Types;

      var userSchema = new mongoose.Schema({
		name: {
			type: "String",
			required: true
		},
		password: {
			type: "String",
		},
		email: {
			type: "String",
			required: true,
			unique: true
		},
		created: {
			type: Date,
			default: Date.now
		}
	});

      var User = mongoose.model('User', userSchema);



      api.mongo.mongoose = mongoose;
      api.mongo.user = User;
	  
	  api.mongo.userShow = function(user, next) {
		  User.findOne({_id: user.id}, function(err, data) {
			  next(err, data);
		  });
	  }
	  api.mongo.usersShow = function(user, next) {
		  User.find({}, function(err, data) {
			  next(err, data);
		  });
	  }
	  api.mongo.userCreate = function(user, next) {
		  console.log(user)
		  User.create(user, function(err, data) {
			  next(err, data);
		  });
	  }


    next();
  },
  stop: function(api, next){
    
    next();
  }
}