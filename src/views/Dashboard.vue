<template>
  <div class="wrapper">
    <div class="container">
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="content">
        <Navbar />
        <div class="sort-options">
          <label for="sortCriteria">Sort by:</label>
          <select id="sortCriteria" v-model="sortCriteria" @change="sortContentCreators">
            <option value="name">Name (A-Z)</option>
            <option value="ig">Instagram Followers</option>
            <option value="tt">TikTok Followers</option>
            <option value="fb">Facebook Followers</option>
          </select>
        </div>
        <div v-if="loading" class="loading">Loading...</div>
        <table v-else-if="contentCreatorData.length > 0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Instagram</th>
              <th>TikTok</th>
              <th>Facebook</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(creator, index) in contentCreatorData" :key="index">
              <td>
                <RouterLink
                  :to="{ name: 'creator', params: { dataRef: creator.dataRef, name: creator.name, image: creator.image } }">
                  <img :src="creator.image" alt="creator image" class="creator-image" />
                  <div>{{ creator.name }}</div>
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
      contentCreatorData: [],
      sortCriteria: 'name',
      loading: true
    };
  },
  async created() {
    try {
      const response = await getContentCreator();
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

        this.contentCreatorData = response.data.map((item, index) => ({
          dataRef: item.dataRef,
          platforms: item.platforms,
          name: creators[index].name,
          image: creators[index].image
        }));

        // Sort content creators by default criteria
        this.sortContentCreators();
      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      console.error('Error fetching content creators:', error);
    } finally {
      this.loading = false; // Update loading state
    }
  },
  methods: {
    sortContentCreators() {
      if (this.sortCriteria === 'name') {
        this.contentCreatorData.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortCriteria === 'ig') {
        this.contentCreatorData.sort((a, b) => b.platforms.ig - a.platforms.ig);
      } else if (this.sortCriteria === 'tt') {
        this.contentCreatorData.sort((a, b) => b.platforms.tt - a.platforms.tt);
      } else if (this.sortCriteria === 'fb') {
        this.contentCreatorData.sort((a, b) => b.platforms.fb - a.platforms.fb);
      }
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

.sort-options {
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.loading {
  margin-top: 20px;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
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

img.creator-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}

RouterLink {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

RouterLink:hover {
  text-decoration: underline;
}
</style>
