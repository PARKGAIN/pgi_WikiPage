const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connect = require("./db/connection");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
connect();
app.use("/",require("./routes/postRouter"));
app.listen(8000);