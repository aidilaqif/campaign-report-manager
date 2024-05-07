<template>
    <div>
      <h1>Creator Details</h1>
      <div v-if="creator">
        <h2>Name: {{ creator.Facebook.name }}</h2>
        <p>About: {{ creator.Facebook.intro }}</p>
        <p>Email: {{ creator.Facebook.email }}</p>
        <p>Category: {{ creator.Facebook.category }}</p>
        <!-- Display other information as needed -->
      </div>
      <div v-else>
        <p>No creator found with ID: {{ id }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import contentCreatorsData from '@/data/contentCreators.json';
  
  export default {
    data() {
      return {
        name: this.$route.params.name,
        id: this.$route.params.id,
        creator: null
      };
    },
    created() {
      this.loadCreator();
    },
    methods: {
      loadCreator() {
        const creators = contentCreatorsData.content_creator;
        this.creator = creators.find(creator => creator.id === this.id);
      }
    }
  };
  </script>
  