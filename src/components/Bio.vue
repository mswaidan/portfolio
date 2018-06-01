<template>
  <div class="md-layout md-alignment-center-center">
    <div class="md-layout-item md-size-50 md-small-size-80">
      <md-toolbar class="md-transparent" md-elevation="0">
        <h3 class="md-title" style="flex: 1">Hello, I'm Matt Swaidan</h3>
        <md-button class="md-icon-button" @click="$emit('close-bio')">
          <md-icon>close</md-icon>
        </md-button>
      </md-toolbar>
      <p class="md-subheading">I'm a designer interested in computation & digital fabrication. <br>I get really excited about <strong>connecting things on the web.</strong></p>
      <p>Recently, I've been contributing to <a href="http://speckle.works">Speckle.works</a></p>
      <p>This site was built from scratch in about a day using <a href="http://www.vuejs.org">Vue.js</a>, <a href="http://vuematerial.io">Vuematerial</a> and <a href="http://firebase.google.com">Firebase</a>. You can check the source code out here: <a href="http://github.com/mswaidan/portfolio">Github</a></p>
      <md-tabs md-dynamic-height>
        <md-tab md-label="Education">
          <md-list class="md-triple-line">
            <md-list-item v-for="school in orderedEducation">
              <div class="md-list-item-text">
                <span>{{school.school}}</span>
                <span>{{school.degree}}</span>
                <p>{{formattedDate(school.gradDate)}}</p>
              </div>
            </md-list-item>
          </md-list>
        </md-tab>
        <md-tab md-label="Work History" md-class="md-scrollbar">
          <md-list class="md-triple-line">
            <md-list-item v-for="job in orderedWork">
              <div class="md-list-item-text">
                <span>{{job.company}}</span>
                <span>{{job.title}}</span>
                <p>{{formattedDate(job.startDate)}} - {{formattedDate(job.endDate)}}</p>
              </div>
            </md-list-item>
          </md-list>
        </md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  name: 'Bio',
  props: ['showBio'],
  methods: {
    formattedDate: function (ts) {
      if (ts){
        let date = new Date(ts.seconds*1000)
        let locale = "en-us"
        let month = date.toLocaleString(locale, { month: "long" })
        let year = date.toLocaleString(locale, {year: "numeric" })
        return (month + ' ' + year)
      }
      else return null
    }
  },
  computed: {
    orderedWork: function () {
      return this.work.reverse()
    },
      orderedEducation: function () {
        return this.education.reverse()
      },

  },
  data () {
    return {
      work: [],
      education: []
    }
  },
  firestore () {
    return {
      work: db.collection('workhistory').orderBy('startDate'),
      education: db.collection('education').orderBy('gradDate')
    }
  },
  mounted:  function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-toolbar{
  padding: 0px;
}
.md-title{
  margin:0px;
}
</style>
