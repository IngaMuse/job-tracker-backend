const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobsRouter = require("./routes/jobs");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(`DB connection ${err}`));

app.use(cors());
app.use(express.json());
app.use("/api/jobs", jobsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
