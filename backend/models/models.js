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
		apiId: {
			type: Sequelize.STRING,
		}
	}, { timestamps: false });

	const Apis = sequelize.define("apis", {
		vendor_id: {
			type: Sequelize.STRING,
		},
		vendor_product_id: {
			type: Sequelize.STRING,
			unique: true,
		},
		price: {
			type: Sequelize.DECIMAL(5,2),
		},
		in_stock: {
			type: Sequelize.BOOLEAN,
		},
	});

	Processors.belongsTo(Apis);

	return { Processors, Apis };
};
