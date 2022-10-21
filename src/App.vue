<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
#app {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
html,
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 900px) {
  html {
    font-size: 14px;
  }
}

a:link{color: #939393;}  /*超链接默认样式*/
a:visited{color: #939393;}  /*超链接被访问后的样式*/
a:hover{color: green;}   /*鼠标经过超链接的样式*/
a:active{color: black;}  /*超链接被激活时的样式*/
a{text-decoration: none;}  /*完全清除超链接下划线效果*/
img{vertical-align:middle;}
</style>



