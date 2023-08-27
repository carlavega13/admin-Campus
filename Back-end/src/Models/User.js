const { DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      role:{
        type: DataTypes.STRING,
          
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
