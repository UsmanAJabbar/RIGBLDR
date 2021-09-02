let mysql  = require('mysql2');
let config = require('./config.js');
const currDate = require('moment')().format('YYYY-MM-DD HH:mm:ss');

const cpuVendJSON = require('./rainforestCpus');
const gpuVendJSON = require('./rainforestGpus');
const mbVendJSON = require('./rainforestMbs'); 

let connection = mysql.createConnection(config);

cpuVendJSON.forEach(function(cpu) {
    let cpuTitle = cpu.title;
    let cpuASIN = cpu.asin;
    let cpuPrice = cpu.price;
		for(var key in cpuPrice){
		  if (key == 'value') {
				let cpuValue = cpuPrice[key];

		// insert statement
		let sql = `INSERT INTO vendor_endpoints(title,vendor_id,vendor_product_id,price,in_stock,createdAt,updatedAt)
          VALUES('${cpuTitle}',1,'${cpuASIN}','${cpuValue}',true,'${currDate}','${currDate}')`;
// execute the insert statement
		connection.query(sql);

		}
	}

});

gpuVendJSON.forEach(function(mb) {
    let mbTitle = mb.title;
    let mbASIN = mb.asin;
    let mbPrice = mb.price;
		for(var key in mbPrice){
		  if (key == 'value') {
				let mbValue = mbPrice[key];

		// insert statement
		let sql = `INSERT INTO vendor_endpoints(title,vendor_id,vendor_product_id,price,in_stock,createdAt,updatedAt)
          VALUES('${mbTitle}',1,'${mbASIN}','${mbValue}',true,'${currDate}','${currDate}')`;
// execute the insert statement
		connection.query(sql);

		}
	}

});

mbVendJSON.forEach(function(mb) {
    let mbTitle = mb.title;
    let mbASIN = mb.asin;
    let mbPrice = mb.price;
		for(var key in mbPrice){
		  if (key == 'value') {
				let mbValue = mbPrice[key];

		// insert statement
		let sql = `INSERT INTO vendor_endpoints(title,vendor_id,vendor_product_id,price,in_stock,createdAt,updatedAt)
          VALUES('${mbTitle}',1,'${mbASIN}','${mbValue}',true,'${currDate}','${currDate}')`;
// execute the insert statement
		connection.query(sql);

		}
	}

});

connection.end();
