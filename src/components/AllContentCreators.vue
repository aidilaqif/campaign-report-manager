<template>
    <div>
        <table id="content-creators">
            <tr>
                <th>Name</th>
                <th>
                    <img src="/facebook.svg" alt="Facebook">
                    Followers
                </th>
                <th>
                    <img src="/instagram.svg" alt="Instagram">
                    Followers
                </th>
                <th>
                    <img src="/tiktok-sq.svg" alt="Tiktok">
                    Followers
                </th>
                <th>Category</th>
            </tr>
            <tr v-for="creator in contentCreators" :key="creator.id">
                <td>{{ creator.Facebook.name }}</td>
                <td>{{ creator.Facebook.followers }}</td>
                <td>{{ creator.Instagram.followers_count }}</td>
                <td>{{ creator.Tiktok.followers_count }}</td>
                <td>{{ creator.Facebook.category }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import contentCreatorsData from '@/data/contentCreators.json';
    export default{
        data(){
            return {
                contentCreators: contentCreatorsData.content_creator
            };
        }
    };
</script>

<style scoped>
    #content-creators {
        margin-top: 30px;
        margin-left: 10px;
        width: 100%;
        font-family: 'Arial', sans-serif;
    }

    #content-creators th, #content-creators td {
        padding: 12px;
        text-align: center;
    }

    #content-creators th {
        font-size: 18px;
        background-color: #ffffff;
        /* box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.1); */
        border-bottom: none;
        border-right: none;
        border-left: none;
    }

    #content-creators tr:hover {
        background-color: #f5f5f5;
    }
    #content-creators td {
        font-size: 16px;
        border-top: 1px solid #ddd;
    }
    #content-creators td:first-child {
        font-weight: bold;
    }
    #content-creators img {
        height: 18px;
        width: 18px;
    }
</style>