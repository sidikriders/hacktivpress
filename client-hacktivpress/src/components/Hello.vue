<template>
  <div class="columns">
    <sign-up-comp></sign-up-comp>
    <latest-article></latest-article>
  </div>
</template>

<script>
import signUpComp from './signUpComp.vue'
import latestArticle from './latestArticle'

export default {
  name: 'hello',
  data() {
    return {
    }
  },
  components: {
    signUpComp,
    latestArticle
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
