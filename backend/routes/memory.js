module.exports = app => {

	const memory = require("../controllers/memory.js");

	const router = require("express").Router();
	const cors = require("cors");

  router.use(cors());

	router.get("/", memory.findAll);
	router.get("/:id", memory.findOne);
	app.use('/ram', router);
};
