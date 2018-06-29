import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'

//student
import SignUp from '@/components/student/Signup'
import Login from '@/components/student/Login'
import Home from '@/components/student/Home'
import Join from '@/components/student/register'
import FAQ from '@/components/student/faq'
import SAct from '@/components/student/activity'
import Scou from '@/components/student/course'
import Fact from '@/components/student/faculty'
import SChange from '@/components/student/changepassword'

//student after login
import Home1 from '@/components/student/afterlogin/home1'
import Marks from '@/components/student/afterlogin/marks/marks'
import SFees from '@/components/student/afterlogin/fees/fees'
import SEProf from '@/components/student/afterlogin/profile/editprofile'
import SVProf from '@/components/student/afterlogin/profile/viewprofile'
import SForgot from '@/components/student/fg'
import SRes from '@/components/student/reset'
// import SVProf from '@/components/student/afterlogin/profile/viewprofile'
//Admin
import AHome from '@/components/Admin/Home'
import stud from '@/components/Admin/student/student'
import RFac from '@/components/Admin/other/removefac'
import studdata from '@/components/Admin/student/studentdata'
import AFees from '@/components/Admin/student/fees/fees'
import studmark from '@/components/Admin/student/marks/marks'
import studmark1 from '@/components/Admin/student/marks/marksfill'
import AForgot from '@/components/Admin/fg'
import AChange from '@/components/Admin/changepassword'
import ARes from '@/components/Admin/reset'
import Alogin from '@/components/Admin/Login'
import Act from '@/components/Admin/other/activity'
import RAct from '@/components/Admin/other/removeactivity'
import Faculty from '@/components/Admin/other/faculty'
import Course from '@/components/Admin/other/courses'
import RCourse from '@/components/Admin/other/removecourse'
import updatefaq from '@/components/Admin/faq/updatefaq'
import AFAQ from '@/components/Admin/faq/FAQ'
import Mark from '@/components/Admin/student/marks/marksget'
import Add from '@/components/Admin/functions/addnewadmin'
import ARemove from '@/components/Admin/functions/removeadmin'
import View from '@/components/Admin/profile/viewprofile'
import Edit from '@/components/Admin/profile/editprofile'
Vue.use(Router)
Vue.use(VueHead)
const router= new Router({
  routes: [
// student routes
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/activity/:id',
      name: 'SAct',
      component: SAct
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/course',
      name: 'Scou',
      component: Scou
    },

    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ
    },

    {
      path: '/faculty',
      name: 'Fact',
      component: Fact
    },

    {
      path: '/forgotpassword',
      name: 'SForgot',
      component: SForgot,

    },

    {
      path: '/reset',
      name: 'SRes',
      component: SRes,

    },
    //after login
    {
      path: '/changepassword',
      name: 'SChange',
      component: SChange,

    },
    {
      path: '/home',
      name: 'Home1',
      component: Home1,
      meta: { requiresAuth1: true}

    },
    {
      path: '/result',
      name: 'Marks',
      component: Marks,
      meta: { requiresAuth1: true}
    },
    {
      path: '/fees',
      name: 'SFees',
      component: SFees,
      meta: { requiresAuth1: true}
    },
    {
      path: '/viewprofile',
      name: 'SVProf',
      component: SVProf,
      meta: { requiresAuth1: true}
    },
    {
      path: '/editprofile',
      name: 'SEProf',
      component: SEProf,
      meta: { requiresAuth1: true}
    },

// Admin routes

    {
      path: '/Admin/forgotpassword',
      name: 'AForgot',
      component: AForgot,

    },
    {
      path: '/Admin/changepassword',
      name: 'AChange',
      component: AChange,

    },
    {
      path: '/Admin/reset',
      name: 'ARes',
      component: ARes,

    },
    {
      path: '/Admin/Faq',
      name: 'AFAQ',
      component: AFAQ,
      meta: { requiresAuth: true}
    },
    {
      path: '/admin',
      name: 'AHome',
      component: AHome,
      meta: { requiresAuth: true}
    },
    {
      path: '/Admin/view',
      name: 'View',
      component: View,
      meta: { requiresAuth: true }
    },
    {
      path: '/Admin/edit',
      name: 'Edit',
      component: Edit,
      meta: { requiresAuth: true}
    },
    {
      path: '/Admin/Login',
      name: 'Alogin',
      component: Alogin
    },
    {
      path: '/Admin/studentdata',
      name: 'studdata',
      component: studdata,
      meta: { requiresAuth: true}
    },

    {
      path: '/Admin/student/:id',
      name: 'stud',
      component: stud,
      meta: { requiresAuth: true}
    },
    {
      path: '/Admin/add',
      name: 'Add',
      component: Add,
      meta: { requiresAuth: true}
    },
    {
      path: '/Admin/removefaculty',
      name: 'RFac',
      component: RFac,
      meta: { requiresAuth: true}
    },
    {
      path: '/Admin/removecourse',
      name: 'RCourse',
      component: RCourse,
      meta: { requiresAuth: true}
    },
    {
      path: '/Admin/removeactivity',
      name: 'RAct',
      component: RAct,

    },
    {
      path: '/Admin/remove',
      name: 'ARemove',
      component: ARemove,
      meta: { requiresAuth: true}
    },
    {
      path: '/Admin/updatefaq/:id',
      name: 'updatefaq',
      component: updatefaq,
      meta: { requiresAuth: true}
    },

    {
      path: '/Admin/fees/:id',
      name: 'AFees',
      component: AFees,
      meta: { requiresAuth: true}
    },
    {
      path: '/Admin/faculty',
      name: 'Faculty',
      component: Faculty,
      meta: { requiresAuth: true}
    },
    {
      path: '/Admin/course',
      name: 'Course',
      component: Course,
      meta: { requiresAuth: true}
    },
    {
      path: '/Admin/activity',
      name: 'Act',
      component: Act,
      meta: { requiresAuth: true}
    },
    {
      path: '/Admin/marks/:id',
      name: 'studmark',
      component: studmark,
      meta: { requiresAuth: true}
    },
    {
      path: '/Admin/marks1',
      name: 'studmark1',
      component: studmark1,
      meta: { requiresAuth: true}
    },
    {
      path: '/Admin/marksget/:id',
      name: 'Mark',
      component: Mark,
      meta: { requiresAuth: true}
    }


  ],
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
   const token=Vue.localStorage.get('token')
    if (token) {
      next()
    } else {
      next({

      path:'/Admin/login'
      })
    }
  } else {
    next() // make sure to always call next()!
  }
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth1)) {
    const token=Vue.localStorage.get('token')
    if (token) {
      next()
    } else {
      next({
        name:'Login'
      })
    }
  } else {
    next() // make sure to always call next()!
  }
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // make sure to always call next()!
//   }
// })
export default router
