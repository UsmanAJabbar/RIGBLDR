module.exports = (sequelize, Sequelize) => {
	const Apis = sequelize.define("apis", {
		vendor_id: {
			type: Sequelize.STRING
		},
		vendor_product_id: {
			type: Sequelize.STRING
		},
		price: {
			type: Sequelize.DECIMAL(5,2)
		},
		in_stock: {
			type: Sequelize.BOOLEAN
		},
	});

	return Apis;
};
