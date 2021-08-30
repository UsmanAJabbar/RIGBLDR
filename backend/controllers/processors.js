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
  const { core, socket, manufacturer } = req.query;
  const filters = {};
  (core) ? filters.core = {[Op.like]: `${core}%`} : null;
  (socket) ? filters.socket = {[Op.like]: `${socket}%`} : null;
  (manufacturer) ? filters.manufacturer = {[Op.like]: `${manufacturer}%`} : null;
  const processor = Processors.findAll({
		where: filters,
    include: [
			{
				model: Apis, 
				attributes: ['price', 'in_stock'] 
			},
			{
				model: Motherboards, 
				where: filters,
				attributes: [],
				include: [
					{
						model: Apis, 
						attributes: ['price', 'in_stock'] 
					},
					{	
						model: VideoCards,
						where: filters,
						attributes: []
						include: [
							{
								model: Apis, 
								attributes: ['price', 'in_stock'] 
							}
						]
					}	
				]
			}
		] 
		})
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
