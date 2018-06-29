
<template><v-container fluid>
  <navMenu></navMenu>
  <v-spacer></v-spacer>
  <v-layout>
    <v-flex offset-sm4>
      <h2   style="font-size: 30px" >
        Result of <span style="color: dodgerblue" >{{values.Student_name}}</span> of class <span style="color: dodgerblue" >{{values.Class}}</span>
      </h2>
    </v-flex>
  </v-layout>

  <v-spacer></v-spacer>
  <v-flex md3 sm6 >
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
  import Menu from '@/components/Admin/adminmenu'
  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data () {
      return {
        search: '',


        snow:false,
        headers: [
          { text: 'ExamDate', value: 'ExamDate'},
          { text: 'Chapter', value: 'ChapterName'},
          { text: 'Total', value: 'TotalMarks'},
          { text: 'Marks', value: 'Marks'},
          { text: 'Subject', value: 'Subject'},


        ],
        values:{
          Class:'',
          Student_name:'',
        },

        items: [{

          Subject: '',
          Marks: '',
          TotalMarks: '',
          ExamDate:'',
          ChapterName:'',

          value: false,
        }],
        sideNav: false,
        right: null
      }
    },

    created: function () {
      var jwt = Vue.localStorage.get('token')
      console.log('view id called' + jwt)

      if (jwt) {

        Axios.get('http://localhost:3000/Admin/studentdetail/' + this.$route.params.id,
        {
          headers: {
            'Authorization': 'bearer ' + Vue.localStorage.get('token')
          }
        })
        .then((response) => {
          console.log(response.data[0])
          this.values = response.data[0]

        })
        .catch((error) => {
          console.log(error)
        })
      }
      else {
        this.$router.push('/Admin/Login')
      }
      // console.log(Vue.localStorage.get('token'))
      // var jwt = Vue.localStorage.get('token')
        var jwt = Vue.localStorage.get('token')


        if (jwt) {

      Axios.get('http://localhost:3000/Admin/resultget/'+ this.$route.params.id,{
        headers: {
          'Authorization': 'bearer ' + Vue.localStorage.get('token')
        }
      })
        .then((response) => {
          this.items = response.data
if(response.status===404){
            window.alert("No data for this id")
}
        })
        .catch((error) => {
          console.log(error)
          window.alert(JSON.stringify(error.response.data.message))
        })
        }
        else {
          this.$router.push('/Admin/Login')
        }


    },



  }
</script>
