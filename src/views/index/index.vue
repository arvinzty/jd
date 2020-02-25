<template>
  <div id="index">
    <router-view></router-view>
    <NavBar/>
  </div>
</template>

<script>
import NavBar from '@/views/navBar'
export default {
  name: 'index',
  components: {
    NavBar
  },
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
</style>
