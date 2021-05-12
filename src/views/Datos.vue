<template>
  <article class="datos">
    <h1>Tabla de paísess</h1>
    
    <table>
      <thead>
        <tr>
          <th>País</th>
          <th>Población total</th>
          <th>Código</th>
          <th>Moneda</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(pais, index) in arrayData" :key="index">
            <td>{{pais.name}}</td>
            <td>{{pais.population}}</td>
            <td>{{pais.numericCode}}</td>
            <td>{{pais.currencies[0].name}}</td>
          </tr>

      </tbody>

    </table>

  </article>
</template>


<style scoped>

table, th, td {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid var(--txt-color-3);
}

th {
  height: 70px;
  text-align: center;
  color: var(--txt-color-3);
  background-color: var(--txt-color-2);
}

tr:nth-child(even) {background-color: var(--txt-color-3)}

tr:hover {
  background-color: #f5f5f5;
  }


</style>

<script>

import { ref } from 'vue'
export default {
  setup() {
    const arrayData = ref([])

    const fetchData = async() => {
      try {
        const res = await fetch('api.json')
            arrayData.value = await res.json()
      } catch (error) {
            console.log(error)
      }
    }
    fetchData()

      return {arrayData}

  }
}
</script>

