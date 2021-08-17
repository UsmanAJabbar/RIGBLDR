const axios = require('axios');

const myAsin = process.argv.slice(2);

// set up the request parameters
const params = {
  api_key: "",
  type: "product",
  amazon_domain: "amazon.com",
  asin: myAsin
}

// make the http GET request to Rainforest API
axios.get('https://api.rainforestapi.com/request', { params })
.then(response => {

  // print the JSON response from Rainforest API
  // console.log(JSON.stringify(response.data, 0, 2));
	console.log(response.data.product.buybox_winner.price.value);
	console.log(response.data.product.buybox_winner.availability.type);

}).catch(error => {
  // catch and print the error
  console.log(error);
})

