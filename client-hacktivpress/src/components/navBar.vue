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
          <p>Hi, {{currUser}}</p>
        </div>
        <div class="navbar-item">
          <button type="button" class="button" @click="logoutGoGo">Log Out</button>
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
            <input class="input" type="password" placeholder="Password" v-model="login.pass" @keyup.enter="loginGoGo">
            <span class="icon is-small is-right">
              <i class="fa fa-key"></i>
            </span>
          </div>
        </div>
        <div class="navbar-item" >
          <button class="button" style="width: 100%;" @click="loginGoGo">Login</button>
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
    },
    currUser () {
      return this.$store.state.currUser
    }
  },
  methods: {
    loginGoGo() {
      let self = this
      axios.post('http://localhost:3000/auth/users/login', {
        username: self.login.user,
        password: self.login.pass
      })
      .then(function(response) {
        if (response.data == "failUsername") {
          alert("Username didn't Exist")
          self.login.user = ""
          self.login.pass = ""
        } else if (response.data == "failPassword") {
          alert("Wrong Password")
          self.login.pass = ""
        } else if (response.data.hasOwnProperty("token")) {
          localStorage.setItem("token", response.data.token)
          self.$store.commit('loginGoGo', {name: response.data.name})
          self.login.user = ""
          self.login.pass = ""
          self.$router.push('/home')
        } else {
          alert("ERROR")
        }
      })
    },
    logoutGoGo() {
      this.$router.push('/')
      localStorage.clear()
      this.$store.commit('logoutGoGo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
