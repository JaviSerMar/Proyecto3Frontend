
/**
 * @brief Función para obtener los datos de los sensores desde el servidor.
 * 
 * Esta función realiza una solicitud GET a la API para obtener los datos más
 * recientes de los sensores de CO2 y temperatura. Luego, actualiza el contenido
 * del HTML con los valores obtenidos.
 * 
 * @async
 * @throws {Error} Si ocurre un error durante la solicitud fetch.
 */

// Función para obtener los datos de los sensores
async function fetchSensorData() {
    try {

        // Realiza una solicitud para obtener los datos de los sensores
        const response = await fetch('http://localhost:13000/latest');
        const data = await response.json();

        // Actualiza el HTML con los datos de CO2 y temperatura
        document.getElementById('valorOzono').textContent = data.co2 ? data.co2.value : 'No data'; // Cambia "ozono" a "co2"
        document.getElementById('ozonoTimestamp').textContent = data.co2 ? new Date(data.co2.timestamp).toLocaleString() : 'No data';
        document.getElementById('valorTemperatura').textContent = data.temperature ? data.temperature.value : 'No data'; // Asegúrate de mostrar los valores correctamente
        document.getElementById('temperatureTimestamp').textContent = data.temperature ? new Date(data.temperature.timestamp).toLocaleString() : 'No data';

    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}



/**
 * @brief Inicializa la obtención de datos de sensores al cargar la ventana.
 * 
 * Esta función se ejecuta cuando se carga la ventana del navegador. Llama a
 * la función `fetchSensorData()` para obtener los datos de sensores y 
 * establece un intervalo para actualizar los datos cada segundo.
 */
window.onload = () => {
    fetchSensorData();
    setInterval(fetchSensorData, 1000); // Actualiza los datos cada 1000 ms (1 segundo)
}



