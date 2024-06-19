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
        <table v-else-if="contentCreatorData.length > 0" class="styled-table">
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
                  :to="{ name: 'creator', params: { dataRef: creator.dataRef, name: creator.name, image: creator.image } }"
                  class="creator-link"
                >
                  <img :src="creator.image" alt="creator image" class="creator-image" />
                  <div class="creator-name">{{ creator.name }}</div>
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
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.container {
  display: flex;
  flex-grow: 1;
  flex-direction: row;
}

.sidebar {
  flex: 0 0 10%;
  background-color: #f1f1f1;
  color: #f1f1f1;
}

.content {
  flex-grow: 1;
  background-color: #f1f6f9;
  color: #212a3e;
  padding: 20px;
  overflow-y: auto;
}

.sort-options {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  background-color: #f1f6f9;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgb(0, 0, 0,0.1);
}

.sort-options label {
  margin-right: 10px;
  font-weight: bold;
}

.sort-select {
  padding: 8px 12px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #fff;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s;
  position: relative;
}

.sort-select:hover {
  border-color: #408a7e;
}

.sort-select:focus {
  border-color: #408a7e;
  box-shadow: 0 0 0 2px rgba(64, 138, 126, 0.2);
}

/* Style the dropdown arrow */
.sort-select::after {
  content: '\25BE'; /* Unicode character for down arrow */
  font-size: 12px;
  color: #555;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

/* Style the dropdown options */
.sort-select select {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  height: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  z-index: 1; /* Ensure the options appear above other elements */
}

.sort-select select option {
  padding: 8px 12px;
  background-color: #fff; /* Background color of options */
  color: #333; /* Text color of options */
  font-family: Arial, sans-serif; /* Font family of options */
}

.sort-select select option:hover {
  background-color: #f1f1f1; /* Background color of options on hover */
}

.sort-select select option:checked {
  background-color: #408a7e; /* Background color of selected option */
  color: #fff; /* Text color of selected option */
}

.loading {
  text-align: center;
  font-size: 24px;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}

.styled-table thead tr {
  background-color: #408A7E;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.styled-table th, .styled-table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 18px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
  text-align: center;
  font-size: 20px;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:hover {
  background-color: #f1f1f1;
}

.creator-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}
.creator-link {
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit the text color */
}

.creator-link:hover {
  text-decoration: underline; /* Underline on hover */
  color:#408A7E
}
.creator-name{
  font-size: 18px;
  font-weight:500;
  margin-top: 10px;
}
</style>