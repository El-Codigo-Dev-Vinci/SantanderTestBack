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
        modelName: 'meetup',
        tableName: 'Meetups',
      }
    );
  }
}
