<template>
  <header>
    <h1>
      David VueJs Project
    </h1>
    <nav>
      <router-link class="link" :to="{name: 'homePage'}">Home</router-link>
      <router-link class="link" :to="{name: 'aboutPage'}">About</router-link>
      <div class="authBtns">
        <router-link :to="{name: 'registerPage'}" class="btns registerbtn" >Register</router-link>
        <router-link :to="{name: 'loginPage'}" class="btns loginbtn" >Log In</router-link>
      </div>
    </nav>
  </header>
  <router-view/>
</template>

<script>

export default {

}
</script>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
  color: #ffffff;
  background: #1f1f1f;
}

header h1 {
  font-weight: 400;
  font-size: 1.5rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
}

.authBtns {
  margin-left: 0 10px;
}
.btns {
  padding: 8px 24px;
  border: 0;
  margin: 0 10px;
  color: #ffffff;
  font-size: 18px;
}

.link {
  padding: 0 10px;
}
.registerbtn {
  background: #2f20ff;
}

.registerbtn:hover {
  cursor: pointer;
  background: #2414ff;
}

.loginbtn {
  background: #ffffff;
  color: #1f1f1f;
}
.loginbtn:hover {
  cursor: pointer;
  background: #ececec;
}
</style>
