module.exports = app => {

	const cases = require("../controllers/cases.js");

	const router = require("express").Router();
	const cors = require("cors");

  router.use(cors());

	router.get("/", cases.findAll);
	router.get("/:id", cases.findOne);
	app.use('/case', router);
};
