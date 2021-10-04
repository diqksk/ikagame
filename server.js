const express = require("express");
const { sequelize } = require("./models/index");
const pageRouter = require("./routes/pageRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "localhost:6060",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

sequelize
  .sync()
  .then(() => console.log("connected database"))
  .catch((err) => console.error("occurred error in database connecting", err));

app.use("/ikagame", pageRouter);

app.listen(6060, () => {
  console.log("open server on 3060");
});
