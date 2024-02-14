import { DataTypes, Model } from 'sequelize';

 const fun = async (sequelize, DataTypes)=> {

  class User extends Model {
    static associate(models) {
      // this.belongsTo(models.Team, { foreignKey: 'teamId' })
    }
  }

  User.init(
    {
      name: {
        type: DataTypes.STRING
      },
      sssss: {
        type: DataTypes.STRING
      },
      sss: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
      lastPaidOn: {
        type: DataTypes.DATE
      },
      companyId: {
        type: DataTypes.INTEGER
      },
      companyName: {
        type: DataTypes.STRING
      },
      companyDescription: {
        type: DataTypes.STRING
      },
      dsd: {
        type: DataTypes.BOOLEAN
      },
      isCompany: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      sequelize,
      modelName: 'User'
    }
  );

  User.sync({force:true})

  // sequelize.sync();
};




export default fun;

// console.log(typeof fun); // Output: "function"

