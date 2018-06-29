<template>
  <v-container fluid="true">
    <navMenu></navMenu>
    <v-flex>


      <h2 class="text-md-center mb-5" style="font-size: 35px;font-family:MV Boli;color:#37474F;">
        Welcome {{items.Student_name}}
      </h2>
    </v-flex>
    <v-card-media :src="m.src" width="900">
      <v-layout row wrap>
        <v-flex xs5 md4 offset-sm4 >
          <v-card  color="blue-grey lighten-5"   width="500" >
            <v-container
              fluid
              style="min-height: 0;"
              grid-list-lg>
              <v-layout column>

                <v-flex offset-md2 xs12>

                  <v-card-media
                    :src="items.Photo"
                    height="165px" width="150px" contain  >
                  </v-card-media>

                </v-flex>





                <v-flex offset-sm1 xs12 md7 >
                  <v-card-text style="font-size: 40px">Name: {{ items.Student_name }} </v-card-text>

                  <v-card-text  style="font-size: 20px">School:{{ items.School_name }} </v-card-text>
                  <v-card-text style="font-size: 20px">Class:{{ items.Class }}</v-card-text>
                  <v-card-text  style="font-size: 20px">Email:{{ items.School_name }} </v-card-text>
                  <v-card-text style="font-size: 20px">Contact:{{ items.father_contact_number }}</v-card-text>
                  <v-card-text style="font-size: 20px">Fees:{{ items.Fees }}</v-card-text>


                </v-flex>
              </v-layout>

            </v-container>

          </v-card>

        </v-flex>

      </v-layout>
    </v-card-media>
  </v-container>
</template>

<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import abc from '@/assets/st.jpg'
  import Menu from '@/components/Student/afterlogin/menu1'
  export default {
    components: {'navMenu': Menu},
    data () {
      return {
        m: {src:abc},
        sideNav: false,
        items: {
          _id:'',
          Student_name:'',
          School_name:'' ,
          Class:'',
          Fees :'',
          father_contact_number:'',
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
          })
          .catch((error) => {

          })
      } else {
        this.$router.push('/login')
      }
    }
  }
</script>
