var bal = require('./businesslogic');

exports.getincident = function(req, callback) {
	bal.getincident(req, callback);
};
exports.insertincident = function(req, callback) {
	bal.insertincident(req, callback);
};
exports.getmaintenance = function(req, callback) {
	bal.getmaintenance(req, callback);
};
exports.insertmaintenance = function(req, callback) {
	bal.insertmaintenance(req, callback);
};
exports.getparkingviolation = function(req, callback) {
	bal.getparkingviolation(req, callback);
};
exports.insertparkingviolation = function(req, callback) {
	bal.insertparkingviolation(req, callback);
};
exports.getpatrol = function(req, callback) {
	bal.getpatrol(req, callback);
};
exports.insertpatrol = function(req, callback) {
	bal.insertpatrol(req, callback);
};

exports.reportdata = function(req, callback) {
	bal.reportdata(req, callback);
};

exports.getreport = function(req, callback) {
	bal.getreport(req, callback);
};
exports.getclientreport = function(req, callback) {
	bal.getclientreport(req, callback);
};
exports.getbuildingreport = function(req, callback) {
	bal.getbuildingreport(req, callback);
};
exports.insertreport = function(req, callback) {
	bal.insertreport(req, callback);
};
exports.fetchreportnumber = function(req, callback) {
	bal.fetchreportnumber(req, callback);
};

exports.getservice = function(req, callback) {
	bal.getservice(req, callback);
};
exports.insertservice = function(req, callback) {
	bal.insertservice(req, callback);
};

exports.searchreport = function(req, callback) {
	//console.log("search report js of service");
	bal.searchreport(req, callback);
};
exports.searchreportpaging = function(req, callback) {
	//console.log("search report js of service");
	bal.searchreportpaging(req, callback);
};
exports.getclientreportpage = function(req, callback) {
	//console.log("search report js of service");
	bal.getclientreportpage(req, callback);
};
exports.getbuildingreportpage = function(req, callback) {
	bal.getbuildingreportpage(req, callback);
};



