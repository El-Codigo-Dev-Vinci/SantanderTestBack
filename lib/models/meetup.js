import { Model, DataTypes } from 'sequelize';

export default class Meetup extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        date: DataTypes.DATEONLY,
      },
      {
        sequelize,
        modelName: 'Meetup',
        tableName: 'meetups',
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Assistance, { foreignKey: 'meetupId' });
  }
}
