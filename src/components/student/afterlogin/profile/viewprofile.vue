<template>
  <v-container fluid="true">
    <navMenu></navMenu>

      <v-flex>
        <h2 class="text-md-center mb-5" style="font-size: 35px;font-family:MV Boli;color:#37474F;">
          My Profile
        </h2>
      </v-flex>

    <!--<v-card-media :src="m.src" height="500px">-->
      <v-layout>

        <v-flex>
          <v-flex offset-md2 xs12 offset-sm1>

            <v-list-tile-avatar   class="ml-3 mt-3 mb-2" ><br/>
              <div style="height: 250px; width: 250px"><img :src="items.Photo"></div>

            </v-list-tile-avatar>
          </v-flex>
          <!--<div-->
            <!--style="max-width: 450px;"-->
            <!--class="orange lighten-4" >-->
          <v-flex offset-sm3>


              <v-container
                fluid
                style="min-height: 0;font-family:MV Boli;"
                grid-list-lg>
                <v-layout row wrap>

                  <v-flex offset-sm0 xs12 md5 >

                    <v-card-text style="font-size: 25px">Name: {{ items.Student_name }} </v-card-text>
                      <v-card-text style="font-size: 25px"> School:{{ items.School_name }} </v-card-text>
                      <v-card-text style="font-size: 25px">Mother Name:{{ items.Mother_name }} </v-card-text>
                      <v-card-text style="font-size: 25px">Father Name:{{ items.Father_name }} </v-card-text>
                      <v-card-text style="font-size: 25px"> Class:{{ items.Class }} </v-card-text>
                    <v-card-text style="font-size: 25px">Birthday:{{ items.DOb }} </v-card-text></v-flex><v-flex md5>
                      <v-card-text style="font-size: 25px"> Sibling Name:{{ items.Sibling_name}} </v-card-text>
                    <v-card-text  style="font-size: 25px">Email: {{ items.email }} </v-card-text>
                    <v-card-text style="font-size: 25px">Address:{{ items.Address}}</v-card-text>
                    <v-card-text style="font-size: 25px">Total Subjects:{{ items.No_of_Sub}}</v-card-text>
                    <v-card-text style="font-size: 25px">Subjects:{{ items.Name_ofSubjects }}</v-card-text>
                    <v-card-text style="font-size: 25px">Fees:{{ items.Fees}}</v-card-text>
               </v-flex>
                </v-layout>

              </v-container>
              <v-card-actions >
                <v-btn v-bind:to="{name: 'SEProf', params: {id: items._id }}" class="primary"> Edit </v-btn>
              </v-card-actions>

          <!--</div>-->
        </v-flex>
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
          Class: '',
          No_of_Sub: '',
          Name_ofSubjects:'',
          Fees:'',
          Photo:''
        }
      }
    },
    created: function () {
      console.log(Vue.localStorage.get('token'))
      var jwt = Vue.localStorage.get('token')
      if (jwt) {
        Axios.get('http://localhost:3000/Student/viewprofile', {
          headers: {
            'Authorization': 'bearer ' + Vue.localStorage.get('token')
          }
        })
          .then((response) => {

            this.items = response.data[0]
            console.log('it works')
            console.log(response.data)

          })
          .catch((error) => {

            console.log(error)

          })
      } else {
        this.$router.push('/Admin/view')
      }
    }
  }
</script>
