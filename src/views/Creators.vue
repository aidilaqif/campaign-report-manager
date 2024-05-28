<template>
    <div>
        <div class="wrapper">
            <div class="container">
                <div class="sidebar">
                    <Sidebar />
                </div>
                <div class="creators-data">
                    <h1>Creator Details</h1>
                    <div v-if="creator">
                        <div class="creator">
                            <img src="/man.png" alt="Creator Thumbnail">
                            <div class="creator-details">
                                <h2>Name: {{ creator.Facebook.name }}</h2>
                                <p>Username: {{ creator.Facebook.username }}</p>
                                <p>Email: {{ creator.Facebook.email }}</p>
                            </div>
                            <DownloadButton :tableId="id" />
                        </div>
                        <h2>Social Media Data</h2>
                        <SocialMediaDataTable />
                    </div>
                    <div v-else>
                        <p>No creator found with ID: {{ id }}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>

</template>

<script>
    import SocialMediaDataTable from '@/components/creators/SocialMediaDataTable.vue';
    import DownloadButton from '@/components/creators/DownloadButton.vue'
    import contentCreatorsData from '@/data/contentCreators.json';
    import Sidebar from '@/components/Sidebar.vue';

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
        },
    },
    components: {
        SocialMediaDataTable,
        DownloadButton,
        Sidebar
    }
};
</script>

<style scoped>
    .wrapper{
      max-width: 98%;
      margin-inline: 0%;
    }
    .container{
      display : flex;
      align-items : row;
    }
    .sidebar {
      flex: 1; /* Sidebar takes 1 part of the available space */
    }
    .creator {
        width: 98%;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        /* justify-content: space-between; */
    }
    .creator-details{
        margin-right: 60%;
        flex-direction: column;
        justify-content: center;

    }
    .creator img{
        margin-right: 30px;
        height: 150px;
        width: 150px;
    }
    .creators-data {
      position: relative;
      top: 0;
      right: 0;
      flex: 6; /* Content takes 2 parts of the available space */
      display: flex;
      flex-direction: column;
    }
</style>
