<template>
  <v-container fluid="true">
    <v-layout row wrap >

      <v-flex  xs12 sm6 md5 offset-sm2>

        <img :src="si.src" height="90px">
      </v-flex><div height="70px">
      <v-flex xs8 sm8 md8 offset-sm2>

        <div> <span style="color:#D4E157;font-family:Bradley Hand ITC;font-weight:bold;font-size:40px">Believe.</span><span  style="color:#1A237E;font-family:Bradley Hand ITC;font-weight:bold;font-size:40px">Achieve.</span><span  style="color:#AD1457;font-family:Bradley Hand ITC;font-weight:bold;font-size:40px">Succeed</span>
        </div>  <span style="color:#BDBDBD;font-size:20px">Expert & Professional Tution</span>
      </v-flex>
    </div>
    </v-layout>
    <br>

      <!--<v-navigation-drawer  v-model="sideNav" fixed temporary>-->
        <!--<br>-->
        <!--<br>-->
        <!--<v-toolbar flat class="transparent">-->
          <!--<v-flex xs12 sm5 md6 style="margin:20px;padding:20px">-->
            <!--<img :src="si.src" height="100">-->
          <!--</v-flex>-->

        <!--</v-toolbar>-->
        <!--<br><br>-->
        <!--<v-list class="pt-0" >-->
          <!--<v-list-tile v-for="item in items" :key="item.title" @click="" router :to="item.link">-->
            <!--<v-list-tile-action>-->
              <!--<v-icon>{{ item.icon }}</v-icon>-->
            <!--</v-list-tile-action>-->
            <!--<v-list-tile-content>-->
              <!--<v-list-tile-title >{{ item.title }}</v-list-tile-title>-->
            <!--</v-list-tile-content>-->
          <!--</v-list-tile>-->
          <!--<v-list-group-->
            <!--sub-group-->
            <!--no-action-->
          <!--&gt;-->
            <!--<v-list-tile slot="activator">-->
              <!--<v-list-tile-title>Other</v-list-tile-title>-->
            <!--</v-list-tile>-->
            <!--<v-list-tile-->
              <!--v-for="item in others" :key="item.title" @click="" router :to="item.link"-->
            <!--&gt;-->
              <!--<v-list-tile-title>{{ item.title }}</v-list-tile-title>-->

            <!--</v-list-tile>-->
          <!--</v-list-group>-->
        <!--</v-list>-->
      <!--</v-navigation-drawer>-->


      <div >

        <v-toolbar color="pink darken-1" >
          <!--<v-toolbar-side-icon-->
            <!--@click.stop="sideNav = !sideNav"/>-->
          <v-spacer></v-spacer>
          <v-flex offset-md1 >
          <div class="text-xs-center">
            <v-menu offset-y  open-on-hover>
              <v-btn slot="activator"  color="white"  :to="'/home'" flat style="font-size:20px;font-family:MV Boli"flat >Home</v-btn>

            </v-menu>
            <v-menu offset-y  open-on-hover>
              <v-btn slot="activator"  color="white"  :to="'/result'" flat style="font-size:20px;font-family:MV Boli"flat >Result</v-btn>

            </v-menu>
            <v-menu offset-y  open-on-hover>
              <v-btn slot="activator"  color="white"  :to="'/fees'" flat style="font-size:20px;font-family:MV Boli"flat >Fees</v-btn>
            </v-menu></div></v-flex>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-xs-only">

            <v-menu offset-y >
              <v-btn slot="activator" color="pink darken-1" icon large fab><v-icon dark>account_circle</v-icon></v-btn>

              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img :src="values.Photo">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>
                      Name:{{values.Student_name}}
                    </v-list-tile-title>

                    <v-list-tile-title>
                      Email:{{values.email}}
                    </v-list-tile-title>
                  </v-list-tile-content></v-list-tile>
                <v-divider></v-divider>
                <v-list-tile v-for="(item, index) in items" :key="index" router :to="item.link">
                  <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>

                </v-list-tile>

                <v-list-tile  @click="logout">
                  <v-list-tile-action>
                    <v-icon>lock_open</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>Logout</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>

          </v-toolbar-items>
        </v-toolbar>

        <v-spacer></v-spacer></div>

  </v-container>
</template>

<script>
  import bcd from '@/assets/images.png'
  import Axios from 'axios'
  import Vue from 'vue'
  export default {
    data () {
      return {
        values:{  Student_name:'',
          Photo:'',
          email:''},
        si:{
          src:bcd
        },
        items: [

          {icon: 'person', title: 'View Profile',link:'/viewprofile'},
          {icon: 'person', title: 'Change Password',link:'/changepassword' },
        ],
        others:[
          {icon: 'person', title: 'Activity',link:'/Admin/activity' },
          {icon: 'person', title: 'Faculty',link:'/Admin/faculty' },
          {icon: 'person', title: 'Course',link:'/Admin/course' },

        ],
        isLoggedIn: false,
        sideNav:false,

        right: null
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
            this.values = response.data[0]
            console.log('it works')
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        this.$router.push('/login')
      }
    },
    methods: {
      logout: function () {
        localStorage.removeItem('token')
        console.log('token deleted')
        this.$router.push('/')
      }
    }}
</script>
