<template>
  <v-container fluid> <nav-menu></nav-menu>
    <v-flex offset-sm4>
      <h2   style="font-size:30px;font-family: 'Comic Sans MS'" >
        Fees details of  <span style="color: dodgerblue" > {{values.Student_name}}</span>
      </h2>
    </v-flex>
    <v-spacer></v-spacer>
    <br>
    <v-layout row wrap>
      <v-flex  xs12 sm12 md12>

        <v-card class="lime lighten-5" >
          <v-container >
            <v-layout row wrap>


            </v-layout>



            <v-form enctype="multipart/form-data">

              <v-layout row wrap>
                <v-flex xs5>
                  <v-card-title style="font-size:20px;font-family: 'Comic Sans MS'"><h2>Enter Fees paid by<span style="color: dodgerblue" > {{values.Student_name}}</span></h2> </v-card-title>
                </v-flex>

                <!--<v-flex xs12 sm11 md12 >-->
                  <!--<v-text-field  v-model="values.Student_name"  label="Name of Student" type="text" required>{{values.Student_name}}</v-text-field>-->
                <!--</v-flex>-->

                <!--<v-flex xs12 sm3 >-->
                  <!--<v-text-field   v-model="values.Fees"  label="Fees"  type="text" required>{{values.Fees}}</v-text-field>-->
                <!--</v-flex>-->
                <!--<v-spacer></v-spacer>-->
                <v-flex xs12 sm3>
                  <v-text-field
                    :rules="[(m) => m.length>0 && /^[0-9]*(?:\.\d{1,2})?$/.test(m) || 'Must be numeric ']"
                    v-model="values.HowMuch"
                    label="Fees Paid"  type="text" required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm3 offset-sm1>

                  <v-text-field
                    :rules="[(m) => m.length >0 && /^[0-9]*(?:\.\d{1,2})?$/.test(m) || 'Must be numeric ']"
                    v-model="values.Cheque_No"
                    label="Cheque Number"  type="text"
                  ></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>

                <v-flex xs12 sm3 offset-sm1>
                  <v-card-actions >
                    <v-btn class="text--white" color="primary" @click="confirm"  :disabled="!formIsValid" > SUBMIT </v-btn>

                  </v-card-actions> </v-flex>
<v-flex xs12 sm12 md12 offset-sm1>
  <h3>
    If you entered wrong data you can delete and enter again
  </h3>









                  <v-dialog v-model="dialog" max-width="500px">
                    <v-btn slot="activator" color="primary" dark class="mb-2">Delete</v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Are you sure you want to delete ? </span>
                      </v-card-title>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="dialog=false">No</v-btn>
                        <v-btn color="blue darken-1" flat @click="Edit" >Yes</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-flex>


              </v-layout>
            </v-form>
          </v-container>
        </v-card>

      </v-flex>


<br>
    <v-spacer></v-spacer>
      <v-flex md12 sm12 >
    <v-layout>

    </v-layout>

    <br>
    <v-flex md12 sm12 offset-sm0 >
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
          <td class="text-xs-left" style="font-size:20px" >{{ props.item.FeesLeft }}</td>
        </template>
        <template slot="no-data">
          <v-alert :value="true" color="error" icon="warning">
            Sorry, nothing to display here :(
          </v-alert>
        </template>
      </v-data-table>
    </v-flex>
      </v-flex>
    </v-layout>
  </v-container></template>

<script>
  import Vue from 'vue'
  import Axios from 'axios'


  import Menu from '@/components/Admin/adminmenu'

  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data: function () {
      return {
dialog:false,
        values:  {
          Student_name:'',
          Fees:'',
          student_id:'',
          HowMuch:'',



        },
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
      }
    },
    computed: {
      formIsValid() {
        return this.values.HowMuch!== ''
      }
    },
    // watch: {
    //   DOb(val) {
    //     this.dateFormatted = this.formatDate(this.DOb)
    //   }
    // },
    ready:function(){
      this.created()
    },

    created:function() {
      var jwt = Vue.localStorage.get('token')
      console.log('view id called' + jwt)

      if (jwt) {

        Axios.get('http://localhost:3000/Admin/studentdetail/' + this.$route.params.id,
        {
          headers: {
            'Authorization': 'bearer ' + Vue.localStorage.get('token')
          }
        })
        .then((response) => {
          console.log(response.data[0])
          this.values = response.data[0]


        })
        .catch((error) => {
          console.log(error)
        })
          ,
      Axios.get('http://localhost:3000/Admin/fees/'+ this.$route.params.id,{
        headers: {
          'Authorization': 'bearer ' + Vue.localStorage.get('token')
        }
      })
        .then((response) => {
          this.items = response.data

        })
        .catch((error) => {
          console.log(error)

        })
      }
      else {
        this.$router.push('/Admin/Login')
      }
  },

    methods: {
      confirm() {

        var jwt = Vue.localStorage.get('token')
        const headers = {
          headers: { 'Content-type': 'application/json',
            'Authorization': 'Bearer ' + Vue.localStorage.get('token') }
        }
        if(jwt){

          Axios.post('http://localhost:3000/Admin/Fees/' + this.$route.params.id, {
            Student_name: this.values.Student_name,
            Fees: this.values.Fees,
            HowMuch: this.values.HowMuch,
            Cheque_No:this.values.Cheque_No
          },headers)
            .then((response) => {
              window.alert(JSON.stringify(response.data.message))
              window.location.reload();
            })
            .catch((error) => {
              console.log(error)
              window.alert(JSON.stringify(error.response.data.message))
            })
          Axios.post('http://localhost:3000/Admin/sendfees/'+this.$route.params.id, {
            Student_name: this.values.Student_name,
            HowMuch: this.values.HowMuch,


          }).then(response => {
            window.alert(JSON.stringify(response.data.message))

          }).catch(error => {
            console.log('Not done')
            console.log(error)
          })
          }
        else {
          this.$router.push('/Admin/Login')
        }

      },
      Edit(){

        var jwt = Vue.localStorage.get('token')
        const headers = {
          headers: { 'Content-type': 'application/json',
            'Authorization': 'Bearer ' + Vue.localStorage.get('token') }
        }
        if(jwt) {

          Axios.patch('http://localhost:3000/Admin/editfees/' + this.$route.params.id, {
            HowMuch: this.values.HowMuch,
            Cheque_No: this.values.Cheque_No
          }, headers)
            .then((response) => {
              this.dialogL=false
              window.alert(JSON.stringify(response.data.message))
              window.location.reload();
            })
            .catch((error) => {
              console.log(error)
              window.alert(JSON.stringify(error.response.data.message))
            })
          // Axios.post('http://localhost:3000/Admin/Fees/' + this.$route.params.id, {
          //   Student_name: this.values.Student_name,
          //   Fees: this.values.Fees,
          //   HowMuch: this.values.HowMuch,
          //   Cheque_No:this.values.Cheque_No
          // },headers)
          //   .then((response) => {
          //     window.alert(JSON.stringify(response.data.message))
          //     window.location.reload();
          //   })
          //   .catch((error) => {
          //     console.log(error)
          //     window.alert(JSON.stringify(error.response.data.message))
          //   })
          // Axios.post('http://localhost:3000/Admin/sendfees/'+this.$route.params.id, {
          //   Student_name: this.values.Student_name,
          //   HowMuch: this.values.HowMuch,
          //
          //
          // }).then(response => {
          //   window.alert(JSON.stringify(response.data.message))
          //
          // }).catch(error => {
          //   console.log('Not done')
          //   console.log(error)
          // })
        }else{

        }
      }
    }

  }


</script>
