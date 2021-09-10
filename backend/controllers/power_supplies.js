const db = require("../models");
const { PowerSupply, VendorEndpoints } = db.models;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

};

exports.findOne = (req, res) => {
  const cases = PowerSupply.findOne({
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
  const { manufacturer, form_factor, tempered_glass } = req.query;
  const filters = {};
  (manufacturer) ? filters.manufacturer = {[Op.like]: `${manufacturer}%`} : null;
  (form_factor) ? filters.form_factor = {[Op.like]: `${form_factor}%`} : null;
  (tempered_glass) ? filters.tempered_glass = {[Op.like]: `${tempered_glass}%`} : null;
  const cases = PowerSupply.findAll({
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
