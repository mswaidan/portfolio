
<template>
  <div class="admin">
      <div class="md-title">Add a Project</div>
      <md-field>
        <label>Name</label>
        <md-input v-model="projectName"></md-input>
      </md-field>
      <md-datepicker v-model="projectDate">
        <label>Date</label>
      </md-datepicker>
      <md-field>
        <label>Location</label>
        <md-input v-model="projectLocation"></md-input>
      </md-field>
      <md-field>
        <label>Client</label>
        <md-input v-model="projectClient"></md-input>
      </md-field>
      <md-field>
        <label>Description</label>
        <md-textarea v-model="projectDescription"></md-textarea>
      </md-field>
      <div>
        <md-chips v-model="projectTags.tags" md-placeholder="Tags..."></md-chips>
      </div>

      <div class="image-wrapper"> Images 
        <md-button @click=addImage() class="md-icon-button">
          <md-icon>add</md-icon>
        </md-button>
        <div class="md-layout md-gutter" v-for="(image, index) in projectImages">
          <div class="md-layout-item">
            <md-field>
              <label>url</label>
              <md-input v-model="projectImages[index].url"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label>credit</label>
              <md-input v-model="projectImages[index].credit"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label>description</label>
              <md-input v-model="projectImages[index].description"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-button @click=dropImage(index) class="md-icon-button">
              <md-icon>clear</md-icon>
            </md-button>
          </div>
        </div>
      </div>
      <div>
        <md-button class="md-primary md-raised" @click="addProject(projectName, projectDescription, projectDate, projectImages, projectTags, projectLocation, projectClient)">Create project</md-button>
      </div>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  name: 'Admin',
  data () {
    return {
      projectName: null,
      projectDate: null,
      projectDescription: null,
      projectTags: null,
      projectLocation: null,
      projectClient: null,
      projectLink: null,
      projectImages: [{url: null, description: null, credit: null}],
    }
  },
  firestore () {
    return {
      projectTags: db.collection('tags').doc('UqyUbBn8fFQT6tthXSxX')
    }
  },
  mounted:  function () {
  },
  methods: {
    addProject (name, description, date, images, tags, location, client) {
      const createdAt = new Date()
      db.collection('projects').add({name, description, date, images, tags, location, client, createdAt})
    },
    addImage () {
      this.projectImages.push({url: null, description: null, credit: null})
    },
    dropImage (index) {
      console.log(index)
      this.projectImages.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
