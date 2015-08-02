var mysql = require('./mysql');

function getallbillingdetails_request(msg, callback){	
	console.log("Inside getallbillingdetails_request");
	
	try{
		var res = {};
		var numberofrecords = msg.numberofrecords;
		var pageoffset = msg.pageoffset;
		var query = "call getallbillingdetails("+msg.numberofrecords+", "+msg.pageoffset+")";
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

function getbilldetailsonid_request(msg, callback){	
	console.log("Inside getbilldetailsonid_request-1");
	
	try{
		var res = {};
		var billingid = msg.billingid;
		var query = "call getbilldetailsonbillid('"+billingid+"')";
		console.log(query);
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

function submitbilldetails_request(msg, callback){	
	console.log("Inside submitbilldetails_request");
	
	/*try{
		var res = {};
		var billingid = msg.billingid;
		var updateamt = msg.paidamt;
		var query = "call submitbill ('"+msg.billid+"', '"+msg.clientid+"', 'Deep', '"+msg.noofmonths+"', '"+msg.permonthamt+"', '"+msg.totalamt+"', '"+msg.paidamt+"')";
		console.log(query);
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  
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
	}*/
	
	try{
		var res = {};
		var query = "select ClientName from clients where ClientId = '"+msg.clientid+"'";
		console.log(query);
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  
					  var clientname = results[0].ClientName;
					  console.log(clientname);
					  var query1 = "call submitbill ('"+msg.billid+"', '"+msg.clientid+"', '"+clientname+"', '"+msg.noofmonths+"', '"+msg.permonthamt+"', '"+msg.totalamt+"', '"+msg.paidamt+"')";
						console.log(query1);
						mysql.fetchData(function(err,results){
							try{
								if (!err){
									  
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
						},query1);	
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

function updatebilldetails_request(msg, callback){	
	console.log("Inside updatebilldetails_request-1");
	

	try{
		var res = {};
		var billingid = msg.billingid;
		var updateamt = msg.paidamt;
		var query = "call updatebill('"+msg.billingid+"','"+msg.paidamt+"')";
		console.log(query);
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  
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

function getclientbilldetails_request(msg, callback){	
	console.log("Inside getbilldetailsonid_request-1");
	
	try{
		var res = {};
		var clientid = msg.clientid;
		var query = "call getclientbilldetails ('"+clientid+"')";
		console.log(query);
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

////////////////////////////////////////////////////////////////
function getclientbillhome_request(msg, callback){	
	console.log("Inside submitbilldetails_request");
	
	try{
		var res = {};
		var query = "select ClientId from clients where UserId = '"+msg.userid+"'";
		console.log(query);
		mysql.fetchData(function(err,results){
			try{
				if (!err){
					  
					  var ClientId = results[0].ClientId;
					  console.log(ClientId);
					  
					  var query1 = "call getclientbillingdetailshome("+ClientId+","+msg.numberofrecords+", "+msg.pageoffset+")";
						console.log(query1);
						mysql.fetchData(function(err,results){
							try{
								if (!err){
									  
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
						},query1);	
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

exports.getclientbillhome_request=getclientbillhome_request;
exports.getclientbilldetails_request=getclientbilldetails_request;
exports.getallbillingdetails_request = getallbillingdetails_request;
exports.getbilldetailsonid_request = getbilldetailsonid_request;
exports.submitbilldetails_request = submitbilldetails_request;
exports.updatebilldetails_request = updatebilldetails_request;