<template>
  <v-container fluid> <nav-menu></nav-menu>

    <v-layout row wrap>
      <v-flex  xs12  sm6 md6 offset-md3>

        <v-card class="lime lighten-5" >
          <v-container >
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-title style="font-size:20px"><h1>Enter Marks of  <span style="color: dodgerblue" >"{{items.Student_name}}"</span></h1> </v-card-title>
              </v-flex>

            </v-layout>

            <v-divider></v-divider>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer><br>
            <v-form enctype="multipart/form-data">

              <v-layout row wrap>



                <v-flex xs12 sm3 offset-sm1>
                  <v-text-field

                    :mask="mask"
                    v-model="values.ExamDate"
                    label="dd/mm/yyyy"  type="text" required
                  ></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs12 sm3 offset-sm1>
                  <v-text-field
                    :rules="MarksRules"
                    v-model="values.Subject"
                    label="subject"  type="text" required
                  ></v-text-field>
                  <!--<v-select-->
                    <!--:items="items"-->
                    <!--:filter="customFilter"-->
                    <!--v-model="items.Name_ofSubjects"-->
                    <!--item-text="Subject"-->
                    <!--:rules="[(m) => m.length > 0 || 'You must choose at least one']"-->
                    <!--label="Select"-->
                    <!--autocomplete-->
                    <!--flat-->
                    <!--tabindex="2"-->
                  <!--&gt;-->
                  <!--</v-select>-->
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs12 sm3 offset-sm1>
                  <v-text-field
                    :rules="[(m) => m.length>0 && /^[0-9]*(?:\.\d{1,2})?$/.test(m) || 'Must be numeric ']"
                    v-model="values.Marks"
                    label="marks"  type="text" required
                  ></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs12 sm3 offset-sm1>
                  <v-text-field
                    :rules="[(m) => m.length>0 && /^[0-9]*(?:\.\d{1,2})?$/.test(m) && m>=values.Marks || 'Must be numeric and greater than marks ']"
                    v-model="values.TotalMarks"
                    label="Total marks"  type="text" required
                  ></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs12 sm3>
                  <v-text-field
                    :rules="[(v) => v.length >0 || 'This field is required']"
                    v-model="values.ChapterName"
                    label="chapter"  type="text" required
                  ></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs12 sm8 offset-sm1>
                  <v-card-actions >
                    <v-btn class="text--white" color="primary" @click="confirm"  > SUBMIT </v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-card>

      </v-flex>


      <br>
      <v-spacer></v-spacer>

    </v-layout>
  </v-container></template>

<script>
  import Vue from 'vue'
  import Axios from 'axios'


  import Menu from '@/components/Admin/adminmenu'

  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data: function () {
      return {
        mask:"##/##/####",
items:{
  Student_name:'',

},
        values:  {

          ExamDate:'',
          Subject:'',
          ChapterName:'',
          TotalMarks:'',
          Marks:'',


        },

      }
    },
    computed: {
      formIsValid() {

      }
    },

    created:function() {
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
          this.items = response.data[0]

        })
        .catch((error) => {
          console.log(error)
        })
      }
      else {
        this.$router.push('/Admin/Login')
      }

    },

    methods: {
      // customFilter (item, queryText, itemText) {
      //   var temp = new Array();
      //   temp =item.Name_ofSubjects.split(",");
      //   const hasValue = val => val != null ? val : ''
      //   const text = hasValue(temp)
      //   const query = hasValue(queryText)
      //   return text.toString()
      //     .toLowerCase()
      //     .indexOf(query.toString().toLowerCase()) > -1
      // },
      confirm () {

        var jwt = Vue.localStorage.get('token')
        const headers = {
          headers: { 'Content-type': 'application/json',
            'Authorization': 'Bearer ' + Vue.localStorage.get('token') }
        }
        if(jwt){

          Axios.post('http://localhost:3000/Admin/result/'+ this.$route.params.id, {
            Student_name:this.values.Student_name,
            ExamDate:this.values.ExamDate,
            Subject:this.values.Subject,
            ChapterName:this.values.ChapterName,
            TotalMarks:this.values.TotalMarks,
            Marks:this.values.Marks
          },headers)
            .then((response) => {
              window.alert(JSON.stringify(response.data.message))
              this.$router.push('/Admin/studentdata')

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
    }
  }


</script>
