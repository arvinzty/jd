<template>
  <div id="borrow">
    <Panel class="panel" title="极速借贷">
     <router-link :to="{path:'/demo'}" >
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
     </router-link>
    </Panel>
  </div>
</template>

<script>
import Panel from '@/components/common/panel.vue'
export default {
  name: 'borrow',
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
.panel{
  padding-bottom: 2.5rem;
  img
  {
  display: block;
  width: 100%;
  }
}
</style>
