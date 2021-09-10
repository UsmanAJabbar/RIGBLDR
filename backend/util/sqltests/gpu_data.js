let mysql  = require('mysql2');
let config = require('./config.js');
const currDate = require('moment')().format('YYYY-MM-DD HH:mm:ss');

const gpuJSON = require('./gpu');


let connection = mysql.createConnection(config);

gpuJSON.forEach(function(gpu) {
    let gpuModel = gpu.name;
		let gpuManu = gpu.manufacturer;
		let gpuChipManu = gpu.chipset_manufacturer;
		let gpuChip = gpu.chipset;
		let gpuMem = gpu.memory;
		let gpuCClock = gpu.core_clock;
		let gpuBClock = gpu.boost_clock;
		let gpuPciEGen = gpu.pcie_gen;
		// insert statement
		let sql = `INSERT INTO video_cards(model, manufacturer, chipset_manufacturer, chipset, memory, core_clock, boost_clock, pcie_gen)
          VALUES('${gpuModel}','${gpuManu}','${gpuChipManu}','${gpuChip}','${gpuMem}','${gpuCClock}','${gpuBClock}','${gpuPciEGen}')`;
// execute the insert statement
		connection.query(sql);

});

connection.end();
