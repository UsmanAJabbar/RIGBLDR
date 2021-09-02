module.exports = (sequelize, Sequelize) => {
	const Processors = sequelize.define("processors", {
		model: { type: Sequelize.STRING, allowNull: false, unique: true, },
		manufacturer: { type: Sequelize.STRING, allowNull: false, },
		proc_tier: { type: Sequelize.STRING, },
		generation: { type: Sequelize.INTEGER, },
		part_num: { type: Sequelize.STRING, },
		socket: { type: Sequelize.STRING, },
		core: { type: Sequelize.INTEGER, allowNull: false, },
		thread: { type: Sequelize.INTEGER, },
		smt: { type: Sequelize.BOOLEAN, allowNull: false, },
		tdp: { type: Sequelize.STRING, allowNull: false, },
  }, { timestamps: false });

	const VendorEndpoints = sequelize.define("vendor_endpoints", {
		title: { type: Sequelize.STRING, allowNull: false, },
		vendor_id: { type: Sequelize.STRING, allowNull: false, },
		vendor_product_id: { type: Sequelize.STRING, unique: true, },
		price: { type: Sequelize.DECIMAL(5,2), allowNull: false, default: 0.00 },
		in_stock: { type: Sequelize.BOOLEAN, allowNull: false, default: 0 },
	});

  const VideoCards = sequelize.define("video_cards", {
		model: { type: Sequelize.STRING, allowNull: false, unique: true, },
    manufacturer: { type: Sequelize.STRING, allowNull: false, },
    chipset_manufacturer: { type: Sequelize.STRING, allowNull: false, }, 
    chipset: { type: Sequelize.STRING, allowNull: false, }, 
    memory: { type: Sequelize.INTEGER, allowNull: false, }, 
    core_clock: { type: Sequelize.INTEGER, allowNull: false, }, 
    boost_clock: { type: Sequelize.INTEGER, allowNull: false, }, 
    interface: { type: Sequelize.STRING, allowNull: false, }, 
  }, { timestamps: false });

	const Motherboards = sequelize.define("motherboards", {
		model: { type: Sequelize.STRING, allowNull: false, unique: true, },
    manufacturer: { type: Sequelize.STRING, allowNull: false, }, 
    chipset: { type: Sequelize.STRING, allowNull: false, }, 
    socket: { type: Sequelize.STRING, allowNull: false, }, 
    form_factor: { type: Sequelize.STRING, allowNull: false, }, 
    max_mem: { type: Sequelize.INTEGER, allowNull: false, }, 
    mem_slots: { type: Sequelize.INTEGER, allowNull: false, }, 
    ddr_type: { type: Sequelize.STRING, allowNull: false, }, 
    pcie_gen: { type: Sequelize.INTEGER, allowNull: false, }, 
    sata6_slots: { type: Sequelize.INTEGER, allowNull: false, }, 
    m2_slots: { type: Sequelize.INTEGER, allowNull: false, }, 
  }, { timestamps: false });

  const Memory = sequelize.define("memory", {
    manufacturer: { type: Sequelize.STRING, allowNull: false, }, 
    type: { type: Sequelize.INTEGER, allowNull: false, }, 
    size: { type: Sequelize.STRING, allowNull: false, }, 
    speed: { type: Sequelize.STRING, allowNull: false, }, 
	}, { timestamps: false });

  const PowerSupply = sequelize.define("power_supply", {
    manufacturer: { type: Sequelize.STRING, allowNull: false, }, 
		wattage: { type: Sequelize.STRING, allowNull: false, }, 
    form_factor: { type: Sequelize.STRING, allowNull: false, }, 
		modularity: { type: Sequelize.STRING, allowNull: false, },
		efficiency: { type: Sequelize.STRING, allowNull: false, },
	}, { timestamps: false });

  const Case = sequelize.define("case", {
    manufacturer: { type: Sequelize.STRING, allowNull: false, }, 
    form_factor: { type: Sequelize.STRING, allowNull: false, }, 
		tempered_glass: { type: Sequelize.BOOLEAN, allowNull: false, },
	}, { timestamps: false });

  const Storage = sequelize.define("storage", {
    manufacturer: { type: Sequelize.STRING, allowNull: false, }, 
    interface: { type: Sequelize.STRING, allowNull: false, }, 
		capacity: { type: Sequelize.INTEGER, allowNull: false, },
		type: { type: Sequelize.STRING, allowNull: false, },
	}, { timestamps: false });

  Processors.belongsTo(VendorEndpoints);
	// VendorEndpoints.hasMany(Processors);

  Motherboards.belongsTo(VendorEndpoints);
// VendorEndpoints.hasMany(Motherboards);

  VideoCards.belongsTo(VendorEndpoints);
// VendorEndpoints.hasMany(VideoCards);

  PowerSupply.belongsTo(VendorEndpoints);
// VendorEndpoints.hasMany(PowerSupply);

  Memory.belongsTo(VendorEndpoints);
// VendorEndpoints.hasMany(Memory);

  Case.belongsTo(VendorEndpoints);
// VendorEndpoints.hasMany(Case);

  Storage.belongsTo(VendorEndpoints);
// VendorEndpoints.hasMany(Storage);

	return { Processors, VideoCards, Motherboards, PowerSupply, Memory, Case, Storage, VendorEndpoints };
};
