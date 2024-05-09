<template>
    <div>
        <h1>Creator Details</h1>
        <div v-if="creator">
            <div class="creator">
                <img src="/man.png" alt="Creator Thumbnail">
                <div class="creator-details">
                    <h2>Name: {{ creator.Facebook.name }}</h2>
                    <p>Username: {{ creator.Facebook.username }}</p>
                    <p>Email: {{ creator.Facebook.email }}</p>
                </div>
                <button @click="download">Download</button>
            </div>

            <h2>Facebook</h2>
            <p>name: {{ creator.Facebook.name }}</p>
            <p>username: {{ creator.Facebook.username }}</p>
            <p>intro: {{ creator.Facebook.intro }}</p>
            <p>email: {{ creator.Facebook.email }}</p>
            <p>permalink_url: {{ creator.Facebook.permalink_url }}</p>
            <p>category: {{ creator.Facebook.category }}</p>
            <p>followers: {{ creator.Facebook.followers }}</p>
            <p>content count: {{ creator.Facebook.content_count }}</p>
            <p>page views per day: {{ creator.Facebook.page_views_day }}</p>
            <p>page post engagement: {{ creator.Facebook.page_post_engagement }}</p>

            <h2>Instagram</h2>
            <p>name: {{ creator.Instagram.name }}</p>
            <p>followers count: {{ creator.Instagram.followers_counts }}</p>
            <p>media count: {{ creator.Instagram.media_count }}</p>
            <p>reach: {{ creator.Instagram.reach }}</p>
            <p>profile view: {{ creator.Instagram.profile_view }}</p>
            <p>male follower demographics: {{ creator.Instagram.male_follower_demographics }}</p>
            <p>female follower demographics: {{ creator.Instagram.female_follower_demographics }}</p>
            <p>unknown follower demographic: {{ creator.Instagram.unknown_follower_demographic }}</p>

            <h2>Tiktok</h2>
            <p>display name: {{ creator.Tiktok.display_name }}</p>
            <p>handle name: {{ creator.Tiktok.handle_name }}</p>
            <p>followers count: {{ creator.Tiktok.followers_count }}</p>
            <p>videos count: {{ creator.Tiktok.videos_count }}</p>
            <p>average views: {{ creator.Tiktok.average_views }}</p>
            <p>average likes: {{ creator.Tiktok.average_likes }}</p>
            <p>average shares: {{ creator.Tiktok.average_shares }}</p>
            <p>average comments: {{ creator.Tiktok.average_comments }}</p>
            <p>engagement rate: {{ creator.Facebook.engagement_rate }}</p>
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
        },
    }
};
</script>

<style scoped>
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
        margin-right: 1000px;
        flex-direction: column;
        justify-content: center;

    }
    .creator img{
        margin-right: 30px;
        height: 150px;
        width: 150px;
    }
    button {
        background-color: rgba(64, 138, 126, 1);
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
</style>
  