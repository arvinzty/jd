<template>
  <div id="money">
    <Panel title="理财精选">
      <section class="pane">
        <router-link v-for="(tem,index) in arr" :key="index" :to="{path: '/demo'}" tag="dl">
          <dt>{{tem.title}}<span>{{tem.sub}}</span></dt>
          <dd>{{tem.rate}}</dd>
          <dd>{{tem.text}}</dd>
        </router-link>
      </section>
    </Panel>
  </div>
</template>

<script>
import Panel from '@/components/common/panel.vue'
export default {
  name: 'money',
  components: {
    Panel

  },
  props: {},
  data () {
    return {
      arr: [
        {
          title: '定期理财',
          sub: '理财首选',
          rate: '5.60%',
          text: '历史年化回报率'
        },
        {
          title: '小白理财',
          sub: '理财首选',
          rate: '4.22%',
          text: '7日年化收益率'
        },
        {
          title: '月月盈',
          sub: '养老保障',
          rate: '5%',
          text: '七日年化收益率'
        },
        {
          title: '小白基金',
          sub: '天天赚钱',
          rate: '4.27%',
          text: '7日年化收益率'
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
@import '@/assets/css/element.scss';
#money{
  position: relative;
}
.pane{
  @include list(row);
  justify-content: space-around;
  &::before{
    content: '';
    display: block;
    // height: 18.5rem;
    height: 18.5rem;
    width: 0.0625rem;
    background-color: rgba($color: #000000, $alpha: 0.1);
    position: absolute;
  }
  // box-sizing: border-box;
  &::after{
    content: '';
    display: block;
    background-color: rgba($color: #000000, $alpha: 0.1);
    width: 100%;
    height: 0.0625rem;
    position: absolute;
    bottom: 9rem;
  }
  dl{
    width: 50%;
    padding: 1rem 2rem;
    box-sizing: border-box;
    position: relative;
    dt{
      font-size: 1.875rem;
      line-height: 2.625rem;
      color: #333;
      span{
        font-size: 1.375rem;
        color:#ff5155;
        border: 0.0625rem solid #ff5155;
        padding: 0 0.5rem;
        vertical-align: 0.0625rem;
        margin-left: 0.125rem;
      }
    }
    dd{
      &:nth-child(2){
        font-weight: 700;
        font-size: 2.75rem;
        // height: 3.625rem;
        line-height: 2.625rem;
        color: #FF5155;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &:nth-child(3){
        font-size: 1.5rem;
        // height: 2.125rem;
        line-height: 2.125rem;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
