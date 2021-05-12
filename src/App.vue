<template>
    <Sidebar slogan="My company slogan"/>

  <main class="main">
    <router-view/>
  </main>
  
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>

/* #nav a {font-weight: bold;color: #2c3e50;}
#nav a.router-link-exact-active {color: #42b983;} */


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
  background-color: var(--bg-c-primary);
}

.main{
    position: absolute;
    right: 0;
    top: 0;
    width: 70vw;
    padding: 40px 60px;
    display: flex;
    flex-flow: wrap column;
    justify-content: space-between;
/*     background-image: url("./assets/background_top.png"), url("./assets/background_bottom.png");
    background-position: center top, center bottom;
    background-repeat: no-repeat, no-repeat; */
}

</style>
