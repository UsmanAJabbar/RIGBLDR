module.exports = app => {
	const motherboards = require("../controllers/motherboards.js");

	const router = require("express").Router();

	router.get("/", motherboards.findAll);
	router.get("/:id", motherboards.findOne);
	app.use('/mb', router);
};
