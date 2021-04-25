import { DataTypes, Model } from 'sequelize';

export default class Assistance extends Model {
  static init(sequelize) {
    return super.init(
      {
        dateOfEntry: {
          type: DataTypes.DATE,
          defaultValue: null,
        },
      },
      {
        sequelize,
        model: 'Assistance',
        tableName: 'assistances',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId' });
    this.belongsTo(models.Meetup, { foreignKey: 'meetupId' });
  }
}
