<template>
  <div class="container">
    <div class="top">
      <div class="logo">
        <img src="/Icon.png" alt="logo" />
        CReators +
      </div>
      <div class="list">
        <div :class="{ selected: selectedTab === 'Overview', active: activeTab === 'Overview' }" @click="selectTab('Overview')">
          <img src="/overview.svg" alt="Overview">
          <span>Overview</span>
        </div>
        <div :class="{ selected: selectedTab === 'Facebook', active: activeTab === 'Facebook' }" @click="selectTab('Facebook')">
          <img src="/facebook.svg" alt="Facebook">
          <span>Facebook</span>
        </div>
        <div :class="{ selected: selectedTab === 'Instagram', active: activeTab === 'Instagram' }" @click="selectTab('Instagram')">
          <img src="/instagram.svg" alt="Instagram">
          <span>Instagram</span>
        </div>
        <div :class="{ selected: selectedTab === 'Tiktok', active: activeTab === 'Tiktok' }" @click="selectTab('Tiktok')">
          <img src="/tiktok-sq.svg" alt="Tiktok">
          <span>Tiktok</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <RouterLink to="/login">
        <button @click="logout">Log Out</button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: null,
      activeTab: null
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
      this.activeTab = tab; // Set the activeTab to show the background color
    },
    logout() {
      // Add your logout logic here
    }
  }
}
</script>

<style scoped>
  .container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100px;
    height: 95vh;
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #408A7E;
    color: white;
    padding: 2vw;
  }


  .top {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 20px;
  }

  .list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 400px; /* Set a max-width for the list */
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
    color: #408A7E;
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
    margin-top: auto;
    margin-bottom: 20%;
    display: flex;
    justify-content: center;
    width: 100%;
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
      max-width: 200px; /* Set a max-width for larger screens */
      margin: 0 auto; /* Center the container horizontally */
    }
  }
</style>
