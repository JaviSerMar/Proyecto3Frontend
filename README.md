# README del Frontend

Este proyecto incluye una interfaz web simple que muestra los datos de medición de sensores de CO2 y temperatura en tiempo real. Utiliza HTML, CSS y JavaScript para interactuar con la API del backend.

## Estructura de Archivos

El frontend está compuesto por los siguientes archivos:

- `index.html`: Archivo principal de la interfaz que presenta los datos de los sensores.
- `css/style.css`: Estilos para el diseño de la interfaz.
- `js/script.js`: Lógica de JavaScript para obtener y mostrar los datos de los sensores desde el servidor.

## Descripción de los Archivos

### `index.html`

Este archivo define la estructura de la página web. Contiene:

- Un encabezado que indica "Datos de Medición".
- Un contenedor para mostrar los valores y las fechas de las últimas mediciones de los sensores de CO2 y temperatura.

### `css/style.css`

Este archivo proporciona estilos para el documento HTML. Define:

- Estilos de fuente y espaciado.
- Un color de fondo claro y un contenedor para los datos del sensor con un efecto de sombra.



### `js/script.js`

Este archivo maneja la lógica de la aplicación. A continuación se detalla su funcionamiento:

1. **Función `fetchSensorData`:**
   - Realiza una solicitud GET a la API del backend en `http://localhost:13000/latest` para obtener los datos más recientes de los sensores.
   - Si la solicitud es exitosa, extrae los datos de CO2 y temperatura de la respuesta JSON.
   - Actualiza el contenido de los elementos HTML correspondientes con los valores de los sensores y sus marcas de tiempo. Si no hay datos disponibles, muestra "No data".

2. **Inicialización al cargar la ventana:**
   - La función se ejecuta automáticamente cuando se carga la ventana del navegador.
   - Se establece un intervalo que llama a `fetchSensorData` cada 1000 milisegundos (1 segundo) para actualizar los datos en tiempo real.

Este enfoque permite que la interfaz se mantenga actualizada con la información más reciente de los sensores, proporcionando una experiencia de usuario fluida y en tiempo real.



## Cómo Ejecutar el Frontend

1. Asegúrate de que el backend esté funcionando y accesible en `http://localhost:13000`.
2. Abre el archivo `index.html` en un navegador web.
3. Los datos de los sensores se mostrarán y se actualizarán automáticamente cada segundo.

## Requisitos

- Un navegador web moderno que soporte JavaScript y CSS.
- Conexión al servidor donde está alojado el backend.
