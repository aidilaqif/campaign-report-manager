<template>
    <body style="margin: 0; padding: 0; background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBvrkaqCgL99QMS0z_USGcyrmzrof5ZM82ynF-Y6km1Q&s');
        background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed; height: 98vh; display: flex; flex-direction: column; align-items: center;">

        <h1 class="text-center text-black mt-7">CAMPAIGN REPORT MANAGER</h1>

        <div class="gap"></div> 

        <div class="login-page">
            <div class="login-form">
                <form id="loginForm">
                    
                    <p class="center-align">Welcome Back Admin !</p>
                          
                    <label for="name">Username:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required>

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required>
                
                    <div class="button-container">
                        <button type="submit" class="login-button">Login</button>  
                    </div>
                </form>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    
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

label {
    margin-bottom: 10px;
    display: block;
}

input[type="text"],
input[type="password"] {
    width: 90%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button-container {
    display: flex;
    justify-content: center; 
}

.login-button {
    background-color: #1abc9c;
    color: #fff;
    width: 50%; 
}


.gap {
    height: 20px;
}
</style>
