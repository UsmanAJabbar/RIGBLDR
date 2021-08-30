module.exports = (sequelize, Sequelize) => {
	const Processors = sequelize.define("processors", {
		manufacturer: { type: Sequelize.STRING, allowNull: false, },
		proc_tier: { type: Sequelize.STRING, allowNull: false, },
		generation: { type: Sequelize.INTEGER, allowNull: false, },
		part_num: { type: Sequelize.STRING, allowNull: false, },
		socket: { type: Sequelize.STRING, allowNull: false, },
		core: { type: Sequelize.INTEGER, allowNull: false, },
		thread: { type: Sequelize.INTEGER, allowNull: false, },
		smt: { type: Sequelize.BOOLEAN, allowNull: false, },
		tdp: { type: Sequelize.STRING, allowNull: false, },
		fullname: { type: Sequelize.STRING, allowNull: false, unique: true, },
		apiId: { type: Sequelize.INTEGER, }
  }, { timestamps: false });

	const Apis = sequelize.define("apis", {
		title: { type: Sequelize.STRING, },
		vendor_id: { type: Sequelize.STRING, },
		vendor_product_id: { type: Sequelize.STRING, unique: true, },
		price: { type: Sequelize.DECIMAL(5,2), },
		in_stock: { type: Sequelize.BOOLEAN, },
	});

  const VideoCards = sequelize.define("video_cards", {
    model: { type: Sequelize.STRING, unique: true, },
    manufacturer: { type: Sequelize.STRING, },
    chipset: { type: Sequelize.STRING, }, 
    memory: { type: Sequelize.INTEGER, }, 
    memory_type: { type: Sequelize.STRING, }, 
    core_clock: { type: Sequelize.INTEGER, }, 
    boost_clock: { type: Sequelize.INTEGER, }, 
    inter_face: { type: Sequelize.STRING, }, 
    color: { type: Sequelize.STRING, }, 
    sli_crossfire: { type: Sequelize.STRING, }, 
    frame_sync: { type: Sequelize.STRING, }, 
    length: { type: Sequelize.INTEGER, }, 
    tdp: { type: Sequelize.INTEGER, }, 
    dvi: { type: Sequelize.INTEGER, }, 
    hdmi: { type: Sequelize.INTEGER, }, 
    mini_hdmi: { type: Sequelize.INTEGER, }, 
    display_port: { type: Sequelize.INTEGER, }, 
    mini_display_port: { type: Sequelize.INTEGER, }, 
    slot_width: { type: Sequelize.INTEGER, }, 
    cooling: { type: Sequelize.STRING, }, 
    external_power: { type: Sequelize.STRING, }, 
		apiId: { type: Sequelize.INTEGER, }
  }, { timestamps: false });

	const Motherboards = sequelize.define("motherboards", {
    name: { type: Sequelize.STRING, unique: true, },
    manufacturer: { type: Sequelize.STRING, }, 
    chipset: { type: Sequelize.STRING, }, 
    socket: { type: Sequelize.STRING, }, 
    form_factor: { type: Sequelize.STRING, }, 
    max_mem: { type: Sequelize.INTEGER, }, 
    mem_slots: { type: Sequelize.INTEGER, }, 
    memory_type: { type: Sequelize.STRING, }, 
    color: { type: Sequelize.STRING, }, 
    sli_crossfire: { type: Sequelize.STRING, }, 
    x16_slots: { type: Sequelize.INTEGER, }, 
    x8_slots: { type: Sequelize.INTEGER, }, 
    x4_slots: { type: Sequelize.INTEGER, }, 
    x1_slots: { type: Sequelize.INTEGER, }, 
    pci_slots: { type: Sequelize.INTEGER, }, 
    sata3_ports: { type: Sequelize.INTEGER, }, 
    sata6_ports: { type: Sequelize.INTEGER, }, 
    m2_slots: { type: Sequelize.INTEGER, }, 
    msata_slots: { type: Sequelize.INTEGER, }, 
    ethernet: { type: Sequelize.STRING, }, 
    onboard_video: { type: Sequelize.STRING, }, 
    usb2: { type: Sequelize.INTEGER, }, 
    usb32gen1: { type: Sequelize.INTEGER, }, 
    usb32gen2: { type: Sequelize.INTEGER, }, 
    usb32gen2x2: { type: Sequelize.INTEGER, }, 
    ecc: { type: Sequelize.BOOLEAN, }, 
    wifi: { type: Sequelize.STRING, }, 
		apiId: { type: Sequelize.INTEGER, }
  }, { timestamps: false });

  const ProcessorApi = sequelize.define('ProcessorApi', {
	  id: {
		  type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
  	}
	});
  const VideoCardApi = sequelize.define('VideoCardApi', {
	  id: {
		  type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
  	}
	});
  const MotherboardApi = sequelize.define('MotherboardApi', {
	  id: {
		  type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
  	}
	});

	Processors.belongsToMany(Apis, { through: ProcessorApi });
	Apis.belongsToMany(Processors, { through: ProcessorApi });
  ProcessorApi.belongsTo(Processors);
  ProcessorApi.belongsTo(Apis);
	Processors.hasMany(ProcessorApi);
	Apis.hasMany(ProcessorApi);
	VideoCards.belongsToMany(Apis, { through: VideoCardApi });
	Apis.belongsToMany(VideoCards, { through: VideoCardApi });
	VideoCardApi.belongsTo(VideoCards);
	VideoCardApi.belongsTo(Apis);
	VideoCards.hasMany(VideoCardApi);
	Apis.hasMany(VideoCardApi);
	Motherboards.belongsToMany(Apis, { through: MotherboardApi });
	Apis.belongsToMany(Motherboards, { through: MotherboardApi });
	MotherboardApi.belongsTo(Motherboards);
	MotherboardApi.belongsTo(Apis);
	Motherboards.hasMany(MotherboardApi);
	Apis.hasMany(MotherboardApi);

	return { Processors, VideoCards, Motherboards, Apis };
};
