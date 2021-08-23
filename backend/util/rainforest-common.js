import axios from "axios";

const params = {
  api_key: "",
  type: "product",
  amazon_domain: "amazon.com",
  asin: myAsin
}

export default axios.get('https://api.rainforestapi.com/request', { params })
.then(response => {
  console.log(response.data.product.buybox_winner.price.value);
  console.log(response.data.product.buybox_winner.availability.type);
}).catch(error => {
  console.log(error);
});
