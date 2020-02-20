<template>
  <div id="raise">
    <Header/>
    <Headlines/>
    <Daily/>
    <In/>
    <Welfare/>
    <Footer class="paa"/>
  </div>
</template>

<script>
import Header from '@/views/header'
import Footer from '@/views/footer'
import Headlines from '@/views/raise/headlines'
import Daily from '@/views/raise/daily'
import In from '@/views/raise/in'
import Welfare from '@/views/raise/welfare'
export default {
  name: 'raise',
  components: {
    Header,
    Footer,
    Daily,
    In,
    Welfare,
    Headlines
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
.paa::v-deep{
  ul>li:nth-child(1){
    display: none;
  }
  ul>li:nth-child(2){
    padding-top: 0 !important;
  }
}
</style>
