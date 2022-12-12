const Post = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "post",
    {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      postContent: {
        type: DataTypes.STRING(255),
      },
      postPw: {
        type: DataTypes.STRING(30),
      },
      userId: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      tableName: "post",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};

module.exports = Post;
