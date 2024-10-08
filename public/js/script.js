// Función para obtener los datos de los sensores
async function fetchSensorData() {
    try {
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



window.onload = () => {
    fetchSensorData();
    setInterval(fetchSensorData, 1000);
}



