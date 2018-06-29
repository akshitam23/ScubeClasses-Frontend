
<template>
  <v-container fluid="true">
    <navMenu></navMenu>
    <v-card-media :src="m.src" >

        <v-layout column >
          <br>

            <v-layout>
              <v-flex>
                <h2 class="text-md-center mb-4 " style="font-size: 40px">
                  Activities
                </h2>
              </v-flex>
            </v-layout>
            <v-flex xs12  md5 sm5 offset-sm3>
            <v-card  color="blue-grey lighten-5" width="600"><br>
              <v-spacer></v-spacer>
              <div
                style="min-width: 560px; margin: auto;">

                  <v-flex xs12 sm6 offset-sm3>
                    <v-container>
                      <v-form @submit.prevent="" enctype="multipart/form-data">
                        <v-flex>
                          <v-select
                            :items="c2"
                            v-model="Activity"
                            :rules="[(m)=> m>0||'This is required']"
                            label="Select"
                            item-text="Activity"
                            item-value="Activity"
                            autocomplete
                          >
                          </v-select>



                          <v-btn @click="save" class="primary" >Show</v-btn>
                        </v-flex>
                        <br>
                        <v-layout row>

                        </v-layout>
                      </v-form>
                    </v-container>
                  </v-flex>

              </div>
            </v-card>


          </v-flex>

          <br>
          <br>
          <v-flex>
          <div v-show="show">
            <v-layout row wrap>

<v-flex  xs12 md5 sm5 offset-sm1>
                <v-container fluid grid-list-md>
                  <v-layout row wrap>
                    <v-flex
                      v-for="card in items"
                      v-bind="{ [`xs${card.flex}`]: true }"
                      :key="card._id"
                      xs12 md5 sm5 offset-sm1
                    >

                        <v-card-media
                          :src="card.Photo"
                          height="200px"
                          contain
                        >

                        </v-card-media>
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
                                <v-btn color="blue darken-1" flat @click="deleted(card._id)" >Yes</v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-card-actions>

                    </v-flex>
                  </v-layout>
                </v-container>
          </v-flex>
            </v-layout></div></v-flex>
        </v-layout>

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
        c1:[],
        c2:[],
        c3:[],
        c4:[],
        p:[],
        dialog1:false,
        show:false,
        m: {src: abc},
        // items: [{
        //   Activity: '',
        //   _id: ''
        // }],
        sideNav: false,
        right: null,
_id:'',
        _pid:'',
        Activity: '',

        items: [{

              _id:'',
              Photo:''

        }]
      }

    },
    created: function () {
      Axios.get('http://localhost:3000/Admin/phot', {
        headers: {

        }
      })
        .then((response) => {
          for (var a2 in response.data) {

            this.c1.push(response.data[a2]._id)
            this.c2.push(response.data[a2].Activity)
          }

        })
        .catch((error) => {
          console.log(error)
        })

    },

methods:{
  save(){
    var a1 = this.c2.indexOf(this.Activity)
    this._id = this.c1[a1]

    const headers = {
      headers: { 'Content-type': 'application/json',
        'Authorization': 'Bearer ' + Vue.localStorage.get('token') }
    }
    Axios.get('http://localhost:3000/Admin/photo/'+this._id,{


    })
      .then((response) => {  this. show=true
//         for (var a2 in response.data) {
//
//           this.c3.push(response.data[a2]._id)
//           this.c4.push(response.data[a2].Photo)
// console.log(this.c3)
//           console.log(this.c4)
        this.items=response.data
console.log(response.data)
      })

      .catch((error) => {
        console.log(error)
      })
  },
    deleted(_pid) {

      var jwt = Vue.localStorage.get('token')

      if (jwt) {

        Axios.delete('http://localhost:3000/Admin/removeactivity/' + this._id+'/'+_pid, {
          headers: {

            'Authorization': 'bearer ' + Vue.localStorage.get('token')
          }
        })
          .then(res => {

            alert('Deleted Sucessfully')
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error)
            alert('Try Deleting again ')
          })
      }
      else {
        this.$router.push('/Admin/Login')
      }
  }

    }
  }
</script>
