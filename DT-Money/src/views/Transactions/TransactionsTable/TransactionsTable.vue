<script setup lang="ts">
import tableData from "../../../table.json"
// import { dateFormatter, priceFormatter } from "../../../utils/formatters"

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const dateFormatter = new Intl.DateTimeFormat('pt-BR')

const typeOfTransactions = (type: string) => {
  return type === "income" ? "transactions-container__table--income" : "transactions-container__table--outcome"
}

</script>

<template>
  <div class="transactions-container__table">
    <table>
      <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th>Transação</th>
          <th>Valor</th>
          <th>Tipo</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody v-for="transactions in tableData.transactions" :key="transactions.id" >
        <tr>
          <td><input type="checkbox"></td>
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