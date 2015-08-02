var mysql = require('./mysql');
function displayAllAlerts(msg,callback)
{
	var res={};
	var displayAlerts="CALL displayAllAlerts("+msg.numberofrecords+","+msg.pageoffset+")";
	console.log(displayAlerts);
	mysql.fetchData(function(err, results) {
		try{
			if (!err){
				  console.log("added successfully");
				  res.code = "200";
				  res.value = {"result":results, "error": false, "message": ""};
				  callback(null, res);
			  }
			  else{
				  console.log("error while creating an alert.");
				  res.code = "500";
				  res.value = {"result":"", "error": true, "message": err.message};		
				  callback(null, res);
			  }
		} catch(err){
			res.code = "500";
			res.value = {"result":"", "error": true, "message": err.message};
			callback(null, res);
		}  
	}, displayAlerts);
}

function createAlert(msg, callback)
{	
	var res={};
	var createQuery = "CALL createAlert('"+msg.alertname+"',"+msg.buildingid+","+msg.clientid+","+msg.severity+",'"+msg.description+"') ";
	console.log(createQuery);
	mysql.fetchData(function(err,results){
		try{
			if (!err){
				  console.log("alert added successfully");
				  res.code = "200";
				  res.value = {"result":"Alert added successfully.", "error": false, "message": ""};
				  callback(null, res);
			  }
			  else{
				  console.log("error while creating an alert.");
				  res.code = "500";
				  res.value = {"result":"", "error": true, "message": err.message};		
				  callback(null, res);
			  }
		} catch(err){
			res.code = "500";
			res.value = {"result":"", "error": true, "message": err.message};
			callback(null, res);
		}  
	},createQuery);	
	
}

function displayAlertByBuildingId(msg,callback)
{	var res={};
	console.log(" in disply by building alert");
	var pageOffset = msg.pageoffset;
	var numberOfRecords = msg.numberofrecords;
	var displayByBuildingQuery = "CALL displayAlertByBuildingId("+msg.selbuildingid+","+numberOfRecords+","+pageOffset+") ";
	console.log(displayByBuildingQuery);
	mysql.fetchData(function(err,results){
		try{
			if (!err){
				  console.log("selected successfully");
				  res.code = "200";
				  res.value = {"result":results, "error": false, "message": ""};
				  callback(null, res);
			  }
			  else{
				  console.log("error while creating an alert.");
				  res.code = "500";
				  res.value = {"result":"", "error": true, "message": err.message};		
				  callback(null, res);
			  }
		} catch(err){
			res.code = "500";
			res.value = {"result":"", "error": true, "message": err.message};
			callback(null, res);
		}  
	},displayByBuildingQuery);	
	
}

function displayAlertByClientId(msg,callback)
{	var res = {};
	console.log(" in display by client alert");
	var clientId = msg.selclientid;
	var pageoffset = msg.pageoffset;
	var numberofrecords = msg.numberofrecords;
	var displayByClientQuery = "CALL displayAlertsByClientId("+clientId+","+numberofrecords+","+pageoffset+") ";
	console.log(displayByClientQuery);
	mysql.fetchData(function(err,results){
		try{
			if (!err){
				  console.log("selected successfully");
				  res.code = "200";
				  res.value = {"result":results, "error": false, "message": ""};
				  callback(null, res);
			  }
			  else{
				  console.log("error while creating an alert.");
				  res.code = "500";
				  res.value = {"result":"", "error": true, "message": err.message};		
				  callback(null, res);
			  }
		} catch(err){
			res.code = "500";
			res.value = {"result":"", "error": true, "message": err.message};
			callback(null, res);
		}  
		
	},displayByClientQuery);
	
}

function displayAlertById(msg,callback)
{
	var res={};
	var id=msg.selectId;
	var displayByIdQuery="CALL displayAlertById("+id+")";
	console.log(displayByIdQuery);
	mysql.fetchData(function(err,results){
		try{
			if(err)
				{
					res.code="200";
					res.value={"result":results,"error":false,"message":err.message};
					callback(null,res);
				}
			else
				{
					res.code="500";
					res.value={"result":"","error":false,"message":err.message};
					callback(null,res);
				}
			
		}catch(err)
		{
			res.code = "500";
			res.value = {"result":"", "error": true, "message": err.message};
			callback(null, res);
		}
		
	},displayByIdQuery);
}
function displayAlertforClient(msg,callback)
{	var res = {};
	console.log(" in display by client alert");
	var userid = msg.userid;
	var pageoffset = msg.pageoffset;
	var numberofrecords = msg.numberofrecords;
	var displayByClientQuery = "CALL listAlertforClient("+userid+","+numberofrecords+","+pageoffset+") ";
	console.log(displayByClientQuery);
	mysql.fetchData(function(err,results){
		try{
			if (!err){
				  console.log("selected successfully");
				  res.code = "200";
				  res.value = {"result":results, "error": false, "message": ""};
				  callback(null, res);
			  }
			  else{
				  console.log("error while creating an alert.");
				  res.code = "500";
				  res.value = {"result":"", "error": true, "message": err.message};		
				  callback(null, res);
			  }
		} catch(err){
			res.code = "500";
			res.value = {"result":"", "error": true, "message": err.message};
			callback(null, res);
		}  
		
	},displayByClientQuery);
	
}
function displayAlertByBuildingForClient(msg,callback)
{
	var res={};
	var listAlertByBuildingForClient="CALL listAlertsByBuildingForClient("+msg.clientId+","+msg.buildingId+","+msg.numberofrecords+","+msg.pageoffset+")";
	console.log(listAlertByBuildingForClient);
	mysql.fetchData(function(err,results){
		try{
			if(!err)
				{
					res.code="200";
					res.value={"result":results,"error":false,"message":""};
					callback(null,res);
				}
			else
				{
					res.code="500";
					res.value={"result":"","error":true,"message":err.message};
					callback(null,res);
				}
			
		}catch(err)
		{
			res.code = "500";
			res.value = {"result":"", "error": true, "message": err.message};
			callback(null, res);
		}
		
	},listAlertByBuildingForClient);
}
function displaySubmittedAlerts(msg,callback)
{
	var res={};
	var userid = msg.userid;
	var pageoffset = msg.pageoffset;
	var numberofrecords = msg.numberofrecords;
	var listSubmittedAlerts = "CALL listsubmittedAlert("+userid+","+numberofrecords+","+pageoffset+") ";
	console.log(listSubmittedAlerts);
	mysql.fetchData(function(err, results) {
		try{
			if(!err)
				{
					res.code="200";
					res.value={"result":results,"error":false,"message":""};
					callback(null,res);
				}
			else
				{
					res.code="500";
					res.value={"result":"","error":true,"message":err.message};
					callback(null,res);
				}
			
		}catch(err)
		{
			res.code = "500";
			res.value = {"result":"", "error": true, "message": err.message};
			callback(null, res);
		}
		
	}, listSubmittedAlerts);
}

function deleteAlert(msg, callback){	
	try{
		var res = {};
		var query = "call deleteAlert(" + msg.id+");"
		console.log(query);
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("deleted successfully");
					  res.code = "200";
					  res.value = {"result":"alert deleted successfully.", "error": false, "message": ""};
					  callback(null, res);
				  }
				  else{
					  console.log("error while fetching alert details.");
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

function displayAlertforClientByBuild(msg,callback)
{
	var res = {};
		console.log(" in display by guard alert");
		var clientid = msg.subclientid;
		var buildingid = msg.buildingid;
		var pageoffset = msg.pageoffset;
		var numberofrecords = msg.numberofrecords;
		var displayByClientQuery = "CALL listAlertsByBuildingForClient("+clientid+","+buildingid+","+numberofrecords+","+pageoffset+") ";
		console.log(displayByClientQuery);
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  console.log("selected successfully");
					  res.code = "200";
					  res.value = {"result":results, "error": false, "message": ""};
					  callback(null, res);
				  }
				  else{
					  console.log("error while creating an alert.");
					  res.code = "500";
					  res.value = {"result":"", "error": true, "message": err.message};		
					  callback(null, res);
				  }
			} catch(err){
				res.code = "500";
				res.value = {"result":"", "error": true, "message": err.message};
				callback(null, res);
			}  
			
		},displayByClientQuery);
			
}

function clientActiononAlert(msg,callback)
{
	try{
	var res = {};
	var query = "call clientAction(" + msg.alertid+")";
	console.log(query);
	mysql.fetchData(function(err,results){
		try{
			if (!err){
				  console.log("updated successfully");
				  res.code = "200";
				  res.value = {"result":"alert updated successfully.", "error": false, "message": ""};
				  callback(null, res);
			  }
			  else{
				  console.log("error while fetching alert details.");
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
function getbuildingsbyclient(msg, callback){	
	try{
		var res = {};
		//var clientid = msg.clientid;
		var query = "call getBuildingidForClient("+msg.userid+");"
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
function getbuildingslistclient(msg, callback){	
	try{
		var res = {};
		//var clientid = msg.clientid;
		var query = "call getBuildinglistClient("+msg.bclient+");"
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
function submitAlert(msg,callback)
{
	var res={};
	var userid=msg.userid;
	var submitAlertGuard = "CALL submitalert("+userid+","+msg.alertid+") ";
	console.log(submitAlertGuard);
	mysql.fetchData(function(err, results) {
		try{
			if(!err)
				{
					res.code="200";
					res.value={"result":results,"error":false,"message":""};
					callback(null,res);
				}
			else
				{
					res.code="500";
					res.value={"result":"","error":true,"message":err.message};
					callback(null,res);
				}
			
		}catch(err)
		{
			res.code = "500";
			res.value = {"result":"", "error": true, "message": err.message};
			callback(null, res);
		}
		
	}, submitAlertGuard);
}
function listSubmittedAlertsGuard(msg,callback)
{
	var res={};
	var userid = msg.userid;
	var pageoffset = msg.pageoffset;
	var numberofrecords = msg.numberofrecords;
	var listSubmittedAlertsG = "CALL listsubmittedAlertguard("+userid+","+numberofrecords+","+pageoffset+") ";
	console.log(listSubmittedAlertsG);
	mysql.fetchData(function(err, results) {
		try{
			if(!err)
				{
					res.code="200";
					res.value={"result":results,"error":false,"message":""};
					callback(null,res);
				}
			else
				{
					res.code="500";
					res.value={"result":"","error":true,"message":err.message};
					callback(null,res);
				}
			
		}catch(err)
		{
			res.code = "500";
			res.value = {"result":"", "error": true, "message": err.message};
			callback(null, res);
		}
		
	}, listSubmittedAlertsG);
}
function searchAlert(msg, callback){	
	
	var res = {};
	console.log(msg);
	var queryStr="";
	var finalQuery="";
	var nextQuery="";
	var totalrowsquery="";
	if(msg.searchAlertName!='undefined')
		queryStr=queryStr+" and a.alertname like '%"+msg.searchAlertName+"%'";
	if(msg.searchclient!='undefined')
		queryStr=queryStr+" and a.clientid='"+msg.searchclient+"'";
	if(msg.searchBuilding!='undefined')
		queryStr=queryStr+" and a.buildingid='"+msg.searchBuilding+"'";
	if(msg.searchseverity!='undefined')
		queryStr=queryStr+" and a.severity='"+msg.searchseverity+"'";
	if(msg.roleid=="2")
		{	console.log(" in role 2");
			var query = "select a.alertname, a.buildingid, a.clientid, a.severity, a.description from alerts a  "; 
			var clientQuery = "where a.clientid=(select c.clientid from clients c where userid="+ msg.userid+") ";
			
			if(queryStr!=null||queryStr!="")
				{
					clientQuery+=" "+queryStr;
				}
			var nextQuery=query+clientQuery;
			totalrowsquery="select distinct count(a.alertname)AS TotalRows from alerts a "+clientQuery;
			
			var paginationQuery = " LIMIT "+msg.numberofrecords+" OFFSET "+msg.pageoffset;
			finalQuery=nextQuery+paginationQuery;
			console.log(finalQuery);
		}
	else
		{
		var query = "select a.alertname, a.buildingid, a.clientid, a.severity, a.description from alerts a ";
		var query2="";
		if(queryStr!=null||queryStr!="")
		{
			query2+=" where 1=1 "+queryStr;
		}
		nextQuery = query+query2;
		totalrowsquery = "select distinct count(a.alertname) AS TotalRows from alerts a "+query2;
		var paginationQuery = " LIMIT "+msg.numberofrecords+" OFFSET "+msg.pageoffset;
		finalQuery =nextQuery+paginationQuery;
		console.log(finalQuery);
		}
	
	mysql.fetchData(function(err,results){
		if (err) {
		    console.log("Error while fetching login results");
			throw err;
		} else {
			//var totalrowsquery="select distinct count(a.alertname) from alerts a ";
			//var finalQuery=totalrowsquery+nextQuery;
			//console.log(finalQuery);
			
			console.log(" totalrows "+totalrowsquery);
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
			},totalrowsquery);	
		
			}
		
	},finalQuery);	

}
function displayAlertforClientByBuild(msg, callback)
{
	var res={};
	var userid=msg.userid;
	var listAlertsByBuildingForClient = "CALL listAlertsByBuildingForClient("+userid+","+msg.buildingid+", "+msg.numberofrecords+","+msg.pageoffset+") ";
	console.log(listAlertsByBuildingForClient);
	mysql.fetchData(function(err, results) {
		try{
			if(!err)
				{
					res.code="200";
					res.value={"result":results,"error":false,"message":""};
					callback(null,res);
				}
			else
				{
					res.code="500";
					res.value={"result":"","error":true,"message":err.message};
					callback(null,res);
				}
			
		}catch(err)
		{
			res.code = "500";
			res.value = {"result":"", "error": true, "message": err.message};
			callback(null, res);
		}
		
	}, listAlertsByBuildingForClient);
}
function listBuildingbyGuard(msg,callback)
{
	var res={};
	var userid = msg.userid;
	var listBuildingbyguard = "CALL listbuildingbyguard("+userid+") ";
	console.log(listBuildingbyguard);
	mysql.fetchData(function(err, results) {
		try{
			if(!err)
				{
					res.code="200";
					res.value={"result":results,"error":false,"message":""};
					callback(null,res);
				}
			else
				{
					res.code="500";
					res.value={"result":"","error":true,"message":err.message};
					callback(null,res);
				}
			
		}catch(err)
		{
			res.code = "500";
			res.value = {"result":"", "error": true, "message": err.message};
			callback(null, res);
		}
		
	}, listBuildingbyguard);
	
}


function getGuardDetail(msg,callback)
{	var res={};
	var getGuardDetail = "CALL getGuarddetails("+msg.guardid+") ";
	console.log(getGuardDetail);
	mysql.fetchData(function(err,results){
		try{
			if (!err){
				  console.log(" successfully");
				  res.code = "200";
				  res.value = {"result":results, "error": false, "message": ""};
				  callback(null, res);
			  }
			  else{
				  console.log("error while creating an alert.");
				  res.code = "500";
				  res.value = {"result":"", "error": true, "message": err.message};		
				  callback(null, res);
			  }
		} catch(err){
			res.code = "500";
			res.value = {"result":"", "error": true, "message": err.message};
			callback(null, res);
		}  
		
	},getGuardDetail);

}


exports.getGuardDetail = getGuardDetail;
exports.listBuildingbyGuard=listBuildingbyGuard;
exports.getbuildingslistclient=getbuildingslistclient;
exports.displayAlertforClientByBuild=displayAlertforClientByBuild;
exports.searchAlert=searchAlert;
exports.listSubmittedAlertsGuard=listSubmittedAlertsGuard;
exports.getbuildingsbyclient=getbuildingsbyclient;
exports.displayAllAlerts=displayAllAlerts;
exports.createAlert=createAlert;
exports.displayAlertByBuildingId=displayAlertByBuildingId;
exports.displayAlertByClientId=displayAlertByClientId;
exports.displayAlertById=displayAlertById;
exports.deleteAlert=deleteAlert;
exports.displayAlertforClient=displayAlertforClient;
exports.submitAlert=submitAlert;
exports.displaySubmittedAlerts=displaySubmittedAlerts;
exports.clientActiononAlert=clientActiononAlert;