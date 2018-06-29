<!--<template>-->
  <!--<v-container fluid="true">-->
    <!--<navMenu></navMenu>-->
    <!--<v-layout>-->
      <!--<v-flex>-->

        <!--<v-card class=" lighten-4">-->
          <!--<v-container>-->
            <!--<v-layout row wrap>-->
              <!--<v-flex xs12>-->
                <!--<v-card-title class="red&#45;&#45;text darken-2 mt-2 mb-2"><h3>EDIT PROFILE</h3> </v-card-title>-->
              <!--</v-flex>-->

            <!--</v-layout>-->
            <!--<v-divider></v-divider>-->
            <!--<v-spacer></v-spacer>-->

            <!--<v-layout row wrap >-->
              <!--<v-flex xs12>-->

                <!--<v-card-text hidden>-->
                  <!--<v-text-field-->
                    <!--label="Faculty Id"-->
                    <!--name="items._id"-->
                    <!--v-model="items._id"-->
                  <!--&gt;</v-text-field>-->
                <!--</v-card-text>-->

                <!--<v-card-text>-->
                  <!--<v-text-field-->
                    <!--label="Name"-->

                    <!--v-model="items.Name"-->
                  <!--&gt;</v-text-field>-->
                <!--</v-card-text>-->
                <!--<v-list-tile-avatar   class="ml-3 mt-3 mb-5"><br/>-->
                  <!--<div style="height: 100px; width: 100px"><img :src="items.Photo"></div>-->

                <!--</v-list-tile-avatar>-->
                <!--<v-layout class="ml-3 mt-3">-->
                  <!--<label>Upload Image* &nbsp;<br/></label>-->
                  <!--<input-->
                    <!--type="file"-->
                    <!--@change="onFileSelected"-->
                    <!--required-->

                  <!--&gt;</input>-->
                <!--</v-layout>-->
                <!--&lt;!&ndash;<v-card-text>&ndash;&gt;-->
                <!--&lt;!&ndash;<v-text-field&ndash;&gt;-->
                <!--&lt;!&ndash;label="Image Url"&ndash;&gt;-->
                <!--&lt;!&ndash;name="items.faculty_photo"&ndash;&gt;-->
                <!--&lt;!&ndash;v-model="items.faculty_photo"&ndash;&gt;-->
                <!--&lt;!&ndash;&gt;</v-text-field>&ndash;&gt;-->
                <!--&lt;!&ndash;</v-card-text>&ndash;&gt;-->

                <!--<v-card-text>-->
                  <!--<v-text-field-->
                    <!--label="E-mail"-->

                    <!--v-model="items.email"-->
                    <!--disabled-->
                  <!--&gt;</v-text-field>-->
                <!--</v-card-text>-->


                <!--<v-card-text>-->
                  <!--<v-text-field-->
                                <!--label="Contact"-->

                                <!--v-model="items.contact_number"-->
                  <!--&gt;-->
                  <!--</v-text-field>-->
                <!--</v-card-text>-->

                <!--<v-card-actions >-->
                  <!--<v-btn @click="" color="purple" class="text&#45;&#45;white" @click="update(items._id)"> SUBMIT </v-btn>-->
                <!--</v-card-actions>-->
              <!--</v-flex>-->
            <!--</v-layout>-->
          <!--</v-container>-->
        <!--</v-card>-->

      <!--</v-flex>-->
    <!--</v-layout>-->
  <!--</v-container>-->
<!--</template>-->
<template>
  <v-container fluid="true">
    <navMenu></navMenu>
    <v-card-media :src="m.src" height="700" >
      <v-layout>
        <v-flex>
          <v-layout>
            <v-flex>
              <h2 class="text-md-center mb-5" style="font-size: 40px">
              Edit Profile
              </h2>
            </v-flex>

          </v-layout>

          <div
            style="max-width: 660px; margin: auto;"
             >

            <v-card  color="blue-grey lighten-5">
              <v-flex offset-md2 xs12>
                <br>
                <br>
                <br><br>
                <v-list-tile-avatar   class="ml-3 mt-3 mb-2" ><br/>
                  <div style="height: 200px; width: 200px"><img :src="items.Photo">
                  </div>
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
              <v-container
                fluid
                style="min-height: 0;"
                grid-list-lg>
                <v-layout>


                  <v-flex  xs12 md7 >
                    <v-card-text>
                      <v-text-field
                        label="Name"
                        v-model="items.Name"
                      >{{items.Name}}</v-text-field>
                    </v-card-text>

                    <v-card-text>
                      <v-text-field
                        label="E-mail"

                        v-model="items.email"
                        disabled
                      >{{items.email}}</v-text-field>
                    </v-card-text>


                    <v-card-text>
                      <v-text-field
                        label="Contact"
:mask="mask"
                   :rules="[ (m) => !!m && /^\d{10}$/.test(m) || 'Must be of 10 digits']"
                        v-model="items.contact_number"
                      >{{items.contact_number}}
                      </v-text-field>
                    </v-card-text>


                  </v-flex>
                </v-layout>

              </v-container>
              <v-card-actions >
               <v-btn class="primary" @click="update(items._id)"> Update </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-card-media>
  </v-container>
</template>
<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import abc from '@/assets/bg.jpg'
  import Menu from '@/components/Admin/adminmenu'
  export default {
    components: {'navMenu': Menu},
    data () {
      return {
        mask:"###-###-####",
        m: {src:abc},
        sideNav: false,

        items:
          {
            _id:'',
          Name: '',
          Photo: '',
          email: '',
         contact_number: '',
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
        fd.append('Photo',  this.items.Photo)
        fd.append('contact_number', this.items.contact_number)
        fd.append('Name', this.items.Name)
        if(jwt){
          Axios.patch('http://localhost:3000/Admin/update/' + _id, fd
          //   {
          //   Name:this.Name,
          //   contact_number:this.contact_number,
          //   Photo:this.Photo
          // }
          ,headers)
            .then(res => {

              window.alert(JSON.stringify(res.data.message))

              window.location.reload();

            })
            .catch(function (error) {
              console.log(error)

            })
        //  window.location.reload();
        }
        else {
          this.$router.push('/Admin/Login')
        }
      },
      onFileSelected (event) {
        this.items.Photo = event.target.files[0]
      }},
    created: function () {
      console.log(Vue.localStorage.get('token'))
      var jwt = Vue.localStorage.get('token')
      if (jwt) {
        Axios.get('http://192.168.137.1:3000/Admin/viewprofile/', {
          headers: {
             'Authorization': 'bearer ' + Vue.localStorage.get('token')
          }
        })
          .then((response) => {
            this.items = response.data[0]

            console.log(response.data[0])
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        this.$router.push('/faculty/')
      }
    },

  }
</script>
