import { Model, DataTypes } from 'sequelize';

export default class Usuario extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        role: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Usuario',
      }
    );
  }

  esTocayoDe(otroUsuario) {
    return otroUsuario.nombre === this.nombre;
  }
}
