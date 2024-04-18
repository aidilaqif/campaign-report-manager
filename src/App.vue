<template>
  <div class="container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content">
      <Navbar />
    <div>viewContentCreators</div></div>
  </div>
</template>
<script>
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Sidebar,
    Navbar
  }  
}
</script>
<style scoped>
  .container{
    display : flex;
    align-items : column;
  }
</style>