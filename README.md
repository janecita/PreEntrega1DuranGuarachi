# Ecommerce Company
## _Proyecto e-commerce de una tienda de ropa y articulos._
> Proyecto final E-commerce, Curso React-Js de [CoderHouse](https://www.coderhouse.com/). Año 2022 

## Contenido
- Este proyecto (actuanmente en desarrollo) tiene una única rama, main.
- Incompleto para comercializar.

## Objetivos y Características

> El objetivo del proyecto es crear una Tienda  E-commerce  (un sistema de venta de productos con gestión de 
> su base de datos a través de Firebase), en una single-page application (SPA), o aplicación de página única. 
>Donde se puede navegar por los distintos productos (también sobre sus categorías)
>e ir a sus detalles. Desde el detalle se puede ver la descripción, foto y precio del producto y permite 
>agregarlos al carrito. También se pueden ver y finalizar la compra de
>los elementos cargados al mismo a través del llenado de un formulario de compra. Y finaliza guardando la orden
>de compra (con todos sus productos más la fecha de compra) en una base de datos del proyecto, alojada en Firebase.


## Tenología

Este proyecto se está desarrolando en React-Js:

- [React-Js](https://create-react-app.dev/) - La App fue creada con Create React App
- Utiliza una serie de librerías externas (detalladas en Complementos).

## Instalación

Ecommerce Company requiere [Node.js](https://nodejs.org/en/) para ejecutarse.

Instale las dependencias y devDependencies e inicie el servidor.

```sh
$ cd PreEntrega1DuranGuarachi
$ npm install

```

Para clonar este repositorio debe seguir las siguientes instrucciones:

1 - Abre el Visual Studio Code

2 - Cambia el directorio de trabajo actual a la ubicación en donde quieres clonar el directorio.

3 - Escribe `git clone` y luego pega la siguiente URL `https://github.com/janecita/PreEntrega1DuranGuarachi.git`

4 - Presiona `Enter` para crear tu clon local.

Por mayor información: `https://github.com/janecita/PreEntrega1DuranGuarachi.git`

## Complementos

Una vez clonado el repositorio, para que el proyecto se ejecute correctamente, se deben instalar las  librerias:

npm install
```

## Ejecución

Para ejecutar este proyecto simplemente escriba y ejecute en su consola de Visual Studio Code:

```sh
npm start
```
>Esto hará que la aplicación se ejecute en modo de desarrollo.
>Abra http: // localhost: 3000 para verlo en el navegador.


## Estado del Proyecto

Actualmente cuenta con los siguientes Componentes: 
- `HomeContainer` : componente de bienvenida.
- `MyNavBar` : barra de navegación.
- `ItemListContainer` : En donde mostramos el catálogo, en conjunción con los compomentes `ItemList` e `Item`.
- `ItemDetailContainer` : Para mostrar la información del item seleccionado, en  dónde ingresaremos la cantidad y nos permite la opción de agregar al carrito `ItemCount`.
- `CardWidget` : componente para mostrar en la barra de navación la cantidad de productos seleccionados (en desarrollo).
- `getFirestone` : componente que nos vincula y permite la configuración de la base de datos con Firebase.
- `Cart` : nos devuelve el listado de los productos agregados al carrito , indicando el detalle y total del mismo. Tambien da la opción de Generar la orden de compra, a través del llenado del formulario de compra `Checkout`.
- `CartContext` : Manejo de contexto que contiene todas las funcionalidades asociadas al carrito de compras.



## Avance del Proyecto

Vista del proyecto en ejecución:

Inicio
![home](https://raw.githubusercontent.com/janecita/PreEntrega1DuranGuarachi/main/public/imgProyecto/home.png?raw=true)


Productos
![productos](https://raw.githubusercontent.com/janecita/PreEntrega1DuranGuarachi/main/public/imgProyecto/productos.png?raw=true)


Categorias:
![categorias](https://raw.githubusercontent.com/janecita/PreEntrega1DuranGuarachi/main/public/imgProyecto/categorias.png?raw=true)


Detalle de Item:
![item](https://raw.githubusercontent.com/janecita/PreEntrega1DuranGuarachi/main/public/imgProyecto/item.png?raw=true)


Carrito Compra:
![carrito](https://raw.githubusercontent.com/janecita/PreEntrega1DuranGuarachi/main/public/imgProyecto/carrito.png?raw=true)


Checkout de la Compra:
![checkout](https://raw.githubusercontent.com/janecita/PreEntrega1DuranGuarachi/main/public/imgProyecto/checkout.png?raw=true)


## Licencia

Janeth Duran Guarachi

**Software Libre!!!**
