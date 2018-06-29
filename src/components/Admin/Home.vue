
<template><v-container fluid>
  <navMenu></navMenu>
  <v-spacer></v-spacer>
  <v-layout>
    <v-flex offset-sm4>
      <h2   style="font-size:30px;font-family: 'Comic Sans MS'" >
       New Registrations
      </h2>
    </v-flex>
  </v-layout>

    <v-spacer></v-spacer>
  <v-flex md3 sm6 >
    <v-text-field
      v-model="search"
      append-icon="search"
      label="Enter email"
      single-line
      hide-details
    ></v-text-field></v-flex>
  <br>
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
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.Father_name}}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.Father_occupation}}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.father_contact_number }}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.Mother_name}}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.Mother_occupation }}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.mother_contact_number}}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.email }}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.Gender}}</td>

      <td class="text-xs-left"  style="font-size:15px"> {{props.item.DOb}}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item. Sibling}}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.Sibling_name }}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.School_name}}</td>
      <td class="text-xs-left"  style="font-size:15px">{{ props.item.Address }}</td>
      <td class="text-xs-left" style="font-size:15px">{{ props.item.Class}}</td>
      <td class="text-xs-left" style="font-size:15px">{{ props.item.No_of_Sub}}</td>
      <td class="text-xs-left" style="font-size:15px">{{ props.item.Name_ofSubjects.toString()}}</td>
    <td>
      <v-btn class="primary"  @click="confirm" v-bind:to="{name: 'stud', params: {id: props.item._id } }">
       Confirm student
      </v-btn></td>
    </template>
    <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        Sorry, nothing to display here :(
      </v-alert></template>
  </v-data-table>
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

        sideNav:false,
        snow:false,
        headers: [
          { text: 'Student Name', value: 'Student_name' },
          { text: 'Father Name', value: 'Father_name' },
          { text: 'Father Occupation', value: 'Father_occupation' },
          { text: 'Father contact number', value: 'father_contact_number' },
          { text: 'Mother Name', value: 'Mother_name' },
          { text: 'Mother Occupation', value: 'Mother_occupation' },
          { text: 'Mother contact number', value: 'mother_contact_number' },
          { text: 'Email', value: 'email' },
          { text: 'Gender', value: 'Gender' },
          { text:  '   Birthdate ', value: '   DOb   ' },
          { text: 'Sibling', value: 'Sibling' },
          { text: 'Sibling name', value: 'Sibling_name'},
          { text: 'School name', value: 'School_name'},
          { text: 'Address', value: 'Address'},
          { text: 'Class', value: 'Class'},
          { text: 'No. of Sub', value: 'No_of_Sub'},
          { text: 'Name of Subjects', value: ' Name_ofSubjects'},


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
          Name_ofSubjects:[]
        }],
        value: false,

        sideNav: false,
        right: null
      }
    },

    created: function () {
      var jwt = Vue.localStorage.get('token')

      if (jwt) {
      Axios.get('http://localhost:3000/Admin/registered', {
        headers: {
          'Authorization': 'bearer ' + Vue.localStorage.get('token')
        }
      })
        .then((response) => {
          this.items = response.data

        })
        .catch((error) => {
          window.alert(JSON.stringify(error.response.data.message))
        })}
        else {
        this.$router.push('/Admin/Login')
      }

    },



  }
</script>
