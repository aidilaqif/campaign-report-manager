<template>
    <!-- <Login /> -->
    <div class="wrapper">
      <div class="container">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="content">
          <Navbar />
          <AllContentCreators />
        </div>
        
      </div>
    </div>
  </template>
  <script>
  import Sidebar from '../components/Sidebar.vue';
  import Navbar from '../components/Navbar.vue';
  import AllContentCreators from '../components/AllContentCreators.vue'
  
  export default {
    components: {
      Sidebar,
      Navbar,
      AllContentCreators
      // ViewDetails,
      // Login
    }
  }
  </script>
  <style scoped>
    .wrapper{
      max-width: 95%;
      margin-inline: auto;
    }
    .container{
      display : flex;
      align-items : row;
    }
    .sidebar {
      flex: 1; /* Sidebar takes 1 part of the available space */
    }
  
    .content {
      position: relative;
      top: 0;
      right: 0;
      flex: 12; /* Content takes 2 parts of the available space */
      display: flex;
      flex-direction: column;
    }
  </style>