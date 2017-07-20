<template>
  <div class="column is-3">
    <div class="box">
      <div class="field">
        <h1 class="title is-3">Create New User</h1>
      </div>
      <div class="field">
        <label class="label">Name</label>
        <input type="text" class="input" placeholder="Name" v-model="newUser.name">
      </div>
      <div class="field">
        <label class="label">Username</label>
        <input type="text" class="input" placeholder="Username" v-model="newUser.username">
      </div>
      <div class="field">
        <label class="label">Password</label>
        <input type="password" class="input" placeholder="password" v-model="newUser.password" @keyup.enter="signUpGoGo">
      </div>
      <div class="field">
        <button class="button" @click="signUpGoGo">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sign-up-comp',
  data() {
    return {
      newUser: {
        name: "",
        username: "",
        password: ""
      }
    }
  },
  computed: {
  },
  methods: {
    signUpGoGo() {
      let self = this
      if (self.newUser.name == "" || self.newUser.username == "" || self.newUser.password == "") {
        alert("please fill all the fields before submitting")
      } else {
        axios.post('http://localhost:3000/api/users', self.newUser)
        .then(function(response) {
          if (response.data == "failUsername") {
            alert("Username already exist!")
            self.newUser.username = ""
          } else if (response.data == "success") {
            alert("user created successfully, please login to continue")
            self.newUser.username = ""
            self.newUser.name = ""
            self.newUser.password = ""
          } else {
            alert("ERROR")
          }
        })
        .catch(function(err) {
          aler(err)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
