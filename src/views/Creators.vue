<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="creators-data">
          <h1>Creator Details</h1>
          <div class="button-container">
  <button @click="toggleDropdown" class="dropdown-toggle">
    {{ showDropdown ? 'Hide Attributes to Display' : 'Show Attributes to Display' }}
  </button>
  <button @click="downloadPDF" class="download-button">Download as PDF</button>
</div>

<div v-if="showDropdown" class="dropdown-menu">
  <select id="attributes" v-model="selectedAttributes" multiple size="10">
    <option v-for="attribute in attributes" :key="attribute" :value="attribute">{{ capitalize(attribute) }}</option>
  </select>
</div>

          <br>
          <br>
          <div id="pdf-content">
            <div v-if="filteredDetailData.length > 0">
              <div v-for="(creator, index) in filteredDetailData" :key="index" class="creator">
                <h2>
                  <img :src="creator.image" alt="Creator Thumbnail" class="creator-thumbnail">
                  Name: {{ creator.name }}
                </h2>
                <div class="creator-details">
                  <h3>Analytic Report</h3>
                  <br>
                  <br>
                  <div v-if="creator.platforms" class="charts-row">
                    <div v-if="creator.platforms.ig" class="chart-container">
                      <!-- <CreatorBarChart :data="creator.platforms.ig" :dates="dates" platform="Instagram" /> -->
                      <CreatorLineChart :data="creator.platforms.ig" :dates="dates"
                        :selected-attributes="selectedAttributes" platform="Instagram" />
                    </div>
                    <div v-if="creator.platforms.tt" class="chart-container">
                      <!-- <CreatorBarChart :data="creator.platforms.tt" :dates="dates" platform="TikTok" /> -->
                      <CreatorLineChart :data="creator.platforms.tt" :dates="dates"
                        :selected-attributes="selectedAttributes" platform="TikTok" />
                    </div>
                    <div v-if="creator.platforms.fb" class="chart-container">
                      <!-- <CreatorBarChart :data="creator.platforms.fb" :dates="dates" platform="Facebook" /> -->
                      <CreatorLineChart :data="creator.platforms.fb" :dates="dates"
                        :selected-attributes="selectedAttributes" platform="Facebook" />
                    </div>
                  </div>
                  <h3>Data Matrix</h3>
                  <div v-if="creator.platforms">
                    <div v-for="(platformData, platform) in creator.platforms" :key="platform">
                      <h4>{{ platformMap[platform] }}</h4>
                      <table class="platform-table">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Average Likes</th>
                            <th>Likes</th>
                            <th>Profile Views</th>
                            <th>Followers Count</th>
                            <th>Average Shares</th>
                            <th>Reach</th>
                            <th>Average Reach</th>
                            <th>Comments</th>
                            <th>Engagement Rate</th>
                            <th>Average Comments</th>
                            <th>Shares</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(data, date) in platformData" :key="date">
                            <td>{{ formatDisplayDate(data.dataRef) }}</td>
                            <td v-for="(value, attribute) in filteredData(data)" :key="attribute">
                              {{ value }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
      showDropdown: false, // Controls the visibility of the dropdown menu
      platformMap: {
        ig: 'Instagram',
        tt: 'TikTok',
        fb: 'Facebook'
      }, // Mapping platform keys to display names
      dates: [ // List of dates
        "January 2022", "20220201", "20220301", "20220401", "20220501",
        "20220601", "20220701", "20220801", "20220901", "20221001",
        "20221101", "20221201", "20230101", "20230201", "20230301",
        "20230401", "20230501", "20230601", "20230701", "20230801",
        "20230901", "20231001", "20231101", "20231201", "20240101",
        "20240201", "20240301", "20240401", "20240501"
      ]
    };
  },
  async created() {
    const dataRef = this.$route.params.dataRef;
    console.log('Data Reference:', dataRef); // Check the dataRef in console

    try {
      const response = await getDetail(); // Adjust this function to match your API call for a single creator
      console.log('API Response:', response); // Check the response from the API

      if (response.data && Array.isArray(response.data)) {
        const creators = [
          { name: 'Khairul Amin', image: 'https://risemalaysia.com.my/wp-content/uploads/2023/04/Feature-Image-Nisa.png' },
          { name: 'Alif Satar', image: 'https://assets.nst.com.my/images/articles/thealfi_1537274133.jpg' },
          { name: 'Azfar Heri', image: 'https://iluminasi.com/img/upload/azfar-heri-youtube.jpg' },
          { name: 'Mira Filzah', image: 'https://i.pinimg.com/originals/27/8d/9c/278d9c6316188a816caa69e639dd17a8.jpg' },
          { name: 'Neelofa', image: 'https://i.pinimg.com/736x/20/28/a9/2028a9c1023915d74cfb8955cb665965.jpg' },
          { name: 'Zizan Razak', image: 'https://th.bing.com/th/id/OIP.t8JkTC9GMEC58rwiK6iwyAAAAA?rs=1&pid=ImgDetMain' },
          { name: 'Ebit Lew', image: 'https://yt3.ggpht.com/a-/AAuE7mAglM8gZ8yFS64nrcHQ8fqn8sgBgf8_rRZilQ=s900-mo-c-c0xffffffff-rj-k-no' },
          { name: 'Hanis Zalikha', image: 'https://images.mubicdn.net/images/cast_member/875080/cache-666548-1620178068/image-w856.jpg?size=800x' },
          { name: 'Syafiq Kyle', image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3WjbYMbX09ExkJHCa2864tTsWhF.jpg' },
          { name: 'Meerqeen', image: 'https://i.pinimg.com/736x/74/15/56/74155672928a5a04e1a107f9bcc3b99a.jpg' },
          { name: 'Mohamad Sofian', image: 'https://iluminasi.com/img/upload/biodata-sofyank.jpg' },
          { name: 'Hairul Azreen', image: 'https://images.augustman.com/wp-content/uploads/sites/3/2022/12/08172821/AM-MOTY-Hairul-Azreen-1.jpg' },
          { name: 'Janna Nick', image: 'https://i.pinimg.com/originals/da/24/3c/da243c4daab568fb397d55c1c5d4b1c9.jpg' },
          { name: 'Aeril Zafrel', image: 'https://iluminasi.com/img/upload/biodata-aeril-zafrel-pelakon-drama-cari-aku-di-syurga-4.jpg' },
          { name: 'Siti Nurhaliza', image: 'https://assets.nst.com.my/images/articles/SITI_NURHALIZA_1536319160.jpg' },
          { name: 'Ustaz Adnin', image: 'https://i.pinimg.com/originals/e9/24/84/e92484acb046689d3e94ce36713949ba.jpg' },
          { name: 'Cik B', image: 'https://th.bing.com/th/id/R.7fbebe694cb08de0d4679a48f0d8b6f5?rik=aECTsZ90thw0DA&riu=http%3a%2f%2friverbed.me%2fwp-content%2fuploads%2f2019%2f10%2f71521600_161264318292855_4487585964446914305_n.jpg&ehk=k5ucao4rwRVBIwW2TuYRP7r3nQPQ60yZq35jLEsk8lE%3d&risl=&pid=ImgRaw&r=0' },
          { name: 'Amir Ahnaff', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjfJQ0MuanedjwHVP5K4Gk1jTFP8-5L6bWxlB6QzPD0VfnVsWpJlk9dRI3vbMZtilFBT_R8mCWs1oV015_Wqq3d1lRFF9XTqZxY96cH8N8TYPB3pxQ6N9H0Yr-IL24pYTWNF5Jf7j04P4ofUNrCcHrx428DvMyxmulfdCaEdEgNCoSiz0xy51wTHWOuA/s1080/IMG_20230129_210236.jpg' },
          { name: 'Syahmi Sazli', image: 'https://yt3.ggpht.com/-r4mBaNSTzeY/AAAAAAAAAAI/AAAAAAAAAAA/wKwfS77AZWk/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' },
          { name: 'Zul Ariffin', image: 'https://4.bp.blogspot.com/-3AT60x3lghk/WcpIDA4BWQI/AAAAAAAAQz0/jQPs2Mb2RS4dpVmlYwT2MMGdOCRIMTStQCLcBGAs/s640/Biodata-zul-ariffin-pelakon.jpg' },
        ];
        this.detailData = response.data.map((item, index) => ({
          dataRef: item.dataRef,
          platforms: item.platforms,
          name: creators[index].name,
          image: creators[index].image
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
    filteredData(data) {
      const { dataRef, ...filtered } = data;
      return filtered;
    },
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    // formatDate(date) {
    //   // Assuming date format is YYYYMMDD
    //   const year = date.substr(0, 4);
    //   const month = date.substr(4, 2);
    //   const formattedDate = new Date(year, month - 1).toLocaleString('en-us', { month: 'long', year: 'numeric' });
    //   return formattedDate;
    // },
    formatDate(date) {
      // Check if date is not a string
      if (typeof date !== 'string') {
        return 'Invalid Date';
      }

      // Check if date format is not YYYYMMDD
      if (date.length !== 8) {
        return 'Invalid Date Format';
      }

      // const year = date.substr(0, 4);
      // const month = date.substr(4, 2);
      const formattedDate = new Date(year, month - 1).toLocaleString('en-us', { month: 'long', year: 'numeric' });
      return formattedDate;
    },
    formatDisplayDate(date) {
      if (date.substr(-2) === '01') {
        return date.slice(0, -2);
      }
      return date;
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
  /* flex: 50%; */
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 10px;
}

.creator {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.creator-thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-right: 20px;
}
.creator h2 {
  display: flex;
  align-items:center;
  font-size: 24px;
}

.creator-details {
  margin-left: 20px;
}

.download-button {
  padding: 10px 20px;
  background-color: #408a7e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.download-button:hover {
  background-color: #45a049;
  transition: background-color 0.3s ease;

}

.dropdown-toggle {
  padding: 10px;
  background-color: #408a7e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  position: relative;
  z-index: 1;
}

.dropdown-toggle:hover {
  background-color: #0056b3;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px; /* Adjust as needed */
}

.dropdown-menu {
  margin-top: 10px;
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 2;
  border-radius: 5px;
  padding: 10px;
}

.dropdown-menu.active {
  display: block;
}

.dropdown-menu select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px;
}

.dropdown-menu select:focus {
  outline: none;
  border-color: #007BFF;
}

.dropdown-menu option {
  padding: 10px;
  font-size: 14px;
  text-align: center;
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
  margin-top: 20px;
}

.chart-container {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.platform-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.platform-table th,
.platform-table td {
  border: 1px solid #ddd;
  text-align: center;
  padding: 8px;
}

.platform-table th {
  background-color: #2980b9;
  color: white;
  font-weight: bold;
}

.platform-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.platform-table tr:hover {
  background-color: #ddd;
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
