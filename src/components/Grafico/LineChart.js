import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Importa el plugin

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ChartDataLabels); // Registra el plugin

const tablaC = JSON.parse(localStorage.getItem('tablaComp')) || [];
const datos = JSON.parse(localStorage.getItem('datos')) || [];

console.log(tablaC);

let costo = [];
let trabajadores = ["2 Trabajadores", "3 Trabajadores", "4 Trabajadores", "5 Trabajadores", "6 Trabajadores"];

tablaC.forEach((e) => {
    costo.push(e.costTotal);
});

var midata = {
    labels: trabajadores,
    datasets: [
        {
            label: 'Costo Total',
            data: costo,
            tension: 0.5,
            fill: true,
            borderColor: 'rgb(255, 100, 130)',
            backgroundColor: 'rgba(255, 99, 130, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
    ],
};

var misoptions = {
    scales: {
        y: {
            min: 0
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)' }
        }
    },
    plugins: {
        // Configura el plugin para mostrar las etiquetas de datos en los puntos
        datalabels: {
            display: true,
            color: 'black', // Puedes cambiar el color del texto de las etiquetas
            formatter: function(value) {
                // Agrega saltos de línea (\n) o espacios para mover visualmente los datos hacia arriba
                return '\n\n' + value.toFixed(2) + `${datos[0].tipoDeCambio ==2 ?" Bs":" $U$"}`;
            },
        }
    }
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions} />;
}
