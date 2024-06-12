<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="creators-data">
          <h1>Creator Details</h1>
          <div v-if="filteredDetailData.length > 0">
            <div v-for="(creator, index) in filteredDetailData" :key="index" class="creator">
              <img src="/man.png" alt="Creator Thumbnail" class="creator-thumbnail">
              <div class="creator-details">
                <h2>Data Reference: {{ creator.dataRef }}</h2>
                <template v-if="creator.platforms && creator.platforms.ig">
                  <p>Instagram:</p>
                  <ul>
                    <li v-for="(data, startDate) in creator.platforms.ig" :key="startDate">
                      {{ formatDate(startDate) }}:
                      <ul>
                        <li>Avg Likes: {{ data.avgLikes }}</li>
                        <li>Avg Comments: {{ data.avgComments }}</li>
                        <li>Avg Reach: {{ data.avgReach }}</li>
                        <li>Avg Shares: {{ data.avgShares }}</li>
                        <li>Comments: {{ data.comments }}</li>
                        <li>Engagement Rate: {{ data.engagementRate }}</li>
                        <li>Followers Count: {{ data.followersCount }}</li>
                        <li>Likes: {{ data.likes }}</li>
                        <li>Profile Views: {{ data.profileViews }}</li>
                        <li>Reach: {{ data.reach }}</li>
                        <li>Shares: {{ data.shares }}</li>
                      </ul>
                    </li>
                  </ul>
                </template>
                <template v-if="creator.platforms && creator.platforms.tt">
                  <p>TikTok:</p>
                  <ul>
                    <li v-for="(data, startDate) in creator.platforms.tt" :key="startDate">
                      {{ formatDate(startDate) }}:
                      <ul>
                        <li>Avg Likes: {{ data.avgLikes }}</li>
                        <li>Avg Comments: {{ data.avgComments }}</li>
                        <li>Avg Reach: {{ data.avgReach }}</li>
                        <li>Avg Shares: {{ data.avgShares }}</li>
                        <li>Comments: {{ data.comments }}</li>
                        <li>Engagement Rate: {{ data.engagementRate }}</li>
                        <li>Followers Count: {{ data.followersCount }}</li>
                        <li>Likes: {{ data.likes }}</li>
                        <li>Profile Views: {{ data.profileViews }}</li>
                        <li>Reach: {{ data.reach }}</li>
                        <li>Shares: {{ data.shares }}</li>
                      </ul>
                    </li>
                  </ul>
                </template>
                <template v-if="creator.platforms && creator.platforms.fb">
                  <p>Facebook:</p>
                  <ul>
                    <li v-for="(data, startDate) in creator.platforms.fb" :key="startDate">
                      {{ formatDate(startDate) }}:
                      <ul>
                        <li>Avg Likes: {{ data.avgLikes }}</li>
                        <li>Avg Comments: {{ data.avgComments }}</li>
                        <li>Avg Reach: {{ data.avgReach }}</li>
                        <li>Avg Shares: {{ data.avgShares }}</li>
                        <li>Comments: {{ data.comments }}</li>
                        <li>Engagement Rate: {{ data.engagementRate }}</li>
                        <li>Followers Count: {{ data.followersCount }}</li>
                        <li>Likes: {{ data.likes }}</li>
                        <li>Profile Views: {{ data.profileViews }}</li>
                        <li>Reach: {{ data.reach }}</li>
                        <li>Shares: {{ data.shares }}</li>
                      </ul>
                    </li>
                  </ul>
                </template>
                <CreatorBarChart :data="creator.platforms.ig" platform="Instagram" v-if="creator.platforms && creator.platforms.ig" />
                <CreatorBarChart :data="creator.platforms.tt" platform="TikTok" v-if="creator.platforms && creator.platforms.tt" />
                <CreatorBarChart :data="creator.platforms.fb" platform="Facebook" v-if="creator.platforms && creator.platforms.fb" />
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
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import { getDetail } from '@/api/getDetail';
import CreatorBarChart from '@/components/CreatorBarChart.vue';

export default {
  components: {
    Sidebar,
    CreatorBarChart
  },
  data() {
    return {
      detailData: [],
      filteredDetailData: []
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
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style scoped>
/* Existing styles */
.wrapper {
    max-width: 95%;
    margin: 0 auto;
}

.container {
    display: flex;
    flex-direction: row;
}

.sidebar {
    flex: 1;
}

.creator {
    display: flex;
    flex-direction: column; /* Adjusted for better alignment of chart and creator details */
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.creator-thumbnail {
    margin-bottom: 10px; /* Adjusted to provide spacing between image and chart */
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.creator-details {
    flex: 1;
    width: 100%; /* Ensures the chart takes full width of its container */
}

.creator-details h2 {
    margin-bottom: 10px;
}

p {
    margin: 0;
    font-weight: bold;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul ul {
    padding-left: 20px;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }

    .creator {
        margin-bottom: 30px; /* Increased margin for better separation between creators */
    }

    .creator-thumbnail {
        margin: 0 auto 10px auto;
    }
}
</style>

  
  
