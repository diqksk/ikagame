module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'User',
    {
      uid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: 'pk'
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'ip adress'
      },
      regdate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('now()'),
        comment: '방문시각'
      }
    },
    {
      timestamps: false
    }
  )
}