#Instamojo Payment Package

Use this package to ue the [Instamojo](https://imjo.in/NvQhd) Payment Gateway to your applications


#INSTRUCTIONS

###To include the package
```javascript
meteor add instamojo:instamojo
```

Add the following line to Meteor.startup in Server
```javascript
mojo = Instamojo('API_KEY', 'AUTH_TOKEN');
```

### Note:

If you're using this wrapper with our sandbox environment https://test.instamojo.com/ then you should pass 'https://test.instamojo.com/api/1.1/' as third argument to the Instamojo class while initializing it. API key and Auth token for the same can be obtained from https://test.instamojo.com/developers/ (Details: Test Or Sandbox Account).

```javascript
mojo = Instamojo('API_KEY', 'AUTH_TOKEN', 'https://test.instamojo.com/api/1.1/');
```

##Methods
These Methods will only work on server side

###Create Payment Request
```javascript
mojo.createRequest(payload);
```
Example Payload:
```javascript
var payload = {
  purpose: 'FIFA 16',
  amount: '2500',
  phone: '9999999999',
  buyer_name: 'John Doe',
  redirect_url: 'http://www.example.com/redirect/',
  send_email: true,
  webhook: 'http://www.example.com/webhook/',
  send_sms: true,
  email: 'foo@example.com',
  allow_repeated_payments: false}
  ```

###List Payment Request
```javascript
mojo.listRequest();
```


###Request Details
```javascript
mojo.getRequestDetails(id);
```
`id` is the payment ID for which the request is to be made.


###Payment Details

```javascript
mojo.getPaymentDetails(payment_request_id, payment_id);
```
Example payload
```javascript
payload = {
  payment_id: "MOJO5a06005J21512197",
  type: "QFL",
  body: "Customer isn't satisfied with the quality"
}
```

###Create refunds
```javascript
mojo.createRefund(payload);
```

###List refunds
```javascript
mojo.listRefund();
```

###Refund Details
```javascript
mojo.getRefundDetails(id)
```
Id is the refunds ID.

For more details please refer to [Instamojo API Doc](https://docs.instamojo.com/v1.1/docs)



###License 
MIT License - [Read Here](https://github.com/instamojo/meteorJS-instamojo/blob/master/license.md)
