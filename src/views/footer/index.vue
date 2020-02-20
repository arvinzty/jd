<template>
  <div id="foote">
    <Panel class="pa">
      <ul>
        <li>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
        </li>
        <li>
          <div>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
            <p>客户端</p>
          </div>
          <div>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" alt="">
            <p>触屏版</p>
          </div>
          <div>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" alt="">
            <p>电脑版</p>
          </div>
        </li>
        <li>Copyright © 2004-2017 京东JD.com 版权所有</li>
        <li>投资有风险，购买需谨慎</li>
        <li>京东金融平台服务协议</li>
        <li>京东金融隐私政策</li>
      </ul>
    </Panel>
  </div>
</template>

<script>
import Panel from '@/components/common/panel'
export default {
  name: 'foote',
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
@import '@/assets/css/element';
.pa::v-deep{
  h4{
    display: none;
    color: aliceblue
  }
}

#foote .pa{
  margin-bottom: 3.3rem;
  ul{
    text-align: center;
    padding-bottom: 2rem;
    background-color: #F5F5F5;
    img{
      width: 100%;
    }
    li{
      padding: 1rem;
    }
    li:nth-child(2){
      @include list(row);
      justify-content: space-around;
      div{
        display: inline-block;
        width: 4.625rem;
        height: 4.625rem;
        padding: 1rem 0;
        p{
          padding-top: 0.3rem;
          line-height: 1.3rem;
        }
      }
    }
    li:nth-child(n+3){
      border-top: 0.0625rem solid #ddd;
    }
  }
}
</style>
