<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Image msg="Mensaje de Image.vue"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Image from '@/components/Image.vue'

export default {
  name: 'Home',
  components: {
    Image
  }
}
</script>
