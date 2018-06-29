<template>
  <v-container fluid>

    <v-toolbar color="pink darken-1" fixed app>
      <v-flex offset-md1>
        <div class="text-xs-center">
          <v-menu offset-y  open-on-hover>
            <v-btn slot="activator"  color="white"  :to="'/'" flat style="font-size:20px;font-family:MV Boli"flat >Home</v-btn>

          </v-menu>
          <v-menu  offset-y origin open-on-hover>
            <v-btn slot="activator"  color="white"  flat style="font-size:20px;font-family:MV Boli"flat >About Us</v-btn>
            <v-toolbar flat color="light-green lighten-1" height="10" width="10"></v-toolbar><v-list>

            <v-list-tile v-for="(item, index) in items" :key="index"  :to="item.link" @click="reload" >

              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
          </v-menu>
          <v-menu offset-y  open-on-hover origin>
            <v-btn slot="activator"  color="white"  flat style="font-size:20px;font-family:MV Boli"flat >Gallery</v-btn>
            <v-toolbar flat color="light-green lighten-1" height="10"></v-toolbar>  <v-list >
            <v-list-tile v-for="(item, index) in items2" :key="index" :to="'/activity/'+item._id" @click="reload" >
              <v-list-tile-title>{{item.Activity}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
          </v-menu>
          <v-menu offset-y open-on-hover origin>
            <v-btn slot="activator"  color="white"  flat style="font-size:20px;font-family:MV Boli" flat >Academics</v-btn>
            <v-toolbar flat color="light-green lighten-1" height="10"></v-toolbar><v-list>
            <v-list-tile v-for="(item, index) in items3" :key="index" @click="" :to="item.link">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
          </v-menu>
          <v-menu offset-y open-on-hover origin>
            <v-btn slot="activator"  color="white"  flat style="font-size:20px;font-family:MV Boli"flat >Join Us</v-btn>
            <v-toolbar flat color="light-green lighten-1" height="10"></v-toolbar> <v-list>
            <v-list-tile v-for="(item, index) in items5" :key="index" :to="item.link">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>

          </v-menu>
          <v-menu offset-y open-on-hover origin >

            <v-btn slot="activator"  color="white"  flat style="font-size:20px;font-family:MV Boli" >Contact Us</v-btn>

            <v-toolbar flat color="light-green lighten-1" height="10"></v-toolbar><v-list >
            <v-list-tile  v-for="(item, index) in items4" :key="index" :to="item.link">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
          </v-menu>
        </div>
      </v-flex>
    </v-toolbar>
    <br> <br> <br>
  <v-layout row wrap>
    <v-flex  xs12 sm6 md5 offset-sm1>
      <img :src="si.src">
    </v-flex><div>
    <v-flex xs8 sm8 md8 offset-sm5>
      <div> <span style="color:#D4E157;font-family:Bradley Hand ITC;font-weight:bold;font-size:40px">Believe.</span><span  style="color:#1A237E;font-family:Bradley Hand ITC;font-weight:bold;font-size:40px">Achieve.</span><span  style="color:#AD1457;font-family:Bradley Hand ITC;font-weight:bold;font-size:40px">Succeed</span>
      </div>  <span style="color:#BDBDBD;font-size:20px">Expert & Professional Tution</span>
    </v-flex>
  </div>
  </v-layout>

  </v-container>
</template>

<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import bcd from '@/assets/images.png'
  export default {

    data: function () {
      return {
        si:{
          src:bcd
        },
        items: [
          {
            title:'Vision and Mission',link:'/#vision and mission'
          },
          {
            title:'Teaching Strategy',link:'/#teaching strategy'
          },
          {
            title:'Why S-Cube?',link:'/#why scube'
          }
        ],
        items2:[
          {
            Activity:' ',id:''
          }
        ],
        items3:[
          {
            title:'Courses We Offer ',link:'/course'
          },
          {
            title:'Faculty',link:'/faculty'
          }
        ],
        items4:[
          {
            title:'Contact Us',link:'/#contactus'
          },
          {
            title:'FAQ',link:'/FAQ'
          }
        ],
        items5:[
          {
            title:'Register',link:'/join'
          },
          {
            title:'Login',link:'/login'
          }
        ],

        sideNav: false,
      }},
    methods:{
      reload(){
        window.location.reload()
      },
      hash(){
        window.location.hash()
      }
    },
    created:function()
  {
  Axios.get('http://localhost:3000/Student/phot')
    .then((response) => {
      this.items2 = response.data

    })
    .catch((error) => {
      console.log(error)

    })}

  }


</script>
