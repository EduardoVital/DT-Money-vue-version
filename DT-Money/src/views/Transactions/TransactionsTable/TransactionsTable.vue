<script setup lang="ts">
// import { dateFormatter, priceFormatter } from "../../../utils/formatters"
import { getTransactions } from "../../../services/transactions/index"
import { ref, onMounted} from 'vue';
import type { Ref } from 'vue';

interface Table {
  id: number,
  description: string,
  type: string,
  category: string,
  price: number,
  createdAt: string
}

const isCheckedAll: Ref<boolean> = ref(false);
const isSelectedAll: Ref<number[]> = ref([]);
const tableData: Ref<Table[]> = ref([]) 



const fetchData = () => {
  getTransactions().then(response => {
    tableData.value = response?.data
  })
}

onMounted(() => {
  fetchData();
})

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const dateFormatter = new Intl.DateTimeFormat('pt-BR')

const typeOfTransactions = (type: string) => {
  return type === "income" ? "transactions-container__table--income" : "transactions-container__table--outcome"
}

const checkAllItems = () => {
  isCheckedAll.value = !isCheckedAll.value

  isCheckedAll.value ?  isSelectedAll.value = tableData.value.map(item => item.id) : isSelectedAll.value = []
}

// const checkItem = () => {
//   if (isSelectedAll.value.length ===  tableData.transactions.length -1) {
//     isCheckedAll.value = true
//   }
// }

</script>

<template>
  <div class="transactions-container__table">
    <table>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="isCheckedAll" @click="checkAllItems"></th>
          <th>Transação</th>
          <th>Valor</th>
          <th>Tipo</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody v-for="transactions in tableData" :key="transactions.id" >
        <tr>
          <td><input type="checkbox" v-model="isSelectedAll" :value="transactions.id"></td>
          <td>{{transactions.description}}</td>
          <td :class="typeOfTransactions(transactions.type)">
            {{transactions.type === "outcome" ? "- " : ""}}
            {{priceFormatter.format(transactions.price)}}</td>
          <td>{{transactions.category}}</td>
          <td>{{dateFormatter.format(new Date(transactions.createdAt))}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles.scss"
</style>