const db = require("../models");
const { Memory, VendorEndpoints } = db.models;
const Op = db.Sequelize.Op;


// exports.create = (req, res) => {
// };

// find one part by id
exports.findOne = (req, res) => {
  const cases = Memory.findOne({
    where: { id: req.params.id },
    include: [ { model: VendorEndpoints, attributes: ['price', 'in_stock', 'vendor_product_id'] } ] })
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

// find all parts or limit by column values
exports.findAll = (req, res) => {
  const { model, manufacturer, type, size, speed } = req.query;
  const filters = {};
  (model) ? filters.model = {[Op.like]: `${model}%`} : null;
  (manufacturer) ? filters.manufacturer = {[Op.like]: `${manufacturer}%`} : null;
  (type) ? filters.type = {[Op.like]: `${type}%`} : null;
  (size) ? filters.size = {[Op.like]: `${size}%`} : null;
  (speed) ? filters.speed = {[Op.like]: `${speed}%`} : null;
  const cases = Memory.findAll({
		where: filters,
    include: [ { model: VendorEndpoints, attributes: ['price', 'in_stock', 'vendor_product_id'] } ] })
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

// exports.update = (req, res) => {
// };

// exports.delete = (req, res) => {
// };
