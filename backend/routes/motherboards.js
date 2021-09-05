module.exports = app => {

	const motherboards = require("../controllers/motherboards.js");

	const router = require("express").Router();
	const cors = require("cors");

  router.use(cors());

	router.get("/", motherboards.findAll);
	router.get("/:id", motherboards.findOne);
	app.use('/mobo', router);
};
