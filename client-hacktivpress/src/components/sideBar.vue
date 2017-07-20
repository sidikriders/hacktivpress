<template>
  <div class="column is-3">
    <div class="box">
      <br>
      <button type="button" class="button" @click="goToCreate">Make a Post</button>
      <br>
      <hr>
      <h1>Home</h1>
      <hr>
      <h1>My Post</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
  },
  computed: {
  },
  methods: {
    goToCreate() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
