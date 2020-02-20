<template>
  <div id="mslider">
    <Slider :items="items">
    </Slider>
  </div>
</template>

<script>
import Slider from '@/components/common/slider.vue'
export default {
  name: 'mslider',
  components: {
    Slider
  },
  props: {},
  data () {
    return {
      items: [{
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400'
      }]
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
#mslider::v-deep{
  img{
    width: 100%;
  }
  margin-top: 7rem;
}
</style>
