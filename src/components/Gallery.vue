<template>
  <div class="gallery">
    <div class="project" v-for='(project, idx) in projects' :key='idx'>
      <div class="carousel-wrapper">
        <div class="inner">
          <carousel :loop="true" :per-page="1" :navigationEnabled="false" :paginationEnabled="true">
          <slide v-for="image in project.images">
          <img :src="image.url">
          </slide>
          </carousel>
        </div>
      </div>
      <md-content>
        <div class="md-layout project-info">
          <div class="md-layout-item">
            <div class="md-title">{{project.name}}</div>
            <div class="md-subheading">{{formattedDate(project.date)}}</div>
            <div class="md-subheading">{{project.location}}</div>
            <div v-if="project.client" class="md-subheading">Client: {{project.client}}</div>
            <div v-if="project.tags" class="md-subheading">Tags: <span class="md-body-1" v-for="tag in project.tags.tags">{{tag}}, </span></div>
          </div>
          <div class="md-layout-item md-size-60">
            <div class="md-body-1">{{project.description}}</div>
          </div>
          <div class="md-layout-item md-size-20"></div>
        </div>
      </md-content>
      <md-divider/>
    </div>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  name: 'Gallery',
  props: ['projects'],
  methods: {
    formattedDate: function (ts) {
      let date = new Date(ts.seconds*1000)
      let locale = "en-us"
      let month = date.toLocaleString(locale, { month: "long" })
      let year = date.toLocaleString(locale, {year: "numeric" })
      return (month + ' ' + year)
    }
  },
  data () {
    return {
    }
  },
  mounted:  function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallery{
  height:100%
}
.carousel-wrapper{
  width:100%;
}
.inner{
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
.project{
  padding-top:64px;
}
.project-info{
  padding-bottom:16px;
}
</style>
