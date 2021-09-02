const db = require("../models");
const { VideoCards, VendorEndpoints } = db.models;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

};

exports.findOne = (req, res) => {
  const videoCard = VideoCards.findOne({
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
  const { model, manufacturer, chipset_manufacturer, chipset, memory, core_clock, boost_clock, pcie_gen } = req.query;
  const filters = {};
  (model) ? filters.model = {[Op.like]: `${model}%`} : null;
  (manufacturer) ? filters.manufacturer = {[Op.like]: `${manufacturer}%`} : null;
  (chipset_manufacturer) ? filters.chipset_manufacturer = {[Op.like]: `${chipset_manufacturer}%`} : null;
  (chipset) ? filters.chipset = {[Op.like]: `${chipset}%`} : null;
  (memory) ? filters.memory = {[Op.like]: `${memory}%`} : null;
  (core_clock) ? filters.core_clock = {[Op.like]: `${core_clock}%`} : null;
  (boost_clock) ? filters.boost_clock = {[Op.like]: `${boost_clock}%`} : null;
  (pcie_gen) ? filters.pcie_gen = {[Op.like]: `${pcie_gen}%`} : null;
  const videoCard = VideoCards.findAll({
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
