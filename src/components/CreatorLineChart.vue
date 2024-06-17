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
<<<<<<< Updated upstream
        type: Array,
=======
        type: Object,
>>>>>>> Stashed changes
        required: true
      },
      platform: {
        type: String,
        required: true
<<<<<<< Updated upstream
=======
      },
      selectedAttributes: {
        type: Array,
        required: true
      }
    },
    watch: {
      selectedAttributes() {
        this.renderChart(); // Re-render chart when selected attributes change
>>>>>>> Stashed changes
      }
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const ctx = this.$refs.chartCanvas.getContext('2d');
  
        // Extracting labels and data values
<<<<<<< Updated upstream
        const labels = this.data.map((item, index) => `Entry ${index + 0}`);
        const datasets = [
          {
            label: 'Average Likes',
            data: this.data.map(item => item.avgLikes),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true
          },
          {
            label: 'Average Comments',
            data: this.data.map(item => item.avgComments),
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true
          },
          {
            label: 'Average Reach',
            data: this.data.map(item => item.avgReach),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true
          },
          {
            label: 'Average Shares',
            data: this.data.map(item => item.avgShares),
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: true
          },
          {
            label: 'Comments',
            data: this.data.map(item => item.comments),
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            fill: true
          },
          {
            label: 'Engagement Rate',
            data: this.data.map(item => item.engagementRate),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true
          },
          {
            label: 'Followers Count',
            data: this.data.map(item => item.followersCount),
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: true
          },
          {
            label: 'Likes',
            data: this.data.map(item => item.likes),
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            fill: true
          },
          {
            label: 'Profile Views',
            data: this.data.map(item => item.profileViews),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true
          },
          {
            label: 'Reach',
            data: this.data.map(item => item.reach),
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true
          },
          {
            label: 'Shares',
            data: this.data.map(item => item.shares),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true
          }
        ];
  
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: datasets
          },
          options: {
            responsive: true,
=======
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
>>>>>>> Stashed changes
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
      }
    }
  };
  </script>
<<<<<<< Updated upstream
=======
  
  <style scoped>
  /* Add any necessary styling here */
  </style>
>>>>>>> Stashed changes
  