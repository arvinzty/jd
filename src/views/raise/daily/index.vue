<template>
  <div id="daily">
    <Panel title="每日签到">
      <ul>
        <li>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
        </li>
        <li>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
        </li>
      </ul>
    </Panel>
  </div>
</template>

<script>
import Panel from '@/components/common/panel.vue'
export default {
  name: 'daily',
  components: {
    Panel
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
#daily::v-deep{
  position: relative;
  h4{
    font-weight: 700;
  }
  ul{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    li{
      box-sizing: border-box;
      width: 50%;
      img{
        width: 100%;
      }
    }
  }
  &::after{
    content: "不抢白不抢";
    color: rgba($color: #000000, $alpha: 0.6);
    font-size: 1.4rem;
    position: absolute;
    right: 2rem;
    top: 3.1rem;
  }
}
</style>
