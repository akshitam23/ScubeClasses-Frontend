<!--<template>-->
  <!--<div>-->

    <!--<v-data-table-->
      <!--:headers="headers"-->
      <!--:items="desserts"-->
      <!--hide-actions-->
      <!--class="elevation-1"-->
    <!--&gt;-->
      <!--<template slot="items" slot-scope="props">-->

        <!--<td class="text-xs-left">{{ props.item.Questions}}</td>-->
        <!--<td class="text-xs-left">{{ props.item.Answers}}</td>-->

     <!---->
      <!--</template>-->
      <!--<template slot="no-data">-->
        <!--<v-btn color="primary" @click="initialize">Reset</v-btn>-->
      <!--</template>-->
    <!--</v-data-table>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--export default {-->
    <!--data: () => ({-->
    <!---->
      <!--headers: [-->

        <!--{ text: 'Questions', value: 'Questions' },-->
        <!--{ text: 'Answers', value: 'Answers' },-->
      <!--],-->
      <!--desserts: [],-->
      <!--editedIndex: -1,-->
      <!--editedItem: {-->
       <!--Questions:'',-->
        <!--Answers:''-->
      <!--},-->
      <!--defaultItem: {-->
        <!--Questions:'',-->
        <!--Answers:''-->
      <!--}-->
    <!--}),-->

    <!--computed: {-->
      <!--formTitle () {-->
        <!--return this.editedIndex === -1 ? 'New Item' : 'Edit Item'-->
      <!--}-->
    <!--},-->

    <!--watch: {-->
      <!--dialog (val) {-->
        <!--val || this.close()-->
      <!--}-->
    <!--},-->

    <!--methods: {-->
      <!--initialize () {-->
        <!--this.desserts = [-->
          <!--{  Questions:'',-->
            <!--Answers:''}-->
        <!--]-->
      <!--},-->

      <!--editItem (item) {-->
        <!--this.editedIndex = this.desserts.indexOf(item)-->
        <!--this.editedItem = Object.assign({}, item)-->
        <!--this.dialog = true-->
      <!--},-->

      <!--deleteItem (item) {-->
        <!--const index = this.desserts.indexOf(item)-->
        <!--confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)-->
      <!--},-->

      <!--close () {-->
        <!--this.dialog = false-->
        <!--setTimeout(() => {-->
          <!--this.editedItem = Object.assign({}, this.defaultItem)-->
          <!--this.editedIndex = -1-->
        <!--}, 300)-->
      <!--},-->


<!--</script>-->
<template>
  <v-container fluid="true">
<navMenu></navMenu>
    <v-layout>
      <v-flex offset-sm5 >
        <h1   style="font-size: 50px" >
          FAQ's
        </h1>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog" max-width="500px">
      <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Enter Questions</span>
        </v-card-title>
        <v-card-text>
          <v-container >
            <v-layout column>
              <v-flex xs12 sm12 md12 offset-sm1>
                <v-text-field v-model="values.Questions" label="Questions" multi-line ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12 offset-sm1>
                <v-text-field v-model="values.Answers" label="Answers" multi-line></v-text-field>
              </v-flex>

            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog=false">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click="save" >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-spacer></v-spacer>
    <v-text-field
      v-model="search"
      append-icon="search"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-layout>

      <v-flex>

        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-1"
          :search="search"
        >
          <template slot="headerCell" slot-scope="props">
            <v-tooltip bottom>
        <span slot="activator">

          {{ props.header.text }}
        </span>

            </v-tooltip>
          </template>
          <template slot="items" slot-scope="props">

            <td class="text-xs-left" style="font-size:20px">{{ props.item.Questions }}</td>

            <td class="text-xs-left" style="font-size: 20px">{{ props.item.Answers}}</td>
            <td class="justify-center layout px-0">

                <v-btn icon class="mx-0"  v-bind:to="{name: 'updatefaq', params: {id: props.item._id }}">
                  <v-icon color="teal">edit</v-icon>
                </v-btn>
              <v-btn icon class="mx-0"  @click="deleteData(props.item._id)">
              <v-icon color="pink" >delete</v-icon>  </v-btn>


            </td>
          </template>
        </v-data-table>
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
search:'',values:{
        Questions:'',
          Answers:''},
        dialog: false,
        dialog1: false,
        editedIndex: -1,

        snow:false,
        headers: [
          { text: 'Quetsions', value: 'Questions' },
          { text: 'Answers', value: 'Answers' }
          // { text: '_id', value: '_id' }
        ],
         items: [{
        _id: '',
           Answers:'',
           Questions:''
      }],
        value: false,

        sideNav: false,
        right: null
      }
    },

      created: function () {
        console.log(Vue.localStorage.get('token'))
        var jwt = Vue.localStorage.get('token')

        if(jwt){
        Axios.get('http://localhost:3000/Admin/GETFAQ', {
          headers: {
            'Authorization': 'bearer ' + Vue.localStorage.get('token')
          }
        })
          .then((response) => {
            this.items = response.data

          })
          .catch((error) => {
            console.log(error)
            window.alert(JSON.stringify(error.response.data.message))
          })
      }
    else {
      this.$router.push('/Admin/Login')
  }
      },

    methods:{


     save() {

       var jwt = Vue.localStorage.get('token')
       const headers = {
         headers: { 'Content-type': 'application/json',
           'Authorization': 'Bearer ' + Vue.localStorage.get('token') }
       }
       if(jwt){

         Axios.post('http://localhost:3000/Admin/FAQ', {
           Questions:this.values.Questions,
           Answers:this.values.Answers
         },headers)
           .then((response) => {
             dialog=false

           })
           .catch((error) => {
             console.log(error)
             window.alert(JSON.stringify(error.response.data.message))
           })
         window.location.reload(); }
       else {
         this.$router.push('/Admin/Login')
       }

     },
         deleteData(_id) {
           var jwt = Vue.localStorage.get('token')
           if (jwt) {
             if(confirm('Are you sure to remove this record ?')){
        Axios.delete('http://localhost:3000/Admin/deleteFAQ/' + _id, {
          headers: {

            'Authorization': 'bearer ' + Vue.localStorage.get('token')
          }
        })
          .then(res => {
            dialog1=false
            alert('Deleted Sucessfully')
          })
          .catch(function (error) {
            alert('Try Deleting again')
          })
        window.location.reload();
         }}
       else {
           this.$router.push('/Admin/Login')
         }
      }
  },


    mounted () {



    }

  }
</script>
