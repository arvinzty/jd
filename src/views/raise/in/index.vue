<template>
  <div id="in">
    <Panel  title="In货推荐" class="pa">
      <section v-for="(items,index) in arr" :key="index">
        <div class="box" >
          <img :src="items.catory" alt="">
          <section>
            <div v-for="tem in items.list" :key="tem.img">
              <h6 v-if="tem.hot">精选</h6>
              <img :src="tem.img" alt="">
              <p>{{tem.title}}</p>
              <h4>{{tem.price}}<span>起</span></h4>
              <div>
                <div ><div class="speed" :style="'width:'+speed(tem.progress)"></div></div>
                <h5>{{tem.progress}}%</h5>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Panel>
  </div>
</template>

<script>
import Panel from '@/components/common/panel.vue'
export default {
  name: 'in',
  components: {
    Panel
  },
  props: {},
  data () {
    return {
      arr: [
        {
          catory: '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
          list: [
            {
              img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
              title: '双响炮蓝牙音箱',
              price: '29.00',
              progress: 172,
              hot: true
            },
            {
              img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
              title: '脑波相机',
              price: '998.00',
              progress: 259,
              hot: false
            }
          ]
        },
        {
          catory: '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
          list: [
            {
              img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
              title: '智能电动牙刷',
              price: '19.00',
              progress: 481,
              hot: false
            },
            {
              img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
              title: '烟草加热电子烟',
              price: '258.00',
              progress: 105,
              hot: false
            }
          ]
        },
        {
          catory: '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
          list: [
            {
              img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
              title: '赖公高淮封藏老酒',
              price: '99.00',
              progress: 199,
              hot: false
            },
            {
              img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
              title: '泗洪花雕醉蟹',
              price: '58.00',
              progress: 222,
              hot: false
            }
          ]
        }
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {
    speed (tem) {
      tem = tem > 200 ? 1 : ((tem - 100) * 0.01)
      // console.log((tem * 8) + 'rem')
      return (tem * 8) + 'rem'
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
#in .box{
  &>img{
    width: 100%;
  }
  section{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-bottom: 2rem;
    &>div{
      width: 50%;
      box-sizing: border-box;
      text-align: center;
      position: relative;
      h6{
        position: absolute;
        font-size: 1.5rem;
        font-weight: 700;
        padding: 0.4rem;
        background-color: rgba($color: #000000, $alpha: 0.3);
        color: rgba($color: red, $alpha: 0.9);
        margin-left: 0.6rem;
        margin-top: 0.3rem;
      }
      img{
        width: 100%;
        box-sizing: border-box;
        padding: 2.4rem;
      }
      p{
        margin-top: -1.3rem;
        font-size: 1.6rem;
        // line-height: 2rem;
        font-weight: 700;
      }
      h4{
        font-size: 2.2rem;
        line-height: 2.8rem;
        font-weight: 700;
        color: rgba($color: red, $alpha: 0.7);
        span{
          font-size: 1.5rem;
          color: rgba($color: #000000, $alpha: 0.5);
          margin-left: 0.5rem;
        }
      }
      &>div{
        // width: 40%;
        // height: 0.625rem;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem 0 2rem;
        h5{
          color: rgba($color: #000000, $alpha: 0.5);
          line-height: 2rem;
        }
        &>div{
          width: 8rem;
          border-radius: 0.25rem;
          background-color: #F6E6E6;
          height: 0.625rem;
          .speed{
            width: 72%;
            border-radius: 0.25rem;
            background-color: #F6E6E6;
            background-image: linear-gradient(270deg,#F55 ,#FF9C31 );
            height: 0.625rem;
          }
        }
      }
    }
  }
}
</style>
