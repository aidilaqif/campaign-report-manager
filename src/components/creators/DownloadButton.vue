<template>
    <button @click="download">Download</button>
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
    },
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