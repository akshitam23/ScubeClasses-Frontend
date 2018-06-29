<template>

  <v-container fluid>
    <nav-menu></nav-menu>
    <template>
      <v-carousel hide-controls>
        <v-carousel-item v-for="(item,i) in msi" :src="item.src" :key="i"></v-carousel-item>
      </v-carousel>
      <v-spacer></v-spacer><v-spacer></v-spacer>
    </template>
<br>
    <br>
    <br>
    <div id="vision and mission">
    <v-layout row wrap
    >
     <v-flex xs12 md5 offset-sm1 >
    <v-card height="800" color="red lighten-5">
      <v-container fluid grid-list-lg>
        <v-layout column>
          <v-flex xs5 md4>
            <v-card-media
              :src="vm[0].src"
              height="300px"
              contain
            ></v-card-media>
          </v-flex>
          <v-flex xs7 md6 offset-sm0>
            <div  style="font-size:20px;font-family:MV Boli">
              To create a safe and structured environment where
              students and staff, along with parents and guardians,
              come together as a community of life-long learners.
              Our organisation will foster individual differences,
              encourage each other, and set challenging goals.
              We will strive to think critically and creatively to
              encourage good decision-making strategies to promote
              a sense of teamwork and cooperation.
              At Vakharia Group of Institutions, child is the only priority
              and imparting quality education to them is our
              prime duty. We shall adhere in word and deed to the
              philosophy of “DISCOVERY WITH ACTION”, following with
              the universal values of Love, Truth and Tolerance.
            </div>
          </v-flex>

        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
      &nbsp;&nbsp;&nbsp;
    <br>
    <br>
    <v-flex xs12 md5 offset-sm0>
      <v-card height="800" color="red lighten-5">
        <v-container fluid grid-list-lg>
          <v-layout column>
            <v-flex xs5 md4>
              <v-card-media
                :src="vm[1].src"
                height="300px"
                contain
              ></v-card-media>
            </v-flex>
            <v-flex xs7 md6 offset-sm0>
              <div  style="font-size:20px;font-family:MV Boli">
                The Mission of S-Cube is to create
                Dreamers, Learners & Performers for the society.The mission
                is to promote academic excellence and provide the
                opportunity for early adolescents to attain their individual,
                social, emotional, and physical potential, by developing a
                leading community with strong valves, high academic
                standards focused upon “balanced, caring, communicators,
                knowledgeable, inquirers, open-minded, principled, reflective
                thinkers, and risk-takers who will be always
                “On the Top of the World”.
              </div>
            </v-flex>


          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

    </v-layout>
    </div>
    <br>
    <br>
<div id="teaching strategy">
    <v-flex xs11 md10 offset-sm1>
      <!--<v-card color="red lighten-5">-->
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex xs4 md4 offset-sm1>
              <v-card-media
                :src="vm[2].src"
                height="300px"
                contain
              ></v-card-media>
            </v-flex>
            &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp;
            <v-flex xs5 md5 offset-sm0>
              <div  style="font-size:20px;font-family:MV Boli">
                At S-Cube ,we believe that exploration is the key to learning giving our children freedom and an environment to explore enables us to build and sustain curiosity to learn.
                Encouragement and recognition play a very important role in development of the child.So we make constant efforts to maked child understand each concept through various methods.

              </div>
            </v-flex>


          </v-layout>
        </v-container>
      <!--</v-card>-->
    </v-flex></div>
    <br>
    <br>
    <div id="why scube">

    <v-layout><v-flex>
      <h1 class="text-md-center mb-5" style="font-size: 40px">
        Why S-Cube?
      </h1>
    </v-flex></v-layout>
    <v-layout row wrap
    >

      <v-flex xs12 md3 offset-sm2 >
          <v-container fluid grid-list-lg>
            <v-layout column>

              <v-flex xs12 md3>
                <div  style="font-size:20px;font-family:MV Boli">
                  <v-layout row wrap>
                  <v-flex xs12 md12 offset-sm0>

               <v-icon>mood</v-icon>  <span style="font-size:30px;font-family:MV Boli;color:#D81B60">The Winning Methodology</span><br>
                  </v-flex>   </v-layout>Our Methodology makes the Students capable of creatively resolve complex & tricky problems by improving and sharpening their analytical skills & parallel thinking processes. . We develop and share the right strategies from time to time to optimize Students’ output.
                  </div>
              </v-flex>

            </v-layout>
          </v-container>

      </v-flex>
      &nbsp;&nbsp;&nbsp;
      <br>
      <br>
      <v-flex xs12 md3 offset-sm0>

          <v-container fluid grid-list-lg>
            <v-layout column>

              <v-flex xs7 md3 offset-sm0>
                <div  style="font-size:20px;font-family:MV Boli">

                  <v-icon>live_help</v-icon>  <span style="font-size:30px;font-family:MV Boli; color:#D81B60">Doubt Clearing Sessions</span><br>
                  These sessions aim to make the concept of each student crystal clear without leaving anything for chance. Students with difficulties are always welcome in this session because this has been instrumental in increasing the overall score.
                </div>
              </v-flex>


            </v-layout>
          </v-container>

      </v-flex>

      <v-flex xs12 md3 offset-sm0>

        <v-container fluid grid-list-lg>
          <v-layout column>

            <v-flex xs7 md3 offset-sm0>
              <div  style="font-size:20px;font-family:MV Boli">

                <v-icon>access_time </v-icon>   <span style="font-size:30px;font-family:MV Boli;color:#D81B60">Effective Time Management</span><br>

                Entire syllabus is covered extensively and completed in time thereby saving sufficient time for revision, tests and doubt clearing sessions. This effective time management technique helps students improve their score at the last minute of preparation.
              </div>
            </v-flex>


          </v-layout>
        </v-container>

      </v-flex>

    </v-layout></div>
    <br>
    <div id="contactus">
    <v-footer height="auto">
      <v-card flat tile class="flex">

        <v-card-text class="teal white--text">
          <v-layout>
            <v-flex offset-sm1
                    v-for="(col, i) in rows"
                    :key="i"
                    xs6
                    style="font-size:20px;font-family:MV Boli"
            >
              <span v-text="col.title.toUpperCase()"  ></span>
              <div
                v-for="(child, i) in col.children"
                :key="i"
                v-text="child" style="font-family:MV Boli;font-size:18px"
              ></div>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs4 layout column style="font-size:18px;font-family:MV Boli">
              <span style="font-size:20px">CONTACT</span>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
               S-Cube-Rajendra Park, Odhav, India
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
                nehatotla147@gmail.com
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
                8460577261
              </div>

            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions class="grey lighten-2 justify-center">
          &copy;2018 — <strong>Copyright</strong>
        </v-card-actions>
      </v-card>
    </v-footer></div>
  </v-container>

</template>
<script>
  import Menu from '@/components/student/menu'
  import abc from '@/assets/banner1.jpg'
  import def from '@/assets/B.jpg'
  import nmd from '@/assets/ts.jpg'
  import vis from '@/assets/vision.jpg'
  import mis from '@/assets/mission.jpg'
  const TIMEOUT = 1;
  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data: () => ({

      vm: [{src: vis}, {src: mis}, {src: nmd}],
      msi: [{src: abc}, {src: def}],
      rows: [{
        title: 'About Us',
        children: ['SCUBE Education Institute was Founded by Ms Neha Totla With the objective of providing quality education to students. We have offered coaching to more than 500 students in past 5 years. We have been able to produce the best results in our area in these years. Even some of our students appeared in state board’s top rankings.']
      }],

    })
,

    name: 'NavLinks',
    mounted () {
      // From testing, without a brief timeout, it won't work.
      if (this.$route.hash) {
        setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT)
      }
    },
    methods: {
      scrollTo: function (hashtag) {
        setTimeout(() => { location.href = hashtag }, TIMEOUT)
      }
    }

 // created :function(){
 //
 //    window.location.hash()
 //   }

  }
</script>
