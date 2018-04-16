var request = require('request');
var client = function(details,format){
	var headers = {
							"Fk-Affiliate-Id":details.trackingId,
							"Fk-Affiliate-Token":details.token
		};

	this.getProductsFeed = function(){
		return new Promise(function(resolve,reject){
				var url = (format=='json')?"https://affiliate-api.flipkart.net/affiliate/api/"+details.trackingId+".json":"https://affiliate-api.flipkart.net/affiliate/api/"+details.trackingId+".xml";
				request({
						url:url,
						headers:headers,
				},function(error,response,body){
					resolve(body);
				});
			});
		}

	this.getCategoryFeed = function(categoryUrl){
		return new Promise(function(resolve,reject){
				request({
					url : categoryUrl,
					headers:headers,
				},function(error,response,body){
					resolve(body);
				});
		});
	}

	this.getTopSellingProduct = function(category){
		return new Promise(function(resolve,reject){
			var url = (format=='json')?"https://affiliate-api.flipkart.net/affiliate/1.0/topFeeds/"+details.trackingId+"/category/"+category+".json":"https://affiliate-api.flipkart.net/affiliate/1.0/topFeeds/"+details.trackingId+"/category/"+category+".xml";
			request({
					url:url,
					headers:headers,
			},function(error,response,body){
				if(error)
					reject(error);
				else
					resolve(body);
			});
		});
	}

	this.doKeywordSearch = function(keyword,limit){
		var count = limit || 5;
		return new Promise(function(resolve,reject){
			var url = (format=='json')?"https://affiliate-api.flipkart.net/affiliate/1.0/search.json?query="+keyword+"&resultsCount="+count:"https://affiliate-api.flipkart.net/affiliate/1.0/search.xml?query="+keyword+"&resultsCount="+count;

			request({
				url:url,
				headers:headers,
			},function(error,response,body){
					if(error)
						reject(error);
					else
						resolve(body);
			});

		});
	},

	this.doIdSearch=function(id){
		return new Promise(function(resolve,reject){
			var url = (format=='json')?"https://affiliate-api.flipkart.net/affiliate/1.0/product.json?id="+id:"https://affiliate-api.flipkart.net/affiliate/1.0/product.xml?id="+id;

			request({
				url:url,
				headers:headers,
			},function(error,response,body){
					if(error)
						reject(error);
					else
						resolve(body);
			});
		});
	}

	this.getAllOffers=function(){
		return new Promise(function(resolve,reject){
			var url = (format=='json')?"https://affiliate-api.flipkart.net/affiliate/offers/v1/all/json":"https://affiliate-api.flipkart.net/affiliate/offers/v1/all/xml"
			request({
				url:url,
				headers:headers,
			},function(error,response,body){
					if(error)
						reject(error);
					else
						resolve(body);
			});
		});
	}



	this.getDealsOfTheDay = function(){
		return new Promise(function(resolve,reject){
			var url = (format=='json')?"https://affiliate-api.flipkart.net/affiliate/offers/v1/dotd/json":"https://affiliate-api.flipkart.net/affiliate/offers/v1/dotd/xml";
			request({
				url:url,
				headers:headers,
			},function(error,response,body){
				if(error)
					reject(error);
				else
					resolve(body);
			});
		});
	}

	this.getOrdersReport = function(info){
		return new Promise(function(resolve,reject){
			var url = (format=='json')?"https://affiliate-api.flipkart.net/affiliate/report/orders/detail/json?startDate="+info.startDate+"&endDate="+info.endDate+"&status="+info.status+"&offset="+info.offset:"https://affiliate-api.flipkart.net/affiliate/report/orders/detail/xml?startDate="+info.startDate+"&endDate="+info.endDate+"&status="+info.status+"&offset="+info.offset;

			request({
				url:url,
				headers:headers,
			},function(error,response,body){
				if(error)
					reject(error);
				else
					resolve(body);
			});
		});
	}

	this.getAppInstallReport = function(info){
		return new Promise(function(resolve,reject){
			var url = (format=='json')?"https://affiliate-api.flipkart.net/affiliate/v1/appInstall/json?startDate="+info.startDate+"&endDate="+info.endDate+"&status="+info.status:"https://affiliate-api.flipkart.net/affiliate/v1/appInstall/xml?startDate="+info.startDate+"&endDate="+info.endDate+"&status="+info.status;

			request({
				url:url,
				headers:headers,
			},function(error,response,body){
				if(error)
					reject(error);
				else
					resolve(body);
			});
		});
	}

		return this;
}

module.exports = client;