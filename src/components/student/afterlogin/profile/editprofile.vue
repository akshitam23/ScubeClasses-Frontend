
<template>
  <v-container fluid="true">
    <navMenu></navMenu>
    <!--<v-card-media :src="m.src" height="700" >-->
      <v-layout>
        <v-flex>

            <v-flex>
              <h2 class="text-md-center mb-5" style="font-size: 35px;font-family:MV Boli;color:#37474F;">
                Edit Profile
              </h2>
            </v-flex>

              <v-flex offset-md2 xs5>
                <br>
                <br>

                <v-list-tile-avatar   class="ml-3 mt-3 mb-2" ><br/>
                  <div style="height: 200px; width: 200px"><img :src="items.Photo"></div>

                </v-list-tile-avatar>
                <v-layout class="ml-3 mt-3">
                  <v-spacer></v-spacer>
                  <label>Edit Image* &nbsp;<br/></label>
                  <input
                    type="file"
                    @change="onFileSelected"
                    required

                  ></input>
                </v-layout>
              </v-flex>
              <br>
              <br>
              <br>
          <v-form enctype="multipart/form-data">
          <v-flex xs9 md9 offset-sm1>
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

                </v-layout>
    </v-flex>

              <v-card-actions >
                <v-btn class="primary" @click="update(items._id)"> Update </v-btn>
              </v-card-actions>
          </v-form>

        </v-flex>
      </v-layout>
    <!--</v-card-media>-->
  </v-container>
</template>
<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import abc from '@/assets/bg.jpg'
  import Menu from '@/components/Student/afterlogin/menu1'
  export default {
    components: {'navMenu': Menu},
    data () {
      return {
        m: {src:abc},
        sideNav: false,

        items: {
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
          Photo:''

        }
      }
    },
    methods: {
      update(_id) {

        var jwt = Vue.localStorage.get('token')
        const headers = {
          headers: { 'Content-type': 'application/json',
            'Authorization': 'Bearer ' + Vue.localStorage.get('token') }
        }
        const fd = new FormData()
        fd.append('Student_name', this.items.Student_name)
        fd.append('Photo',  this.items.Photo)
        fd.append('father_contact_number', this.items.father_contact_number)
        fd.append('Father_name', this.items.Father_name)
        fd.append('Father_occupation',  this.items.Father_occupation)
        fd.append('Mother_name', this.items.Mother_name)
        fd.append('Mother_occupation',  this.items.Mother_occupation)
        fd.append('mother_contact_number', this.items.mother_contact_number)
        fd.append('Gender',  this.items.Gender)
        fd.append('School_name', this.items.School_name)
        fd.append('email', this.items.email)
        fd.append('DOb', this.items.DOb)
        fd.append('Sibling', this.items.Sibling)
        fd.append('Sibling_name', this.items.Sibling_name)
        fd.append('Address',  this.items.Address)

        if (jwt) {
          Axios.patch('http://localhost:3000/Student/update/' + _id,fd,headers
          )
            .then(res => {
              window.alert(JSON.stringify(res.data.message))
              this.$router.push('/home')

            })
            .catch(function (error) {
              console.log(error)

            })

        }
        else {
          this.items.$router.push('/login')
        }
      },
      onFileSelected (event) {
        this.items.Photo = event.target.files[0]
        console.log(this.items.Photo)
      }

    },
    created: function () {
      console.log(Vue.localStorage.get('token'))
      var jwt = Vue.localStorage.get('token')
      if (jwt) {
        Axios.get('http://192.168.137.1:3000/Student/viewprofile/', {
          headers: {
            'Authorization': 'bearer ' + Vue.localStorage.get('token')
          }
        })
          .then((response) => {
            this.items = response.data[0]

          })
          .catch((error) => {

          })
      } else {
        this.$router.push('/login')
      }
    },

  }
</script>
