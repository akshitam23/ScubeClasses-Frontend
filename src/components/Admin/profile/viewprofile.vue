<template>
  <v-container fluid="true">
    <navMenu></navMenu>
    <v-card-media :src="m.src" height="500px">
      <v-layout>
        <v-flex>
    <v-layout>
      <v-flex>
        <h2 class="text-md-center mb-5" style="font-size: 40px">
         My Profile
        </h2>
      </v-flex>

    </v-layout>
    <br>


    <div
      style="max-width: 660px; margin: auto;"
      class="orange lighten-4" >
      <v-card height="300px"  color="blue-grey lighten-5" >
        <v-container
          fluid
          style="min-height: 0;"
          grid-list-lg>
          <v-layout >

            <v-flex offset-md2 xs12>
              <br>
              <br>
              <br>
<br>
              <v-list-tile-avatar   class="ml-3 mt-3 mb-2" ><br/>
                <div style="height: 200px; width: 200px"><img :src="items.Photo"></div>

              </v-list-tile-avatar>
            </v-flex>





            <v-flex offset-sm1 xs12 md7 >
              <v-card-text style="font-size: 40px"> {{ items.Name }} </v-card-text>

              <v-card-text  style="font-size: 20px"> {{ items.email }} </v-card-text>
              <v-card-text style="font-size: 20px">{{ items.contact_number }}</v-card-text>


            </v-flex>
          </v-layout>

        </v-container>
        <v-card-actions >
          <v-btn v-bind:to="{name: 'Edit', params: {id: items._id }}" class="primary"> Edit </v-btn>
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
        m: {src:abc},
        sideNav: false,
        items: {
          _id:'',
          Name:'',
          email:'' ,
          contact_number:'',
          Photo:''
        }
      }
    },
    created: function () {
      console.log(Vue.localStorage.get('token'))
      var jwt = Vue.localStorage.get('token')
      if (jwt) {
        Axios.get('http://localhost:3000/Admin/viewprofile', {
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
        this.$router.push('/Admin/login')
      }
    }
  }
</script>
