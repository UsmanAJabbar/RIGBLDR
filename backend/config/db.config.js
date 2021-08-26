module.exports = {
	HOST: "localhost",
	USER: "rigbldr",
	PASSWORD: "CHANGEME",
	DB: "rgbldr",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};
