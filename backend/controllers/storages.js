const db = require("../models");
const { Storage, VendorEndpoints } = db.models;
const Op = db.Sequelize.Op;


// exports.create = (req, res) => {
// };

// find one part by id
exports.findOne = (req, res) => {
  const motherboard = Storage.findOne({
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
  const { manufacturer, interface, capacity, type } = req.query;
  const filters = {};
  (manufacturer) ? filters.manufacturer = {[Op.like]: `${manufacturer}%`} : null;
  (interface) ? filters.interface = {[Op.like]: `${interface}%`} : null;
  (capacity) ? filters.capacity = {[Op.like]: `${capacity}%`} : null;
  (type) ? filters.type = {[Op.like]: `${type}%`} : null;
  const storage = Storage.findAll({
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
