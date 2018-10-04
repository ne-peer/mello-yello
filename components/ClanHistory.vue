<template>
  <div class="chart-wrap">
    <no-ssr>
      <line-chart v-if="showLine" :data="lineData" :options="options" uk-tooltip="title: グラフをタップして詳細を確認"></line-chart>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLine: true,
      lineData: {
        labels: ["3月", "4月", "5月", "6月", "7月", "8月", "9月"],
        datasets: [
          {
            label: "総ダメージ",
            data: [12512937, 44816863, 63819535, 107432030, 161533666, 327817745, 452078196],
            borderColor: "rgba(255,214,0,1)",
            backgroundColor: "rgba(255,214,0,0.2)",
            pointRadius: [7, 7, 7, 7, 7, 7, 7],
            pointHitRadius: [7, 7, 7, 7, 7, 7, 7],
            pointHoverRadius: [7, 7, 7, 7, 7, 7, 7],
            yAxisID: "y-axis-1"
          },
          {
            label: "人数",
            data: [8, 8, 18, 19, 20, 23, 24],
            borderColor: "rgba(250,112,154,0.8)",
            backgroundColor: "rgba(0,0,0,0)",
            lineTension: 0,
            pointRadius: [7, 7, 7, 7, 7, 7, 7],
            pointHitRadius: [7, 7, 7, 7, 7, 7, 7],
            pointHoverRadius: [7, 7, 7, 7, 7, 7, 7],
            yAxisID: "y-axis-2"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              id: "y-axis-1",
              type: "linear",
              position: "left",
              ticks: {
                max: 480000000,
                min: 0,
                stepSize: 20000000,
                callback: function(value, index, values) {
                    return (value / 1000000) + 'M';
                }
              }
            },
            {
              id: "y-axis-2",
              type: "linear",
              position: "right",
              ticks: {
                max: 30,
                min: 0,
                stepSize: 10
              }
            }
          ]
        }
      }
    };
  }
};
</script>

<style scoped>
.chart-wrap {
  max-height: 400px;
}

.desc {
  font-size: 10px;
  color: #aaa;
}
</style>
