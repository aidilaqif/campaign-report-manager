<template>
    <div class="login-page">
            <div class="login-form">
                <form id="loginForm">
                    <p class="center-align">Welcome Back Admin !</p>
                    <label for="name">Username:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required>
                    <RouterLink to="/">
                        <div class="button-container">
                            <button type="submit" class="login-button">Login</button>
                        </div>
                    </RouterLink>
                </form>
            </div>
        </div>
</template>

<style scoped>
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
</style>