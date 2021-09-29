const express = require("express");
const { sequelize } = require("./models/index");
const userRouter = require("./routes/userRoute");
const pageRouter = require("./routes/pageRoute");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

sequelize
  .sync()
  .then(() => console.log("connected database"))
  .catch((err) => console.error("occurred error in database connecting", err));

app.use("/", userRouter);
app.use("/ikagame", pageRouter);

app.listen(3060, () => {
  console.log("open server on 3060");
});
