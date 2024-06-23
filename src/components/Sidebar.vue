<template>
  <div class="container">
    <div class="top">
      <div class="list">
        <RouterLink to="/">
          <div class="logo">
            <img src="/Icon.png" alt="logo" />
            <span>Social Pulse</span>
          </div>
        </RouterLink>
        <div class="item">
          <RouterLink
            :class="{ selected: selectedTab === 'Overview', active: activeTab === 'Overview' }"
            @click="selectTab('Overview')"
            to="/"
          >
            <img src="/overview.svg" alt="Overview">
            <span>Overview</span>
          </RouterLink>
        </div>
        <div class="item">
          <a @click.prevent="handleFacebookClick" href="#">
            <img src="/facebook.svg" alt="Facebook">
            <span>Facebook</span>
          </a>
        </div>
        <div class="item">
          <RouterLink
            :class="{ selected: selectedTab === 'Instagram', active: activeTab === 'Instagram' }"
            @click="selectTab('Instagram')"
            to="/instagram"
          >
            <img src="/ig.svg" alt="Instagram">
            <span>Instagram</span>
          </RouterLink>
        </div>
        <div class="item">
          <a @click.prevent="handleTikTokClick" href="#">
            <img src="/tiktok-sq.svg" alt="Tiktok">
            <span>Tiktok</span>
          </a>
        </div>
      </div>
      <div class="bottom">
        <RouterLink to="/login">
          <button @click="logout">Log Out</button>
        </RouterLink>
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
      } else if (this.$route.path.startsWith('/creators')) {
        window.open('https://www.tiktok.com/@aerilzafrel8?lang=en', '_blank');
      }
    },
    handleFacebookClick() {
      if (this.$route.path === '/') {
        window.open('https://www.facebook.com', '_blank');
      } else if (this.$route.path.startsWith('/creators')) {
        window.open('https://www.facebook.com/farelzafrel', '_blank');
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
}


.logo span {
  text-align: center;
}

.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px; /* Increased gap between list items */
  width: 100%;
  max-width: 400px;
  padding-bottom: 21vmax;
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
  margin-bottom: 10px; /* Added space between image and text */
  align-items:center
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

a.router-link-active, a.router-link-exact-active {
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
