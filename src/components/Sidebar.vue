<template>
  <div class="container">
    <div class="top">
      <div class="list">
        <RouterLink to="/">
          <div class="logo">
            <img src="/Icon.png" alt="logo" />
            <!-- <span>Social Pulse</span> -->
          </div>
        </RouterLink>
        <div class="item">
          <RouterLink :class="{ selected: selectedTab === 'Overview', active: activeTab === 'Overview' }"
            @click="selectTab('Overview')" to="/">
            <img src="/overview.svg" alt="Overview">
            <p><span>Overview</span></p>
          </RouterLink>
        </div>
        <div class="item">
          <a @click.prevent="handleFacebookClick" href="#">
            <img src="/facebook.svg" alt="Facebook">
            <p><span>Facebook</span></p>
          </a>
        </div>
        <div class="item">
          <RouterLink :class="{ selected: selectedTab === 'Instagram', active: activeTab === 'Instagram' }"
            @click="selectTab('Instagram')" to="/instagram">
            <img src="/ig.svg" alt="Instagram">
            <p><span>Instagram</span></p>
          </RouterLink>
        </div>
        <div class="item">
          <a @click.prevent="handleTikTokClick" href="#">
            <img src="/tiktok-sq.svg" alt="Tiktok">
            <p><span>Tiktok</span></p>
          </a>
        </div>
        <div class="bottom">
          <RouterLink to="/login">
            <button @click="logout">Log Out</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      selectedTab: null,
      activeTab: null,
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
      this.activeTab = tab; // Set the activeTab to show the background color
    },
    handleTikTokClick() {
      if (this.$route.path === '/') {
        window.open('https://www.tiktok.com', '_blank');
      } else if (this.$route.path === ('/creators/7a4465cf-2719-4868-8fb7-949d4f02f19b')) {
        window.open('https://www.tiktok.com/@aerilzafrel8?lang=en', '_blank'); // Aeril Zafrel
      } else if (this.$route.path === '/creators/29f775f6-931f-42e7-931b-bb78e81906ed') {
        window.open('https://www.tiktok.com/@itsalifsatar', '_blank'); //Alif Satar
      } else if (this.$route.path === '/creators/b118eb01-fbb1-4ea3-9dfd-02c141ee9bf8') {
        window.open('https://www.tiktok.com/@amir.ahnaff', '_blank'); // Amir Ahnaff
      } else if (this.$route.path === '/creators/3156f6eb-ac90-485d-9489-6d39c8d1e7b2') {
        window.open('https://www.tiktok.com/@azfarherii', '_blank'); // Azfar Heri
      } else if (this.$route.path === '/creators/ac92233e-8f4e-48b2-8b6d-b0ecb5ffa8ac') {
        window.open('https://www.tiktok.com/@cikb_havoc', '_blank'); // Cik B
      } else if (this.$route.path === '/creators/52311ac5-2f5f-427c-b3aa-76a34a4ce14d') {
        window.open('https://www.tiktok.com/@ustazebitlew', '_blank'); // Ebit Lew
      } else if (this.$route.path === '/creators/757f852d-96e6-4ebe-a06d-bdbb328336de') {
        window.open('https://www.tiktok.com/@hairul_azreen88', '_blank'); // Hairul Azreen
      } else if (this.$route.path === '/creators/52e9245f-3cc5-4f19-9c5e-371c160a763f') {
        window.open('https://www.tiktok.com/@haniszalikha', '_blank'); // Hanis Zalikha
      } else if (this.$route.path === '/creators/759ebaf3-1cdb-43d4-85e4-3a6bab7b0630') {
        window.open('https://www.tiktok.com/@jannanickofficial', '_blank'); // Janna Nick
      } else if (this.$route.path === '/creators/162095a7-0f74-4b19-b647-b2a10a1f79a3') {
        window.open('https://www.tiktok.com/@khairulaming', '_blank'); // Khairul Amin
      } else if (this.$route.path === '/creators/67bd507e-2fe0-4876-a192-6d9f977b848a') {
        window.open('https://www.tiktok.com/@meerqeen', '_blank'); // Meerqeen
      } else if (this.$route.path === '/creators/3bf692d2-ef9f-47a6-8f82-bfbea8393b7f') {
        window.open('https://www.tiktok.com/@therealmfmirafilzah', '_blank'); // Mira Filzah
      } else if (this.$route.path === '/creators/7224239f-b6d5-4e31-8c90-1cb4e3ee325b') {
        window.open('https://www.tiktok.com/@sofyank96', '_blank'); // Mohamad Sofian
      } else if (this.$route.path === '/creators/3dc4b1f1-188e-4502-a33a-5e9d460c0fb7') {
        window.open('https://www.tiktok.com/@neelofa', '_blank'); // Neelofa
      } else if (this.$route.path === '/creators/8cfd6343-5d20-4d38-93f1-b6b008bf2403') {
        window.open('https://www.tiktok.com/@toktitiktok', '_blank'); // Siti Nurhaliza
      } else if (this.$route.path === '/creators/5684bc76-d34f-44fa-8ce8-3d2b19f4dd83') {
        window.open('https://www.tiktok.com/@syfqkyl', '_blank'); // Syafiq Kyle
      } else if (this.$route.path === '/creators/e68ff809-4530-44ed-9662-846c4a62e0df') {
        window.open('https://www.tiktok.com/@syahmisazlilive', '_blank'); // Syahmi Sazli
      } else if (this.$route.path === '/creators/9793c836-065a-440b-bc9b-234a8addf928') {
        window.open('https://www.tiktok.com/@adninroslan', '_blank'); // Ustaz Adnin
      } else if (this.$route.path === '/creators/4afcadae-19db-434b-97ab-e29e22914127') {
        window.open('https://www.tiktok.com/@zizanrazak869', '_blank'); // Zizan Razak
      } else if (this.$route.path === '/creators/f680d37d-d8fe-405d-861c-e848f6b7b280') {
        window.open('https://www.tiktok.com/@zulariffin_official', '_blank'); // Zul Ariffin
      }
    },
    handleFacebookClick() {
      if (this.$route.path === '/') {
        window.open('https://www.facebook.com', '_blank');
      } else if (this.$route.path === '/creators/29f775f6-931f-42e7-931b-bb78e81906ed') {
        window.open('https://www.facebook.com/alifsatarmy', '_blank'); //Alif Satar
      } else if (this.$route.path === '/creators/7a4465cf-2719-4868-8fb7-949d4f02f19b') {
        window.open('https://www.facebook.com/farelzafrel', '_blank'); // Aeril Zafrel
      } else if (this.$route.path === '/creators/b118eb01-fbb1-4ea3-9dfd-02c141ee9bf8') {
        window.open('https://www.facebook.com/', '_blank'); // Amir Ahnaff
      } else if (this.$route.path === '/creators/3156f6eb-ac90-485d-9489-6d39c8d1e7b2') {
        window.open('https://www.facebook.com/azfarheri', '_blank'); // Azfar Heri
      } else if (this.$route.path === '/creators/ac92233e-8f4e-48b2-8b6d-b0ecb5ffa8ac') {
        window.open('https://www.facebook.com/CikB.Havoc66', '_blank'); // Cik B
      } else if (this.$route.path === '/creators/52311ac5-2f5f-427c-b3aa-76a34a4ce14d') {
        window.open('https://www.facebook.com/ebitlewofficialpage', '_blank'); // Ebit Lew
      } else if (this.$route.path === '/creators/757f852d-96e6-4ebe-a06d-bdbb328336de') {
        window.open('https://www.facebook.com/hairulazreen88', '_blank'); // Hairul Azreen
      } else if (this.$route.path === '/creators/52e9245f-3cc5-4f19-9c5e-371c160a763f') {
        window.open('https://www.facebook.com/haniszalikhaFB', '_blank'); // Hanis Zalikha
      } else if (this.$route.path === '/creators/759ebaf3-1cdb-43d4-85e4-3a6bab7b0630') {
        window.open('https://www.facebook.com/jannanick95', '_blank'); // Janna Nick
      } else if (this.$route.path === '/creators/162095a7-0f74-4b19-b647-b2a10a1f79a3') {
        window.open('https://www.facebook.com/SambalNyettt', '_blank'); // Khairul Amin
      } else if (this.$route.path === '/creators/67bd507e-2fe0-4876-a192-6d9f977b848a') {
        window.open('https://www.facebook.com/meerqeen04', '_blank'); // Meerqeen
      } else if (this.$route.path === '/creators/3bf692d2-ef9f-47a6-8f82-bfbea8393b7f') {
        window.open('https://www.facebook.com/MFMiraFilzah', '_blank'); // Mira Filzah
      } else if (this.$route.path === '/creators/7224239f-b6d5-4e31-8c90-1cb4e3ee325b') {
        window.open('https://www.facebook.com/sofyank96', '_blank'); // Mohamad Sofian
      } else if (this.$route.path === '/creators/3dc4b1f1-188e-4502-a33a-5e9d460c0fb7') {
        window.open('https://www.facebook.com/neelofa', '_blank'); // Neelofa
      } else if (this.$route.path === '/creators/8cfd6343-5d20-4d38-93f1-b6b008bf2403') {
        window.open('https://www.facebook.com/SitiNurhalizaOfficial', '_blank'); // Siti Nurhaliza
      } else if (this.$route.path === '/creators/5684bc76-d34f-44fa-8ce8-3d2b19f4dd83') {
        window.open('https://www.facebook.com/isyafiqkyleofficial', '_blank'); // Syafiq Kyle
      } else if (this.$route.path === '/creators/e68ff809-4530-44ed-9662-846c4a62e0df') {
        window.open('https://www.facebook.com/syahmisazli.production', '_blank'); // Syahmi Sazli
      } else if (this.$route.path === '/creators/9793c836-065a-440b-bc9b-234a8addf928') {
        window.open('https://www.facebook.com/ustazadnin', '_blank'); // Ustaz Adnin
      } else if (this.$route.path === '/creators/4afcadae-19db-434b-97ab-e29e22914127') {
        window.open('https://www.facebook.com/OfficialZizanRazak', '_blank'); // Zizan Razak
      } else if (this.$route.path === '/creators/f680d37d-d8fe-405d-861c-e848f6b7b280') {
        window.open('https://www.facebook.com/zulariffinrasmi', '_blank'); // Zul Ariffin
      }
    },
    logout() {
      // Add your logout logic here
    },
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #408a7e;
  color: white;
  overflow-y: auto;
  padding-bottom: 50px;
}

@media (max-width: 768px) {
  .container {
    padding-bottom: 0;
    overflow-y: hidden;
    padding: 2vw;
    margin: 0 auto;
  }
}

.logo {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}


.logo span {
  text-align: center;
  color: inherit;
  text-decoration: none;
}

.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* Increased gap between list items */
  width: 100%;
  max-width: 400px;
  /* padding-bottom: 200; */
}


.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, color 0.3s;
  border-radius: 5px;
}

.item.selected {
  color: #408a7e;
  transform: scale(1.1);
}

.item.active {
  background-color: white;
}

.item img {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  align-items: center
}

.item span {
  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
}


.logo img {
  width: 120px;
  height: auto;
}

.bottom {
  display: flex;
  justify-content: center;
}

a.router-link-active,
a.router-link-exact-active {
  text-decoration: none;
  color: inherit;
}

a {
  text-decoration: none;
}

button {
  background-color: red;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
}

button:hover {
  background-color: white;
  color: rgba(64, 138, 126, 1);
}

@media (min-width: 768px) {
  .container {
    padding: 2vw;
    max-width: 200px;
    margin: 0 auto;
    overflow-y: auto;
  }
}
</style>
