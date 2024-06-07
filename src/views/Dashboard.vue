<template>
  <div class="wrapper">
    <div class="container">
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="content">
        <Navbar />
        <table v-if="contentCreatorData.length > 0">
          <thead>
            <tr>
              <th>Data Reference</th>
              <th>Instagram</th>
              <th>TikTok</th>
              <th>Facebook</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(creator, index) in contentCreatorData" :key="index">
              <td>{{ creator.dataRef }}</td>
              <td>{{ creator.platforms.ig }}</td>
              <td>{{ creator.platforms.tt }}</td>
              <td>{{ creator.platforms.fb }}</td>
            </tr>
          </tbody>
        </table>
        <p v-else>No content creators found.</p>
        <AllContentCreators />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Navbar from '../components/Navbar.vue';
import AllContentCreators from '../components/AllContentCreators.vue';
import { getContentCreator } from '@/api/getContentCreator';
import { onMounted } from 'vue';

export default {
  components: {
    Sidebar,
    Navbar,
    AllContentCreators
  },
  data() {
    return {
      contentCreatorData: []
    };
  },
  async created() {
    try {
      const response = await getContentCreator();
      if (response.data && Array.isArray(response.data)) {
        this.contentCreatorData = response.data.map(item => ({
          dataRef: item.dataRef,
          platforms: item.platforms
        }));
      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      console.error('Error fetching content creators:', error);
    }
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 95%;
  margin-inline: auto;
}
.container {
  display: flex;
  flex-direction: row;
}
.sidebar {
  flex: 1; /* Sidebar takes 1 part of the available space */
}
.content {
  position: relative;
  top: 0;
  right: 0;
  flex: 12; /* Content takes 12 parts of the available space */
  display: flex;
  flex-direction: column;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
