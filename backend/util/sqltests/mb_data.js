let mysql  = require('mysql2');
let config = require('./config.js');
const currDate = require('moment')().format('YYYY-MM-DD HH:mm:ss');

const mbJSON = require('./mb');


let connection = mysql.createConnection(config);

mbJSON.forEach(function(mb) {
    let mbModel = mb.name;
		let mbSocket = mb.socket__cpu;
    let mbFormFactor = mb.form_factor;
    let mbMaxMem = mb.memory_max;
		let mbMemSlots = mb.memory_slots; 
		// insert statement
		let sql = `INSERT INTO motherboards(model,socket,form_factor,max_mem,mem_slots)
          VALUES('${mbModel}','${mbSocket}','${mbFormFactor}','${mbMaxMem}','${mbMemSlots}')`;
// execute the insert statement
		connection.query(sql);

});

connection.end();
