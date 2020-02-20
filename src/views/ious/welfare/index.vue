<template>
  <div id="welfare">
    <Panel title="白条福利" class="pa">
      <ul>
        <li>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
          <div>
            <h4>开通白条</h4>
            <p>送188元礼包</p>
          </div>
          <router-link :to="{name:'home'}" tag="em">立即开通 ></router-link>
        </li>
        <li>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
          <div>
            <h4>白条闪付</h4>
            <p>新手享158元礼包</p>
          </div>
          <router-link :to="{name:'home'}" tag="em">随机立减 ></router-link>
        </li>
        <li>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
          <div>
            <h4>白条提额</h4>
            <p>金融app专享提额礼包</p>
          </div>
          <router-link :to="{name:'home'}" tag="em">去提额 ></router-link>
        </li>
      </ul>
    </Panel>
  </div>
</template>

<script>
import Panel from '@/components/common/panel.vue'
export default {
  name: 'welfare',
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
#welfare::v-deep{
  .pa{
    h4{
      font-weight: 700;
    }
  }
  padding: 1rem 1rem 0 1rem;
  li{
    border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
    widows: 100%;
    padding: 0.5rem 1rem ;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    img{
      width: 5rem;
      height: 5rem;
      padding: 0.3rem;
    }
    div{
      padding: 0.9rem;
      width: 11rem;
      h4{
        font-weight: 700;
        font-size: 1.7rem;
      }
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: red;
        line-height: 2rem;
      }
    }
    em{
      color: #FF801A;
      font-size: 1.75rem;
      // display: block;
      // float: right;
      position: relative;
      right: -2rem;
      // display: inline-block;
      // vertical-align: middle;
    }
  }
  li:nth-child(3){
    em{
      color: #FF801A;
      font-size: 1.75rem;
      position: relative;
      right: -3.1rem;
    }
  }
}
</style>
