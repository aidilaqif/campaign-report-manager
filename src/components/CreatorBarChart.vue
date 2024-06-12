<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    platform: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chartCanvas.getContext('2d');

      // Extracting labels and data values
      const labels = this.data.map((item, index) => `Entry ${index + 0}`);
      const values = this.data.map(item => item.avgLikes);

      // Determine the label based on the platform
      const platformLabel = this.platform.charAt(0).toUpperCase() + this.platform.slice(1);

      const chartData = {
        labels: labels,
        datasets: [{
          label: `${platformLabel} Average Likes`,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: values
        }]
      };

      new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
};
</script>

  