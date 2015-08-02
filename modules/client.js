var mysql = require('./mysql');

function addclient_request(msg, callback){	
	try{
		var res = {};
		var firstname = msg.firstname;
		var lastname = msg.lastname;
		var address = msg.address;
		var city = msg.city;
		var state = msg.state;
		var zipcode = msg.zipcode;
		var phone_no = msg.phone_no;
		var email = msg.email;
		var ssnnumber = msg.ssnnumber;
		var start_date = msg.start_date;
		var end_date = msg.end_date;
		var salt = msg.salt;
		var password = msg.password;
		var PasswordSalt = msg.password;
		var roleid =msg.roleid;
		var clientName= firstname+" "+lastname;
		
		var query = "call AddClient_SP('"+ firstname +"', '"+ lastname +"', '"+ address +"', '"+ city +"', '"+ state +"', '"+ zipcode +"', '"+ phone_no +"', '"+ email +"', '"+ ssnnumber +"', '"+ start_date +"', '"+ end_date +"', '"+ password +"', '"+ salt +"', "+ roleid +", '"+ clientName +"','"+PasswordSalt+"' )";		
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("added successfully");
					  res.code = "200";
					  res.value = {"result":"Client added successfully.", "error": false, "message": ""};
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


function updateclient_request(msg, callback){	
	try{
		var res = {};
		var clientid = msg.clientid;
		console.log("client id is "+clientid);
		var userid = msg.userid;
		var firstname = msg.firstname;
		var lastname = msg.lastname;
		var address = msg.address;
		var city = msg.city;
		var state = msg.state;
		var zipcode = msg.zipcode;
		var phone_no = msg.phone_no;
		var email = msg.email;
		var ssnnumber = msg.ssnnumber;
		var start_date = msg.start_date;
		var end_date = msg.end_date;
		var password = msg.password;
		var PasswordSalt = msg.PasswordSalt;
		var clientName  = firstname + " "+lastname;
		var query = "call UpdateClientDetails_SP("+ clientid +", '"+ firstname +"', '"+ lastname +"', '"+ address +"','"+ city +"', '"+ state +"', '"+ zipcode +"', '"+ phone_no +"', '"+ email +"', '"+ ssnnumber +"', '"+ start_date +"', '"+ end_date +"', '"+ password +"', '"+PasswordSalt+"', '"+clientName+"' )";
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("updated successfully");
					  res.code = "200";
					  res.value = {"result":"Client updated successfully.", "error": false, "message": ""};
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


function deleteclient_request(msg, callback){	
	try{
		
		var res = {};
		var clientid = msg.clientid;
		console.log("delete client id "+clientid);
		var query = "DELETE FROM Clients WHERE ClientId = " + clientid;
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("deleted successfully");
					  res.code = "200";
					  res.value = {"result":"Client deleted successfully.", "error": false, "message": ""};
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


function getclientdetailsonId_request(msg, callback){	
	try{
		var res = {};
		var clientid = msg.clientid;
		var query = "call GetClientDetailsonId_SP("+ clientid +")";
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



function getRequestedclientdetails_request(msg, callback){	
	try{
		var res = {};
		var clientUserId = msg.clientUserId;
		var query = "call GetRequestedClientDetails_SP("+ clientUserId +")";
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
		var query = "call GetAllClients_SP()";
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





function getallbuidings_request(msg, callback){	
	try{
		var res = {};
		var clientUserId = msg.clientUserId;
		var query = "call GetAllBuildingsForDashboard_SP('"+clientUserId+"')";
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




function getallclientdetails_request(msg, callback){	
	try{
		
		var res = {};
		var numberofrecords = msg.numberofrecords;
		var pageoffset = msg.pageoffset;
		var query = "call GetAllClientDetails_SP(" + numberofrecords + ", " + pageoffset + ")";
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





function getallSearchedclients_request(msg, callback){	
	try{
		var res = {};
		
		var firstname = msg.firstname;
		var lastname = msg.lastname;
		var address = msg.address;
		var city = msg.city;
		var state = msg.state;		
		var phone_no = msg.phone_no;
		var email = msg.email;
		var ssnnumber = msg.ssnnumber;
		var startDate = msg.startDate; 
		var endDate = msg.endDate;
		var noofrecords = msg.noofrecords;
		var pageoffset = msg.pageoffset;
		var queryStr="";
		
		if(msg.firstname!=undefined && msg.firstname!=""){
			queryStr = queryStr+" where u.Firstname='"+msg.firstname+"'";
		}
		if(msg.lastname!=undefined && msg.lastname!=""){
			if(queryStr != ""){
				queryStr=queryStr+" and u.Lastname='"+msg.lastname+"' ";
			}
			else{
				queryStr=queryStr+" where u.Lastname='"+msg.lastname+"'";				
			}
		}
		if(msg.address!=undefined && msg.address!=""){
			if(queryStr != ""){
				queryStr=queryStr+" and u.Address='"+msg.address+"' ";
			}
			else{
				queryStr=queryStr+" where u.Address='"+msg.address+"'";				
			}			
		}
		if(msg.city!=undefined && msg.city!=""){
			if(queryStr != ""){
				queryStr=queryStr+" and u.City='"+msg.city+"' ";
			}
			else{
				queryStr=queryStr+" where u.City='"+msg.city+"'";		
			}				
		}
		if(msg.state!=undefined && msg.state!=""){
			if(queryStr != ""){
				queryStr=queryStr+" and u.State='"+msg.state+"' ";
			}
			else{
				queryStr=queryStr+" where u.State='"+msg.state+"'";		
			}				
		}
		if(msg.phone_no!=undefined && msg.phone_no!=""){
			if(queryStr != ""){
				queryStr=queryStr+" and u.PhoneNumber='"+msg.phone_no+"' ";
			}
			else{
				queryStr=queryStr+" where u.PhoneNumber='"+msg.phone_no+"'";		
			}				
		}
		if(msg.email!=undefined && msg.email!=""){
			if(queryStr != ""){
				queryStr=queryStr+" and u.Email='"+msg.email+"' ";
			}
			else{
				queryStr=queryStr+" where u.Email='"+msg.email+"'";		
			}				
		}
		if(msg.ssnnumber!=undefined && msg.ssnnumber!=""){
			if(queryStr != ""){
				queryStr=queryStr+" and u.SSNNumber='"+msg.ssnnumber+"' ";
			}
			else{
				queryStr=queryStr+" where u.SSNNumber='"+msg.ssnnumber+"'";	
			}			
		}
		if(msg.startDate!=undefined && msg.startDate!=""){
			if(queryStr != ""){
				queryStr=queryStr+" and u.StartDate='"+msg.startDate+"' ";
			}
			else{
				queryStr=queryStr+" where u.StartDate='"+msg.startDate+"'";	
			}			
		}
		if(msg.endDate!=undefined && msg.endDate!=""){
			if(queryStr != ""){
				queryStr=queryStr+" and u.EndDate='"+msg.endDate+"' ";
			}
			else{
				queryStr=queryStr+" where u.EndDate='"+msg.endDate+"'";	
			}				
		}

		var query = "select distinct u.Firstname,u.Lastname,u.Address,u.City,u.State,"
					+"u.Email,u.PhoneNumber, u.SSNNumber, cl.startDate,cl.EndDate  from userprofile u JOIN clients cl ON u.UserId = cl.UserId";
					
		var finalQuery=query+queryStr + " LIMIT "+noofrecords+" OFFSET "+ pageoffset;
	
		mysql.fetchData(function(err,results){
			try{
				if (!err){					  
						var query1 = "select distinct count(u.Firstname) AS TotalRows from userprofile u JOIN clients cl ON u.UserId = cl.UserId";
						
						var finalQuery1=query1+queryStr;
						mysql.fetchData(function(err,result){
							try{
								if (!err){									  
									  res.code = "200";
									  res.value = {"result":results, "error": false, "message": ""};
									  res.totalrows = result;
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
						},finalQuery1);
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
		},finalQuery);	
	}
	catch(ex){
		var res = {};
		console.log(ex.message);
		res.code = "500";
		res.value = {"result":"", "error": true, "message": ex.message};
		callback(null, res);
	}
}


function getallSearchedclientsWithRecordNumbers_request(msg, callback){	
	try{
		
		var res = {};
		var firstname = msg.firstname;
		var lastname = msg.lastname;
		var address = msg.address;
		var city = msg.city;
		var state = msg.state;		
		var phone_no = msg.phone_no;
		var email = msg.email;
		var ssnnumber = msg.ssnnumber;
		var startDate = msg.startDate; 
		var endDate = msg.endDate;
		var queryStr="";
		var numberofrecords = msg.numberofrecords;
		var pageoffset = msg.pageoffset;
	
		if(queryStr!=""&&msg.firstname!=''&&msg.firstname!='undefined')
			queryStr=queryStr+" and u.Firstname='"+msg.firstname+"'";
		
		else if(queryStr==""&&msg.firstname!=''&&msg.firstname!='undefined')
			queryStr=queryStr+" where u.Firstname='"+msg.firstname+"'";
		
		
		if(queryStr!=""&&msg.lastname!=''&&msg.lastname!='undefined')
			queryStr=queryStr+" and u.Lastname='"+msg.lastname+"'";
		else if(queryStr==""&&msg.lastname!=''&&msg.lastname!='undefined')
			queryStr=queryStr+" where u.Lastname='"+msg.lastname+"'";
		

		if(queryStr!=""&&msg.address!=''&&msg.address!='undefined')
			queryStr=queryStr+" and u.Address='"+msg.address+"'";
		else if(queryStr==""&&msg.address!=''&&msg.address!='undefined')
			queryStr=queryStr+" where u.Address='"+msg.address+"'";
		
		if(queryStr!=""&&msg.city!=''&&msg.city!='undefined')
			queryStr=queryStr+" and u.City='"+msg.city+"'";
		else if(queryStr==""&&msg.city!=''&&msg.city!='undefined')
			queryStr=queryStr+" where u.City='"+msg.city+"'";
		
		if(queryStr!=""&&msg.state!=''&&msg.state!='undefined')
			queryStr=queryStr+" and u.State='"+msg.state+"'";
		else if(queryStr==""&&msg.state!=''&&msg.state!='undefined')
			queryStr=queryStr+" where u.State='"+msg.state+"'";
		
		if(queryStr!=""&&msg.phone_no!=''&&msg.phone_no!='undefined')
			queryStr=queryStr+" and u.PhoneNumber='"+msg.phone_no+"'";
		else if(queryStr==""&&msg.phone_no!=''&&msg.phone_no!='undefined')
			queryStr=queryStr+" where u.PhoneNumber='"+msg.phone_no+"'";

		if(queryStr!=""&&msg.email!=''&&msg.email!='undefined')
			queryStr=queryStr+" and u.Email='"+msg.email+"'";
		else if(queryStr==""&&msg.email!=''&&msg.email!='undefined')
			queryStr=queryStr+" where u.Email='"+msg.email+"'";
		
		if(queryStr!=""&&msg.ssnnumber!=''&&msg.ssnnumber!='undefined')
			queryStr=queryStr+" and u.SSNNumber='"+msg.ssnnumber+"'";
		else if(queryStr==""&&msg.ssnnumber!=''&&msg.ssnnumber!='undefined')
			queryStr=queryStr+" where u.SSNNumber='"+msg.ssnnumber+"'";
		
		if(queryStr!=""&&msg.startDate!=''&&msg.startDate!='undefined')
			queryStr=queryStr+" and cl.startDate='"+msg.startDate+"'";
		else if(queryStr==""&&msg.startDate!=''&&msg.startDate!='undefined')
			queryStr=queryStr+" where cl.startDate='"+msg.startDate+"'";
		
		if(queryStr!=""&&msg.endDate!='' && msg.endDate!='undefined')
			queryStr=queryStr+" and cl.EndDate="+msg.endDate;
		else if(queryStr==""&&msg.endDate!='' && msg.endDate!='undefined')
			queryStr=queryStr+" where cl.EndDate="+msg.endDate;
		       
		
		var query = "select distinct u.Firstname,u.Lastname,u.Address,u.City,u.State,"
					+"u.Email,u.PhoneNumber, u.SSNNumber, cl.startDate,cl.EndDate  from userprofile u JOIN clients cl ON u.UserId = cl.UserId";
				
		var finalQuery=query+" LIMIT "+numberofrecords+" OFFSET "+pageoffset+"";
		
		
		
		
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
		},finalQuery);	
	}
	catch(ex){
		var res = {};
		console.log(ex.message);
		res.code = "500";
		res.value = {"result":"", "error": true, "message": ex.message};
		callback(null, res);
	}
}

function getcheckpointsdetails_request(msg, callback){	
	try{
		
		var res = {};
		var buildingId = msg.buildingId;
		
		var query = "call GetCheckPointDetails_SP(" + buildingId + ")";
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

function getlatlongdetails_request(msg, callback){
	try{		
		var res = {};
		var buildingid = msg.buildingid;
		var query = "call getLatitudeLongitude_SP("+buildingid+")";
		mysql.fetchData(function(err,results){			
				if (!err){
					  console.log("data fetched successfully");
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

function getalertsforclient_request(msg, callback){
	try{		
		var res = {};
		var userid = msg.userid;
		var numberofrecords = msg.numberofrecords;
		var pageoffset = msg.pageoffset;
		var query = "call GetAlertDetailsforClient_SP("+userid+", " + numberofrecords + ", " + pageoffset + ")";
		mysql.fetchData(function(err,results){			
				if (!err){
					  console.log("data fetched successfully");
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

function acceptalert_request(msg, callback){
	try{		
		var res = {};
		var alertid = msg.alertid;
		var query = "call AcceptAlert_SP("+alertid+")";
		mysql.fetchData(function(err,results){			
				if (!err){
					  console.log("data fetched successfully");
					  res.code = "200";
					  res.value = {"result":"Alert accepted successfully", "error": false, "message": ""};
					  callback(null, res);
				  }
				  else{
					  console.log("error while fetching user profile details.");
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

function getbuildingrecords_request(msg, callback){
	try{		
		var res = {};
		var clientid = msg.clientid;
		var query = "call spgetbuildingdetailsbyclientid("+clientid+")";
		mysql.fetchData(function(err,results){			
				if (!err){
					  console.log("data fetched successfully");
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

function loadclients_request(msg, callback){
	try{		
		var res = {};
		var userid = msg.userid;
		var query = "call spgetclientdetailsbyuserid("+userid+")";
		mysql.fetchData(function(err,results){			
				if (!err){
					  console.log("data fetched successfully");
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

exports.loadclients_request=loadclients_request;
exports.getbuildingrecords_request=getbuildingrecords_request;
exports.acceptalert_request=acceptalert_request;
exports.getalertsforclient_request=getalertsforclient_request;
exports.getlatlongdetails_request=getlatlongdetails_request;
exports.addclient_request=addclient_request;
exports.updateclient_request=updateclient_request;
exports.deleteclient_request=deleteclient_request;
exports.getclientdetailsonId_request=getclientdetailsonId_request;
exports.getallclients_request=getallclients_request;
exports.getallclientdetails_request=getallclientdetails_request;
exports.getallSearchedclients_request=getallSearchedclients_request;
exports.getallSearchedclientsWithRecordNumbers_request=getallSearchedclientsWithRecordNumbers_request;
exports.getRequestedclientdetails_request=getRequestedclientdetails_request;
exports.getallbuidings_request=getallbuidings_request;
exports.getcheckpointsdetails_request=getcheckpointsdetails_request;