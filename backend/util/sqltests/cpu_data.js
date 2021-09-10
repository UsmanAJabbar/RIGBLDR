let mysql  = require('mysql2');
let config = require('./config.js');
const currDate = require('moment')().format('YYYY-MM-DD HH:mm:ss');

const cpuJSON = require('./cpu');


let connection = mysql.createConnection(config);

cpuJSON.forEach(function(cpu) {
    let cpuModel = cpu.name;
		let cpuManu = cpu.manufacturer;
		let cpuCoreCnt = cpu.core_count;
    let cpuSMTtext = cpu.smt;
    let cpuTDP = cpu.tdp;
		let cpuSMT = (cpuSMTtext = 'true') ? 1 : 0;
		// insert statement
		let sql = `INSERT INTO processors(model,manufacturer,core,smt,tdp)
          VALUES('${cpuModel}','${cpuManu}','${cpuCoreCnt}','${cpuSMT}','${cpuTDP}')`;
// execute the insert statement
		connection.query(sql);

});

connection.end();
