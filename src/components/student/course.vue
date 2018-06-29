

<template>
  <v-container fluid="true">
    <navMenu></navMenu>
    <v-card-media :src="m.src">
      <br>
      <br>
      <v-layout column>
        <v-flex>
          <h3 style="color:#1A237E;font-size:40px;display:flex;justify-content:center">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Courses
          </h3>
        </v-flex>
        <br>
        <v-flex>
          <v-flex >
          <div  style="color:#D81B60;font-size:40px;display:flex;justify-content:center">We teach Courses for</div></v-flex>
          <v-layout row wrap >
            <v-flex xs5 sm5 md5 offset-sm2>
              <div class="grey lighten-4 mb-3" v-for="item in items" :key="item._id"  >

                <v-container>
                  <v-layout row wrap>
                    <v-flex>

                        <div class="text--black">
                          <div><h3 style="font-family:MV Boli;color:#D81B60;font-size:30px" mp-0> {{ item.Course_description}} </h3></div>

                        </div>



                    </v-flex>
                  </v-layout>
                </v-container>

              </div>
            </v-flex>
          </v-layout>
        </v-flex></v-layout>
    </v-card-media>
  </v-container>
</template>


<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import Menu from '@/components/Student/menu'
  import abc from '@/assets/bg.jpg'

  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data () {
      return {
        m: {src:abc},
        sideNav: false,
        dialog: false,
        items: {

          Course_description:''

        },

      }
    },

    created: function () {


      Axios.get('http://localhost:3000/Student/course', {
        headers: {

        }
      })
        .then((response) => {
          this.items = response.data

        })
        .catch((error) => {

        })
    },


  }
</script>
