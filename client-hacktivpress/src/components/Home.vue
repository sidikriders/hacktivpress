<template>
  <div class="columns">
    <side-bar></side-bar>
    <div class="column">
      <h1 class="title is-3">Latest Article</h1>
      <div class="box">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
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
