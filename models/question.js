module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Question",
    {
      qid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "pk",
      },
      q1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "question 1",
      },
      q2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "question 2",
      },
      q3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "question 3",
      },
      q4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "question 4",
      },
      q5: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "question 5",
      },
      q6: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "question 6",
      },
      q7: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "question 7",
      },
      q8: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "question 8",
      },
      q9: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "question 9",
      },
      q10: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "question 10",
      },
      q11: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "question 11",
      },
      q12: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "question 12",
      },
      mbti: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "question 12",
      },
      regdate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("now()"),
        comment: "작성시간",
      },
    },
    {
      timestamps: false,
    }
  );
};
