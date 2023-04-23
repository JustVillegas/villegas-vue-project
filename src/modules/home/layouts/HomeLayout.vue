<template>
  <header>
    <div class="title-menu-wrapper">
      <h1>
      David VueJs Project
      </h1>
     <span class="hamburguer" @click="toggleMenu"></span>
    </div>
    <nav class="desktop">
      <router-link class="link" :to="{name: 'homePage'}">Home</router-link>
      <router-link class="link" :to="{name: 'aboutPage'}">About</router-link>
      <div class="authBtns">
        <router-link :to="{name: 'registerPage'}" class="btns registerbtn" >Register</router-link>
        <router-link :to="{name: 'loginPage'}" class="btns loginbtn" >Log In</router-link>
      </div>
    </nav>
      <nav class="mobile" :class="isOpen ? 'opened' : 'closed'">
        <router-link class="link" :to="{name: 'homePage'}">Home</router-link>
        <router-link class="link" :to="{name: 'aboutPage'}">About</router-link>
        <div class="authBtnsMbl">
          <router-link :to="{name: 'registerPage'}" class="btns registerbtn" >Register</router-link>
          <router-link :to="{name: 'loginPage'}" class="btns loginbtn" >Log In</router-link>
        </div>
      </nav>
  </header>
  <router-view/>
</template>

<script>

export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>

.mobile {
  display: none;
}

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

@media screen and (min-width: 320px) and (max-width: 768px) {
  .title-menu-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .desktop {
    display: none;
  }
  .mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    background-color: #242424;
    width: 100%;
  }

  .link {
    padding: 10px 0px;
  }

  .authBtnsMbl {
    margin: 15px 0;
  }

  .mobile.opened {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .hamburguer {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    background-image: url('@/assets/menu.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: invert(100%);
    margin-left: 20px;
  }
  .closed {
    display: none;
  }
  header {
    flex-direction: column;
    padding: 10px 20px;
  }
  nav {
    margin-top: 10px;
  }
  .authBtns {
    margin-top: 10px;
  }

  .loginbtn {
    padding: 2px 5;
  }
}
</style>
