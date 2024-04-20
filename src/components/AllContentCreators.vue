<template>
    <div>
        <table id="content-creators">
            <tr>
                <th>Name</th>
                <th>Facebook Followers</th>
                <th>Instagram Followers</th>
                <th>Tiktok Followers</th>
                <th>Category</th>
            </tr>
            <tr>
                <td>Aidil</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>Education</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default{}
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
</style>