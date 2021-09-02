const db = require("../models");
const { Processors, VendorEndpoints } = db.models;
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
  const { core, socket, manufacturer, proc_tier, generation, part_num, thread, smt, tdp } = req.query;
  const filters = {};
  (core) ? filters.core = {[Op.like]: `${core}%`} : null;
  (socket) ? filters.socket = {[Op.like]: `${socket}%`} : null;
  (manufacturer) ? filters.manufacturer = {[Op.like]: `${manufacturer}%`} : null;
  (proc_tier) ? filters.proc_tier = {[Op.like]: `${proc_tier}%`} : null;
  (generation) ? filters.generation = {[Op.like]: `${generation}%`} : null;
  (part_num) ? filters.part_num = {[Op.like]: `${part_num}%`} : null;
  (thread) ? filters.thread = {[Op.like]: `${thread}%`} : null;
  (smt) ? filters.smt = {[Op.like]: `${smt}%`} : null;
  (tdp) ? filters.tdp = {[Op.like]: `${tdp}%`} : null;
  const processor = Processors.findAll({
		where: filters,
    include: [
			{
				model: VendorEndpoints, 
				attributes: ['price', 'in_stock'] 
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
