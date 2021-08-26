const db = require("../models");
const { Processors, Apis } = db.models;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

};

exports.findOne = (req, res) => {
const processor = Processors.findOne({
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
  const { socket } = req.query;
  const filters = {};
  if (socket) 
    filters.socket = {
      [Op.like]: `${socket}%`, // you can also use $like if you are using older version of sequelize
    }
  const processor = Processors.findAll({
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
