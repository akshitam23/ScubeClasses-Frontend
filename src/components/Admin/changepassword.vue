

  <template>
    <v-container fluid="true">
      <navMenu></navMenu>
      <v-card-media :src="m.src" height="500" >
        <v-layout>
          <v-layout >
            <br>
            <v-flex xs12 sm5 offset-sm3>
              <v-layout>
                <v-flex>
                  <h2 class="text-md-center mb-4 " style="font-size: 40px">
                  Change Password
                  </h2>
                </v-flex>
              </v-layout>
              <v-card  color="blue-grey lighten-5"><br>

                <v-spacer></v-spacer>

                <div
                  style="min-width: 560px; margin: auto;">
                  <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                      <v-container>
                        <v-form @submit.prevent="">

                          <v-flex>
                            <v-text-field
                              label="New password"
                              v-model="newpassword"
type="password"
                              required>

                            </v-text-field>
                          </v-flex>

                          <v-flex>
                            <v-text-field
                              label="Confirm password"
                              v-model="confirmpassword"
                              type="password"
                              required>

                            </v-text-field>
                          </v-flex>

                          <br>
                          <v-layout row>
                            <v-flex xs12 sm6>
                              <v-btn flat class="primary"
                                     type="submit"
                                     @click="reset" >Confirm
                              </v-btn>
                            </v-flex>

                          </v-layout>
                        </v-form>
                      </v-container>
                    </v-flex>
                  </v-layout></div></v-card>
            </v-flex>

          </v-layout>

        </v-layout>
      </v-card-media>
    </v-container>
  </template>

<script>

  import Axios from 'axios'
  import Vue from 'vue'
  import Menu from '@/components/Admin/adminmenu'

  import abc from '@/assets/bg.jpg'

  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data () {
      return {
        m: {src:abc},

       newpassword: '',
        confirmpassword: '',

      }

    },
    methods: {
      reset: function () {
        var jwt = Vue.localStorage.get('token')
        const headers = {
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + Vue.localStorage.get('token')
          }
        }

        if (jwt) {
          // console.log(this.taname)
          Axios.post('http://192.168.137.1:3000/Admin/changepassword', {
            newpassword: this.newpassword,
            confirmpassword: this.confirmpassword,

          }, headers).then(response => {
            localStorage.removeItem('token')
            console.log('token deleted')
            window.alert(JSON.stringify(response.data.message))
            this.$router.push('/Admin/Login')
          }).catch(error => {
            console.log('Error signup')
            console.log(error)
          })

        }
        else {
          this.$router.push('/Admin/Login')
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
