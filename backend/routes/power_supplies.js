module.exports = app => {

	const psu = require("../controllers/power_supplies.js");

	const router = require("express").Router();
	const cors = require("cors");

  router.use(cors());

	router.get("/", psu.findAll);
	router.get("/:id", psu.findOne);
	app.use('/psu', router);
};
