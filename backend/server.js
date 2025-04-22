require("dotenv").config();
const express = require("express");
const envChecker = require("./utils/env");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

envChecker();

const PORT = process.env.PORT;
const MODE = process.env.NODE_ENV;
app.listen(PORT, () => {
  console.log(`Server is running on ${MODE} mode at port ${PORT}`);
});
