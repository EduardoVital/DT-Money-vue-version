<script setup lang="ts">
import { PencilSquareIcon } from "@heroicons/vue/24/solid"
import { dateFormatter, priceFormatter } from "../../../utils/formatters"
import { ref, onMounted, watch, computed } from 'vue';
import type { Ref } from 'vue';
import { useTransactions } from '../../../stores/transactions';
import { Table } from '../../../types/index'
import router from '@/router'

const transactions = useTransactions();

const isCheckedAll: Ref<boolean> = ref(false);
const isSelectedAll: Ref<number[]> = ref([]);

const tableData = computed((): Table[] => transactions.getTableData)

onMounted(() => {
  transactions.getTransactionsData();
})

watch(
  isSelectedAll,
  () => {
    isCheckedAll.value = isSelectedAll.value.length === tableData.value.length
    transactions.setCheckedItems(isSelectedAll.value)
  },
  { deep: true },
);

watch(
  tableData,
  () => {
    isSelectedAll.value = []
  },
  { deep: true }
)

const typeOfTransactions = (type: string) => {
  return type === "income" ? "transactions-container__table--income" : "transactions-container__table--outcome"
}

const checkAllItems = () => {
  isCheckedAll.value = !isCheckedAll.value

  isCheckedAll.value ?  isSelectedAll.value = tableData.value.map(item => item.id) : isSelectedAll.value = []
}

const editTransaction = (id: number) => {
  router.push({
    name: 'edit-transaction',
    params: {
      id,
    }
  })
}

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
          <th></th>
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
          <td @click="editTransaction(transactions.id)"><Pencil-square-icon class="transactions-container__edit-icon"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles.scss"
</style>