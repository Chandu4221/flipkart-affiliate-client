# Flipkart API Affiliate Client

un-official client for [Flipkart Affiliates API](https://affiliate.flipkart.com/api-docs/)

## Flipkart Affiliate API Client

### Prerequisites

Requires "request" npm package

## Installation

Install using npm
```
npm i flipkart-api-affiliate-client
```
## Usage
Require Library

```
var client = require('flipkart-api-affiliate-client');
```
Create Client
```
var fkClient = client({
	trackingId:"<YOUR TRACKING ID>",
	token:"<YOUR TOKEN>",
},"<FORMAT>");
```

## Examples

Usage Examples

### Products Feed Listing
Get the Product Feed of The API
```
fkClient.getProductsFeedListing().then(function(value){
	console.log(value);
});
```
### Product Feed
Get the Product Feed Of The API.

Takes Url as the parameter obtained from the Products Feed Listing

```
fkClient.getProductsFeed(Url).then(function(value){
		console.log(value);
});
```

### Keyword Search

Search based on the Keywords.

doKeywordSearch("category",limit) takes two parameters.

category of the product you are searching for. and 
limit (by default the limt is set to 5)


```
fkClient.doKeywordSearch("mobiles",10).then(function(value){
		res.send(value);
});
```

### Id Search
Search based On the Product Id

doIdSearch(productId) takes "ProductId" as a parameter.

```
fkClient.doIdSearch(productId).then(function(value){
		console.log(value);
});
```

### get All Offers
Get All Offers


```
fkClient.getAllOffers().then(function(value){
		console.log(value);
});
```


### get Deals of the Day
Get Deals of the Day

```
fkClient.getDealsOfTheDay().then(function(value){
		console.log(value);
});
```

### get Orders Report
Get orders report based on start_date , end_date, offset and status

getOrdersReport(obj) takes an object as a parameter

object Structure
```
{
	startDate:'2012-03-01',
	endDate:'2018-04-01',
	status:'approved',
	offset:'0'
}
```

```
fkClient.getOrdersReport(obj).then(function(value){
		console.log(value);
});
```

### get App Install Report
Get App Install Report based on start_date, end_date and status

getAppInstallReport(obj) takes object as a parameter

Object Structure
```
{
	startDate:'2012-03-01',
	endDate:'2018-04-01',
	status:'disapproved',
}
```
```
fkClient.getAppInstallReport(obj).then(function(value){
		console.log(value);
});
```