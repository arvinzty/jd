<template>
  <div id="islider">
    <Slider :items="items"/>
  </div>
</template>

<script>
import Slider from '@/components/common/slider.vue'
export default {
  name: 'islider',
  components: {
    Slider
  },
  props: {},
  data () {
    return {
      items: [
        {
          href: '/demo',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320'
        },
        {
          href: '/demo',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320'
        }
      ]
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
#islider::v-deep{
  // margin-top: 7rem;
  img{
    width: 100%;
  }
}
</style>
