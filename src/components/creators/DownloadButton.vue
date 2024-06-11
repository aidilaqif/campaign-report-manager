<template>
    <div>
        <button @click="download">Download</button>
    </div>
</template>

<script>
    import { jsPDF } from 'jspdf';
    import 'jspdf-autotable';
    import contentCreatorsData from '@/data/contentCreators.json';

    export default {
        data() {
            return {
                name: '',
                id: '',
                creator: null,
            };
        },
        created() {
            this.name = this.$route.params.name || '';
            this.id = this.$route.params.id || '';
            this.loadCreator();
        },
        methods: {
            loadCreator() {
                const creators = contentCreatorsData.content_creator;
                this.creator = creators.find(creator => creator.id === this.id);
                if (!this.creator) {
                    console.error("Creator not found.");
                }
            },
            download() {
                if (this.creator) {
                    const doc = new jsPDF();

                    // Define the data for the table
                    const columns = [
                        { header: 'Platform', dataKey: 'platform' },
                        { header: 'Data Type', dataKey: 'dataType' },
                        { header: 'Data Ref', dataKey: 'dataRef' },
                        { header: 'Avg Comments', dataKey: 'avgComments' },
                        { header: 'Avg Likes', dataKey: 'avgLikes' },
                        { header: 'Avg Reach', dataKey: 'avgReach' },
                        { header: 'Avg Shares', dataKey: 'avgShares' },
                        { header: 'Comments', dataKey: 'comments' },
                        { header: 'Engagement Rate', dataKey: 'engagementRate' },
                        { header: 'Followers Count', dataKey: 'followersCount' },
                        { header: 'Likes', dataKey: 'likes' },
                        { header: 'Profile Views', dataKey: 'profileViews' },
                        { header: 'Reach', dataKey: 'reach' },
                        { header: 'Shares', dataKey: 'shares' }
                    ];

                    const rows = [];
                    Object.keys(this.creator).forEach(platform => {
                        if (platform !== 'id') {
                            rows.push({
                                platform: platform,
                                ...this.creator[platform]
                            });
                        }
                    });

                    // Add a title
                    doc.text(`Content Creator Report: ${this.id}`, 10, 10);

                    // Add the table
                    doc.autoTable({
                        head: [columns],
                        body: rows,
                        startY: 20,
                        styles: { fontSize: 8 }
                    });

                    // Save the PDF
                    doc.save(`${this.id}_data.pdf`);
                } else {
                    console.error("Creator data is not loaded.");
                }
            }
        }
    };
</script>

<style>
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