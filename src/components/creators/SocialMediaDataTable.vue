<template>
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
