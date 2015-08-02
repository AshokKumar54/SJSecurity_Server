var report = require('../modules/report');
var rediscache = require('../modules/redisdatacache');

function handle_request(msg, callback) {
	console.log("In handle report " + msg.reqtype);
	var res = {};

	switch (msg.reqtype) {
	// Skill routes
	// Skill routes

	case '/report/incident/get':
		report.getincident(msg, callback);
		break;
	case '/report/incident/insert':
		report.insertincident(msg, callback);
		break;

	case '/report/maintenance/get':
		report.getmaintenance(msg, callback);
		break;
	case '/report/maintenance/insert':
		report.insertmaintenance(msg, callback);
		break;

	case '/report/parkingviolation/get':
		report.getparkingviolation(msg, callback);
		break;
	case '/report/parkingviolation/insert':
		report.insertparkingviolation(msg, callback);
		break;

	case '/report/patrol/get':
		report.getpatrol(msg, callback);
		break;
	case '/report/patrol/insert':
		report.insertpatrol(msg, callback);
		break;

	case '/report/get':
		report.getreport(msg, callback);
		break;
	case '/report/insert':
		report.insertreport(msg, callback);
		break;

	case '/report/list/client':
		console.log("Here client");
		report.getclientreport(msg, callback);
		break;
	case '/report/list/building':
		console.log("Here building");
		report.getbuildingreport(msg, callback);
		break;

	case '/report/data':
		report.reportdata(msg, callback);
		break;
	case '/report/search':
		console.log("in search report " + msg.data.operation + " , "
				+ msg.data.searchparam);
		/*
		 * req.data.searchparam; var operation = req.data.operation;
		 */
		// req.reqtype + "/"+req.data.operation + "/" + req.data.searchparam
		rediscache.getClient().get(
				msg.reqtype + "/" + msg.data.operation + "/"
						+ msg.data.searchparam,
				function(error, result) {
					console.log('In client redis: ' + msg.reqtype + "/"
							+ msg.data.operation + "/" + msg.data.searchparam);
					if (error)
						console.log('Error: ' + error);
					else {
						console.log("This here")
						data = result;
						// console.log(result);
						if (data != null && data.length != 0
								&& data != undefined) {
							console.log("cached data");
							res = {
								status : "success",
								error : false,
								message : "success",
								data : data
							};
							callback(null, res);

						} else {
							console.log("New Calls");
							report.searchreport(msg, callback);

						}

					}
				});
		break;
	case '/report/search/page':
		console.log("in search report " + msg.data.operation + " , "
				+ msg.data.searchparam);
		/*
		 * req.data.searchparam; var operation = req.data.operation;
		 */
		// req.reqtype + "/"+req.data.operation + "/" + req.data.searchparam
		console.log(msg.reqtype + "/" + msg.data.operation + "/"
						+ msg.data.searchparam + "/" + msg.data.offset + "/"
						+ msg.data.records)
		
		rediscache.getClient().get(
				msg.reqtype + "/" + msg.data.operation + "/"
						+ msg.data.searchparam + "/" + msg.data.offset + "/"
						+ msg.data.records,
				function(error, result) {
					console.log('In client redis: ' + msg.reqtype + "/"
							+ msg.data.operation + "/" + msg.data.searchparam
							+ "/" + msg.data.offset + "/" + msg.data.records);
					if (error)
						console.log('Error: ' + error);
					else {
						console.log("This here")
						data = result;
						// console.log(result);
						if (data != null && data.length != 0
								&& data != undefined) {
							console.log("cached data");
							res = {
								status : "success",
								error : false,
								message : "success",
								data : data
							};
							callback(null, res);

						} else {
							console.log("New Calls");
							report.searchreportpaging(msg, callback);
						}

					}
				});
		break;

	case '/report/service/get':
		report.getservice(msg, callback);
		break;
	case '/report/service/insert':
		report.insertservice(msg, callback);
		break;
	case '/report/fetch':
		report.fetchreportnumber(msg, callback);
		break;

	}
	if (msg.reqtype.indexOf("/report/list/page/client") > -1) {
		console.log("Here i am in client report page")
		report.getclientreportpage(msg, callback);
	}
	if (msg.reqtype.indexOf("/report/list/page/building") > -1) {
		console.log("Here i am in building report page")
		report.getbuildingreportpage(msg, callback);
		
	}

}

exports.handle_request = handle_request;