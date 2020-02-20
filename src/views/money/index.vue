<template>
  <div id="m">
    <Header/>
    <Mslider/>
    <Ada/>
    <Adb/>
    <Finance/>
    <Adc/>
    <Footer class="foot"/>
  </div>
</template>

<script>
import Header from '@/views/header'
import Footer from '@/views/footer'
import Mslider from '@/views/money/mslider'
import Ada from '@/views/money/ada'
import Adb from '@/views/money/adb'
import Finance from '@/views/money/finance'
import Adc from '@/views/money/adc'
export default {
  name: 'm',
  components: {
    Header,
    Footer,
    Mslider,
    Ada,
    Adb,
    Finance,
    Adc
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
#m::v-deep{
  .foot{
    ul{
      margin-top: -2rem;
    }
    li:nth-child(1){
      display: none;
    }
  }
}
</style>
