const express = require("express");
const router = express.Router();
const requestIp = require("request-ip");
const { User } = require("../models");
const { Question } = require("../models");
const { Sequelize } = require("sequelize");
const charaters = require("../config/character.json");

router.get("/", async (req, res) => {
  if (!req.cookies.visit) {
    res.cookie("visit", true, {
      maxAge: 1000 * 60 * 60 * 3,
    });

    await User.create({
      address: requestIp.getClientIp(req),
    });
  }

  const users = await User.findAll({
    attributes: [
      [Sequelize.fn("COUNT", Sequelize.col("*")), "total"],
      [
        Sequelize.fn(
          "COUNT",
          Sequelize.literal("case when regdate > curdate() then 1 end")
        ),
        "today",
      ],
    ],
  });
  let result;

  result = {
    total: users[0].dataValues.total,
    today: users[0].dataValues.today,
  };

  res.status(200).send(result);
});

router.post("/", async (req, res) => {
  const r = req.body;

  const first_word = r.q1 + r.q2 + r.q3 > 0 ? "E" : "I";
  const second_word = r.q4 + r.q5 + r.q6 > 0 ? "S" : "N";
  const third_word = r.q7 + r.q8 + r.q9 > 0 ? "T" : "F";
  const forth_word = r.q10 + r.q11 + r.q12 > 0 ? "P" : "J";
  const mbti = first_word + second_word + third_word + forth_word;

  await Question.create({ ...r, mbti: mbti });

  res.status(200).send({ success: 200, msg: charaters[mbti] });
});

module.exports = router;
