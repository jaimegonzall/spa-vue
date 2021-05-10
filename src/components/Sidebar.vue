<template>
  <div class="sidebar">
    <div class="sidebar--logo">
        <img alt="Logotype" src="../assets/green-tea.png">
        <span>{{ slogan }}</span>
    </div>

    <ul class="sidebar--navbar">
      <li><router-link to="/">Imagen</router-link></li>
      <li><router-link to="/datos">Datos</router-link></li>
      <li><router-link to="/graficos">Gráficos</router-link></li>

      
    </ul>

    <ul class="sidebar--social">
      <li>Jaime G. Llistó:</li>
      <li><a href="https://github.com/jaimegonzall" target="blank"><img align="center" src="../assets/github-bk.svg" alt="jaimegonzall" height="30" width="40" /></a></li>
      <li><a href="https://linkedin.com/in/jaimegonzall" target="blank"><img align="center" src="../assets/linkedin-bk.svg" alt="jaimegonzall" height="30" width="40" /></a></li>
      <li><a href="https://www.behance.net/jaimegonzall" target="blank"><img align="center" src="../assets/behance-bk.svg" alt="jaimegonzall" height="30" width="40" /></a></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    slogan: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sidebar{
    position: fixed;
    left: 0;
    width: 30vw;
    height: 100vh;
    padding: 20px;
    background-color: var(--bg-c-secondary);
    box-shadow: 3px 0 10px 0px var(--bg-c-secondary);
    display: flex;
    flex-flow: wrap column;
    justify-content: space-between;
}

.sidebar--logo{
    display: flex;
    flex-direction: column;
    align-items: center;
}

    .sidebar--logo img{
        max-width: 40%;
    }
    .sidebar--logo span{
        font-weight: 600;
        color: var(--txt-color-3);
        margin-top: 15px;
    }


.sidebar--navbar {
  list-style: none;
  text-align: center;
}
    .sidebar--navbar li {
        line-height: 5rem;
        font-size: 2rem;
    }

    .sidebar--navbar a{
        color: var(--txt-color-3);
        text-decoration: none;
    }
    .sidebar--navbar a:hover{
        color: var(--action);
    }

    .sidebar--navbar a.router-link-exact-active {
      color: var(--action);}


.sidebar--social{
  list-style: none;
  display: flex;
  justify-content: space-evenly;
}

    .sidebar--social li:first-child{
      color: var(--action);
    }



</style>
