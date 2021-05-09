# Boilerplate Backend Express-Postgres

## Instalación

Descargar [NodeJS](https://nodejs.org/es/) se sugiere utilizar la versión LTS

### Instalar paquetes requeridos

Una vez instalado Node, desde la carpeta base de este proyecto ejecutar:

```bash
npm install
```
### Instalar la CLI de Sequelize
Con la sequelize-cli podrán ejecutar las migraciones del proyecto, así como también crearlas y realizar varias tareas que esta herramienta ofrece:

```bash
npm install --save-dev sequelize-cli
```

### Configurar las Variables de Entorno

Para que el proyecto se comunique con la base de datos, así como también, indicar en qué púerto escuchar peticiones, se debe renombrar el archivo **.env.example** a **.env**, luego abrirlo y configurarlo con los datos de su base de datos:

```bash
PORT=8080

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=ayudantia
DB_PASSWORD=1234567
DB_DATABASE=aydsw
DB_DIALECT=postgres
```

### Ejecutar las Migraciones

Con el fin de crear las tablas que utilizaremos en la BD, se deben echar a andar las migraciones del proyecto con el comando:

```bash
npx sequelize-cli db:migrate
```

### Iniciar el Proyecto

Una vez teniendo todo listo y configurado, podemos levantar nuestro servidor web con el comando:

```bash
npm start
```

### (Opcional) Base de Datos con Docker Compose

Se les dejó también un archivo docker-compose, éste facilita la configuración del ambiente de desarrollo pues les permite echar a andar una Base de Datos PostgreSQL junto con PgAdmin con sólo ejecutar el comando:

```bash
docker-compose up
```

Notar que si ya tienen una base de datos, no es necesario utilizar ésto, por eso es que esta parte es opcional.


