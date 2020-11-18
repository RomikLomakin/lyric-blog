<template>
  <div id="app">
    <HeaderVue></HeaderVue>
    <router-view></router-view>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderVue from '@/components/HeaderVue'
import FooterVue from '@/components/FooterVue'

export default {
  name: 'App',
  components: {
    HeaderVue,
    FooterVue
  }
}
</script>

<style lang="scss">
a {
  &:hover {
    text-decoration: none;
  }
}
.content {
  padding-bottom: 80px;
}
</style>
