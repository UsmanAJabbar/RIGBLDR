const schedule = require('node-schedule');
const axios = require('axios');

const rule = new schedule.RecurrenceRule();

rule.second = 15;

const job = schedule.scheduleJob(rule, function(){
  const params = {
    api_key: "",
    type: "product",
    amazon_domain: "amazon.com",
    asin: 'B0815XFSGK'
  }
  axios.get('https://api.rainforestapi.com/request', { params })
  .then(response => {
    console.log(response.data.product.buybox_winner.price.value);
    console.log(response.data.product.buybox_winner.availability.type);
  }).catch(error => {
    console.log(error);
  })
});

