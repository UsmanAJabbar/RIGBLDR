const db = require("../models");
const { Motherboards, Apis } = db.models;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

};

exports.findOne = (req, res) => {
  const motherboard = Motherboards.findOne({
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
  (socket) ? filters.socket = {[Op.like]: `${socket}%`} : null;
  (manufacturer) ? filters.manufacturer = {[Op.like]: `${manufacturer}%`} : null;
  const motherboard = Motherboards.findAll({
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
