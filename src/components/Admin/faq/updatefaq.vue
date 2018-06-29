




<template>
  <v-container fluid="true">
    <navMenu></navMenu>
    <v-layout>
      <v-flex>

         <v-flex xs12>
           <v-card-title><h3>EDIT FAQ</h3> </v-card-title>
         </v-flex>

        <v-card  @submit.prevent="" enctype="multipart/form-data">
          <v-container>
            <v-layout row wrap>




            </v-layout>

            <v-spacer></v-spacer>

            <v-layout row wrap class="">
              <v-flex xs12>


                <v-card-text>
                  <v-text-field
                    label="Questions"

                    v-model="items.Questions"
                    required
                  >
                    {{ items.Questions }}
                  </v-text-field>

                  <v-text-field
                    label="Answers"
                    v-model="items.Answers"

                    required

                  >
                    {{ items.Answers }}
                  </v-text-field>







                  <br>
                </v-card-text>
                <v-card-actions >
                  <v-btn @click="updateCourse" color="primary" class="text--white" > SUBMIT </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import Menu from '@/components/Admin/adminmenu'
  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data () {
      return {
        items: {
          _id: '',
          Questions: '',
          Answers: '',

        },
        sideNav: false,
        right: null

      }
    },
    methods: {

      async getDetail () {
        var jwt = Vue.localStorage.get('token')
        console.log('view id called' + jwt)

        if (jwt) {


          Axios.get('http://192.168.137.1:3000/Admin/faqid/' + this.$route.params.id,
            {
              headers: {
                'Authorization': 'bearer ' + Vue.localStorage.get('token')
              }
            })
            .then((response) => {
              console.log(response.data[0])
              this.items = response.data[0]
              console.log(this.items)
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          this.$router.push('/Admin/Login')
        }



      },
      updateCourse () {
        var jwt = Vue.localStorage.get('token')
        console.log('view id called' + jwt)

        const headers = {
          headers: { 'Content-type': 'application/json',
            'Authorization': 'Bearer ' + Vue.localStorage.get('token') }
        }
        if(jwt){

          Axios.patch('http://localhost:3000/Admin/updateFAQ/'+this.$route.params.id, {
            Questions:this.items.Questions,
            Answers:this.items.Answers
          },headers)
            .then(r => {
              console.log('r: ', JSON.stringify(r, null, 2))
              this.$router.push('/Admin/FAQ')
            })
            .catch(error => {
              console.log(error.response)
            })

        }
        else {
            this.$router.push('/Admin/Login')
          }
      }
    },
    mounted () {
      this.getDetail()
    }
  }
</script>
