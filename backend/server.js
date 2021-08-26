const express = require("express");
const cors = require("cors");
const rainForestApi = require('./util/rainforest-common.js')

const app = express();

let corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Works" });
});

require("./routes/processors")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`RIGBLDR backend api is up! Port: ${PORT}.`);
});


// const asyncApiCall = async () => {
// const response = await .getCompatibility('Austin', '1987-05-21', 'Taylor', '1989-09-27')

// console.log(response.data.data.Compatibility.heading)
// console.log(response.data.data.Compatibility)
// }

// asyncApiCall()
