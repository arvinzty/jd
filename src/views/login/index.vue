<template>
  <div id="login">
    <section>
      <svg  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2734" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M856.192 992H167.808c-39.488 0-71.552-35.968-71.552-80.064V480h64v431.936c0 10.368 5.696 16.064 7.552 16.064h688.384c1.856 0 7.616-5.696 7.616-16.064V480h64v431.936c0 44.096-32.128 80.064-71.616 80.064z" p-id="2735" fill="#8a8a8a"></path><path d="M679.424 741.696H344.512c-39.424 0-71.552-34.368-71.552-76.672V486.592h64v178.432c0 7.616 4.544 12.672 7.552 12.672h334.912c3.072 0 7.552-4.928 7.552-12.672V486.592h64v178.432c0 42.304-32.128 76.672-71.552 76.672z" p-id="2736" fill="#8a8a8a"></path><path d="M897.984 526.464c-38.4 0-73.152-17.28-96.512-44.928a126.144 126.144 0 0 1-193.152 0.064c-23.232 27.52-57.92 44.8-96.256 44.864h-0.384a125.952 125.952 0 0 1-96-44.864 126.336 126.336 0 0 1-193.152-0.064 126.144 126.144 0 0 1-96.576 44.928A127.04 127.04 0 0 1 0.192 413.888l2.368-35.968c0.256-3.2 1.024-6.4 2.24-9.344L101.312 130.56c1.664-4.224 17.088-41.024 43.712-68.608C168.896 37.184 206.848 32 234.496 32c8 0 13.12 0.448 13.12 0.448l530.88-0.128c0.512-0.064 4.928-0.32 11.008-0.32 27.648 0 65.6 5.184 89.408 29.888 26.688 27.648 42.048 64.448 43.712 68.544l96.576 238.016c1.28 3.008 1.984 6.208 2.24 9.408l2.432 29.632c-7.616 70.592-61.696 118.976-125.888 118.976z m-99.008-148.672c16.256 0 34.88 12.16 36.736 28.352a63.04 63.04 0 0 0 62.272 56.256 63.104 63.104 0 0 0 62.272-56l-1.984-17.92-94.912-233.92c-0.128-0.256-12.096-29.12-30.528-48.192-4.864-5.184-20.288-10.368-43.328-10.368l-7.616 0.192-537.088 0.128-10.304-0.32c-23.04 0-38.4 5.184-43.392 10.368-18.368 19.072-30.4 48-30.528 48.256L65.984 388.032l-2.112 24.768c3.648 25.536 30.4 49.664 62.08 49.664a63.04 63.04 0 0 0 62.336-56.256c1.792-16.192 15.488-28.416 31.744-28.416s34.88 12.224 36.736 28.416a62.976 62.976 0 0 0 62.272 56.256c32 0 58.752-24.256 62.272-56.448 1.792-16.256 15.552-28.544 31.872-28.544s34.88 12.288 36.672 28.544a62.912 62.912 0 0 0 62.208 56.448c31.872 0 58.624-24.32 62.144-56.512 1.792-16.192 15.488-28.48 31.808-28.48s34.816 12.288 36.608 28.48a63.04 63.04 0 0 0 62.336 56.512 62.976 62.976 0 0 0 62.272-56.256 31.936 31.936 0 0 1 31.744-28.416z" p-id="2737" fill="#8a8a8a"></path></svg>
    </section>
    <section class="choice">
      <!-- <div>注册</div>
      <div>登录</div> -->
      <label>
        <input type="radio" name="radio" @click="a1">
        <span>注册</span>
      </label>
      <label>
        <input type="radio" name="radio" @click="a2" checked="true">
        <span>登录</span>
      </label>
    </section>
    <section class="sec">
      <div v-show="dl" >
        <div class="dl">账号：<input type="text"  placeholder=" 请输入手机号/邮箱(123)" v-model="name1"></div>
        <div class="dl">密码：<input type="password"  placeholder=" 请输入密码(123)" v-model="password1"></div>
        <div><button @click="cli1">确认</button></div>
      </div>
      <div v-show="zc">
        <div class="dl">输入账号：<input type="text"  placeholder=" 请输入手机号/邮箱" v-model="name2"></div>
        <div class="dl">输入密码：<input type="password"  placeholder=" 请输入密码" v-model="password2"></div>
        <div class="dl">再次输入：<input type="password"  placeholder=" 请输入密码" v-model="password3"></div>
        <div><button @click="cli2">注册</button></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  props: {},
  data () {
    return {
      name1: '',
      password1: '',
      name2: '',
      password3: '',
      password2: '',
      zc: false,
      dl: true
    }
  },
  watch: {},
  computed: {},
  methods: {
    async cli1 (e) {
      try {
        // eslint-disable-next-line no-unused-vars
        const res = await this.$axios.get('/api/login', { params: { username: this.name1, password: this.password1 } })
        // console.log(res)
        if (res.data.code === -1) {
          alert('账号或密码错误')
        } else if (res.data.code === 1) {
          console.log(res.data.message)
          this.$store.commit('setToken', res.data.token)
          const t = this.$route.query.redirect
          if (t) {
            this.$router.replace({ path: t })
          } else {
            this.$router.replace({ path: '/' })
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    cli2 (e) {
      alert('该功能暂不适用')
    },
    a1 () {
      this.dl = false
      this.zc = true
    },
    a2 () {
      this.zc = false
      this.dl = true
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
#login{
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(135deg,#7A9AD7 10%, #FCFCFC);
  text-align: center;
  svg{
    color: rgba($color: red, $alpha: 0.7);
    height: 7rem;
    width: 7rem;
    margin-top: 9rem;
  }
  .choice{
    display: flex;
    justify-content: space-around;
    border-bottom: 0.0625rem solid gray;
    label{
      font-size: 2rem;
      margin-top: 2rem;
      color: rgba($color: #000000, $alpha: 0.6);
      margin-bottom: 1rem;
      display: block;
      width: 100%;
      input{
      display: none;
      &:checked + span{
        color: rgba($color: blue, $alpha: 0.7);
        display: block;
        width: 100%;
        position: relative;
        &::after{
          content: '';
          width: 100%;
          height: 0.3rem;
          background-color: rgba($color: blue, $alpha: 0.4);
          display: block;
          position: absolute;;
          bottom: -1.1rem;
        }
       }
      }
    }
  }
  .sec div{
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    margin-top: 3rem;
    button{
      width: 11rem;
      height: 4rem;
      border-radius: 5rem;
      border: 0;
      background-color:rgba($color: blue, $alpha: 0.3);
      font-size: 2rem;
      color: antiquewhite;
      &:active{
        background-color:rgba($color: blue, $alpha: 0.7);
      }
    }
    .dl{
      font-size: 2rem;
      color: rgba($color: #000000, $alpha: 0.7);
      // width: 100%;
      padding: 1rem;
      input{
      // outline: none;
      border: 0;
      background-color: transparent;
      box-shadow: 0 0.00625rem 0.3rem;
      font-size: 2rem;
      border-radius: 0.2rem;
      &:focus{
        box-shadow: 0 0.00625rem 0.3rem blue;
        // border-bottom: #000000 solid 2rem;
        }
      }
    }
  }
}
</style>
