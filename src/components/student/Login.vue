<template>
  <v-container>


      <v-card-media
        :src="m[0].src" height="560" width="500px,k">
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>  <br>

      <v-container fluid fill-height>

        <v-layout align-center>
          <v-flex xs5 sm5 md5 offset-sm1>
            <v-flex xs8 sm8 md8 offset-sm1 >
              <v-card-media
                :src="m[1].mrc" height="150"></v-card-media>


              <!--<span  style="color:#D4E157;font-family:Bradley Hand ITC;font-weight:bold;font-size:130px">S-Cube</span>-->
            </v-flex>
            <v-spacer></v-spacer>
            <br>
            <v-card class="elevation-12">
              <v-toolbar dark color="lime lighten-1" style="color:black">
                <v-toolbar-title >Login </v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>

                  <v-text-field
                    prepend-icon="mail"
                    label="E-mail"
                    name="email"
                    v-model="email"
                    type="email"
                    :rules="[emailRules.em]"
                    required
                  ></v-text-field>

                  <v-text-field
                    prepend-icon="lock"
                    label="Password"
                    type="password"
                    name="password"
                    v-model="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="lime lighten-1" style="color:black" v-bind:to="{name: 'Alogin'}" >Admin</v-btn>
                <v-btn color="lime lighten-1" style="color:black"@click="login" >Login</v-btn>
              </v-card-actions>
            </v-card>
            <v-label color="lime lighten-1"><a href="/forgotpassword" >Forgot password</a></v-label>
          </v-flex>

        </v-layout>
      </v-container>
      </v-card-media>


  </v-container>
</template>

<script>
  import bcd from '@/assets/4.jpg'
  import abc from '@/assets/images.png'
  import Axios from 'axios'
  import Vue from 'vue'
 // import jQuery from 'jquery'
  import VueLocalStorage from 'vue-localstorage'
  Vue.use(VueLocalStorage)
  export default {

    data () {
      return {
        m:[
      {src:bcd},{mrc:abc}
        ],

        email: '',
        password: '',
        emailRules: {
          em: v => {
            if (v.length > 0 && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
              return true
            }
            return 'E-mail must be valid'
          }

        }
      }
    },
    methods: {
    login: function () {

      Axios.post('http://localhost:3000/Student/login', {
        password: this.password,
        email: this.email,
      }).then(response => {
        Vue.localStorage.set('token', response.data.token)
        //  console.log(response.data.token)
        localStorage.getItem('token')
        this.$router.push('/home')
      }).catch(error => {

        console.log(error)
        window.alert('Please enter correct username and Password')
         this.$router.push('/login')
      })
    }
  }
  }
</script>
<style scoped>

  .center{
    border-radius: 50px;
  }
</style>
