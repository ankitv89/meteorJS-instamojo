#Instamojo Payment Package

Use this package to ue the [Instamojo](https://imjo.in/NvQhd) Payment Gateway to your applications


#INSTTRUCTIONS

###To include the package
```javascript
meteor add ankitv89:instamojo
```

Add the following line to Meteor.startup in Server
```javascript
instamojo_headers={'X-Api-Key': 'API_KEY','X-Auth-Token':'API_TOKEN'};
```


##Methods
These Methods will only work on server side

###Create Payment Request
```javascript
Instamojo.createRequest(payload,instamojo_headers);
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
Instamojo.listRequest(instamojo_headers);
```


###Request Details
```javascript
Instamojo.getRequestDetails(instamojo_headers,id);
```
id is the payment id for which the request is to be made.


###Payment Details

```javascript
Instamojo.getPaymentDetails(instamojo_headers,payment_request_id,payment_id);
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
Instamojo.createRefund(payload,instamojo_headers);
```

###List refunds
```javascript
Instamojo.listRefund(instamojo_headers);
```

###Refund Details
```javascript
Instamojo.getRefundDetails(instamojo_headers,id)
```
Id is the refunds ID.

For more details please refer to [Indtamojo API Doc](https://docs.instamojo.com/v1.1/docs)
