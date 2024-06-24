<template>
  <div class="navbar">
    <div class="welcome">
      <!-- <h1>Welcome Back!</h1> -->
    </div>
    <div class="user">
      <img src="/aqil.png" alt="logo" class="profile-image" />
      <div class="userDetail">
        <span class="name">{{ name }}</span>
        <span class="role">{{ role }}</span>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Mr Aqil",
      role: "IT Manager"
    }
  }
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
  align-items: center;
  /* Align items vertically */
}

.profile-image {
  border-radius: 50%;
  width: 100px; /* Adjust the size as needed */
  height: 100px; /* Ensure height matches width for a perfect circle */
  object-fit: cover; /* Ensures the image covers the entire container */
}


.user img {
  margin-right: 10px;
  /* Add margin between the image and userDetail */
  height: 70px;
  width: 70px;
}

.userDetail {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 800;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.role {
  font-weight: 200;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.welcome.h1 {
  /* font-size: medium; */
  font-weight: 800;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /*change font*/
}
</style>
