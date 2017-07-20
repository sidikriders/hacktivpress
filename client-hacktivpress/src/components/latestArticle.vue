<template>
  <div class="column">
    <h1 class="title is-3">Latest Article</h1>
    <div class="box">

    </div>
  </div>
</template>

<script>
export default {
  name: 'latest-article',
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
