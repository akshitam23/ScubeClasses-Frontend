

<template>
  <v-container fluid="true">
    <navMenu></navMenu>
    <v-card-media :src="m.src">
      <br>
      <br>
      <v-layout column>
        <v-flex>
          <h3 style="color:#1A237E;font-size:40px;display:flex;justify-content:center">
            Courses
          </h3>
        </v-flex>
        <br>
        <flex>
          <v-layout row wrap >
            <v-flex xs5 sm5 md5 offset-sm2>
              <v-card class="grey lighten-4 mb-3" v-for="item in items" :key="item._id"  >

                <v-container>
                  <v-layout row wrap>
                    <v-flex>
                      <v-card-title primary-title>
                        <div class="text--black">
                          <div><h3 style="font-size:30px" mp-0> {{ item.Course_description}} </h3></div>

                        </div> </v-card-title>
                      <v-card-actions>
                        <v-dialog v-model="dialog1" max-width="500px">
                          <v-btn slot="activator"  flat color="blue darken-1"class="mb-2">Delete</v-btn>
                          <v-card>
                            <v-card-text>
                              Are you sure you want to delete this item?
                              <br>
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="blue darken-1" flat @click="dialog1=false">No</v-btn>
                              <v-btn color="blue darken-1" flat @click="deleted(item._id)" >Yes</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>

                        <!--<v-btn color="blue darken-1" flat @click="deleted(item._id)" >Delete</v-btn>-->
                      </v-card-actions>



                    </v-flex>
                  </v-layout>
                </v-container>

              </v-card>
            </v-flex>
          </v-layout>
        </flex></v-layout>
    </v-card-media>
  </v-container>
</template>


<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import Menu from '@/components/Admin/adminmenu'
  import abc from '@/assets/bg.jpg'

  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data () {
      return {
        m: {src:abc},
        sideNav: false,
        dialog1: false,
        items: {
          _id:'',
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
    methods:{
      deleted(_id) {
        var jwt = Vue.localStorage.get('token')

        if (jwt) {

          Axios.delete('http://localhost:3000/Admin/removecourse/' + _id, {
            headers: {

              'Authorization': 'bearer ' + Vue.localStorage.get('token')
            }
          })
            .then(res => {

              alert('Deleted Sucessfully')
            })
            .catch(function (error) {

              alert('Try Deleting again ')
            })
          window.location.reload();
        }
        else {
          this.$router.push('/Admin/Login')
        }
      }
    }

  }
</script>
