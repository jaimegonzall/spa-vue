<template>
  <article>
      <h1>{{ msg }}</h1>
      <img alt="Vue logo" src="../assets/smart-app.png">
    </article>

</template>

<script>
export default {
  name: 'Image',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


img{
  width: 100%;
  height: 100%;
}

</style>
