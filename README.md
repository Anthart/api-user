# Proyecto NestJS – Users & Tasks API

## Configuración de MySQL

```sql
CREATE SCHEMA `prueba_tecnica` ;
```

## Variables de entorno

Crear un archivo `.env`:

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=secret
DB_NAME=prueba_tecnica

## Ejecutar proyecto

npm install
npm run start:dev

Swagger:
http://localhost:3000/api/docs

## Endpoints

POST /users
{
  "name": "Anthony",
  "email": "anthony@mail.com"
}

POST /users/{userId}/tasks
{
  "title": "Enviar Correo"
}

GET /users