<template>
    <table class="content-creator-table">
        <tr>
            <th>Platform</th>
            <th>Data Reference</th>
            <th>Average Comment</th>
            <th>Average Likes</th>
            <th>Average Reach</th>
            <th>Average Shares</th>
            <th>Comments</th>
            <th>Engagement Rate</th>
            <th>Followers Count</th>
            <th>Likes</th>
            <th>Profile Views</th>
            <th>Reach</th>
            <th>Shares</th>
        </tr>
        <tr v-for="(platformData, platform) in creatorData" :key="platform">
            <td>{{ platform }}</td>
            <td>{{ platformData.dataRef }}</td>
            <td>{{ platformData.avgComments }}</td>
            <td>{{ platformData.avgLikes }}</td>
            <td>{{ platformData.avgReach }}</td>
            <td>{{ platformData.avgShares }}</td>
            <td>{{ platformData.comments }}</td>
            <td>{{ platformData.engagementRate }}</td>
            <td>{{ platformData.followersCount }}</td>
            <td>{{ platformData.likes }}</td>
            <td>{{ platformData.profileViews }}</td>
            <td>{{ platformData.reach }}</td>
            <td>{{ platformData.shares }}</td>
        </tr>
    </table>
</template>

<script>
import contentCreatorsData from '@/data/contentCreators.json';

export default {
    data() {
        return {
            id: this.$route.params.id,
            creatorData: {}
        };
    },
    created() {
        this.loadCreatorData();
    },
    methods: {
        loadCreatorData() {
            const creator = contentCreatorsData.content_creator.find(c => c.id === this.id);
            if (creator) {
                this.creatorData = {
                    Facebook: creator.Facebook,
                    Instagram: creator.Instagram,
                    Tiktok: creator.Tiktok
                };
            }
        }
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
