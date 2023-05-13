import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Movement Summary', // Título del gráfico
      font: {
        size: 22,
      },
      legend: {
        position: 'top',
      },
      padding: {
        top: 20,
        bottom: 0,
      },
    },
  },
};

const GraphBar = ({ data }) => {
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

  return <Bar data={chartData} options={options} />;
};

export default GraphBar;
