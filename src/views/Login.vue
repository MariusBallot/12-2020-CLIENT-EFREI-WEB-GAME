<template>
  <div class="login">
    <h2>WELCOME BACK CAPTAIN</h2>
    <h4>Log into the game</h4>
    <br />
    <form id="login" method="get">
      <input type="text" name="Uname" id="Uname" placeholder="Username" />
      <br /><br />

      <input type="Password" name="Pass" id="Pass" placeholder="Password" />
      <br /><br />

      <div class="item">
        <input type="button" name="log" id="log" value="Login" />
      </div>

      <div class="item">
        <input type="button" name="create" id="create" value="Create Account" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
<style lang="stylus" scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #6abadeba;
  font-family: 'Rubik';
}

.login {
  text-align: center;
  overflow: hidden;
  margin: auto;
  margin: 20 0 0 450px;
  padding: 80px;
  border-radius: 15px;
}

h2 {
  text-align: center;
  color: red;
}

h4 {
  text-align: center;
  color: #5EF7FF;
}

label {
  color: #08ffd1;
  font-size: 17px;
}

#Uname {
  width: 400px;
  height: 76px;
  border: 1px solid #5EF7FF;
  box-sizing: border-box;
  border-radius: 10px;
  padding-left: 8px;
  background-color: rgba(0, 0, 0, 0);
}

#Pass {
  width: 400px;
  height: 76px;
  border: 1px solid #5EF7FF;
  box-sizing: border-box;
  border-radius: 10px;
  padding-left: 8px;
  background-color: rgba(0, 0, 0, 0);
}

#log {
  width: 190px;
  height: 76px;
  border: 1px solid #5EF7FF;
  border-radius: 17px;
  padding-left: 7px;
  margin-right: 20px;
  background-color: rgba(0, 0, 0, 0);
  color: #5EF7FF;
}

#create {
  width: 190px;
  height: 76px;
  border: 1px solid red;
  border-radius: 17px;
  padding-left: 7px;
  background-color: rgba(0, 0, 0, 0);
  color: red;
}

.item {
  display: inline-block;
}
</style>