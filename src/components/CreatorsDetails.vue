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
            <h2>Social Media Data</h2>
                <table class="content-creator-table">
                    <tr>
                        <th>Platform</th>
                        <th>Display Name</th>
                        <th>Handle Name / Username</th>
                        <th>Followers Count</th>
                        <th>Media Count / Content Count</th>
                        <th>Reach / Page Views Per Day</th>
                        <th>Profile View</th>
                        <th>Male Follower Demographics</th>
                        <th>Female Follower Demographics</th>
                        <th>Unknown Follower Demographic</th>
                        <th>Page Post Engagement</th>
                        <th>Average Views</th>
                        <th>Average Likes</th>
                        <th>Average Shares</th>
                        <th>Average Comments</th>
                        <th>Engagement Rate</th>
                    </tr>
                    <tr>
                    <td>Facebook</td>
                        <td>{{ creator.Facebook.name }}</td>
                        <td>{{ creator.Facebook.username }}</td>
                        <td>{{ creator.Facebook.followers }}</td>
                        <td>{{ creator.Facebook.content_count }}</td>
                        <td>{{ creator.Facebook.page_views_day }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{{ creator.Facebook.page_post_engagements }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Instagram</td>
                        <td>{{ creator.Instagram.name }}</td>
                        <td></td>
                        <td>{{ creator.Instagram.followers_count }}</td>
                        <td>{{ creator.Instagram.media_count }}</td>
                        <td></td>
                        <td>{{ creator.Instagram.profile_view }}</td>
                        <td>{{ creator.Instagram.male_follower_demographics }}</td>
                        <td>{{ creator.Instagram.female_follower_demographics }}</td>
                        <td>{{ creator.Instagram.unknown_follower_demographic }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Tiktok</td>
                        <td>{{ creator.Tiktok.display_name }}</td>
                        <td>{{ creator.Tiktok.handle_name }}</td>
                        <td>{{ creator.Tiktok.followers_count }}</td>
                        <td>{{ creator.Tiktok.videos_count }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{{ creator.Tiktok.average_views }}</td>
                        <td>{{ creator.Tiktok.average_likes }}</td>
                        <td>{{ creator.Tiktok.average_shares }}</td>
                        <td>{{ creator.Tiktok.average_comments }}</td>
                        <td>{{ creator.Tiktok.engagement_rate }}</td>
                    </tr>
                </table>
            <!-- <h2>Facebook</h2>
                <table class="content-creator-table">
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Intro</th>
                    <th>Email</th>
                    <th>Permalink URL</th>
                    <th>Category</th>
                    <th>Followers</th>
                    <th>Content Count</th>
                    <th>Page Views Per Day</th>
                    <th>Page Post Engagement</th>
                </tr>
                <tr>
                    <td>{{ creator.Facebook.name }}</td>
                    <td>{{ creator.Facebook.username }}</td>
                    <td>{{ creator.Facebook.intro }}</td>
                    <td>{{ creator.Facebook.email }}</td>
                    <td>{{ creator.Facebook.permalink_url }}</td>
                    <td>{{ creator.Facebook.category }}</td>
                    <td>{{ creator.Facebook.followers }}</td>
                    <td>{{ creator.Facebook.content_count }}</td>
                    <td>{{ creator.Facebook.page_views_day }}</td>
                    <td>{{ creator.Facebook.page_post_engagements }}</td>
                </tr>
                </table>

                <h2>Instagram</h2>
                <table class="content-creator-table">
                <tr>
                    <th>Name</th>
                    <th>Followers Count</th>
                    <th>Media Count</th>
                    <th>Reach</th>
                    <th>Profile View</th>
                    <th>Male Follower Demographics</th>
                    <th>Female Follower Demographics</th>
                    <th>Unknown Follower Demographic</th>
                </tr>
                <tr>
                    <td>{{ creator.Instagram.name }}</td>
                    <td>{{ creator.Instagram.followers_count }}</td>
                    <td>{{ creator.Instagram.media_count }}</td>
                    <td>{{ creator.Instagram.reach }}</td>
                    <td>{{ creator.Instagram.profile_view }}</td>
                    <td>{{ creator.Instagram.male_follower_demographics }}</td>
                    <td>{{ creator.Instagram.female_follower_demographics }}</td>
                    <td>{{ creator.Instagram.unknown_follower_demographic }}</td>
                </tr>
                </table>

                <h2>Tiktok</h2>
                <table class="content-creator-table">
                <tr>
                    <th>Display Name</th>
                    <th>Handle Name</th>
                    <th>Followers Count</th>
                    <th>Videos Count</th>
                    <th>Average Views</th>
                    <th>Average Likes</th>
                    <th>Average Shares</th>
                    <th>Average Comments</th>
                    <th>Engagement Rate</th>
                </tr>
                <tr>
                    <td>{{ creator.Tiktok.display_name }}</td>
                    <td>{{ creator.Tiktok.handle_name }}</td>
                    <td>{{ creator.Tiktok.followers_count }}</td>
                    <td>{{ creator.Tiktok.videos_count }}</td>
                    <td>{{ creator.Tiktok.average_views }}</td>
                    <td>{{ creator.Tiktok.average_likes }}</td>
                    <td>{{ creator.Tiktok.average_shares }}</td>
                    <td>{{ creator.Tiktok.average_comments }}</td>
                    <td>{{ creator.Tiktok.engagement_rate }}</td>
                </tr>
                </table> -->

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
    .content-creator-table {
        width: 100%;
        border-collapse: collapse;
    }

    .content-creator-table th, .content-creator-table td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    .content-creator-table th {
        background-color: #f2f2f2;
    }
</style>
  