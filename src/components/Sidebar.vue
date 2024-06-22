<template>
  <div class="container">
    <div class="top">
      <div class="list">
        <RouterLink to="/">
          <div class="logo">
            <img src="/Icon.png" alt="logo" />
            CReators +
          </div>
        </RouterLink>
        <RouterLink
          :class="{ selected: selectedTab === 'Overview', active: activeTab === 'Overview' }"
          @click="selectTab('Overview')"
          to="/"
        >
          <img src="/overview.svg" alt="Overview">
          <span>Overview</span>
        </RouterLink>
        <RouterLink
          :class="{ selected: selectedTab === 'Facebook', active: activeTab === 'Facebook' }"
          @click="selectTab('Facebook')"
          to="/facebook"
        >
          <img src="/facebook.svg" alt="Facebook">
          <span>Facebook</span>
        </RouterLink>
        <RouterLink
          :class="{ selected: selectedTab === 'Instagram', active: activeTab === 'Instagram' }"
          @click="selectTab('Instagram')"
          to="/instagram"
        >
          <img src="/instagram.svg" alt="Instagram">
          <span>Instagram</span>
        </RouterLink>
        <RouterLink
          :class="{ selected: selectedTab === 'Tiktok', active: activeTab === 'Tiktok' }"
          @click="selectTab('Tiktok')"
          to="/tiktok"
        >
          <img src="/tiktok-sq.svg" alt="Tiktok">
          <span>Tiktok</span>
        </RouterLink>
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
  }
}

.top {
}

.logo {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
  cursor: pointer; /* Add cursor pointer for clickable effect */
}

.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  padding-bottom:25vmax;
}

.list div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, color 0.3s;
  padding: 10px;
  border-radius: 5px;
}

.list div.selected {
  color: #408a7e;
  transform: scale(1.1);
}

.list div.active {
  background-color: white;
}

.list img {
  width: 30px;
  height: 30px;
}

.list span {
  font-size: 14px;
  font-weight: bold;
}

.logo img {
  width: 50px;
  height: 50px;
}

.bottom {
  display: flex;
  justify-content: center;
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
  }
}
</style>
