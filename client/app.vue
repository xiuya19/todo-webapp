<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>counter {{counter}}</p>
    <p>fullName {{fullName}}</p>
    <!-- <p>textA {{textA}}</p> -->
    <!-- <p>textB {{textB}}</p> -->
    <!-- <p>textPlus {{textPlus}}</p> -->
    <router-link :to="{name: 'app'}">app</router-link>
    <router-link :to="{name: 'login'}">login</router-link>
    <!-- <todo></todo> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'
// import Todo from './views/todo/todo.vue'
export default {
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    let i = 0
    setInterval(() => {
      this.updateCount(i++)
    }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  },
  computed: {
    ...mapState({
      counter: (state) => state.count
    }),
    ...mapGetters({
      fullName: 'fullName'
    })
  }
}
</script>
<style lang="scss" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.9;
  z-index: -1;
}
</style>
