<template>
  <div class="login">
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      projects: []
    }
  },
  firestore () {
    return {
    }
  },
  mounted:  function () {
    console.log(firebase)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
