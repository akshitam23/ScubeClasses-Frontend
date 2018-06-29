<template>
  <v-container fluid>
    <nav-menu></nav-menu>
    <v-flex xs12 sm10 offset-sm1>

      <v-expansion-panel color="cyan lighten-4" >
        <v-expansion-panel-content v-for="item in items" :key="item" expand-icon="mdi-menu-down">
          <div slot="header" style="font-family:MV Boli ;color:#EC407A;font-size:30px">{{item.Questions}}</div>
          <v-card>
            <v-card-text class="grey lighten-3" style="font-family:MV Boli ;color:#C43462;font-size:30px">{{item.Answers}}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel></v-flex>

  </v-container>
</template>
<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import faq from '@/assets/FAQ.jpg'
  import Menu from '@/components/student/menu'
  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data: function () {
      return{
        j: {src:faq},
        items:{
        Questions:'',
        Answers:'',
        Status:'',
      }}
    },
    created: function () {

        Axios.get('http://localhost:3000/student/FAQ', {
          headers: {

          }
        })
          .then((response) => {
            this.items = response.data

          })
          .catch((error) => {
            console.log(error)
          })
      }
    }

</script>
