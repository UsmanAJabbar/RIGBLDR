const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {

	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: false,

	// pool added as defaults, leaving here to implement later
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle
	}
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.models = require("./models.js")(sequelize, Sequelize);

db.sequelize.sync(function(err){});
module.exports = db;
