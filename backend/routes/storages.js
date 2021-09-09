module.exports = app => {

	const storages = require("../controllers/storages.js");

	const router = require("express").Router();
	const cors = require("cors");

  router.use(cors());

	router.get("/", storages.findAll);
	router.get("/:id", storages.findOne);
	app.use('/storage', router);
};
