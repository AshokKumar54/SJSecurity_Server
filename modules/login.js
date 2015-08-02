var mysql = require('./mysql');

function login_request(msg, callback){	
	try{
		var res = {};
		var password = replaceUnwantedCharacters(msg.password);
		var username = replaceUnwantedCharacters(msg.username);
		var query = "SELECT UserId, RoleId from Users where Username='" + username + "' AND Password='" + password + "';";
		console.log("Query is:"+query);
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  if(results.length > 0){
						  if(results[0].UserId > 0){
							  console.log("sign in successful");
							  res.code = "200";
							  res.value = {"result":results, "error": false, "message": ""};
							  callback(null, res);						  
						  }	
						  else{
							  console.log("signin failed");
							  res.code = "500";
							  res.value = {"result":"", "error": true, "message": "No records found. Please enter valid username and password"};	
							  callback(null, res);
						  }					  
					  }
					  else{
						  console.log("signin failed");
						  res.code = "500";
						  res.value = {"result":"", "error": true, "message": "No records found. Please enter valid username and password"};		
						  callback(null, res);
					  }	
				  }
				  else{
					  console.log("signin failed");
					  res.code = "500";
					  res.value = {"result":"", "error": true, "message": err.message};	
					  callback(null, res);
				  }
			} catch(err){
				res.code = "500";
				res.value = {"result":"", "error": true, "message": err.message};
				callback(null, res);
			}  
		},query);
	}
	catch(ex){
		var res = {};
		console.log(ex.message);
		res.code = "500";
		res.value = {"result":"", "error": true, "message": "An error occured while signin."};
		callback(null, res);
	}
}

function signup_request(msg, callback){	
	try{
		var res = {};
		var firstname = msg.firstname;
		var lastname = msg.lastname;
		var emailid = msg.emailid;
		var password = msg.password;
		var roleid = msg.roleid;
		var salt = msg.salt;
		var ssnnumber = msg.ssnnumber;
		var query = "call SignupUser_SP('" + firstname + "', '" + lastname + "', '" + emailid + "', '" + password + "', " + roleid + ", '" + salt + "', '" + ssnnumber + "');"
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("records fetched successfully");
					  res.code = "200";
					  res.value = {"result":"User created successfully.", "error": false, "message": ""};
					  callback(null, res);
				  }
				  else{
					  console.log("error while fetching user profile details.");
					  res.code = "500";
					  res.value = {"result":"", "error": true, "message": err.message};		
					  callback(null, res);
				  }
			} catch(err){
				res.code = "500";
				res.value = {"result":"", "error": true, "message": err.message};
				callback(null, res);
			}  
		},query);	
	}
	catch(ex){
		var res = {};
		console.log(ex.message);
		res.code = "500";
		res.value = {"result":"", "error": true, "message": ex.message};
		callback(null, res);
	}
}

function getallroles_request(msg, callback){	
	try{
		var res = {};
		var query = "Select RoleId, RoleDescription FROM Roles;"
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("records fetched successfully");
					  res.code = "200";
					  res.value = {"result":results, "error": false, "message": ""};
					  callback(null, res);
				  }
				  else{
					  console.log("error while fetching user profile details.");
					  res.code = "500";
					  res.value = {"result":"", "error": true, "message": err.message};		
					  callback(null, res);
				  }
			} catch(err){
				res.code = "500";
				res.value = {"result":"", "error": true, "message": err.message};
				callback(null, res);
			}  
		},query);	
	}
	catch(ex){
		var res = {};
		console.log(ex.message);
		res.code = "500";
		res.value = {"result":"", "error": true, "message": ex.message};
		callback(null, res);
	}
}

function replaceUnwantedCharacters(n) {
		var parameter = n;
		var desired = parameter.replace(/<script>/gi, "");
		desired = desired.replace(/\/script>/gi, "");
		return desired;
	}

exports.login_request = login_request;
exports.getallroles_request = getallroles_request;
exports.signup_request = signup_request;