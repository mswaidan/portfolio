<template>
  <div id="app">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-transparent md-primary" md-elevation="0">  
        <div class="md-toolbar-section-start">
          <md-autocomplete v-if="filterList" v-model="projectFilter" :md-options="filterList">
            <label>Type to filter projects...</label>
          </md-autocomplete>
        </div>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button" @click="showBio = !showBio">
            <md-avatar>
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-513c1.appspot.com/o/160317-HEAD-SHOTS-29.jpg?alt=media&token=730bcb3b-8e2e-4d4f-8848-27c299d3fae4">
            </md-avatar>
          </md-button>
          <md-button @click="showAddProject= !showAddProject" class="md-icon-button">
            <md-icon>note_add</md-icon>
          </md-button>
        </div>
      </md-app-toolbar>
      <md-app-content> 
        <bio v-on:close-bio="showBio = false" v-if="showBio"/>
        <add-project v-on:close-add-project="showAddProject = false" v-if="showAddProject"/>
        <gallery v-if="!showAddProject && !showBio" :projects='filteredProjects'/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>

import Gallery from './components/Gallery'
import AddProject from './components/AddProject'
import Bio from './components/Bio'

import { db } from './main'

export default {
  name: 'App',
  components: {
    Gallery,
    AddProject,
    Bio
  },
  data () {
    return {
      showAddProject: false,
      showBio: false,
      projects: [],
      tags: [],
      projectFilter: null
    }
  },
  computed: {
    orderedProjects: function () {
      return this.projects.reverse()
    },
    filterList: function () {
      if (this.projects && this.tags.tags) {
        let projectNames = this.projects.map(project => project.name)
        return this.tags.tags.concat(projectNames)
      }
      //hacky
      else return ['Architecture', 'Computation', 'Grasshopper', 'Installation', 'Fabrication']
    },
    filteredProjects: function () {
      //return this.orderedProjects.filter(project => project.tags.tags.length > 2)
      if (this.projectFilter) {
        return this.orderedProjects.filter(project => project.tags.tags.includes(this.projectFilter) || project.name.includes(this.projectFilter))
      }
      else return this.orderedProjects
    }
  },
  firestore () {
    return {
      projects: db.collection('projects').orderBy('date'),
      tags: db.collection('tags').doc('UqyUbBn8fFQT6tthXSxX')
    }
  },
}
</script>

<style>
.md-app {
  max-height: 100vh;
}
</style>
