import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const tablaC = JSON.parse(localStorage.getItem('tablaComp')) || [];
console.log(tablaC);

let costo = [];
let trabajadores = ["2 Trabajadores","3 Trabajadores","4 Trabajadores","5 Trabajadores","6 Trabajadores"];

tablaC.map((e)=>{
    costo.push(e.costTotal)
})

var midata = {
    labels: trabajadores,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Costo Total',
            data: costo,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 100, 130)',
            backgroundColor: 'rgba(255, 99, 130, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
        // {
        //     label: 'Otra línea',
        //     data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25]
        // },
    ],
};

var misoptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
        }
    }
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions}/>
}