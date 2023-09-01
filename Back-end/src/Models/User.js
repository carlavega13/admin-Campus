const { DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true
        },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      token:{
        type: DataTypes.STRING,
      },
      rol:{
        type: DataTypes.STRING,
        defaultValue: 'user'
          
      },
      firstname:{
        type: DataTypes.STRING,
        
      },
      lastname:{
        type: DataTypes.STRING,
    
      },
      lastname:{
        type: DataTypes.STRING,
   
      },
      fullname:{
        type: DataTypes.STRING,
      
      },
      email:{
        type: DataTypes.STRING,
       
      },
      phone:{
        type: DataTypes.STRING,
        
      },
      dni:{
        type: DataTypes.STRING,
        
      }
    },
    { timestamps: false }
  );
};
