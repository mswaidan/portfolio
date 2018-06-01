<template>
  <div class="nav">
    <md-autocomplete v-model="projectFilter" :md-options="filterList">
      <label>Search / filter projects...</label>
    </md-autocomplete>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  props: ['projects', 'tags'],
  data () {
    return {
      projectFilter: null
    }
  },
  computed: {
    filterList: function () {
      if (this.projects && this.tags.tags) {
        let projectNames = this.projects.map(project => project.name)
        return this.tags.tags.concat(projectNames)
      }
    }
  },
  mounted: function ()  {
 console.log(this.filterList) 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  width:50%
}
</style>
