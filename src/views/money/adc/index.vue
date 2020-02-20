<template>
  <div id="adc">
    <Panel title="京东智投">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
    </Panel>
  </div>
</template>

<script>
import Panel from '@/components/common/panel.vue'
export default {
  name: 'adc',
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
#adc::v-deep{
  h4{
    display: none;
  }
  img{
    width: 100%;
  }
  .panel{
    margin: 0;
  }
}
</style>
