<template>
  <v-container fluid>
    <nav-Menu></nav-Menu>
    <v-card-media :src="m.src" height="500"width="600px" >
    <v-content>
      <v-container fluid fill-height>

        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title >Add User</v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="" >
                  <v-text-field prepend-icon="person" name="email" label="Email" type="text" v-model="email" :rules="[(v)=>(v.length > 0 && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)) || 'email must be in abc@abc.com']"></v-text-field>
                  <v-text-field prepend-icon="lock" name="Name" label=" Name" type="text" v-model=" Name"></v-text-field>
                  <v-text-field prepend-icon="person" name="password" label="Password" type="text" v-model="password"></v-text-field>
                  <v-text-field prepend-icon="lock" name="contact_number" label="Contact" type="text" v-model="contact_number" :mask="mask" :rules="contactRules"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signup">Add Admin</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    </v-card-media>
  </v-container>
</template>

<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import Menu from '@/components/Admin/adminmenu'
  import VueLocalStorage from 'vue-localstorage'
  import abc from '@/assets/bg.jpg'

  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data () {
      return {
        m: {src:abc},
mask:"###-###-####",
        email:'',
        Name: '',
        password:'',
        contact_number:'',
        contactRules: [
          m => !!m && /^\d{10}$/.test(m) || 'Contact number must be 10 digits'
        ],
      }
    },
    methods: {
      signup: function () {
        var jwt = Vue.localStorage.get('token')
        const headers = {
          headers: { 'Content-type': 'application/json',
            'Authorization': 'Bearer ' + Vue.localStorage.get('token') }
        }
        if(jwt){

          Axios.post('http://localhost:3000/Admin/add', {
            email: this. email,
            password: this.password,
            Name:this.Name,
            contact_number:this.contact_number
          },headers)

         .then(response => {
          console.log(response.data)

           window.alert(JSON.stringify(response.data.message))


          this.$router.push('/Admin/')
        }).catch(error => {
          console.log('Error adding new admin')
          console.log(error)
          console.log(error.status)
          console.log(error.code)
        })
        }
        else {
          this.$router.push('/Admin/Login')
        }      }
    }
  }
</script>
<style scoped>

  .center{
    border-radius: 50px;
  }
</style>
