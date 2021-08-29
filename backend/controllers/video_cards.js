const db = require("../models");
const { VideoCards, Apis } = db.models;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

};

exports.findOne = (req, res) => {
  const videoCard = VideoCards.findOne({
    where: { id: req.params.id },
    include: [ { model: Apis, attributes: ['price', 'in_stock'] } ] })
	  .then(data => {
		  res.send(data);
		})
		.catch(err => {
		  res.status(500).send({
			  message:
				  err.message || "Failure!"
		});
	});
};

exports.findAll = (req, res) => {
  const { core, socket, manufacturer } = req.query;
  const filters = {};
  (name) ? filters.name = {[Op.like]: `${name}%`} : null;
  (chipset) ? filters.chipset = {[Op.like]: `${chipset}%`} : null;
  (manufacturer) ? filters.manufacturer = {[Op.like]: `${manufacturer}%`} : null;
  const videoCard = VideoCards.findAll({
		where: filters,
    include: [ { model: Apis, attributes: ['price', 'in_stock'] } ] })
	  .then(data => {
		  res.send(data);
		})
		.catch(err => {
		  res.status(500).send({
			  message:
				  err.message || "Failure!"
		});
	});
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};
