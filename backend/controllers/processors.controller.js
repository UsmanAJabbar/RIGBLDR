const db = require("../models");
const Processor = db.processors;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

};

exports.findOne = (req, res) => {
const id = req.params.id;

const processor = Processor.findOne({ where: { id: id } });
if (processor === null) {
	console.log('Not found!');
} else {
	console.log(processor instanceof Processor);
	console.log(processor.fullname);
};
};

exports.findAll = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};
