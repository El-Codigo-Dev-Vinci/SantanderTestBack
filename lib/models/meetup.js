import { Model, DataTypes, Sequelize } from 'sequelize';

export default class Meetup extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        date: DataTypes.DATEONLY,
        temperature: DataTypes.STRING,
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

  static withAssistances() {
    return this.findAll({
      attributes: {
        include: [
          [
            Sequelize.literal('COUNT("assistances".id)::integer'),
            'assistances',
          ],
        ],
      },
    });
  }
}
