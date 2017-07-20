<template>
  <div class="columns">
    <div class="column is-3">
      <div class="box">
        <div class="field">
          <h1 class="title is-3">Create New User</h1>
        </div>
        <div class="field">
          <label class="label">Name</label>
          <input type="text" class="input" placeholder="Name">
        </div>
        <div class="field">
          <label class="label">Username</label>
          <input type="text" class="input" placeholder="Username">
        </div>
        <div class="field">
          <label class="label">Password</label>
          <input type="password" class="input" placeholder="password">
        </div>
        <div class="field">
          <button class="button">Sign Up</button>
        </div>
      </div>
    </div>

    <div class="column">
      <h1 class="title is-3">Latest Article</h1>
      <div class="box">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
    msg () {
    return this.$store.state.msg
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
