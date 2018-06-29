<template>
  <v-container fluid> <nav-menu></nav-menu>

    <v-card-media :src="m.src">

      <v-layout>
        <v-flex  xs9 sm9 md9 offset-sm2>
          <br>
          <v-card class="lime lighten-5" width="1000">
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card-title style="font-family:MV Boli;color:#1A237E;font-size:20px"><h1>Registration Form</h1> </v-card-title>
                </v-flex>

              </v-layout>

              <v-divider></v-divider>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer><br>
              <v-form enctype="multipart/form-data">

                <v-layout row wrap>
                  <v-flex xs12 sm11 md12 offset-sm1>
                    <v-text-field  style="font-family:MV Boli ;color:#1A237E;font-size:30px" v-model="Student_name"  label="Name of Student" type="text" required></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm3 offset-sm1>
                    <v-text-field  style="font-family:MV Boli ;color:#1A237E;font-size:150px" v-model="Father_name"  label="Father's Name"  type="text" required></v-text-field>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs12 sm3>
                    <v-text-field style="font-family:MV Boli ;color:#1A237E;font-size:150px"
                                  v-model="Father_occupation"
                                  label="Father's Occupation"  type="text" required
                    ></v-text-field>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs12 sm3>
                    <v-text-field style="font-family:MV Boli ;color:#1A237E;font-size:150px"
                                  name="Contact_number"
                                  :mask="mask"
                                  label="Father's Contact Number"
                                  required
                                  v-model="father_contact_number"
                                  :rules="contactRules">
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm3 offset-sm1>
                    <v-text-field style="font-family:MV Boli ;color:#1A237E;font-size:150px"   label="Mother's Name"  v-model="Mother_name" type="text" required></v-text-field>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs12 sm3>
                    <v-text-field style="font-family:MV Boli ;color:#1A237E;font-size:150px"
                                  label="Mother's Occupation"  v-model="Mother_occupation" type="text" required
                    ></v-text-field>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs12 sm3>
                    <v-text-field style="font-family:MV Boli ;color:#1A237E;font-size:150px"
                                  :mask="mask"
                                  label="Mother's Contact Number"
                                  required
                                  v-model="mother_contact_number"
                                  :rules="contactRules">
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm5 offset-sm1>
                    <v-text-field style="font-family:MV Boli ;color:#1A237E;font-size:150px"
                                  label="E-mail"
                                  name="email"
                                  v-model="email"
                                  type="email"
                                  :rules="[emailRules.em]"
                                  required
                    ></v-text-field>
                  </v-flex><v-spacer></v-spacer>
                  <v-flex  sm4>
                    <v-menu
                      ref="menu"
                      :close-on-content-click="false"
                      v-model="menu"
                      :nudge-right="40"
                      lazy
                      open-on-hover
                      transition="scale-transition"
                      offset-y
                      full-width
                      max-width="290px"
                      min-width="290px"
                    >
                      <v-text-field style="font-family:MV Boli ;color:#1A237E;font-size:150px"
                                    slot="activator"
                                    v-model="dateFormatted"
                                    label="Birthdate(dd/mm/yyyy)"
                                    required
                                    persistent-hint
                                    @blur="DOb = parseDate(dateFormatted)"
                      ></v-text-field>
                      <v-date-picker v-model="DOb" no-title @input="$refs.menu.save(DOb)"
                                     :max="new Date().toISOString().substr(0, 10)"></v-date-picker>
                    </v-menu>
                  </v-flex>

                  <v-spacer></v-spacer><v-spacer></v-spacer>
                  <v-flex xs12 sm12 offset-sm0> <v-layout>
                    <v-flex xs12 sm12 offset-sm2>
                      <v-radio-group column v-model="Gender" style="font-family:MV Boli ;font-size:20px">
                        Gender
                        <v-radio label="Male" value="Male" ></v-radio>
                        <v-radio label="Female"  value="Female"></v-radio>
                      </v-radio-group>
                    </v-flex>

                    <v-flex xs12 sm12 offset-sm0>
                      <v-radio-group    style="font-family:MV Boli ;font-size:20px" column v-model="Sibling">
                        Any Sibling Studying
                        <v-radio label="Yes" value="Yes" ></v-radio>
                        <v-radio label="No"  value="No"></v-radio>
                      </v-radio-group>
                    </v-flex>
                  </v-layout>
                  </v-flex>

                  <v-flex xs12 sm6 offset-sm1 >
                    <v-text-field style="font-family:MV Boli;color:#1A237E;font-size:150px"   type="text" v-model="Sibling_name" v-bind:disabled="this.Sibling=== 'No'? true : false"
                                  label="If Yes.Name of Sibling/s.">
                    </v-text-field>
                  </v-flex>

                  <v-flex xs12 sm10 offset-sm1>

                    <v-text-field style="font-family:MV Boli;color:#1A237E;font-size:150px"  type="text" v-model="School_name" required
                                  label="Name of School">

                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm10 offset-sm1>
                    <v-text-field style="font-family:MV Boli ;color:#1A237E;font-size:150px"
                                  type="text"
                                  v-model=" Address"
                                  required
                                  label="Address">
                    </v-text-field>
                  </v-flex>
                  <v-layout row>
                    <v-flex xs12 sm3 offset-sm1 >
                      <v-select style="font-family:MV Boli ;font-size:20px"
                                :items="std"
                                v-model="Class"
                                label="Class "
                                offset-x
                                autocomplete
                      ></v-select></v-flex>
                    <v-spacer></v-spacer>
                    <v-flex xs12 sm3 offset-sm1>
                    <v-select style="font-family:MV Boli ;font-size:20px"
                                :items="board"
                                v-model="Board"
                                label="Board"
                                offset-x
                                autocomplete

                    ></v-select></v-flex>

                    <v-flex xs12 sm3 offset-sm1>
                      <v-select style="font-family:MV Boli ;font-size:20px"
                                :items="items"
                                v-model=" No_of_Sub"
                                label="Subjects"
                                offset-x
                                autocomplete

                      ></v-select>  </v-flex>
                  <v-flex xs12 sm3 offset-sm1>
                    <v-select style="font-family:MV Boli ;font-size:20px"
                              :items="name"
                              v-model="Name_ofSubjects"
                              :rules="['Must choose same number of subjects']"
                              label="Choose subjects"
                              offset-x
                              autocomplete
                              multiple
                    ></v-select>

                  </v-flex></v-layout>
                  <v-spacer></v-spacer>


                  <v-spacer>
                  </v-spacer>

                  <v-flex xs12 sm8 offset-sm1>
                    <v-card-actions >
                      <v-btn class="text--white" color="primary" @click="registeri"  :disabled="!formIsValid"> SUBMIT </v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card>

        </v-flex></v-layout> </v-card-media>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import Axios from 'axios'
  import abc from '@/assets/download.jpg'

  import Menu from '@/components/student/menu'

  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data: function () {
      return {
        disabled:true,
        m: {src:abc},
mask:'###-###-####',
        dateFormatted: null,
        datestring: '',
        date: null,
        menu: false,
        modal: false,
        menu2: false,
        items: [
          '1', '2', '3', '4', 'All'
        ],
        std: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
        ],
        board: ['State Board','Central Board','International Board'
        ],
        name:['Science','Maths','SS','English','Grammar','All'],
        Student_name: '',
        Father_name: '',
        Father_occupation: '',
        father_contact_number: '',
        Mother_name: '',
        Mother_occupation: '',
        mother_contact_number: '',
        Board:'',
        contactRules: [
          m => !!m && /^\d{10}$/.test(m) || 'Must be of 10 digits'
        ],
        email: '',
        emailRules: {
          em: v => {
            if (v.length > 0 && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
              return true
            }
            return 'E-mail must be valid eg.abc@abc.com'
          }
        },

        Gender: '',
        DOb: '',
        Sibling: '',
        Sibling_name: '',
        School_name: '',
        Address: '',
        Class: '',
        No_of_Sub: '',
        Name_ofSubjects:[]
      }
    },
    computed: {
      formIsValid() {
        return this.Student_name !== '' &&
          this.Father_name !== '' &&
          this.Father_occupation !== '' &&
          this.father_contact_number !== '' &&
          this.Mother_name !== '' &&
          this.Mother_occupation !== '' &&
          this.mother_contact_number !== '' &&
          this.email !== '' &&
          this.Gender !== '' &&
          this.DOb !== '' &&
          this.Sibling !== '' &&
          this.School_name !== '' &&
          this.Address !== '' &&
          this.Class !== '' &&
          this.No_of_Sub !== ''
      }
    },
    watch: {
      DOb(val) {
        this.dateFormatted = this.formatDate(this.DOb)
      }
    },

    methods: {
      formatDate(DOb) {
        if (!DOb) return null

        const [year, month, day] = DOb.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate(DOb) {
        if (!DOb) return null

        const [month, day, year] = DOb.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },



      registeri: function () {
        console.log(this.email)
        console.log(this.password)
        const fd = new FormData()


        Axios.post('http://localhost:3000/student/register/',{
          Student_name:this.Student_name,
          Father_name:this.Father_name,
          Father_occupation:this.Father_occupation,
          father_contact_number:this.father_contact_number,
          Mother_name:this.Mother_name,
          Mother_occupation:this.Mother_occupation,
          mother_contact_number: this.mother_contact_number,
          email:this.email,
          Gender:this.Gender,
          DOb:this.DOb,
          Sibling:this.Sibling,
          Sibling_name:this.Sibling_name,
          School_name:this.School_name,
          Address:this.Address,
          Class:this.Class,
          No_of_Sub:this.No_of_Sub,
          Name_ofSubjects:this.Name_ofSubjects,
          Board:this.Board,
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
          }

        }).then(response => {
          window.alert(JSON.stringify(response.data.message))

          window.location.reload();

        }).catch(error => {
          window.alert(JSON.stringify(error.response.data.message))

        })

      }

    }

  }
</script>
