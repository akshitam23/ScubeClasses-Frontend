<template>
  <v-layout>
    <v-navigation-drawer fixed temporary v-model="sideNav">
      <br>
      <br>
      <v-toolbar flat class="transparent">
        <v-flex xs12 sm5 md6 style="margin:20px;padding:20px">
              <img :src="si.src" height="100">
        </v-flex>

      </v-toolbar>
      <br><br>
      <v-list class="pt-0" >
        <v-list-tile v-for="item in menuItems" :key="item.title" @click="" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group
          sub-group
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Other</v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            v-for="item in others" :key="item.title" @click="" router :to="item.link"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <!--<v-list-tile-action>-->
              <!--<v-icon v-text="crud[1]"></v-icon>-->
            <!--</v-list-tile-action>-->
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <div >

      <v-toolbar color="primary"class="toolbar--fixed">
        <v-toolbar-side-icon
          @click.stop="sideNav = !sideNav"/>
        <v-toolbar-title class="white--text">S-Cube</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <!--<v-btn flat   @click="logout" class="white&#45;&#45;text">-->

            <!--Logout-->
          <!--</v-btn>-->

          <!--<v-btn flat  v-bind:to="{name: 'Add' }"class="white&#45;&#45;text">-->

           <!--Add admin-->
          <!--</v-btn>-->
          <!--<v-btn flat  v-bind:to="{name: 'ARemove' }"class="white&#45;&#45;text">-->

           <!--Remove admin-->
          <!--</v-btn>-->
          <v-menu offset-y >
            <v-btn slot="activator" color="primary" icon large fab><v-icon dark>account_circle</v-icon></v-btn>
            <!--<v-avatar-->
              <!--slot="activator"-->
              <!--size="10px"-->
            <!--&gt;-->
              <!--<img-->

                <!--src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"-->
                <!--height="65px"-->
              <!--&gt;-->
            <v-list>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="values.Photo">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>
                   Name:{{values.Name}}
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
    <br>
    <br>
    <br>
  </v-layout>

</template>

<script>
  import bcd from '@/assets/images.png'
  import Axios from 'axios'
  import Vue from 'vue'
  export default {
    data () {
      return {
      values:{  Name:'',
        Photo:'',
      email:''},
        si:{
          src:bcd
        },
        items: [

          {icon: 'person', title: 'View Profile',link:'/Admin/view' },
          { icon: 'person_add',title: 'Add User',link:'/Admin/add' },
          {icon: 'delete', title: 'Remove User',link:'/Admin/remove' },
          {icon: 'person', title: 'Change Password',link:'/Admin/changepassword'},

        ],
        others:[
          {icon: 'person', title: 'Activity',link:'/Admin/activity' },
          {icon: 'person', title: 'Faculty',link:'/Admin/faculty' },
          {icon: 'person', title: 'Course',link:'/Admin/course' },
          {icon: 'person', title: 'Remove Activity',link:'/Admin/removeactivity'},
          {icon: 'person', title: 'Remove Faculty',link:'/Admin/removefaculty' },
          {icon: 'person', title: 'Remove Course',link:'/Admin/removecourse' },
        ],
        isLoggedIn: false,
        sideNav:false,
        menuItems: [
          { icon: 'home', title: 'Home',link:'/Admin/'},
          { icon: 'person', title: 'Students',link:'/Admin/studentdata' },
          { icon: 'question_answer', title: 'Marks',link:'/Admin/marks1'},
          { icon: 'question_answer', title: 'FAQ',link:'/Admin/Faq'},
          // { icon: 'content_copy', title: 'Other' ,link:'/Admin/activity',items: [
          //     { title: 'List Item' }
          //   ]},


        ],
        right: null
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
          this.values = response.data[0]
          console.log('it works')
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
      } else {
        this.$router.push('/faculty/')
      }
    },
    methods: {
      logout: function () {
        localStorage.removeItem('token')
        console.log('token deleted')
        this.$router.push('/Admin/Login')
      }
    }}
</script>
