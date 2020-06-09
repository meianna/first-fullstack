const express = require("express");
const app = express();
const PORT = 5500;

// sets up server for incoming and outgoing datatypes (string, array, json)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/"));

// sets up client side routes responsible for serving html
const clientRoutes = require("./routes/client-routes.js");
app.use(clientRoutes);

// sets up api routes for sending data to the client
const apiRoutes = require("./routes/api-routes.js");
app.use(apiRoutes);

// runs server
app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));
