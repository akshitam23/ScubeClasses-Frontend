<template>
  <v-container>

    <v-content>
      <v-container fluid fill-height>

        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="pink darken-1">
                <v-toolbar-title >Signup </v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="" >

                  <v-text-field prepend-icon="person" name="name" label="First_name" type="text" v-model="first_name" required></v-text-field>

                  <v-text-field prepend-icon="person" name="name" label="Last_name" type="text" v-model="last_name" required></v-text-field>

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
                  <!--<v-menu-->
                    <!--ref="menu2"-->
                    <!--:close-on-content-click="false"-->
                    <!--v-model="menu2"-->
                    <!--:nudge-right="40"-->

                    <!--lazy-->
                    <!--transition="scale-transition"-->
                    <!--offset-y-->
                    <!--full-width-->
                    <!--min-width="290px"-->
                  <!--&gt;-->
                    <!--<v-text-field-->
                      <!--slot="activator"-->
                      <!--v-model="DOb"-->
                      <!--label="BirthDate"-->
                      <!--prepend-icon="event"-->
<!--readonly-->
                    <!--&gt;</v-text-field>-->
                    <!--<v-date-picker v-model="DOb"-->
                                   <!--min="1950-06-01" max="2008-06-01"  @input="$refs.menu2.save(DOb)"></v-date-picker>-->
                  <!--</v-menu>-->
                  <v-menu
                    ref="menu"
                    :close-on-content-click="false"
                    v-model="menu"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      v-model="dateFormatted"
                      label="Date"

                      persistent-hint
                      prepend-icon="event"
                      @blur="DOb = parseDate(dateFormatted)"
                    ></v-text-field>
                    <v-date-picker v-model="DOb" no-title @input="$refs.menu.save(DOb)"></v-date-picker>
                  </v-menu>
                  <v-text-field name="Contact_number"

                                prepend-icon="phone"
                                label="Contact "

                                v-model.number="contact_number"
                                :rules="contactRules"
                                required>
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signup":to="'/login'"  :disabled="!formIsValid" >Signup</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-container>
</template>

<script>
  import Axios from 'axios'
  import Vue from 'vue'
//import jQuery from 'jquery'
  import VueLocalStorage from 'vue-localstorage'
  Vue.use(VueLocalStorage)
  export default {

    data: function () {
      return {
        dateFormatted: null,
        datestring:'',
        date: null,
        menu: false,
        modal: false,
        menu2: false,
        email: '',
        emailRules: {
          em: v => {
            if (v.length > 0 && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
              return true
            }
            return 'E-mail must be valid'
          }
        },
        password: '',
        first_name: '',
        last_name: '',
        DOb: '',

        contact_number: '',
        contactRules: [
          m => !!m && /^\d{10}$/.test(m) || 'Contact number is required'
        ]
        // co: m => {
        //   if (m.length > 0 &&  /^\d{10}$/.test(m)) {
        //     return true
        //   }
        //   return 'Enter correct contact details'
        // }}}
        //},
      }},

    computed: {
      formIsValid () {
        return this.first_name !== ''&&
        this.last_name !== ''&&
          this.email !== '' &&
          this.password !== '' &&
          this.contact_number !== '' &&
          this.DOb !== ''
      }
    },

    watch: {
     DOb (val) {
        this.dateFormatted = this.formatDate(this.DOb)
      }
    },

    methods: {
      formatDate (DOb) {
        if (!DOb) return null

        const [year, month, day] = DOb.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (DOb) {
        if (!DOb) return null

        const [month, day, year] = DOb.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      // parseDate(DOb) {
      //   if (!DOb) return null
      //
      //   const [month, day, year] = date.split('/')
      //   return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      // },
      signup: function () {
        console.log(this.email)
        console.log(this.password)
      Axios.post('http://localhost:3000/user/signup', {
          password: this.password,
          first_name: this.first_name,
          last_name: this.last_name,
          DOb: this.DOb,
          contact_number: this.contact_number,
          email: this.email,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }

        }).then(response => {
          window.alert(JSON.stringify(response.data.message))
          console.log(response.data)
          // localStorage.getItem('token')
        }).catch(error => {
         window.alert(JSON.stringify(error.response.data.message))
          console.log('Error signup')
          console.log(error.da)
          console.log(error.status)
          console.log(error.code)
        })
      }
    },

  }
</script>
<style scoped>

  .center{
    border-radius: 50px;
  }
</style>
