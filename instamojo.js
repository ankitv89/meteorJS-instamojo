// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See instamojo-tests.js for an example of importing.


export const name = 'instamojo';

Instamojo={

  createRequest:function(payload,headers){

    var sync = Meteor.wrapAsync(HTTP.post);
    var result = sync('https://www.instamojo.com/api/1.1/payment-requests/',{params: payload,  headers: headers});
    return result.data;


}

,
  listRequest:function(headers){
    var sync = Meteor.wrapAsync(HTTP.get);

    var result = sync('https://www.instamojo.com/api/1.1/payment-requests/', {headers: headers});
    return result.data;

  },
  getRequestDetails:function(headers,id){

  var sync = Meteor.wrapAsync(HTTP.get);
  var url='https://www.instamojo.com/api/1.1/payment-requests/'+id+'/';

  var result=sync(url, {headers: headers});
  return result.data;


  },
  getPaymentDetails:function(headers,payment_request_id,payment_id){
var payload={};
      var sync = Meteor.wrapAsync(HTTP.get);
url='https://www.instamojo.com/api/1.1/payment-requests/'+payment_request_id+'/'+payment_id+'/';
var result=sync(url,
  {params: payload,  headers: headers});
  return result.data;

  },
  createRefund:function(payload,headers){


    var sync = Meteor.wrapAsync(HTTP.post);

  var result=sync('https://www.instamojo.com/api/1.1/refunds/', {params: payload,  headers: headers});
  return result.data;

  },

  listRefund:function(headers){
var sync = Meteor.wrapAsync(HTTP.get);


  var result=sync('https://www.instamojo.com/api/1.1/refunds/', {headers: headers});
  return result.data;
  },
  getRefundDetails:function(headers,id){

    var sync = Meteor.wrapAsync(HTTP.get);
var url='https://www.instamojo.com/api/1.1/refunds/'+id+'/';
  var result=sync(url, {headers: headers});
  return result.data;
  }
};
