

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
                  Faculty
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
                      <v-form @submit.prevent="" enctype="multipart/form-data">
                        <v-flex>
                          <v-text-field
                            label="Faculty name"

                            v-model="Faculty"

                            :rules="nameRules"
                            required>

                          </v-text-field>
                        </v-flex>
                        <v-flex>
                          <v-text-field
                            label="Faculty Qualification"
                            v-model="Faculty_Qualification"
                            :rules="nameRules"
                            required>

                          </v-text-field>
                        </v-flex>
                        <label>Upload Image*
                        </label>    <br><br>
                        <div>
                          <input type=file
                                 @change="onFileSelected"
                                 class="text--primary" required
                                 accept="image/*">
                        </div >
                        <br>
                        <v-layout row>
                          <v-flex xs12 sm6>
                            <v-btn flat class="primary"
                                   type="submit"
                                   @click="addFaculty">Add
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
        Faculty:'',
        Faculty_Qualification:'',
        Faculty_Photo:'',
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length>0 || 'This field is required'
        ],

        right: null,

      }
    },

    computed: {

    },
    methods: {


      onFileSelected (event) {
        this.Faculty_Photo = event.target.files[0]

      },

      addFaculty() {

        var jwt = Vue.localStorage.get('token')
        if (jwt) {
          const fd = new FormData()

          fd.append('Faculty', this.Faculty)

          fd.append('Faculty_Qualification', this.Faculty_Qualification)
          fd.append('Faculty_Photo', this.Faculty_Photo)
          Axios.post('http://localhost:3000/Admin/faculty', fd,
            {
              headers: {
                'Content-type': 'multipart/form-data',
                'Authorization': 'bearer ' + Vue.localStorage.get('token')
              }
            })
            .then((response) => {
              window.alert(JSON.stringify(response.data.message))
              window.location.reload();
            })
            .catch((error) => {
              window.alert(JSON.stringify(error.response.data.message))
            })
        }
        else {
          this.$router.push('/Admin/Login')
        }



      }
    }
  }
</script>
