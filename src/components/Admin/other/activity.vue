
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
              Activities
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
                <div>If in List select</div>
                <v-select
                  :items="items"
                  v-model="Activity"
                  :rules="[(m)=> m>0||'This is required']"
                  label="Select"
                  item-text="Activity"
                  item-value="Activity"
                  autocomplete
                  v-bind:disabled="this.Activity=== '     '? true : false"
                >
                </v-select>
                <div>Add new</div>
                <v-text-field   v-model="Activity"
                                :rules="[(m)=> m>0||'This is required']"
                                v-bind:disabled="this.Activity=== '     '? true : false"
                >

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
                         @click="addActivity">Add
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
        disabled:false,
        items:[{
        Activity:''}],
        sideNav: false,
        right: null,
        Photo:'',
        Activity:''
      }
    },

    computed: {

    },
    created: function () {


      Axios.get('http://localhost:3000/Admin/phot', {
        headers: {

        }
      })
        .then((response) => {
          this.items = response.data
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })

    },
    methods: {
      onFileSelected (event) {
        this.Photo = event.target.files[0]

      },

      customFilter (items,  itemText) {
        const hasValue = val => val != null ? val : ''
        const text = hasValue(items.Activity)
        const query = hasValue(queryText)
        return text.toString()
          .indexOf(query.toString().toLowerCase()) > -1
      },
      addActivity () {

        console.log(Vue.localStorage.get('token'))
        var jwt = Vue.localStorage.get('token')
        const headers = {
          headers: { 'Content-type': 'application/json',
            'Authorization': 'Bearer ' + Vue.localStorage.get('token') }
        }
        const fd = new FormData()
        fd.append('Photo', this.Photo)
        fd.append('Activity', this.Activity)
        // const fd = new FormData()


        // fd.append('Photos', this.Photos)
        // fd.append('Activity', this.Activity)
        if (jwt) {

          Axios.post('http://192.168.137.1:3000/Admin/activity', fd,headers)

            .then(response => {
            window.alert(JSON.stringify(response.data.message))

              window.location.reload();

          })
            .catch(error => {
              console.log(error.response)
            })

        } else {
          this.$router.push('/admin/')
        }
      },






    }
  }
</script>
