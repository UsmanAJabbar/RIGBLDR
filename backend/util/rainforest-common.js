const axios = require("axios");

const params = {
}

// axios.get(
//.then(response => {
//  console.log(response.data.product.buybox_winner.price.value);
//  console.log(response.data.product.buybox_winner.availability.type);
//}).catch(error => {
//  console.log(error);
//});



module.exports = {
  getAsin: (vendor_id) => axios({
    method:"POST",
    url: 'https://api.rainforestapi.com/request',
    params: {
      api_key: "",
      type: "product",
      amazon_domain: "amazon.com",
      asin: myAsin
    }
  })
}
