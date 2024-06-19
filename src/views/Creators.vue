<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="creators-data">
          <h1>Creator Details</h1>
          <button @click="downloadPDF" class="download-button">Download as PDF</button>
          <br>
          <br>
          <div id="pdf-content">
            <div v-if="filteredDetailData.length > 0">
              <div v-for="(creator, index) in filteredDetailData" :key="index" class="creator">
                <h2><img src="/man.png" alt="Creator Thumbnail" class="creator-thumbnail">Name : {{ creator.dataRef }}</h2>
                <div class="creator-details">
                  <!-- <h2>Data Reference: {{ creator.dataRef }}</h2> -->
                  <button @click="toggleDropdown" class="dropdown-toggle">
                    {{ showDropdown ? 'Hide Attributes to Display' : 'Show Attributes to Display' }}
                  </button>
                  <div v-if="showDropdown" class="dropdown-menu">
                    <select id="attributes" v-model="selectedAttributes" multiple size="10">
                      <option v-for="attribute in attributes" :key="attribute" :value="attribute">{{
                        capitalize(attribute) }}</option>
                    </select>
                  </div>
                  <br>
                  <br>
                  <div v-if="creator.platforms" class="charts-row">
                    <div v-if="creator.platforms.ig" class="chart-container">
                      <CreatorBarChart :data="creator.platforms.ig" platform="Instagram" />
                      <CreatorLineChart :data="creator.platforms.ig" :selected-attributes="selectedAttributes"
                        platform="Instagram" />
                    </div>
                    <div v-if="creator.platforms.tt" class="chart-container">
                      <CreatorBarChart :data="creator.platforms.tt" platform="TikTok" />
                      <CreatorLineChart :data="creator.platforms.tt" :selected-attributes="selectedAttributes"
                        platform="TikTok" />
                    </div>
                    <div v-if="creator.platforms.fb" class="chart-container">
                      <CreatorBarChart :data="creator.platforms.fb" platform="Facebook" />
                      <CreatorLineChart :data="creator.platforms.fb" :selected-attributes="selectedAttributes"
                        platform="Facebook" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <p>No data available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import { getDetail } from '@/api/getDetail';
import CreatorBarChart from '@/components/CreatorBarChart.vue';
import CreatorLineChart from '@/components/CreatorLineChart.vue';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default {
  components: {
    Sidebar,
    CreatorBarChart,
    CreatorLineChart
  },
  data() {
    return {
      detailData: [],
      filteredDetailData: [],
      selectedAttributes: ['avgLikes'], // Default selected attribute
      attributes: ['avgLikes', 'avgComments', 'avgReach', 'avgShares', 'comments', 'engagementRate', 'followersCount', 'likes', 'profileViews', 'reach', 'shares'], // List of all attributes
      showDropdown: false // Controls the visibility of the dropdown menu
    };
  },
  async created() {
    const dataRef = this.$route.params.dataRef;
    console.log('Data Reference:', dataRef); // Check the dataRef in console

    try {
      const response = await getDetail(); // Adjust this function to match your API call for a single creator
      console.log('API Response:', response); // Check the response from the API

      if (response.data && Array.isArray(response.data)) {
        this.detailData = response.data.map(item => ({
          dataRef: item.dataRef,
          platforms: item.platforms
        }));
        this.filterData(dataRef);
      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      console.error('Error fetching content creator:', error);
    }
  },
  methods: {
    filterData(dataRef) {
      this.filteredDetailData = this.detailData.filter(creator => creator.dataRef === dataRef);
    },
    formatDate(date) {
      if (typeof date !== 'string') {
        return date; // Return as-is if not a string
      }
      // Assuming date is in the format YYYYMMDD
      const year = date.slice(0, 4);
      const month = parseInt(date.slice(4, 6)) - 1;
      const day = date.slice(6, 8);

      // Array of month names
      const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

      return `${parseInt(day)} ${months[month]} ${year}`;
    },
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    async downloadPDF() {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const content = document.getElementById('pdf-content');

      const options = {
        scale: 2, // Increase scale for better resolution
        useCORS: true,
        logging: true,
        dpi: 300,
        letterRendering: true
      };

      await html2canvas(content, options).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        // Check if the content height exceeds the PDF height
        if (pdfHeight > pdf.internal.pageSize.getHeight()) {
          const pages = Math.ceil(pdfHeight / pdf.internal.pageSize.getHeight());
          for (let i = 1; i < pages; i++) {
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, -i * pdf.internal.pageSize.getHeight(), pdfWidth, pdfHeight);
          }
        }

        pdf.save('creator-details.pdf');
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
}

.sidebar {
  width: 20%;
  margin-right: 20px;
}

.creators-data {
  flex: 1;
}

.creator {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.creator-thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
}

.creator-details {
  margin-left: 20px;
}

.download-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.download-button:hover {
  background-color: #45a049;
}

.dropdown-toggle {
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.dropdown-toggle:hover {
  background-color: #0056b3;
}

.dropdown-menu {
  margin-top: 10px;
}

#attributes {
  width: 100%;
  height: auto;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

p,
li {
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}

/* New styles for chart layout */
.charts-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.chart-container {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media print {
  .container {
    width: 100%;
  }

  .sidebar {
    display: none;
  }

  .creators-data {
    width: 100%;
    margin: 0;
  }

  .creator {
    page-break-inside: avoid;
  }

  .download-button,
  .dropdown-toggle {
    display: none;
  }

  body {
    -webkit-print-color-adjust: exact;
  }
}
</style>
