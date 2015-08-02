var mysql = require('./mysql');

function getallbuildingdetails_request(msg, callback){	
	try{
		var res = {};
		var numberofrecords = msg.numberofrecords
		var pageoffset = msg.pageoffset;
		var query = "call GetAllBuildingDetails_SP(" + numberofrecords + ", " + pageoffset + ");"
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

function getallbuildings_request(msg, callback){	
	try{
		var res = {};
		//var clientid = msg.clientid;
		var query = "call GetAllBuildings_SP();"
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

function getallclients_request(msg, callback){	
	try{
		var res = {};
		var query = "call GetAllClients_SP();"
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

function getbuildingDetailsonId_request(msg, callback){	
	try{
		var res = {};
		var buildingid = msg.buildingid
		var query = "call GetBuildingDetailsonId_SP("+ buildingid +");"
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

function addbuildingdetails_request(msg, callback){	
	try{
		var res = {};
		var buildingname = msg.buildingname;
		var address = msg.address;
		var contactnumber = msg.contactnumber;
		var contactname = msg.contactname;
		var clientid = msg.clientid;
		var clientname = msg.clientname;
		var releasedate = msg.releasedate;
		var lat1 = msg.lat1;
		var lat2 = msg.lat2;
		var lat3 = msg.lat3;
		var lat4 = msg.lat4;
		var lat5 = msg.lat5;
		var lon1 = msg.lon1;
		var lon2 = msg.lon2;
		var lon3 = msg.lon3;
		var lon4 = msg.lon4;
		var lon5 = msg.lon5;
		var query = "call AddBuildingDetails_SP('"+ buildingname +"', '"+ address +"', '"+ contactnumber +"', '"+ contactname +"', "+ clientid +", '"+ clientname +"', '"+ releasedate +"', '"+ lat1 +"', '"+ lat2 +"', '"+ lat3 +"', '"+ lat4 +"', '"+ lat5 +"', '"+ lon1 +"', '"+ lon2 +"', '"+ lon3 +"', '"+ lon4 +"', '"+ lon5 +"');"
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("added successfully");
					  res.code = "200";
					  res.value = {"result":"Building added successfully.", "error": false, "message": ""};
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

function updatebuildingdetails_request(msg, callback){	
	try{
		var res = {};
		var buildingid = msg.buildingid;		
		var buildingname = msg.buildingname;
		var address = msg.address;
		var contactnumber = msg.contactnumber;
		var contactname = msg.contactname;
		var clientid = msg.clientid;
		var clientname = msg.clientname;
		var releasedate = msg.releasedate;
		var lat1 = msg.lat1;
		var lat2 = msg.lat2;
		var lat3 = msg.lat3;
		var lat4 = msg.lat4;
		var lat5 = msg.lat5;
		var lon1 = msg.lon1;
		var lon2 = msg.lon2;
		var lon3 = msg.lon3;
		var lon4 = msg.lon4;
		var lon5 = msg.lon5;
		var query = "call UpdateBuildingDetails_SP("+ buildingid +", '"+ buildingname +"', '"+ address +"', '"+ contactnumber +"', '"+ contactname +"', "+ clientid +", '"+ clientname +"', '"+ releasedate +"', '"+ lat1 +"', '"+ lat2 +"', '"+ lat3 +"', '"+ lat4 +"', '"+ lat5 +"', '"+ lon1 +"', '"+ lon2 +"', '"+ lon3 +"', '"+ lon4 +"', '"+ lon5 +"');"
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("updated successfully");
					  res.code = "200";
					  res.value = {"result":"Building updated successfully.", "error": false, "message": ""};
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

function deletebuilding_request(msg, callback){	
	try{
		var res = {};
		var buildingid = msg.buildingid;
		var query = "DELETE FROM Buildings WHERE BuildingId = " + buildingid;
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("deleted successfully");
					  res.code = "200";
					  res.value = {"result":"Building deleted successfully.", "error": false, "message": ""};
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

exports.getallbuildingdetails_request = getallbuildingdetails_request;
exports.getallbuildings_request = getallbuildings_request;
exports.getallclients_request = getallclients_request;
exports.getbuildingDetailsonId_request = getbuildingDetailsonId_request;
exports.addbuildingdetails_request = addbuildingdetails_request;
exports.updatebuildingdetails_request = updatebuildingdetails_request;
exports.deletebuilding_request = deletebuilding_request;