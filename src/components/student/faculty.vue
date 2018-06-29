<template>
  <v-container fluid="true">
    <navMenu></navMenu>
    <br>

<v-layout>

  <h3 style="font-family:MV Boli;color:#1A237E;font-size:40px;display:flex;justify-content:center">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Faculties
  </h3>
</v-layout>
    <br>
    <div>

      <v-layout row wrap>
        <v-flex xs12 sm10 md10 offset-sm1 >
          <v-card class="grey lighten-4 mb-3" v-for="item in items" :key="item._id"  >
            <v-container fluid>
              <v-layout row>
                <v-flex xs5 sm4 md3>
                  <v-card-media
                    :src="item.Faculty_Photo"
                    contains
                    height="150px" width="150px">
                  </v-card-media>
                </v-flex>
                <v-flex>
                  <v-card-title primary-title>
                    <div class="text--black">
                      <div><h3 style="font-family:MV Boli;color:#D81B60;font-size:30px" mp-0> {{ item.Faculty}} </h3></div>
                      <div style="font-family:MV Boli;color:#1A237E;font-size:20px"> {{ item.Faculty_Qualification }}</div><br>


                    </div>
                  </v-card-title>


                </v-flex>
              </v-layout>
            </v-container>

          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </v-container>

</template>



<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import Menu from '@/components/Student/menu'
  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data () {
      return {
        sideNav: false,
        dialog: false,
        items: {

          Faculty: '',
          Faculty_Photo: '',
          Faculty_Qualification: '',

        },

          }
      },

    created: function () {


        Axios.get('http://localhost:3000/Student/faculty', {
          headers: {

          }
        })
          .then((response) => {
            this.items = response.data

          })
          .catch((error) => {

          })
    }

  }
</script>
