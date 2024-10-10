# Es una aplicación fullstack (FaztCode)

# Aplicación STACK MERN

**Utilizando mongoDb como base de datos**
**Con registro y cRUD**

# MERN-CRUD-AUTH

1. crear una src/
   iniciar npm
   install express
2. crear app.js

3. crear carpetas:
   controllers
   routers
   models
   middleware \_para las rutas protegidas
   libs \_para tener codigo que se pueden utilizar varias veces
   schema \_crear esquemas para la base de datos
   db.js para la base de datos
   config.js configuraciones
   index.js para arrancar la aplicacion

instalar nodemon "scripts": {
"dev": "nodemon src/index.js"
}
despues se ejecuta npm run dev.

instalar morgan para ver las peticiones que llegan a la aplicacion

conectar mongodb con mongoose.

**Usuarios conectados**

- Los primeros usuarios no sirven ya que se cambio la validacion de contrasenia a 6 caracteres minimo
  {
  "username": "hola",
  "password": "1234",
  "email" : "hi@test.com"
  }
  {
  "username": "jaime",
  "password": "1234",
  "email" : "jaime@test.com"
  }
  {
  "password": "123456",
  "email":"rene@test.com",
  "username": "rene"
  }
  {
  "password": "123456",
  "email":"noel@test.com",
  "username": "noel"
  }
  {
  "username":"donjoe",
  "email": "donjoe@test.com",
  "password": "123456"
  }

# zod

Autenticador...
se descargo npm i zod
y en la carpeta esquemas se realizo la validacion de los datos del usuario

# vite en el frontend

En el frontend se inicio con vite se utiliza react.

# se instalo { BrowserRouter, Route, Routes } from 'react-router-dom'

para el manejo de rutas

# se instalo { useForm } from "react-hook-form"

para el manejo de formularios

# se intalo cors para la conexion del frontend y backend

Este es para que el frontendse pueda comunicar con el backend en el dominio localhost:3000

**se creo un contexto**

**se editaron partes del backend sobre los errores para mostrarlos en el frontend**

**se instalo el modulo day.js para el formateo de la fecha cuando viene del frontend**

# Base de Datos

npm install mongodb

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://donjoe:gqO3srA9lvHS77AT@tareasmern.38bv6.mongodb.net/?retryWrites=true&w=majority&appName=TareasMERN";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
serverApi: {
version: ServerApiVersion.v1,
strict: true,
deprecationErrors: true,
}
});
async function run() {
try {
// Connect the client to the server (optional starting in v4.7)
await client.connect();
// Send a ping to confirm a successful connection
await client.db("admin").command({ ping: 1 });
console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
// Ensures that the client will close when you finish/error
await client.close();
}
}
run().catch(console.dir);

# Base de datos local

mongodb://localhost/mern-crud-auth
