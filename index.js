const express = require("express");
const app = express();

// Configurar el motor de plantillas ejs
app.set("view engine", "ejs");

// Ruta principal
app.get("/", (req, res) => {
  res.render("index", {
    productos: [],
    clientes: [],
  });
});

// Ruta de clientes
app.get("/clientes", (req, res) => {
  const clientes = [
    { id: 1, nombre: "Cliente 1", correo: "cliente1@example.com" },
    { id: 2, nombre: "Cliente 2", correo: "cliente2@example.com" },
    { id: 3, nombre: "Cliente 3", correo: "cliente3@example.com" },
  ];
  res.render("index", {
    productos: [],
    clientes: clientes,
  });
});

// Ruta de productos
app.get("/productos", (req, res) => {
  const productos = [
    { id: 1, nombre: "Producto 1", precio: 10 },
    { id: 2, nombre: "Producto 2", precio: 20 },
    { id: 3, nombre: "Producto 3", precio: 30 },
  ];
  res.render("index", {
    productos: productos,
    clientes: [],
  });
});

// Iniciar el servidor en el puerto 3000
app.listen(5000, () => {
  console.log("Servidor iniciado en el puerto 5000");
});
