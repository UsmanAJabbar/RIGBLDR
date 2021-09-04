const db = require("../models");
const { Motherboards, VendorEndpoints } = db.models;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

};

exports.findOne = (req, res) => {
  const motherboard = Motherboards.findOne({
    where: { id: req.params.id },
    include: [ { model: VendorEndpoints, attributes: ['price', 'in_stock'] } ] })
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
  const { model, socket, manufacturer, ddr_type, form_factor, sata_slots, m2_slots, mem_slots, max_mem } = req.query;
  const filters = {};
  (model) ? filters.model = {[Op.like]: `${model}%`} : null;
  (socket) ? filters.socket = {[Op.like]: `${socket}%`} : null;
  (manufacturer) ? filters.manufacturer = {[Op.like]: `${manufacturer}%`} : null;
  (ddr_type) ? filters.ddr_type = {[Op.like]: `${ddr_type}%`} : null;
  (form_factor) ? filters.form_factor = {[Op.like]: `${form_factor}%`} : null;
  (sata_slots) ? filters.sata_slots = {[Op.like]: `${sata_slots}%`} : null;
  (m2_slots) ? filters.m2_slots = {[Op.like]: `${m2_slots}%`} : null;
  (mem_slots) ? filters.mem_slots = {[Op.like]: `${mem_slots}%`} : null;
  (max_mem) ? filters.max_mem = {[Op.like]: `${max_mem}%`} : null;
  const motherboard = Motherboards.findAll({
		where: filters,
    include: [ { model: VendorEndpoints, attributes: ['price', 'in_stock'] } ] })
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
