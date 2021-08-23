module.exports = (sequelize, Sequelize) => {
	const Processors = sequelize.define("processors", {
		manufacturer: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		proc_tier: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		generation: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		part_num: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		socket: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		core: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		thread: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		smt: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
		},
		tdp: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		fullname: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		api_id: {
			type: Sequelize.STRING,
		}
	});

	return Processors;
};
