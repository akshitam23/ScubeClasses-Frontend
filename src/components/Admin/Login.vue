<template>
  <v-container>
<v-flex xs12 md12 sm12>

    <v-card-media
      :src="m[0].src" height="580" width="100%" >
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

            </v-flex>
            <v-spacer></v-spacer>
            <br>
            <v-card class="elevation-12">
              <v-toolbar dark color="lime lighten-1" style="color:black">
                <v-toolbar-title >  Admin Login </v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>

                  <v-text-field
                    prepend-icon="person"
                    label="Email"
                    name="email"
                    v-model="email"
                    type="email"
      :rules="[(v)=>v.length > 0 && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Enter valid email']"
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
                <v-btn color="lime lighten-1" style="color:black"@click="login" >Login</v-btn>
              </v-card-actions>
            </v-card>
            <v-label color="lime lighten-1"><a href="/Admin/forgotpassword" >Forgot password</a></v-label>
          </v-flex>

        </v-layout>
      </v-container>
    </v-card-media>

</v-flex>
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
        password: ''

        }

    },
    methods: {
      login: function () {
        console.log(this.email)
        Axios.post('http://localhost:3000/Admin/login', {
          password: this.password,

          email: this.email,


          // headers: {
          //   'Content-Type': 'application/json',
          //   'Access-Control-Allow-Origin': '*',
          //   // Authorization: 'Bearer ' + token ,//the token is a variable which holds the token,
          //
          //   //  'Origin':'*'
          // }
        }).then(response => {
          Vue.localStorage.set('token', response.data.token)
          //  console.log(response.data.token)
          localStorage.getItem('token')
          this.$router.push('/Admin/')
        }).catch(error => {
          console.log('Error login')
          console.log(error)
          window.alert('Please enter correct username and Password')
          this.$router.push('/Admin/login')
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
