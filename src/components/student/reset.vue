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
                  <v-toolbar-title > Reset</v-toolbar-title>
                  <v-spacer></v-spacer>

                </v-toolbar>
                <v-card-text>
                  <v-form>


                    <v-text-field prepend-icon="person" name="password" label="password" type="password" v-model="password"></v-text-field>

                    <v-text-field prepend-icon="person" name="confirmpassword" label="confirm password" type="password" v-model="confirmpassword"></v-text-field>

                    <v-text-field prepend-icon="person" name="token" label="token" type="password" v-model="token"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="lime lighten-1" @click="reset">confirm</v-btn>
                </v-card-actions>
              </v-card>

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

        password: '',
        confirmpassword: '',
        token: ''

      }

    },
    methods: {
      reset: function () {
        // console.log(this.taname)
        if(this.password === this.confirmpassword){
        Axios.post('http://192.168.137.1:3000/Student/reset', {
          password: this.password,
          confirmpassword: this.confirmpassword,
          token: this.token
        }).then(response => {
          console.log(response)

          window.alert(JSON.stringify(response.data.message))
          localStorage.getItem('token')
          this.$router.push('/login')
        }).catch(error => {
          console.log('Error signup')
          window.alert(JSON.stringify(error.response.data.message))
          console.log(error)
        })
      }
      else{
          alert('Passwords do not match')
        }
      }
    }
  }
</script>
<style scoped>

  .center{
    border-radius: 50px;
  }
</style>
