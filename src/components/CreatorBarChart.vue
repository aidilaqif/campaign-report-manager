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
      const values = this.data.map(item => item.followersCount);

      // Determine the label and color based on the platform
      const platformLabel = this.platform.charAt(0).toUpperCase() + this.platform.slice(1);

      let backgroundColor, borderColor;
      if (this.platform.toLowerCase() === 'instagram') {
        backgroundColor = 'rgba(255, 99, 132, 0.2)'; // Red
        borderColor = 'rgba(255, 99, 132, 1)';
      } else if (this.platform.toLowerCase() === 'tiktok') {
        backgroundColor = 'rgba(0, 0, 0, 0.2)'; // Grey
        borderColor = 'rgba(0, 0, 0, 1)';
      } else if (this.platform.toLowerCase() === 'facebook') {
        backgroundColor = 'rgba(54, 162, 235, 0.2)'; // Blue
        borderColor = 'rgba(54, 162, 235, 1)';
      }

      const chartData = {
        labels: labels,
        datasets: [{
          label: `${platformLabel} Followers`,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
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