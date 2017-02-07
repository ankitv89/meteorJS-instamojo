// Variables exported by this module can be imported by other packages and
// applications. See instamojo-tests.js for an example of importing.


export const name = 'instamojo';

Instamojo = function(api_key, auth_token, endpoint){
    /*
    * Get you `api_key` and `auth_token` from the https://www.instamojo.com/developers/ page.
    * Here `endpoint` can be used to specify different API domain, for
    * example: https://test.instamojo.com/api/1.1/
    */

    var endpoint = typeof endpoint !== 'undefined' ? endpoint : 'https://www.instamojo.com/api/1.1/';
    var headers = {'X-Api-Key': api_key, 'X-Auth-Token': auth_token};
    var sync_get = Meteor.wrapAsync(HTTP.get);
    var sync_post = Meteor.wrapAsync(HTTP.post);

    return  {
    createRequest: function(payload){
      var url = endpoint + 'payment-requests/';
      var result = sync_post(url, {params: payload, headers: headers});
      return result.data;
    },
    listRequest: function(){
      var url = endpoint + 'payment-requests/';
      var result = sync_get(url, {headers: headers});
      return result.data;
    },
    getRequestDetails: function(id){
      var url = endpoint + 'payment-requests/' + id + '/';
      var result = sync_get(url, {headers: headers});
      return result.data;
    },
    getPaymentDetails: function(payment_request_id, payment_id){
      var url = endpoint + 'payment-requests/' + payment_request_id + '/' + payment_id + '/';
      var result = sync_get(url, {headers: headers});
      return result.data;
    },
    createRefund:function(payload){
      var url = endpoint + 'refunds/';
      var result = sync_post(url, {params: payload,  headers: headers});
      return result.data;
    },
    listRefund:function(){
      var url =  endpoint + 'refunds/';
      var result = sync_get(url, {headers: headers});
      return result.data;
    },
    getRefundDetails:function(id){
      var url = endpoint + '/refunds/' + id + '/';
      var result = sync_get(url, {headers: headers});
      return result.data;
    }
  };
}
