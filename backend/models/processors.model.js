module.exports = (sequelize, Sequelize) => {
	const Processors = sequelize.define("processors", {
		manufacturer: {
			type: Sequelize.STRING
		},
		proc_tier: {
			type: Sequelize.STRING
		},
		generation: {
			type: Sequelize.INTEGER
		},
		part_num: {
			type: Sequelize.STRING
		},
		socket: {
			type: Sequelize.STRING
		},
		core: {
			type: Sequelize.INTEGER
		},
		thread: {
			type: Sequelize.INTEGER
		},
		smt: {
			type: Sequelize.BOOLEAN
		},
		tdp: {
			type: Sequelize.STRING
		},
		fullname: {
			type: Sequelize.STRING
		},
		api_id: {
			type: Sequelize.STRING
		}
	});

	return Processors;
};
