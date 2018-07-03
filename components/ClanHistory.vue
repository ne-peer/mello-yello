<template>
  <div>
    <h3>below the history</h3>
    <no-ssr>
      <line-chart v-if="showLine" :data="lineData" :options="options"></line-chart>
    </no-ssr>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showLine: true,
      lineData: {
        labels: ["3月", "4月", "5月", "6月"],
        datasets: [
          {
            label: "Total damage deal",
            data: [12512937, 44816863, 63819535, 107432030],
            borderColor: "rgba(255,214,0,1)",
            backgroundColor: "rgba(255,214,0,0.2)",
            yAxisID: "y-axis-1"
          },
          {
            label: "Number of members",
            data: [8, 8, 18, 19],
            borderColor: "rgba(250,112,154,0.8)",
            backgroundColor: "rgba(0,0,0,0)",
            lineTension: 0,
            yAxisID: "y-axis-2"
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [
            {
              id: "y-axis-1",
              type: "linear",
              position: "left",
              ticks: {
                max: 120000000,
                min: 0,
                stepSize: 20000000
              }
            },
            {
              id: "y-axis-2",
              type: "linear",
              position: "right",
              ticks: {
                max: 30,
                min: 0,
                stepSize: 15
              }
            }
          ]
        }
      }
    };
  }
};
</script>
