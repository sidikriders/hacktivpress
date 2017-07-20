<template>
  <nav class="navbar">

    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
    </div>

    <div class="navbar-menu">

      <div class="navbar-start">
        <div class="navbar-item">
          <div class="control has-icons-right">
            <input class="input" type="text" placeholder="Search">
            <span class="icon is-small is-right">
              <i class="fa fa-search"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="navbar-end" v-if="isLogin">
        <div class="navbar-item">
          <p>Hi, {{currUser.name}}</p>
        </div>
        <div class="navbar-item">
          <button type="button" class="button">Log Out</button>
        </div>
      </div>
      <div class="navbar-end" style="margin-right: 20px;" v-else>
        <div class="navbar-item">
          <div class="control has-icons-right">
            <input class="input" type="text" placeholder="Username" v-model="login.user">
            <span class="icon is-small is-right">
              <i class="fa fa-user-circle-o"></i>
            </span>
          </div>
        </div>
        <div class="navbar-item">
          <div class="control has-icons-right">
            <input class="input" type="text" placeholder="Password" v-model="login.pass">
            <span class="icon is-small is-right">
              <i class="fa fa-key"></i>
            </span>
          </div>
        </div>
        <div class="navbar-item" >
          <button class="button" style="width: 100%;">Login</button>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      login: {
        user: "",
        pass: ""
      }
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
