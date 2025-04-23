require("dotenv").config();
const express = require("express");
const envChecker = require("./utils/env");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const productRoutes = require("./routes/productRoutes");
const { initDB } = require("./config/db");
const path = require("path");
const { globalErrorHandler } = require("./utils/errorHandler");

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan("dev"));

envChecker();

app.use("/api", productRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.use(globalErrorHandler);

const PORT = process.env.PORT;
const MODE = process.env.NODE_ENV;
app.listen(PORT, async () => {
  console.log(`Server is running on ${MODE} mode at port ${PORT}`);
  await initDB();
});
