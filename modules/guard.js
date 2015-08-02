var mysql = require('./mysql');
var rediscache = require('./redisdatacache');
//Start create
function getAllGuardDetails(msg, callback){	
	try{
		var res = {};
		var numberofrecords = msg.numberofrecords
		var pageoffset = msg.pageoffset;
		var query = "call spgetallguarddetails(" + numberofrecords + ", " + pageoffset + ");"
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

function getWeeklySchedule(msg, callback){	
	try{
		var res = {};
		console.log(msg)
		var query = "call spgetweeklyschedule(" + msg.guardid + ");"
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
				console.log('error')
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

function getGuardDetails(msg, callback){	
	try{
		var res = {};
		var query = "call spgetguarddetails(" + msg.guarduserid + ");"
		console.log(query);
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("records fetched successfully");
					  res.code = "200";
					  console.log(results);
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
//End of Create

//Start of edit for admin
function getAllGuards(msg, callback){	
	try{
		var res = {};
		var query = "call spgetallguards()"
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

function getGuardInformationById(msg, callback){	
	try{
		var res = {};
		var query = "call spgetguarddetailsbyid(" + msg.guardid + ");"
		console.log(query);
		var data = false;
		rediscache.getClient().hmget("guardDetailsById",query,function(error, result) {
		if(error)
		    console.log('Error: ' + error);
		else{
		    data = result[0];
		    console.log("data "+data);
		    if (data != null && data.length!=0 && data!=undefined ) {
		   	    //data cached already
		   	    console.log("cached");				
		    	console.log("records fetched successfully");
		    	res.code = "200";
		    	res.value = {"result":JSON.parse(data), "error": false, "message": ""};
		    	callback(null, res);
		    }else{
		    	mysql.fetchData(function(err,results){
			    try{
			    if (!err){
				      console.log("records fetched successfully");
				      res.code = "200";
				      console.log(results);
				      rediscache.getClient().hdel("guardDetailsById",query);
				      rediscache.getClient().hmset("guardDetailsById",query,(JSON.stringify(results)));
				      rediscache.getClient().expire('guardDetailsById', 120);
				      console.log('after redis push')
				      res.value = {"result":results, "error": false, "message": ""};
				      callback(null, res);
			    }else{
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
		}
							
		});
	}
	catch(ex){
		var res = {};
		console.log(ex.message);
		res.code = "500";
		res.value = {"result":"", "error": true, "message": ex.message};
		callback(null, res);
	}
}
function getWeeklyScheduleById(msg, callback){	
	try{
		var res = {};
		var query = "call spgetweeklyschedulebyid(" + msg.guardid + ","+msg.buildingid+");"
		console.log(query);
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("records fetched successfully");
					  res.code = "200";
					  console.log(results);
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

function editGuard(msg, callback){	
	try{
		var res = {};
		var editFirstName=msg.editFirstName;
		var editAddress=msg.editAddress;
		var editState=msg.editState;
		var editEmail=msg.editEmail;
		var editLastName=msg.editLastName;
		var editCity=msg.editCity;
		var editzipCode=msg.editzipCode;
		var editNumber=msg.editNumber;
		var editGuardNo=msg.editGuardNo;
		var editStartDate=msg.editStartDate;
		if(editStartDate==''||editStartDate==undefined)
			editStartDate=null;
		var editBuildingId=msg.editBuildingId;
		if(editBuildingId==null||editBuildingId=='')
			editBuildingId=0;
		var editBuildingName=msg.editBuildingName;
		if(editBuildingName==''||editBuildingName==undefined)
			editBuildingName=null;
		var editStatus=msg.editStatus;
		var editEndDate=msg.editEndDate;
		if(editEndDate==''||editEndDate==undefined)
			editEndDate=null;
		var editGuardId=msg.editGuardId;
		var editProfile=msg.editProfile;
		if(msg.editSchedule==null||msg.editSchedule=='')
			var editSchedule=0;
		else
			var editSchedule=msg.editSchedule;
		var editWorkingHours=msg.editWorkingHours
		if(editWorkingHours==null||editWorkingHours=='')
			editWorkingHours=0;
	    var query = "call spupdateguard('"+ editFirstName +"', '"+ editLastName +"', '"+ editAddress +"', '"+ editCity +"', '"+editState  +"', '"+editzipCode  +"', '"+ editEmail +"', '"+editNumber+"','"+ editGuardNo +"', '"+ editStatus +"', '"+ editStartDate +"', '"+editEndDate  +"', "+ editBuildingId +", '"+ editBuildingName+"',"+editWorkingHours+","+editGuardId+","+editProfile+","+editSchedule+");"
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("updated successfully");
					  res.code = "200";
					  res.value = {"result":"Guard updated successfully.", "error": false, "message": ""};
					  var redisQuery = "call spgetguarddetailsbyid(" + msg.editGuardId + ");"
					  rediscache.getClient().hdel("guardDetailsById",redisQuery);
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
//End of edit for admin
//Start of create
function createGuard(msg, callback){	
	console.log(msg);
	try{
		var res = {};
		var newFirstName=msg.newFirstName;
		var newAddress=msg.newAddress;
		var newState=msg.newState;
		var newEmail=msg.newEmail;
		var newLastName=msg.newLastName;
		var newCity=msg.newCity;
		var newzipCode=msg.newzipCode;
		var newNumber=msg.newNumber;
		var newGuardNo=msg.newGuardNo;
		var newStartDate=msg.newStartDate;
		if(newStartDate==''||newStartDate==undefined)
			newStartDate=null;
		var newBuildingId=msg.newBuildingId;
		if(newBuildingId==null||newBuildingId=='')
			newBuildingId=0;
		var newBuildingName=msg.newBuildingName;
		if(newBuildingName==''||newBuildingName==undefined)
			newBuildingName=null;
		var newStatus=msg.newStatus;
		var newEndDate=msg.newEndDate;
		if(newEndDate==''||newEndDate==undefined)
			newEndDate=null;
		var newWorkingHours=msg.newWorkingHours;
		if(newWorkingHours==null||newWorkingHours=='')
			newWorkingHours=0;
		var newPassword=msg.newPassword;		
		var query = "call spcreateguard('"+newPassword+"','"+ newFirstName +"', '"+ newLastName +"', '"+ newAddress +"', '"+ newCity +"','"+newState +"', '"+ newzipCode +"', '"+ newEmail  +"', '"+ newNumber +"', '"+ newGuardNo +"','"+ newStatus +"', '"+newStartDate  +"', '"+ newEndDate +"',"+ newBuildingId+",'"+newBuildingName+"',"+newWorkingHours+");";
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("added successfully");
					  res.code = "200";
					  res.value = {"result":"Guard added successfully.", "error": false, "message": ""};
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
//End of create

//start Delete guard
function deleteGuard(msg, callback){	
	try{
		var res = {};
		var query = "call spdeleteguard(" + msg.guardid+");"
		console.log(query);
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("deleted successfully");
					  res.code = "200";
					  res.value = {"result":"Guard deleted successfully.", "error": false, "message": ""};
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
//End of delete
//Start of Search
function searchGuard(msg, callback){	
	
		var res = {};
		console.log(msg);
		var queryStr="";
		console.log(msg.searchFirstName)
		console.log(msg.searchStatus)
		console.log(msg.searchBuildingId)
		if(queryStr!=""&&msg.searchFirstName!=''&&msg.searchFirstName!='undefined')
			queryStr=queryStr+" and u.firstname='"+msg.searchFirstName+"'";
		else if(queryStr==""&&msg.searchFirstName!=''&&msg.searchFirstName!='undefined')
			queryStr=queryStr+" where u.firstname='"+msg.searchFirstName+"'";
		if(queryStr!=""&&msg.searchLastName!=''&&msg.searchLastName!='undefined')
			queryStr=queryStr+" and u.lastname='"+msg.searchLastName+"'";
		else if(queryStr==""&&msg.searchLastName!=''&&msg.searchLastName!='undefined')
			queryStr=queryStr+" where u.lastname='"+msg.searchLastName+"'";
		if(queryStr!=""&&msg.searchCity!=''&&msg.searchCity!='undefined')
			queryStr=queryStr+" and u.city='"+msg.searchCity+"'";
		else if(queryStr==""&&msg.searchCity!=''&&msg.searchCity!='undefined')
			queryStr=queryStr+" where u.city='"+msg.searchCity+"'";
		if(queryStr!=""&&msg.searchState!=''&&msg.searchState!='undefined')
			queryStr=queryStr+" and u.state='"+msg.searchState+"'";
		else if(queryStr==""&&msg.searchState!=''&&msg.searchState!='undefined')
			queryStr=queryStr+" where u.state='"+msg.searchState+"'";
		if(queryStr!=""&&msg.searchZipCode!=''&&msg.searchZipCode!='undefined')
			queryStr=queryStr+" and u.zipcode='"+msg.searchZipCode+"'";
		else if(queryStr==""&&msg.searchZipCode!=''&&msg.searchZipCode!='undefined')
			queryStr=queryStr+" where u.zipcode='"+msg.searchZipCode+"'";
		if(queryStr!=""&&msg.searchGuardNo!=''&&msg.searchGuardNo!='undefined')
			queryStr=queryStr+" and g.guardno='"+msg.searchGuardNo+"'";
		else if(queryStr==""&&msg.searchGuardNo!=''&&msg.searchGuardNo!='undefined')
			queryStr=queryStr+" where g.guardno='"+msg.searchGuardNo+"'";
		if(queryStr!=""&&msg.searchStatus!=''&&msg.searchStatus!='undefined')
			queryStr=queryStr+" and g.backgroundcheck='"+msg.searchStatus+"'";
		else if(queryStr==""&&msg.searchStatus!=''&&msg.searchStatus!='undefined')
			queryStr=queryStr+" where g.backgroundcheck='"+msg.searchStatus+"'";
		if(queryStr!=""&&msg.searchStartDate!=''&&msg.searchStartDate!='undefined')
			queryStr=queryStr+" and ws.startdate='"+msg.searchStartDate+"'";
		else if(queryStr==""&&msg.searchStartDate!=''&&msg.searchStartDate!='undefined')
			queryStr=queryStr+" where ws.startdate='"+msg.searchStartDate+"'";
		if(queryStr!=""&&msg.searchEndDate!=''&&msg.searchEndDate!='undefined')
			queryStr=queryStr+" and ws.enddate='"+msg.searchEndDate+"'";
		else if(queryStr==""&&msg.searchEndDate!=''&&msg.searchEndDate!='undefined')
			queryStr=queryStr+" where ws.enddate='"+msg.searchEndDate+"'";
		if(queryStr!=""&&msg.searchBuildingId!='' && msg.searchBuildingId!='undefined')
			queryStr=queryStr+" and ws.buildingid="+msg.searchBuildingId;
		else if(queryStr==""&&msg.searchBuildingId!='' && msg.searchBuildingId!='undefined')
			queryStr=queryStr+" where ws.buildingid="+msg.searchBuildingId;
		var query = "select distinct g.guardid,g.backgroundcheck,g.guardno,u.firstname,u.lastname,u.address,u.city,u.state,"
					+"u.zipcode,u.email,u.phonenumber from guard g JOIN userprofile u ON g.guardno=u.ssnnumber"
					+" LEFT JOIN weeklyschedule ws ON ws.guardid=g.guardid";
		var finalQuery=query+queryStr + " LIMIT "+msg.records+" OFFSET " + msg.offset;
		mysql.fetchData(function(err,results){
			if (err) {
			    console.log("Error while fetching login results");
				throw err;
			} else {
				if (results.length > 0) {					
					var query1 = "select distinct count(g.guardid) AS TotalRows from guard g JOIN userprofile u ON g.guardno=u.ssnnumber"
						+" LEFT JOIN weeklyschedule ws ON ws.guardid=g.guardid";
					var finalQuery1=query1+queryStr;
					mysql.fetchData(function(err,result){
						if (err) {
						    console.log("Error while fetching login results");
							throw err;
						} else {
							if (result.length > 0) {
								res.code=200;
								res.totalrows=result;
								res.value=results;
								callback(null, res);
							} else {
								res.code=201;
								res.value="none";
								callback(null, res);
							}
						}
					},finalQuery1);	
				} else {
					res.code=201;
					res.value="none";
					callback(null, res);
				}
			}
		},finalQuery);	
	
}
//End of Search
//Start of edit for guard
function getGuardInformation(msg, callback){	
	try{
		var res = {};
		var query = "call spgetguardinformation(" + msg.guarduserid + ");"
		console.log(query);
		var data = null;
		rediscache.getClient().hmget("getGuard",query,function(error, result) {
		if(error)
		    console.log('Error: ' + error);
		else{
		    data = result[0];
		    console.log("data "+data);
		    if (data != null && data!=undefined ) {
		   	    //data cached already
		   	    console.log("cached");				
		    	console.log("records fetched successfully");
		    	res.code = "200";
		    	res.value = {"result":JSON.parse(data), "error": false, "message": ""};
		    	callback(null, res);
		    }else{
		    	mysql.fetchData(function(err,results){
			    try{
			    if (!err){
				      console.log("records fetched successfully");
				      res.code = "200";
				      console.log(results);
				      rediscache.getClient().hdel("getGuard",query);
				      rediscache.getClient().hmset("getGuard",query,(JSON.stringify(results)));
				      console.log('after redis push')
				      res.value = {"result":results, "error": false, "message": ""};
				      callback(null, res);
			    }else{
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
		}
							
		});
			
	}
	catch(ex){
		var res = {};
		console.log(ex.message);
		res.code = "500";
		res.value = {"result":"", "error": true, "message": ex.message};
		callback(null, res);
	}
}


function updateGuard(msg, callback){	
	try{
		var res = {};
		console.log(msg)
		var editGuardFirstName=msg.editGuardFirstName;
		var editGuardAddress=msg.editGuardAddress;
		var editGuardState=msg.editGuardState;
		var editGuardEmail=msg.editGuardEmail;
		var editGuardLastName=msg.editGuardLastName;
		var editGuardCity=msg.editGuardCity;
		var editGuardZipCode=msg.editGuardZipCode;
		var editGuardNumber=msg.editGuardNumber;
		var editGuardLatitude=msg.editGuardLatitude;
		var editGuardLongitude=msg.editGuardLongitude;
		var editGuardGuardId=msg.editGuardGuardId;
		var editGuardUserId=msg.editGuardUserId;
		var editGuardProfileId=msg.editGuardProfileId;
		var editGuardUserName = replaceUnwantedCharacters(msg.editGuardUserName);
		var editGuardPassword=msg.editGuardPassword;
		var query = "call speditguard('"+ editGuardFirstName +"', '"+ editGuardLastName +"', '"+ editGuardAddress +"', '"+ editGuardCity +"', '"+editGuardState  +"', '"+editGuardZipCode  +"', '"+ editGuardEmail +"', '"+editGuardNumber+"','"+editGuardLatitude+"','"+editGuardLongitude+"','"+ editGuardUserName +"', '"+ editGuardPassword +"',"+editGuardGuardId+","+editGuardUserId+","+editGuardProfileId+");"
		console.log(query);
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("updated successfully");
					  res.code = "200";
					  res.value = {"result":"Guard updated successfully.", "error": false, "message": ""};
					  var queryRedis = "call spgetguardinformation(" + msg.guarduserid + ");"
					  rediscache.getClient().hdel("getGuard",queryRedis);
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
//End of edit for guard

function replaceUnwantedCharacters(n) {
	var parameter = n;
	var desired = parameter.replace(/<script>/gi, "");
	desired = desired.replace(/\/script>/gi, "");
	return desired;
}

exports.getAllGuardDetails=getAllGuardDetails;
exports.getWeeklySchedule=getWeeklySchedule;
exports.getAllGuards=getAllGuards;
exports.createGuard=createGuard;
exports.editGuard=editGuard;
exports.updateGuard=updateGuard;
exports.deleteGuard=deleteGuard;
exports.searchGuard=searchGuard;
exports.getGuardInformationById=getGuardInformationById;
exports.getGuardInformation=getGuardInformation;
exports.getGuardDetails=getGuardDetails;
exports.getWeeklyScheduleById=getWeeklyScheduleById;