import axios from 'axios'

export default {
  methods: {
    getDataMix () {
      return axios.get('https://4a5dfba728ad.ngrok.io/api/v1/blog/posts/')
    }
  }
}
