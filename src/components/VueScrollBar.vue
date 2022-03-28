    <!-- https://github.com/BosNaufal/vue-scrollbar -->
<template>
<!-- requires sass installed -->
  <!-- <vue-scrollbar classes="my-scrollbar"> -->
    <div class="should-have-a-children scroll-me">
      <p>And Now</p>
      <p>You Can Put</p>
      <p>A Long Content Here</p>
    </div>
  <!-- </vue-scrollbar> -->
</template>

<script>
// import vueScrollbar from 'vue-scrollbar';

export default {
  name: 'VueScrollBar',
  // components: { vueScrollbar },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*The Wrapper*/
.my-scrollbar{
  width: 35%;
  min-width: 300px;
  max-height: 450px;
}

/*The Content*/
.scroll-me{
  min-width: 750px;
}
</style>
