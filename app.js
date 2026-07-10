require("dotenv").config();
const express = require("express");
const DbCon = require("./app/config/db");
const router = require("./app/routes/lookup.routes");

const app = express();
DbCon();
app.use(express.json());
app.use("/", router);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server created at ${PORT}`);
});
