# Consultas a FakeStore API

Este proyecto permite realizar consultas a la [FakeStore API](https://fakestoreapi.com/) utilizando los verbos **GET**, **POST** y **DELETE**, incluyendo la posibilidad de obtener un producto específico por su identificador.  

Las consultas se realizan mediante comandos de npm:

## Obtener todos los productos
npm run start GET products

## Obtener un producto específico
npm run start GET products/id

## Crear un nuevo producto
npm run start POST products nombreProducto cantidadProducto categoriaProducto

## Eliminar un producto
npm run start DELETE products/id