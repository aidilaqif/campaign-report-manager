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
  data() {
    return {
      chartColors: {}
    };
  },
  watch: {
    selectedAttributes() {
      this.renderChart(); // Re-render chart when selected attributes change
    }
  },
  mounted() {
    this.generateChartColors();
    this.renderChart();
  },
  methods: {
    generateChartColors() {
      const platforms = ['Instagram', 'TikTok', 'Facebook']; // List of platforms
      const colors = ['#FF6384', '#71797E', '#36A2EB' ]; // Colors for each platform

      platforms.forEach((platform, index) => {
        this.chartColors[platform] = colors[index];
      });
    },
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
      return this.selectedAttributes.map(attribute => {
        return {
          label: this.capitalize(attribute),
          data: Object.values(this.data).map(data => data[attribute]),
          borderColor: this.chartColors[this.platform], // Use color based on platform
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