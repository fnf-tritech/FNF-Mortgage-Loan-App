import React from 'react';

import Chart from 'react-apexcharts';

const PieChartComponent = ({ data }) => {
  // Define the data for the pie chart

  const pieData = [
    { name: 'Principal', value: data.loanAmount },

    {
      name: 'Interest',
      value: data.monthlyPayment * data.loanTerm * 12 - data.loanAmount,
    },
  ];

  // Define the options for the pie chart

  const pieOptions = {
    series: pieData.map((item) => item.value),

    labels: pieData.map((item) => item.name),

    chart: {
      type: 'pie',

      width: '100%',

      height: '100%',
    },

    legend: {
      show: true,

      position: 'bottom',
    },

    tooltip: {
      y: {
        formatter: (value) => `$${value}`,
      },
    },
  };

  return (
    <div>      
      <Chart options={pieOptions} series={pieOptions.series} type='pie' />
    </div>
  );
};

export default PieChartComponent;
