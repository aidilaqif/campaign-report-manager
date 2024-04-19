<template>
  <!-- <Login /> -->
  <div class="container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <!-- <div class="content"> -->
      <!-- <Navbar /> -->
      <!-- <ViewDetails/> -->
      <!-- <div>viewContentCreators</div> -->
    <!-- </div> -->
  </div>
</template>
<script>
// import Login from './components/Login.vue';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import Login from './components/Login.vue';
//import ViewDetails from './components/ViewDetails.vue';

export default {
  components: {
    Sidebar,
    Navbar,
    //ViewDetails,
    Login
  }
}
</script>
<style scoped>
  .container{
    display : flex;
    align-items : column;
  }
</style>