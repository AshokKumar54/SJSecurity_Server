var mysqlobj = require('./mysql');
var rediscache = require('./redisdatacache');

function getincident(req, callback) {
	callincident(req, callback, "G");
}
function insertincident(req, callback) {
	callincident(req, callback, "I");
}

function getmaintenance(req, callback) {
	callmaintenance(req, callback, "G");
}
function insertmaintenance(req, callback) {
	callmaintenance(req, callback, "I");
}

function getparkingviolation(req, callback) {
	callparkingviolation(req, callback, "G");
}
function insertparkingviolation(req, callback) {
	callparkingviolation(req, callback, "I");
}

function getpatrol(req, callback) {
	callpatrol(req, callback, "G");
}
function insertpatrol(req, callback) {
	callpatrol(req, callback, "I");
}
function getreport(req, callback) {
	callreport(req, callback, "G");
}

function reportdata(req, callback) {
	callreportdata(req, callback, "G");
}


function getclientreport(req, callback) {
	calllistreport(req, callback, "CR");
}
function getbuildingreport(req, callback) {
	calllistreport(req, callback, "BR");
}


function getclientreportpage(req, callback) {
	calllistreportpage(req, callback, "CR");
}
function getbuildingreportpage(req, callback) {
	calllistreportpage(req, callback, "BR");
}


function insertreport(req, callback) {
	callreport(req, callback, "I");
}
function fetchreportnumber(req, callback) {
	callreport(req, callback, "F");
}

function getservice(req, callback) {
	callservice(req, callback, "G");
}
function insertservice(req, callback) {
	callservice(req, callback, "I");
}

function callincident(req, callback, strop) {
	//////console.log(req);

	var idincident = req.data.idincident;
	var incidenttype = req.data.incidenttype;
	var officerbadge = req.data.officerbadge;
	var policereportnumber = req.data.policereportnumber;
	var officername = req.data.officername;
	var actiontaken = req.data.actiontaken;
	var buildingnumber = req.data.buildingnumber;
	var reportnumber = req.data.reportnumber;
	var summary = req.data.summary;

	var sqlQuery;

	var params = idincident + ", '" + incidenttype + "', '" + officerbadge
			+ "', '" + policereportnumber + "', '" + officername + "', '"
			+ actiontaken + "', " + buildingnumber + ", " + reportnumber + ",'"
			+ summary + "' ,'" + strop + "'";
	var sqlQuery = "call spgetset_incident(" + params + ")";
	mysqlobj.fetchData(function(err, results) {
		//////console.log(JSON.stringify(results));
		res=({
			error : false,
			status : "success",
			error : false,
			message : "success",
			data : results[0]
		});
		//////console.log("Response is in this way " + res);
		callback(null, res);
	}, sqlQuery);

}

function callmaintenance(req, callback, strop) {
	var idmaintenance = req.data.idmaintenance;
	var type = req.data.type;
	var status = req.data.status;
	var description = req.data.description;
	var reportnumber = req.data.reportnumber;
	var sqlQuery;

	var params = idmaintenance + ", '" + type + "', '" + status + "', '"
			+ description + "', " + reportnumber + ",'" + strop + "'";
	var sqlQuery = "call spgetset_maintenance(" + params + ")";
	mysqlobj.fetchData(function(err, results) {
		//////console.log(JSON.stringify(results));
		res=({
			status : "success",
			error : false,
			message : "success",
			data : results[0]
		});
		//////console.log("Response is in this way " + res);
		callback(null, res);
	}, sqlQuery);

}

function callparkingviolation(req, callback, strop) {
	var idparkingviolation = req.data.idparkingviolation;
	var licenseplate = req.data.licenseplate;
	var location = req.data.location;
	var stall = req.data.stall;
	var model = req.data.model;
	var color = req.data.color;
	var year = req.data.year;
	var reportnumber = req.data.reportnumber;
	var description = req.data.description;

	var sqlQuery;

	var params = idparkingviolation + ", '" + licenseplate + "', '" + location
	+ "', '" + stall + "', '" + model + "', '"
	+ color + "', " + year + ", " + reportnumber + ",'"
	+ description + "' ,'" + strop + "'";
	var sqlQuery = "call spgetset_parkingviolation(" + params + ")";
	mysqlobj.fetchData(function(err, results) {
		//////console.log(JSON.stringify(results));
		res=({
			status : "success",
			error : false,
			message : "success",
			data : results[0]
		});
		//////console.log("Response is in this way " + res);
		callback(null, res);
	}, sqlQuery);

}

function callpatrol(req, callback, strop) {
	var idpatrol = req.data.idpatrol;
	var summary = req.data.summary;
	var reportnumber = req.data.reportnumber;
	var sqlQuery;

	var params = idpatrol + ", '" + summary + "', " + reportnumber + ",'"
			+ strop + "'";
	var sqlQuery = "call spgetset_patrol(" + params + ")";
	mysqlobj.fetchData(function(err, results) {
		//////console.log(JSON.stringify(results));
		res=({
			status : "success",
			error : false,
			message : "success",
			data : (results[0])
		});
		
		//////console.log("Response is in this way " + res);
		callback(null, res);
	}, sqlQuery);

}

function callreport(req, callback, strop) {
	// //////console.log(req);
	var reportnumber = req.data.reportnumber;
	var guardid = req.data.guardid;
	var buildingid = req.data.buildingid;
	var sqlQuery;

	var params = reportnumber + "," + guardid + ", " + buildingid + ",'"
			+ strop + "'";
	var sqlQuery = "call spgetset_report(" + params + ")";
	mysqlobj.fetchData(function(err, results) {
		//////console.log(JSON.stringify(results));
		res=({
			status : "success",
			error : false,
			message : "success",
			data : results[0]
		});
		//////console.log("Response is in this way " + res);
		callback(null, res);
	}, sqlQuery);
	
	//////console.log("Hi ");
}

function callreportdata(req, callback, strop) {
	// //////console.log(req);
	var reportnumber = req.data.reportnumber;
	var sqlQuery;

	var params = reportnumber;
	var sqlQuery = "call spget_reportdata(" + params + ")";
	mysqlobj.fetchData(function(err, results) {
		//////console.log(JSON.stringify(results));
		res=({
			status : "success",
			error : false,
			message : "success",
			data : results
		});
		//////console.log("Response is in this way " + res);
		callback(null, res);
	}, sqlQuery);

}

function calllistreport(req, callback, strop) {
	// //////console.log(req);
	var reportnumber = req.data.reportnumber;
	var clientid = req.data.clientid;
	var buildingid = req.data.buildingid;
	var sqlQuery;

	var params = reportnumber + "," + clientid + ", " + buildingid + ",'"
			+ strop + "'";
	var sqlQuery = "call spgetset_listreport(" + params + ")";
	////console.log(sqlQuery);
	mysqlobj.fetchData(function(err, results) {
		//////console.log(JSON.stringify(results));
		res=({
			status : "success",
			error : false,
			message : "success",
			data : results[0]
		});
		////console.log(res)
		//////console.log(callback);
		callback(null, res);
	}, sqlQuery);

}


function calllistreportpage(req, callback, strop) {
	////console.log("In Main calllistreportpage");
	////console.log(req);
	var reportnumber = req.data.reportnumber;
	var clientid = req.data.clientid;
	var buildingid = req.data.buildingid;
	var offset = req.data.offset;
	var records = req.data.records;
	var sqlQuery;

	var params = reportnumber + "," + clientid + ", " + buildingid + "," + offset + "," + records + ",'"
			+ strop + "'"  ;
	var sqlQuery = "call spgetset_listreportpage(" + params + ")";
	
	mysqlobj.fetchData(function(err, results) {
		//////console.log(JSON.stringify(results));
		////console.log(results[1].TotalRows);
		res=({
			status : "success",
			error : false,
			message : "success",
			data : results[0],
			totalrows:results[1][0].TotalRows
		});
		//////console.log("Response is in this way " + res);
		callback(null, res);
	}, sqlQuery);

}



function callservice(req, callback, strop) {
	var idservice = req.data.idservice;
	var type = req.data.type;
	var accountnumber = req.data.accountnumber;
	var officerinitial = req.data.officerinitial;
	var deliverytime = req.data.deliverytime;
	var reportnumber = req.data.reportnumber;
	var summary = req.data.summary;

	var sqlQuery;

	var params = idservice + ", '" + type + "', '" + accountnumber + "', '"
			+ officerinitial + "', '" + deliverytime + "', " + reportnumber
			+ ",'" + summary + "' ,'" + strop + "'";
	var sqlQuery = "call spgetset_service(" + params + ")";
	mysqlobj.fetchData(function(err, results) {
		//////console.log(JSON.stringify(results));
		res=({
			status : "success",
			error : false,
			message : "success",
			data : results[0]
		});
		//////console.log("Response is in this way " + res);
		callback(null, res);
	}, sqlQuery);

}

function searchreport(req, callback) {
	//////console.log("search report js of searchreport callback");
	callsearchreport(req, callback);
}

exports.searchreportpaging = function(req, callback) {
	//////console.log("search report js of searchreport callback");
	callsearchreportpage(req, callback);
}

function callsearchreport(req, callback) {
	// //////console.log(req);
	//////console.log("search report js of searchreport callback 22 " + req.data.searchparam);
	var searchparam = req.data.searchparam;
	var operation = req.data.operation;
	var sqlQuery;

	var params = "'" + operation + "','"
			+ searchparam + "'";
	var sqlQuery = "call spget_search(" + params + ")";
	//////console.log(sqlQuery);
	////////console.log(mysqlobj);
	mysqlobj.fetchData(function(err, results) {
		//////console.log("bhadahai Ho")
		//////console.log(JSON.stringify(results[0]));
		res={
			status : "success",
			error : false,
			message : "success",
			data : results[0]
		};
		//////console.log("Response is in this way " + res);
		////console.log('Caching data');
		rediscache.getClient().set(req.reqtype + "/"+req.data.operation + "/" + req.data.searchparam,JSON.stringify(res));
	    rediscache.getClient().expire(req.reqtype + "/"+req.data.operation + "/" + req.data.searchparam , 120);
	    ////console.log('Caching complete');
		callback(null, res);
	}, sqlQuery);
	//////console.log("Hi");
}

function callsearchreportpage(req, callback) {
	// //////console.log(req);
	//////console.log("search report js of searchreport callback 22 " + req.data.searchparam);
	var searchparam = req.data.searchparam;
	var operation = req.data.operation;
	var records = req.data.records;
	var offset = req.data.offset;
	var sqlQuery;

	var params = "'" + operation + "','"
			+ searchparam + "',"+offset+ "," + records;
	var sqlQuery = "call spget_searchwithpaging(" + params + ")";
	//////console.log(sqlQuery);
	////////console.log(mysqlobj);
	mysqlobj.fetchData(function(err, results) {
		//////console.log("bhadahai Ho")
		////console.log((results[1][0].TotalRows));
		res={
			status : "success",
			error : false,
			message : "success",
			data : results[0],
			totalrows:results[1][0].TotalRows
		};
		//////console.log("Response is in this way " + res);
		////console.log('Caching data');
		rediscache.getClient().set(
				req.reqtype + "/" + req.data.operation + "/"
						+ req.data.searchparam + "/" + req.data.offset + "/"
						+ req.data.records, JSON.stringify(res));
		rediscache.getClient().expire(
				req.reqtype + "/" + req.data.operation + "/"
						+ req.data.searchparam + "/" + req.data.offset + "/"
						+ req.data.records, 120);
	    ////console.log('Caching complete');
		callback(null, res);
	}, sqlQuery);
	//////console.log("Hi");
}




exports.searchreport = searchreport;
exports.getincident = getincident;
exports.insertincident = insertincident;
exports.getmaintenance = getmaintenance;
exports.insertmaintenance = insertmaintenance;
exports.getparkingviolation = getparkingviolation;
exports.insertparkingviolation = insertparkingviolation;
exports.getpatrol = getpatrol;
exports.insertpatrol = insertpatrol;
exports.getclientreport = getclientreport;
exports.getbuildingreport = getbuildingreport;
exports.getreport = getreport;
exports.reportdata = reportdata;
exports.insertreport = insertreport;
exports.fetchreportnumber = fetchreportnumber;
exports.getservice = getservice;
exports.insertservice = insertservice;
exports.getclientreportpage = getclientreportpage;
exports.getbuildingreportpage = getbuildingreportpage;