
<template><v-container fluid>
  <navMenu></navMenu>
  <v-spacer></v-spacer>
  <v-flex offset-sm1>
  <v-layout>
    <v-flex offset-sm4>
      <h2   style="font-size:30px;font-family: 'Comic Sans MS'">
      Enter Marks
      </h2>
    </v-flex>
  </v-layout>
  <br>
  <br>
  <v-flex md8 sm9 > <v-layout row wrap>
    <v-flex md3>
    <v-text-field
      v-model="Class"
      append-icon="search"
      label="Enter class"
      single-line
      hide-details
    ></v-text-field></v-flex>
    <v-flex md3 offset-sm1>

      <v-select
        :items="name"
        v-model="Subject"
        :rules="[(m)=>m.length>0 || 'This field is required']"
        label="Choose subjects"
        offset-x
        autocomplete
      ></v-select>
    </v-flex>
    <v-flex md3 offset-sm1>

      <v-select
        :items="board"
        v-model="Board"
        :rules="[(m)=>m.length>0 || 'This field is required']"
        label="Chooseboard"
        offset-x
        autocomplete

      ></v-select>
    </v-flex>
    <v-btn @click="save" class="primary" >Show</v-btn></v-layout>
  </v-flex><v-divider></v-divider>
    <div v-show="show">  <v-layout>

    <v-flex md3 >
      <v-text-field
        v-model="TotalMarks"
        append-icon="search"
        label="Total marks"
        single-line
        hide-details
      ></v-text-field></v-flex>

    <v-flex md4 offset-sm1>
      <v-text-field
        v-model="ChapterName"
        single-line
        label="chapter"
        :rules="[(m)=>m.length>0 || 'This field is required']"
        hide-details
      ></v-text-field></v-flex>

    <v-flex md4 offset-sm1>
      <v-text-field

        :mask="mask"
        v-model="ExamDate"
        label="dd/mm/yyyy"  type="text" required
      ></v-text-field>
    </v-flex>
  </v-layout>

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
        <td class="text-xs-left"  style="font-size:15px">{{ props.item.email }}</td>
        <td class="text-xs-left" style="font-size:15px">{{ props.item.Class}}</td>
        <td class="text-xs-left" style="font-size:15px"><v-text-field
          :rules="[(m) => m.length>0 && /^[0-9]*(?:\.\d{1,2})?$/.test(m) && m<=TotalMarks || 'Must be numeric and less or equal to total marks ']"
          v-model="Marks"
          label="marks"  type="text" required
        ></v-text-field></td>
        <td>
          <v-btn class="primary" @click="confirm(props.item._id)">
           submit
          </v-btn></td>

      </template>
    </v-data-table>
  </v-flex>
  </div>
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
        mask:"##/##/####",
        search: '',
         show:false,
        ExamDate:'',
        Subject:'',
        ChapterName:'',
        TotalMarks:'',
        Marks:'',
        board: ['State Board','Central Board','International Board'
        ],
        name:['Science','Maths','SS','English','Grammar','Hindi','Gujarati','Sanskrit'],
        Class:'',
        snow:false,
        headers: [
          { text: 'Student Name', value: 'Student_name' },
          { text: 'Email', value: 'email' },
          { text: 'Class', value: 'Class'},
          { text: 'Marks', value: 'Marks'},
        ],
        items: [{
          _id:'',
          Student_name: '',
          email: '',

          Class: '',

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
             this. show=true
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
      confirm (_id) {

        var jwt = Vue.localStorage.get('token')
        const headers = {
          headers: { 'Content-type': 'application/json',
            'Authorization': 'Bearer ' + Vue.localStorage.get('token') }
        }
        if(jwt){

          Axios.post('http://localhost:3000/Admin/result/'+ _id,
            {
              ExamDate:this.ExamDate,
              Subject:this.Subject,
              ChapterName:this.ChapterName,
              TotalMarks:this.TotalMarks,
              Marks:this.Marks
            },headers)
            .then((response) => {



            })
            .catch((error) => {
              console.log(error)
              window.alert(JSON.stringify(error.response.data.message))
            })
          Axios.post('http://localhost:3000/Admin/sendmarks/'+ _id, {

            ExamDate:this.ExamDate,
            Subject:this.Subject,
            ChapterName:this.ChapterName,
            TotalMarks:this.TotalMarks,
            Marks:this.Marks

          }).then(response => {
            window.alert(JSON.stringify(response.data.message))

          }).catch(error => {
            console.log('Not done')
            console.log(error)
          })


      }
      else {
        this.$router.push('/Admin/Login')
    }

      }
    },
    // text: req.body.Student_name  + 'has scored'+req.body.marks+'out of'+req.body.TotalMarks +
    // 'in test conducted on'
    // +req.body.ExamDate+'of chapter'+req.body.ChapterName


  }
</script>
