# Meetups Beers 🍺:

Para crear una API utilizando NodeJS. Las principales tecnologías que utilizamos son:

- [NodeJS](https://nodejs.org/es/): entorno de ejecución para JavaScript.
- [ExpressJS](https://expressjs.com/): framework para crear aplicaciones web.
- [Sequelize](https://sequelize.org/master/): ORM (object-relational mapping) para interactuar con una base SQL desde objetos JavaScript.
- [PostgreSQL](https://www.postgresql.org/): base de datos SQL. (Si no queres usar docker)

## :point_up: Prerrequisitos - para instalar antes de empezar

Para ejecutar el código es necesario tener NodeJS en su versión 14 (`lts/fermium`).

Por último, se incluye un archivo de [Docker Compose](https://docs.docker.com/compose/) con todo lo necesario para instalar y configurar las bases de datos en PostgreSQL (una para desarrollo y otra para test). Si por algún motivo no querés usar Docker, vas a tener que instalar PostgreSQL y luego ejecutar el script `docker/init/crear-db.sh` en tu entorno.

Generar una 'x-rapidapi-key' en [Rapidapi](https://rapidapi.com/) y copiarlo en los env

## :ballot_box_with_check: Configuración inicial del proyecto

Asumiendo que ya configuraste todos los prerrequisitos y que vas a utilizar Docker, estos son los comandos que deberías ejecutar la primera vez que trabajes en el proyecto:

```shell
# Instala, configura y levanta las bases de datos.
# El flag -d (daemon) hace que la ejecución continue incluso luego de reiniciar la máquina.
docker-compose up -d

# Copia las variables de entorno necesarias para acceder a las bases de datos.
cp .env.example .env

# Instala las dependencias Node del proyecto.
npm install

# Ejecuta las migraciones iniciales para las bases de dev y test.
npm run db:init

# (Opcional) Para datos de prueba
npm run db:seed


# (Si llega a fallar)
sudo lsof -i tcp:5432
sudo kill PID

docker-compose down

# Después volvemos a levantar docker
docker-compose up -d
```

## :file_folder: Estructura de directorios

Breve descripción de qué se puede encontrar en cada uno de los directorios del proyecto:

```shell
.
├── bin                 # Punto de entrada del servidor
├── db
│   ├── migrations      # Migraciones de la base de datos
│   └── seeders         # Datos de prueba para la base de datos
├── docker              # Configuración de Docker para desarrollo
├── lib
│   ├── config          # Configuración de la base de datos
│   ├── controllers     # Acciones de nuestra aplicación
│   ├── models          # Definición de modelos, atributos, etc
│   └── routes          # Rutas de la API
```

## :woman_technologist: :man_technologist: Comandos útiles para el día a día

A continuación, algunos comandos necesarios para el desarrollo diario en este proyecto.

### Código

```shell
# Levanta el proyecto y recarga automáticamente si hay cambios.
npm start
```

### Base de datos

```shell
# Ejecuta las migraciones.
npm run db:init

# (Opcional) Carga los datos de prueba en la base de desarrollo.
npm run db:seed

# Crea una nueva migración llamada `add-descripcion-to-meet`.
npx sequelize migration:generate --name add-descripcion-to-meet

# Deshace la última migración.
npx sequelize db:migrate:undo
```

### Link to Front-end
[Front](https://github.com/JoaquinPettinari/Beers-Test-Front)
