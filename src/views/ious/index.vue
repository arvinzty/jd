<template>
  <div id="ious">
    <Header/>
    <Islide/>
    <Welfare/>
    <Service/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/views/header'
import Footer from '@/views/footer'
import Islide from '@/views/ious/islider'
import Welfare from '@/views/ious/welfare'
import Service from '@/views/ious/service'
export default {
  name: 'ious',
  components: {
    Header,
    Footer,
    Islide,
    Welfare,
    Service
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
