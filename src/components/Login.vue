<template>
  <div class="hello">
    Hello
    <div v-for='(project, idx) in projects' :key='idx'>
      {{project}}
    </div>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  name: 'HelloWorld',
  data () {
    return {
      projects: []
    }
  },
  firestore () {
    return {
      projects: db.collection('projects').orderBy('date')
    }
  },
  mounted:  function () {
    console.log(db)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
