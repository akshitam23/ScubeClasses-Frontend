
<template><v-container fluid="true">
  <navMenu></navMenu>
    <v-flex >
      <h2 class="text-md-center mb-5" style="font-size: 35px;font-family:MV Boli;color:#37474F;">
        Result
      </h2>
    </v-flex>

  <v-flex md3 sm6 offset-sm1>
    <v-text-field
      v-model="search"
      append-icon="search"
      label="Enter  search"
      single-line
    ></v-text-field></v-flex>
  <br>
  <v-flex md11 sm11 offset-sm1 >
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      class="elevation-1"
      :no-data-text="'No data available'"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left" style="font-size:20px">{{ props.item.ExamDate}}</td>
        <td class="text-xs-left" style="font-size:20px">{{ props.item.ChapterName}}</td>
        <td class="text-xs-left" style="font-size:20px">{{ props.item.TotalMarks}}</td>
        <td class="text-xs-left" style="font-size:20px">{{ props.item.Marks }}</td>
        <td class="text-xs-left" style="font-size:20px">{{ props.item.Subject }}</td>

      </template>
    </v-data-table>
  </v-flex>
</v-container>
</template>

<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import Menu from '@/components/Student/afterlogin/menu1'
  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data () {
      return {
        search: '',

       sideNav:false,
        snow:false,
        headers: [
          { text: 'ExamDate', value: 'ExamDate'},
          { text: 'Chapter', value: 'ChapterName'},
          { text: 'Total', value: 'TotalMarks'},
          { text: 'Marks', value: 'Marks'},
          { text: 'Subject', value: 'Subject'},


        ],


        items: [{

          Subject: '',
          Marks: '',
          TotalMarks: '',
          ExamDate:'',
          ChapterName:'',

          value: false,
        }],

        right: null
      }
    },

    created: function () {
      var jwt = Vue.localStorage.get('token')
      console.log('view id called' + jwt)

      if (jwt) {

        Axios.get('http://localhost:3000/Student/result' ,
          {
            headers: {
              'Authorization': 'bearer ' + Vue.localStorage.get('token')
            }
          })
          .then((response) => {

            this.items = response.data

          })
          .catch((error) => {

          })
      }
      else {
        this.$router.push('/login')
      }


    },



  }
</script>
