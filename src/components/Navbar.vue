<template>
    <div class="navbar">
        <div class="welcome">Welcome Back!</div>
        <div class="user">
            <img src="" alt="logo" />
            <div class="userDetail">
                <span class="role">Admin</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.navbar {
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user {
  display: flex;
  align-items: center; /* Align items vertically */
}

.user img {
  margin-right: 10px; /* Add margin between the image and userDetail */
}

.userDetail {
  display: flex;
  flex-direction: column;
}

.role {
  font-weight: 500;
}
</style>
