
<template><v-container fluid>
  <navMenu></navMenu>
  <v-spacer></v-spacer>
  <v-layout>
    <v-flex offset-sm4>
      <h2   style="font-size:30px;font-family: 'Comic Sans MS'">
       Student Details
      </h2>
    </v-flex>
  </v-layout>
<br>
  <br>
  <v-flex md8 sm12 xs12> <v-layout row wrap>
    <v-flex md2>
      <v-text-field
        v-model="Class"
        append-icon="search"
        label="Enter class"
        single-line
        hide-details
      ></v-text-field></v-flex>
    <v-flex md2 offset-sm1>

      <v-select
        :items="name"
        v-model="Subject"
        :rules="[(m)=>m.length>0 || 'This field is required']"
        label="Choose subjects"
        offset-x
        autocomplete
      ></v-select>
    </v-flex>
    <v-flex md2 offset-sm1>

      <v-select
        :items="board"
        v-model="Board"
        :rules="[(m)=>m.length>0 || 'This field is required']"
        label="Chooseboard"
        offset-x
        autocomplete

      ></v-select>
    </v-flex>
    <v-flex md2 offset-sm2>
    <v-text-field
      v-model="search"
      append-icon="search"
      label="Search"
      single-line
      hide-details
    ></v-text-field></v-flex>
  </v-layout>
 <v-btn @click="save" class="primary">Show</v-btn></v-flex>
  <v-spacer></v-spacer>

  <br>
  <v-flex >

  <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
:search="search"
    :no-data-text="'No data available'"

  >
    <template slot-scope="props">
      <v-tooltip bottom>
        <span slot="activator"  style="font-size:15px">
          {{ props.header.text }}
        </span>
        <span  style="font-size:15px">
          {{ props.header.text }}
        </span>
      </v-tooltip>
    </template>
    <template slot="items" slot-scope="props">

      <td class="text-xs-left"  style="font-size:15px" >{{ props.item.Student_name }}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.father_contact_number }}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.mother_contact_number}}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.email }}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.Gender}}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.Sibling_name }}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.School_name}}</td>
      <td class="text-xs-left"  style="font-size:15px">{{props.item.Address}}</td>&nbsp;&nbsp;
      <td class="text-xs-left" style="font-size:15px">{{props.item.Class}}</td>
      <td class="text-xs-left" style="font-size:15px">{{ props.item.No_of_Sub}}</td>
      <td class="text-xs-left" style="font-size:15px">{{ props.item.Name_ofSubjects}}</td>
      <td class="text-xs-left" style="font-size:15px">{{ props.item.Fees}}</td>

      <td>
        <v-btn class="primary"  v-bind:to="{name: 'AFees', params: {id: props.item._id }}">
          Fees Details
        </v-btn></td>

      <td>
        <v-btn class="primary"  v-bind:to="{name: 'Mark', params: {id: props.item._id }}">
          Result
        </v-btn></td>
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
        subject:'',
        name:['Science','Maths','SS','English','Grammar','Hindi','Gujarati','Sanskrit'],
        board: ['State Board','Central Board','International Board'
        ],
Class:'',
        snow:false,
        headers: [
          { text: 'Student Name', value: 'Student_name' },
          { text: 'Father contact number', value: 'father_contact_number' },
          { text: 'Mother contact number', value: 'mother_contact_number' },
          { text: 'Email', value: 'email' },
          { text: 'Gender', value: 'Gender' },
          { text: 'Sibling_name', value: 'Sibling_name'},
          { text: 'School_name', value: 'School_name'},
          { text: 'Address', value: 'Address'},
          { text: 'Class', value: 'Class'},
          { text: 'No_of_Sub', value: 'No_of_Sub'},
          { text: 'Name Of Subjects', value: 'Name Of Subjects'},
          { text: 'Fees', value: 'Fees'},



        ],
        items: [{
          _id:'',
          Student_name: '',
          Father_name: '',
          Father_occupation: '',
          father_contact_number: '',
          Mother_name: '',
          Mother_occupation: '',
          mother_contact_number: '',
          email: '',
          Gender: '',
          DOb: '',
          Sibling: '',
          Sibling_name: '',
          School_name: '',
          Address: '',
          Class: '',
          No_of_Sub: '',
          Name_ofSubjects:'',
          Fees:'',

        }],

        value: false,

        sideNav: false,
        right: null
      }
    },


    created: function () {
      var jwt = Vue.localStorage.get('token')
      console.log('view id called' + jwt)

      if (jwt) {


        Axios.get('http://localhost:3000/Admin/students', {
        headers: {
          'Authorization': 'bearer ' + Vue.localStorage.get('token')
        }
      })
        .then((response) => {
          this.items = response.data

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
      methods:{
      save() {

          var jwt = Vue.localStorage.get('token')
          console.log('view id called' + jwt)
        const headers = {
          headers: { 'Content-type': 'application/json',
            'Authorization': 'Bearer ' + Vue.localStorage.get('token') }
        }
          if (jwt) {

            Axios.post('http://localhost:3000/Admin/class', {
              Class: this.Class,
              Subject:this.Subject,
              Board:this.Board
            },headers)
          .then((response) => {
            this.items = response.data

          })
          .catch((error) => {
            console.log(error)
            window.alert(JSON.stringify(error.response.data.message))
          })
          }
          else {
            this.$router.push('/Admin/Login')
          }

      }
    },



  }
</script>
