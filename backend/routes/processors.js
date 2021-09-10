module.exports = app => {
	const processors = require("../controllers/processors.js");

	const router = require("express").Router();
	const cors = require("cors");
  router.use(cors());

	router.get("/", processors.findAll);
	router.get("/:id", processors.findOne);
	app.use('/cpu', router);
};
