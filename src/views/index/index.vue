<template>
  <div id="index">
    <router-views></router-views>
    <NavBar/>
  </div>
</template>

<script>
import NavBar from '@/views/index'
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
