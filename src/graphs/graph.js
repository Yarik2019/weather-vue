const grapChartLine = (Chart, ctx, max, min ,hours, temp) => {
  const data = {
    labels: hours,
    datasets: [
      {
        label: "Looping tension",
        data: temp,
        // color:'#fff', 
        fillColor: "red",
        backgroundColor: "#9BD0F5",
        borderColor: "rgba(255, 255, 255, 0.55)",
      },
    ],
  };
  Chart.defaults.color = "#fff";

  const myChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          // defining min and max so hiding the dataset does not change scale range
          min: min,
          max: max,
        },
      },
    },
  });

  return myChart;
};

export {grapChartLine};