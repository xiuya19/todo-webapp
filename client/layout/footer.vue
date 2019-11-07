<template>
  <div id="footer">
    <span>Wrritten by {{author}}</span>
  </div>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {
      author: 'Jocky'
    }
  }
}
</script>
<style scoped>
#footer {
  margin-top: 40px;
  text-align: center;
  color: #bfbfbf;
  font-size: 10px;
  text-shadow: 0 1px 0 #bfbfbf;
}
</style>
