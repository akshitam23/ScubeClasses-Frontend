// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import colors from 'vuetify/es5/util/colors'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VDatePicker,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VRadioGroup,
  VCard,
  VTextField,
  VForm,
  VSelect,
  VDialog,
  VMenu,
  VDivider,
  VDataTable,
  VCarousel,
  VExpansionPanel,
  VTooltip,
  VProgressLinear,
  VTabs,
  VSubheader,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VExpansionPanel,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VDatePicker,
    VToolbar,
    VCard,
    VTextField,
    VTabs,
    VForm,
    VSelect,
    VDialog,
    VDivider,
    VMenu,
    VDataTable,
    VRadioGroup,
    VCarousel,
    VTooltip,
    VProgressLinear,
    VSubheader,
    transitions
  },
  theme: {
    primary: colors.cyan.base,
    secondary: colors.cyan.darken1,
    accent: colors.shades.black,
    error: colors.orange.accent3,
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
//lime.lighten1

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
