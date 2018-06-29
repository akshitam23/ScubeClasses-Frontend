<template>
  <v-container fluid>
    <nav-Menu></nav-Menu>
    <v-layout row wrap>

      <br>
      <v-flex xs12 >
        <h1 style="justify-content:center;display:flex;font-family:MV Boli;color:#1A237E;font-size:30px">
      {{items.Activity}}
        </h1>
        <br>
<br>


      </v-flex>
      <v-flex offset-sm2><v-avatar
                  v-for="item in c2" :key="item"
                  size="30px"
                >
                  <img
                   :src="item"
                    width="250px"height="250px"
                    >
&nbsp;
                </v-avatar>

      </v-flex>

    </v-layout>
    <br>
    <br>

  </v-container>
</template>
<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import menuuu from '@/components/student/menu'

  export default {
    isLoggedIn: true,
    name: 'app',
    components: {'nav-Menu': menuuu},

    data: function () {
      return {
        c1: [],
        c2: [],

        items:{Activity: ''}

      }
    },
    created: function () {

      Axios.get('http://localhost:3000/Student/photo/' + this.$route.params.id, {
        headers: {}
      })
        .then((response) => {
          // this.items = response.data[0]
          // console.log(response.data)
          for (var a2 in response.data) {

            this.c1.push(response.data[a2]._id)
            this.c2.push(response.data[a2].Photo)

          }
        })


        .catch((error) => {
          console.log(error)
        })
        Axios.get('http://localhost:3000/Student/photoa/' + this.$route.params.id,)
          .then((response) => {
            this.items = response.data[0]

          })
          .catch((error) => {
            console.log(error)

          })
    }


  }
</script>
