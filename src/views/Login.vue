<template>
    <body style="margin: 0; padding: 0; background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBvrkaqCgL99QMS0z_USGcyrmzrof5ZM82ynF-Y6km1Q&s');
        background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed; height: 98vh; display: flex; flex-direction: column; align-items: center;">

        <h1 class="text-center text-black mt-7">CAMPAIGN REPORT MANAGER</h1>

        <div class="gap"></div>
        <LoginForm />
    </body>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
    components:{
        LoginForm
    }
};
</script>

<style>
.login-page {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);
}

.center-align {
    text-align: center;
}



.gap {
    height: 20px;
}
</style>
