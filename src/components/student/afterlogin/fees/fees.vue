
<template><v-container fluid>
  <navMenu></navMenu>
  <v-spacer></v-spacer>

    <v-flex>


      <h2 class="text-md-center mb-5" style="font-size: 35px;font-family:MV Boli;color:#37474F;">
      Fees Details
      </h2>
    </v-flex>

  <br>
  <v-flex md11 sm11 offset-sm1 >
    <v-data-table
      :headers="headers"
      :items="items"
      :no-data-text="'No data available'"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left" style="font-size:20px">{{ props.item.day}}</td>
        <td class="text-xs-left" style="font-size:20px">{{ props.item.time}}</td>
        <td class="text-xs-left" style="font-size:20px">{{ props.item.date}}</td>
        <td class="text-xs-left" style="font-size:20px">{{ props.item.Cheque_No}}</td>
        <td class="text-xs-left" style="font-size:20px">{{ props.item.HowMuch }}</td>
        <td class="text-xs-left" style="font-size:20px">{{ props.item.FeesLeft }}</td>

      </template>
    </v-data-table>
  </v-flex>
</v-container>
</template>

<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import Menu from '@/components/Student/afterlogin/menu1'
  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data () {
      return {
        search: '',

        snow:false,
        headers: [
          { text: 'Day', value: 'day'},
          { text: 'Time', value: 'time'},
          { text: 'Date', value: 'date'},
          { text: 'Cheque No.', value: 'Cheque_No'},
          { text: 'Fees Paid', value: 'HowMuch'},
          { text: 'Fees left', value: 'FeesLeft'},


        ],
        items: [{


          FeesLeft: '',
          HowMuch: '',
          date: '',
          day:'',
          time:'',
          Cheque_No:'',
          value: false,
        }],
        sideNav: false,
        right: null
      }
    },

    created: function () {
      var jwt = Vue.localStorage.get('token')
      console.log('view id called' + jwt)

      if (jwt) {


        Axios.get('http://localhost:3000/Student/fees',{
          headers: {
            'Authorization': 'bearer ' + Vue.localStorage.get('token')
          }
        })
          .then((response) => {
            this.items = response.data
            // window.alert(JSON.stringify(response.data.message))
          })
          .catch((error) => {

            window.alert(JSON.stringify(error.response.data.message))
          })
      }
      else {
        this.$router.push('/login')
      }
    },



  }
</script>
