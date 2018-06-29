<template>
  <v-container fluid> <nav-menu></nav-menu>

      <v-layout>
        <v-flex  xs9 sm9 md9 offset-sm2>

          <v-card class="lime lighten-5" width="1000">
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card-title style="font-size:20px"><h1>Confirm Student</h1> </v-card-title>
                </v-flex>

              </v-layout>

              <v-divider></v-divider>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer><br>
              <v-form enctype="multipart/form-data">

                <v-layout row wrap>
                  <v-flex xs12 sm11 md12 offset-sm1>
                    <v-text-field  v-model="items.Student_name"  label="Name of Student" type="text" required>{{items.Student_name}}</v-text-field>
                  </v-flex>

                  <v-flex xs12 sm3 offset-sm1>
                    <v-text-field   v-model="items.Father_name"  label="Father's Name"  type="text" required>{{items.Father_name}}</v-text-field>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs12 sm3>
                    <v-text-field
                                  v-model="items.Father_occupation"
                                  label="Father's Occupation"  type="text" required
                    >{{items.Father_occupation}}</v-text-field>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs12 sm3>
                    <v-text-field
                                  name="Contact_number"
                                  label="Father's Contact Number"
                                  required
                                  :mask="mask"
                                  v-model="items.father_contact_number"
                                 >{{items.father_contact_number}}
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm3 offset-sm1>
                    <v-text-field    label="Mother's Name"  v-model="items.Mother_name" type="text" required>{{items.Mother_name}}</v-text-field>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs12 sm3>
                    <v-text-field
                                  label="Mother's Occupation"  v-model="items.Mother_occupation" type="text" required
                    >{{items.Mother_occupation}}</v-text-field>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs12 sm3>
                    <v-text-field
                      :mask="mask"
                                  label="Mother's Contact Number"
                                  required
                                  v-model="items.mother_contact_number"
                                  >
                  {{items.mother_contact_number}}  </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm5 offset-sm1>
                    <v-text-field
                                  label="E-mail"
                                  name="email"
                                  v-model="items.email"
                                  type="email"

                                  required
                    >{{items.email}}</v-text-field>
                  </v-flex><v-spacer></v-spacer>
                  <v-flex  sm4>

                      <v-text-field
                                   v-model="items.DOb"

                                    label="Birthdate"
                                    required
                                    persistent-hint
                      >{{items.DOb}}</v-text-field>


                  </v-flex>

                  <v-spacer></v-spacer><v-spacer></v-spacer>
                  <v-flex xs12 sm12 offset-sm0> <v-layout>
                    <v-flex xs12 sm12 offset-sm1>
                      <v-text-field

                        label="Gender"
                        required
                        v-model="items.Gender"
                        >
                        {{items.Gender}}  </v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12 offset-sm1>
                      <v-text-field

                        label="Sibling"
                        required
                        v-model="items.Sibling"
                      >
                        {{items.Sibling}}  </v-text-field>
                    </v-flex>
                  </v-layout>
                  </v-flex>

                  <v-flex xs6 sm6 offset-sm1 >
                    <v-text-field   type="text" v-model="items.Sibling_name"
                                  label="Sibling_name">{{items.Sibling_name}}
                    </v-text-field>
                  </v-flex>

                  <v-flex xs12 sm10 offset-sm1>

                    <v-text-field  type="text" v-model="items.School_name" required
                                  label="Name of School">{{items.School_name}}

                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm10 offset-sm1>
                    <v-text-field
                                  type="text"
                                  v-model=" items.Address"
                                  required
                                  label="Address">{{items.Address}}
                    </v-text-field>
                  </v-flex>
                  <v-layout row>
                    <v-flex xs12 sm3 offset-sm1 >
                      <v-text-field v-model="items.Class" label="Class">{{items.Class}}</v-text-field>
                      </v-flex>
                    <v-spacer></v-spacer>

                    <v-flex xs12 sm3 offset-sm1>
                      <v-text-field v-model="items.No_of_Sub" label="Total subjects">{{items.No_of_Sub}}</v-text-field>

                    </v-flex> <v-flex xs12 sm8 offset-sm1>
                    <v-text-field   v-model="items.Name_ofSubjects[0]" label="Subject names">{{items.Name_ofSubjects}}</v-text-field>

                  </v-flex>
                    <v-flex xs12 sm8 offset-sm1>
                      <v-text-field   v-model="items.Board" label="Board">{{items.Board}}</v-text-field>

                    </v-flex> </v-layout>
                  <v-layout>
                    <v-flex xs12 sm3 offset-sm1 >
                      <v-text-field   type="text" v-model="items.Fees"
                                      label="Fees">
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm3 offset-sm1 >
                      <v-text-field   type="password" v-model="items.password"
                                      label="Password">
                      </v-text-field>
                    </v-flex>
                </v-layout>
                  <v-spacer></v-spacer>

                  <v-spacer>

                  </v-spacer>

                  <v-flex xs12 sm8 offset-sm1>
                    <v-card-actions >
                      <v-btn class="text--white" color="primary" @click="confirm"  :disabled="!formIsValid" > SUBMIT </v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card>

        </v-flex></v-layout>
  </v-container></template>

<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import Menu from '@/components/Admin/adminmenu'

  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data: function () {
      return {
mask:"###-###-####",

        dateFormatted: null,
        datestring: '',
        date: null,
        menu: false,
        modal: false,
        menu2: false,
   items:
     {
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
     StudentClass: '',
     No_of_Sub: '',
        Name_ofSubjects:[],
        Fees:'',
       Password:'',
       Board:''
      }}
    },
    computed: {
      formIsValid() {
        return this.Student_name !== '' &&
          this.Father_name !== '' &&
          this.Father_occupation !== '' &&
          this.father_contact_number !== '' &&
          this.Mother_name !== '' &&
          this.Mother_occupation !== '' &&
          this.mother_contact_number !== '' &&
          this.email !== '' &&
          this.Gender !== '' &&
          this.DOb !== '' &&
          this.Sibling !== '' &&
          this.School_name !== '' &&
          this.Address !== '' &&
          this.Fees!== '' &&
          this.password !== '' &&
          this.Class !== ''

      }
    },
    // watch: {
    //   DOb(val) {
    //     this.dateFormatted = this.formatDate(this.DOb)
    //   }
    // },

    created:function() {
      var jwt = Vue.localStorage.get('token')
      if (jwt) {
        Axios.get('http://localhost:3000/Admin/view/' + this.$route.params.id,
        {
          headers: {
            'Authorization': 'bearer ' + Vue.localStorage.get('token')
          }
        })
        .then((response) => {
          console.log(response.data[0])
          this.items = response.data[0]
          window.alert("Enter Fees Detail")

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

    confirm () {
      console.log(Vue.localStorage.get('token'))
      var jwt = Vue.localStorage.get('token')
      const headers = {
        headers: { 'Content-type': 'application/json',
          'Authorization': 'Bearer ' + Vue.localStorage.get('token') }
      }
      if(jwt){

       Axios.post('http://localhost:3000/Admin/confirmstudent', {
          Student_name:this.items.Student_name,
            Father_name:this.items.Father_name,
            Father_occupation:this.items. Father_occupation,
            father_contact_number:this.items.father_contact_number,
            Mother_name:this.items.Mother_name,
            Mother_occupation:this.items.Mother_occupation,
            mother_contact_number: this.items.mother_contact_number,
            email:this.items.email,
            Gender:this.items.Gender,
            DOb:this.items.DOb,
            Sibling:this.items.Sibling,
            Sibling_name:this.items.Sibling_name,
            School_name:this.items.School_name,
            Address:this.items.Address,
            Class:this.items.Class,
            No_of_Sub:this.items.No_of_Sub,
            Name_ofSubjects:this.items.Name_ofSubjects,
            Fees:this.items.Fees,
         Board:this.items.Board,
         password:this.items.password},headers)
          .then(response => {
            window.alert(JSON.stringify(response.data.message))
            console.log(response.data)
             localStorage.getItem('token')
            this.$router.push('/Admin/studentdata')
          }) .catch((error) => {
         console.log(error)
         window.alert(JSON.stringify(error.response.data.message))
       })
       }
      else {
        this.$router.push('/Admin/Login')
      }

      if (jwt) {
        Axios.delete('http://localhost:3000/Admin/remove/' + this.$route.params.id, {
            headers: {
              'Authorization': 'bearer ' + Vue.localStorage.get('token')
            }
          })
            .then(res => {

            })
            .catch(function (error) {

            })}
            else {
          this.$router.push('/Admin/Login')
      }
    }
    }
  }


</script>
