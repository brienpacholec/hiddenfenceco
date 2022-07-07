import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import '~/assets/scss/app.scss'
import theme from '~/constants/theme'

export default function(Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Raleway'
  })

  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(theme)

}
