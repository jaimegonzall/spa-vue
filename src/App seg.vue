<template>
  <Main msg="Prueba técnica de Jaime G. Llistó"/>
  <Sidebar slogan="My company slogan"/>
</template>

<script>
import Main from './components/Main.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Main, Sidebar
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');

:root {
    --txt-color-1: #2D2A4C;
    --txt-color-2: #8C8D93;
    --txt-color-3: #e9e9e9;
	  --bg-c-primary: #fff;
	  --bg-c-secondary: #2D2A4C;
	  --action: #50e288;
	  --main-font: 'Montserrat', sans-serif;
	}

*{
  margin: 0;
  padding: 0;
  color: var(--txt-color-1);
  border: none;
  outline: none;
  box-sizing: border-box;
}

#app {
  font-family: var(--main-font);
  color: var(--txt-color-1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
