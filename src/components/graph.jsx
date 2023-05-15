import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Budget', // Título del gráfico
      font: {
        size: 22,
      },
      padding: {
        top: 20,
        bottom: 0,
      },
    },
    legend: {
      position: 'right', // Posición de la leyenda
    },
  },
};

const Graph = ({ data }) => {
  const chartData = {
    labels: ['General', 'Medic', 'Pets', 'Car', 'Leisure', 'Unexpected'],
    datasets: [
      {
        label: 'Usd',
        data: data,
        backgroundColor: ['rgba(0, 34, 255, 0.81)', 'rgba(255, 141, 0, 0.88)', 'rgba(182, 179, 174, 0.88)', 'rgba(253, 255, 68, 0.88)', 'rgba(68, 171, 255, 0.88)', 'rgba(19, 207, 0, 0.88)'],
        borderColor: ['white', 'white', 'white', 'white', 'white', 'white'],
        borderWidth: 4,
      },
    ],
  };

  return <Pie data={chartData} options={options} />;
};

export default Graph;
