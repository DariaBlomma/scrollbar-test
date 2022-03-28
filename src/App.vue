<template>
  <div id="app">
    <vue-scroll-bar v-if="showVueScrollBar"/>
    <vue-bar v-if="showVueBar" />
    <vue-detached-scroll-bar v-if="showVueDetachedScrollBar" />
  </div>
</template>

<script>
import VueScrollBar from './components/VueScrollBar.vue';
import VueBar from './components/VueBar.vue';
import VueDetachedScrollBar from './components/VueDetachedScrollBar.vue';

export default {
  name: 'App',
  data() {
    return {
      showVueScrollBar: false,
      showVueBar: true,
      showVueDetachedScrollBar: false,
    }
  },
  components: { VueScrollBar, VueBar, VueDetachedScrollBar },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.select-wrapper {
  margin: 100px auto;
  width: 200px;
}

.select {
  padding: 5px 15px;
  border: 1px solid black;
}

.dropdown {
  border: 1px solid rgb(60, 23, 228);
  max-height: 200px;
  /* overflow-y: auto; */
}

.option {
    padding: 5px 15px;
}

/* поле где будет ползунок */
.vb > .vb-dragger {
    z-index: 5;
    width: 17px;
    right: 0;
    bottom: 0;
}

.vb > .vb-dragger > .vb-dragger-styler {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotate3d(0,0,0,0);
    transform: rotate3d(0,0,0,0);
    -webkit-transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    background-color: rgba(0, 0, 0, 0.767);
    margin: 5px 5px 5px 0;
    border-radius: 20px;
    height: calc(100% - 10px);
    display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(244, 48, 234, 0.3);
}

/* hover */
.vb > .vb-dragger:hover > .vb-dragger-styler {
    background-color: rgba(244, 87, 48, 0.904);
    /* margin: 0px; */
    /* height: 100%; */
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(81, 244, 48, 0.5);
    /* margin: 0px;
    height: 100%; */
}

/* click */
.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(244, 159, 48, 0.972);
}
</style>
