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
      type: Object,
      required: true
    },
    platform: {
      type: String,
      required: true
    },
    selectedAttributes: {
      type: Array,
      required: true
    }
  },
  watch: {
    selectedAttributes() {
      this.renderChart(); // Re-render chart when selected attributes change
    }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chartCanvas.getContext('2d');

      // Extracting labels and data values
      const labels = Object.keys(this.data);
      const datasets = this.getDatasets();

      // Determine the label based on the platform
      const platformLabel = this.platform.charAt(0).toUpperCase() + this.platform.slice(1);

      const chartData = {
        labels: labels,
        datasets: datasets
      };

      if (this.chart) {
        this.chart.destroy(); // Destroy the previous chart instance to avoid overlap
      }

      this.chart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            },
            title: {
              display: true,
              text: `${platformLabel} Performance Over Time`
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    },
    getDatasets() {
      const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FFCD56', '#C9CBCF'];
      return this.selectedAttributes.map((attribute, index) => {
        return {
          label: this.capitalize(attribute),
          data: Object.values(this.data).map(data => data[attribute]),
          borderColor: colors[index % colors.length],
          fill: false
        };
      });
    },
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>


  