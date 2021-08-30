let mysql  = require('mysql2');
let config = require('./config.js');
const currDate = require('moment')().format('YYYY-MM-DD HH:mm:ss');

const gpuJSON = require('./rainforestGpus');
//const gpuJSON = require('./video-card');
//const mbJSON = require('./motherboard');

let connection = mysql.createConnection(config);

gpuJSON.forEach(function(gpu) {
    let gpuTitle = gpu.title;
    let gpuASIN = gpu.asin;
    let gpuPrice = gpu.price;
		for(var key in gpuPrice){
		  if (key == 'value') {
				let gpuValue = gpuPrice[key];

		// insert statment
		let sql = `INSERT INTO apis(title,vendor_id,vendor_product_id,price,in_stock,createdAt,updatedAt)
          VALUES('${gpuTitle}',1,'${gpuASIN}','${gpuValue}',true,'${currDate}','${currDate}')`;
// execute the insert statment
		connection.query(sql);

		}
	}

});

connection.end();
