import axios from 'axios'
// import Vuex from 'vuex'
export default {
  methods: {
    getDataMix () {
      // return Promise.resolve({data: 'https://dev.it-thematic.ru/ikpz/ugeoapi/api/v1/ugeoapi/providers/32/features/3909/'})
      return axios.get('http://657b77489a4e.ngrok.io/api/v1/blog/posts/')
    }
  }
}
