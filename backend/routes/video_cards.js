module.exports = app => {
	const videoCards = require("../controllers/video_cards.js");

	const router = require("express").Router();

	router.get("/", videoCards.findAll);
	router.get("/:id", videoCards.findOne);
	app.use('/gpu', router);
};
