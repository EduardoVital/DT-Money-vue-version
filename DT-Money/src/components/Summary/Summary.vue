<script setup lang="ts">
import { ArrowUpIcon, ArrowDownIcon, CurrencyDollarIcon } from "@heroicons/vue/24/solid"
import { useTransactions } from '../../stores/transactions';
import { ref, onMounted, watch, computed } from 'vue';
import type { Ref } from 'vue';
import { priceFormatter } from "../../utils/formatters"

interface SummaryData {
  income: number,
  outcome: number,
  total: number,
}

const transactions = useTransactions();

const summary: Ref<SummaryData> = ref({
  income: 0,
  outcome: 0,
  total: 0,
})

onMounted(() => {
  console.log(transactions.getSummaryData)
})


</script>

<template>
  <section class="summary-container">
    <div class="summary-container__card">
      <header class="summary-container__header">
        <p>Entradas</p>
        <arrow-up-icon class="summary-container__icon summary-container__icon--income"/>
      </header>
      <strong>{{ priceFormatter.format(summary.income) }}</strong>
    </div>

    <div class="summary-container__card">
      <header class="summary-container__header">
        <p>Entradas</p>
        <arrow-down-icon class="summary-container__icon summary-container__icon--outcome"/>
      </header>
      <strong>{{ priceFormatter.format(summary.outcome) }}</strong>
    </div>

    <div class="summary-container__card summary-container__card--total">
      <header class="summary-container__header">
        <p>Entradas</p>
        <currency-dollar-icon class="summary-container__icon"/>
      </header>
      <strong>{{ priceFormatter.format(summary.total) }}</strong>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "./styles.scss"
</style>
