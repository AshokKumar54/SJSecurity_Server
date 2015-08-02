//super simple rpc server example
var amqp = require('amqp')
, util = require('util');

var login = require('./modules/login');
var building = require('./modules/building');
var guard = require('./modules/guard');
var billing = require('./modules/billing');
var client = require('./modules/client');
var alert = require('./modules/alert');
var report = require('./services/reportservice');

var cnn = amqp.createConnection({host:'127.0.0.1'});
var reportcnn = amqp.createConnection({host:'127.0.0.1'});

cnn.on('ready', function(){
	console.log("listening on login_queue");
	
	// login queue
	
	cnn.queue('login_queue', function(q){
		q.subscribe(function(message, headers, deliveryInfo, m){
			util.log(util.format( deliveryInfo.routingKey, message));
			util.log("Message: "+JSON.stringify(message));
			util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
			switch(message.apiId)
			{
			case "l1":
				login.login_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});	
				break;
			case "l2":
				login.signup_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});	
				break;
			case "l3":
				login.getallroles_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});	
				break;
			}		
		});
	});	
	
	// building queue
	console.log("listening on building_queue");
	cnn.queue('building_queue', function(q){
		q.subscribe(function(message, headers, deliveryInfo, m){
			util.log(util.format( deliveryInfo.routingKey, message));
			util.log("Message: "+JSON.stringify(message));
			util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
			switch(message.apiId)
			{
			case "b1":
				building.getallbuildingdetails_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "b2":
				building.getallbuildings_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "b3":
				building.getallclients_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "b4":
				building.getbuildingDetailsonId_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "b5":
				building.addbuildingdetails_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "b6":
				building.updatebuildingdetails_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "b7":
				building.deletebuilding_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			}			
		});
	});	
	
	// guard queue
	console.log("listening on guard_queue");
	cnn.queue('guard_queue', function(q){
		q.subscribe(function(message, headers, deliveryInfo, m){
			util.log(util.format( deliveryInfo.routingKey, message));
			util.log("Message: "+JSON.stringify(message));
			util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
			switch(message.apiId)
			{
			case "g1":
				guard.getAllGuardDetails(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "g2":
				guard.getWeeklySchedule(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "g3":
				guard.getAllGuards(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "g4":
				guard.createGuard(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "g5":
				guard.getGuardInformationById(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "g6":
				guard.getWeeklyScheduleById(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "g7":
				guard.editGuard(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "g8":
				guard.deleteGuard(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "g9":
				guard.searchGuard(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "g10":
				guard.getGuardInformation(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "g11":
				guard.updateGuard(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "g12":
				guard.getGuardDetails(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			}			
		});
	});	
	
	
	console.log("listening on billing_queue");
	cnn.queue('billing_queue', function(q){
		q.subscribe(function(message, headers, deliveryInfo, m){
			util.log(util.format( deliveryInfo.routingKey, message));
			util.log("Message: "+JSON.stringify(message));
			util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
			switch(message.apiId)
			{
			case "bl1":
				console.log("api b1");
				billing.getallbillingdetails_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "bl2":
				console.log("api b2");
				billing.getbilldetailsonid_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "bl3":
				console.log("api b3");
				billing.submitbilldetails_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "bl4":
				console.log("api b4");
				billing.updatebilldetails_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
			case "bl5":
				console.log("api b5");
				billing.getclientbilldetails_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "bl6":
				console.log("api b6");
				billing.getclientbillhome_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			}			
		});
	});
	
	
	// client queue
	
	cnn.queue('client_queue', function(q){
		q.subscribe(function(message, headers, deliveryInfo, m){
			util.log(util.format( deliveryInfo.routingKey, message));
			util.log("Message: "+JSON.stringify(message));
			util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
			switch(message.apiId)
			{
			case "c1":
				client.addclient_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});	
				break;
			case "c2":
				client.updateclient_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});	
				break;
			case "c3":
				client.deleteclient_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});	
				break;
			case "c4":
				client.getclientdetailsonId_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});	
				break;
			case "c5":
				client.getallclients_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});	
				break;				
			case "c6":
				client.getallclientdetails_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "c7":
				client.getallSearchedclients_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;				
			case "c8":
				client.getallSearchedclientsWithRecordNumbers_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;				
			case "c9":
				client.getRequestedclientdetails_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "c10":
				client.getallbuidings_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;				
			case "c11":
				client.getcheckpointsdetails_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "c12":
				client.getlatlongdetails_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "c13":
				client.getalertsforclient_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "c14":
				client.acceptalert_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "c15":
				client.getbuildingrecords_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			case "c16":
				client.loadclients_request(message, function(err,res){

					//return index sent
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
		}		
		});
	});	
	
	// alert module 
	console.log("listening on alert_queue");
	cnn.queue("alert_queue", function(q){
		q.subscribe(function(message, headers, deliveryInfo, m){
			util.log(util.format( deliveryInfo.routingKey, message));
			util.log("Messaging alert q: "+JSON.stringify(message));
			util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
			switch(message.apiId)
			{
		 case "a1":
			alert.displayAllAlerts(message, function(err,res){
				cnn.publish(m.replyTo, res, {
					contentType:'application/json',
					contentEncoding:'utf-8',
					correlationId:m.correlationId
				});
			});
			break;			
		 case "a2":
			alert.createAlert(message,function(err,res){
				cnn.publish(m.replyTo, res, {
					contentType:'application/json',
					contentEncoding:'utf-8',
					correlationId:m.correlationId
				});
			});
			 break;			 
		 case "a3":
				alert.displayAlertByBuildingId(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				 break;
		 case "a4":
				alert.displayAlertByClientId(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				 break;
		 case "a5":
				alert.displayAlertById(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				 break;
		 case "a6":
				alert.deleteAlert(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				 break;
				 
		 case "a7":
				alert.displayAlertforClient(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				 break;
				 
		 case "a8":
				alert.displaySubmittedAlerts(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				 break;
				 
		 case "a9":
				alert.clientActiononAlert(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				 break;
		 case "a10":
				alert.displayAlertforGuard(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				 break;
		 
		 case "a11":
				alert.getbuildingsbyclient(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				 break;
		
		 case "a12":
				alert.listSubmittedAlertsGuard(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				 break;
		 case "a13":
				alert.submitAlert(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				 break;
		 case "a14":
				alert.searchAlert(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				 break;
		 case "a15":
				alert.displayAlertforClientByBuild(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
		 case "a16":
				alert.getbuildingslistclient(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
		 case "a17":
				alert.listBuildingbyGuard(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
		 case "a18":
				alert.getGuardDetail(message,function(err,res){
					cnn.publish(m.replyTo, res, {
						contentType:'application/json',
						contentEncoding:'utf-8',
						correlationId:m.correlationId
					});
				});
				break;
			}
		});
	});
});

reportcnn.on('ready', function(){
	console.log("listening on Report Queue");

	reportcnn.queue('report_queue', function(q){
		q.subscribe({ ack: true , prefetchCount: 23 },function(message, headers, deliveryInfo, m){
			console.log("------------------------ ------------ -----------------------");
			report.handle_request(message, function(err,res){
				console.error((m.correlationId));
				inqueue++;
				if(inqueue<25)
				{
					q.shift();
				}
				reportcnn.publish(m.replyTo, res, {
					contentType:'application/json',
					contentEncoding:'utf-8',
					correlationId:m.correlationId
				});
				if(inqueue==25)
				{
					inqueue--
					q.shift();
				}
				console.log("Request Handled");
			});
		});
	});
});
