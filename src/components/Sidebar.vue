<template>
    <div class="container">
        <div class="top">
            <div class="logo">
                <img src="" alt="logo" />
            </div>
            <div class="list">
                <ul>
                <li>Home</li>
                <li>ContentCreators</li>            
            </ul>
        </div>
        <div class="bottom">
            <ul>
                <li>LogOut</li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .container{
        width: 200px;
        height: 100vh;
        min-height: 100vh;
        align-items: stretch;
        background-color: #5ced73;
        color: white;
        padding: 20px;
    }
    .logo{
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
    }
    .list{
        list-style: none;
    }
</style>