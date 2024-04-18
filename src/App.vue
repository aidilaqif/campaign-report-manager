<template>
  <div class="container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content">
      <!-- <Navbar /> -->
      <ViewDetails/>
    <div>viewContentCreators</div></div>
  </div>
</template>
<script>
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
//import ViewDetails from './components/ViewDetails.vue';

export default {
  components: {
    Sidebar,
    Navbar,
    //ViewDetails
  }  
}
</script>
<style scoped>
  .container{
    display : flex;
    align-items : column;
  }
</style>