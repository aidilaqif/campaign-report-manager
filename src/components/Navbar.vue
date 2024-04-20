<template>
    <div class="navbar">
        <div class="welcome">
          <h1>Welcome Back!</h1>
        </div>
        <div class="user">
          <img src="/man.png" alt="logo" />
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
  width: 98%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.user {
  display: flex;
  align-items: center; /* Align items vertically */
}

.user img {
  margin-right: 10px; /* Add margin between the image and userDetail */
  height: 70px;
  width: 70px;
}

.userDetail {
  display: flex;
  flex-direction: column;
}

.role {
  font-weight: 500;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.welcome.h1{
  /* font-size: medium; */
  font-weight: 800;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; /*change font*/
}
</style>
