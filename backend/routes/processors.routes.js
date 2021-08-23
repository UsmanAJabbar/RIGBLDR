module.exports = app => {
	const processors = require("../controllers/processors.controller.js");

	const router = require("express").Router();

	router.get("/", processors.findAll);
	router.get("/:id", processors.findOne);
	app.use('/api/', router);
};
