<template>
  <div id="novice">
    <Panel title="新手特权" class="panel">
      <section>
        <div class="div1">
          <h4>下载APP<span class="red">送888元礼包</span></h4>
          <p class="gray">新手专享</p>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
        </div>
        <div class="div2">
          <div>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
            <h4 class="red">领128元新手礼包</h4>
            <p class="gray">立即开通</p>
          </div>
          <div>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="">
            <h4>打白条<span class="red">享免息</span></h4>
            <p class="gray">立即开通享豪礼</p>
          </div>
        </div>
      </section>
    </Panel>
  </div>
</template>

<script>
import Panel from '@/components/common/panel.vue'
export default {
  name: 'novice',
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
@import '@/assets/css/element.scss';
#novice .panel{
  section
  {
    @include list(row);
    .red
    {
      color: #f00;
    }
    .gray
    {
      color: #999;
      font-size: 1.5rem;
    }
    div
    {
      display: inline-block;
    }
    &>div
    {
      width: 50%;
      box-sizing: border-box;
      //平时我们指定的box宽度，是指content的宽度，改为borderBox后，我们指定的宽度包含了boeder和padding
    }
    h4
    {
      font-size: 1.625rem;
      line-height: 2.5rem;
    }
    .div1
    {
      padding: 2rem 1.25rem;
      text-align: center;
      border-right: 1px solid #ddd;
      img
      {
        width: 8.25rem;
        height: 8.25rem;
        margin: 1.25rem auto 0;
      }
    }
    .div2
    {
      div
      {
        box-sizing: border-box;
        width: 100%;
        height: 9rem;
        padding: 2rem 1rem;
        &:first-child
        {
          border-bottom: 1px solid #ddd;
        }
        h4
        {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: left;
        }
        img
        {
          width: 5rem;
          height: 5rem;
          float: right;
        }
      }
    }
  }
}
</style>
