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
              <td>
                <RouterLink :to="{ name: 'creator', params: { dataRef: creator.dataRef } }">
                  {{ creator.dataRef }}
                </RouterLink>
              </td>
              <td>{{ creator.platforms.ig }}</td>
              <td>{{ creator.platforms.tt }}</td>
              <td>{{ creator.platforms.fb }}</td>
            </tr>
          </tbody>
        </table>
        <p v-else>No content creators found.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Navbar from '../components/Navbar.vue';
import { getContentCreator } from '@/api/getContentCreator';

export default {
  components: {
    Sidebar,
    Navbar
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
  }
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
  flex: 1;
}
.content {
  position: relative;
  top: 0;
  right: 0;
  flex: 6;
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
  padding: 15px;
}

th {
  background-color: #f2f2f2;
}

tbody tr {
  cursor: pointer;
  transition: background-color 0.3s;
}

tbody tr:hover {
  background-color: #f9f9f9;
}

RouterLink {
  text-decoration: none;
  color: inherit;
  display: block;
}

RouterLink:hover {
  text-decoration: underline;
}
</style>
