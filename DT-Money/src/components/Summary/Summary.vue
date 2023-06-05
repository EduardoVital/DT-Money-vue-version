<script setup lang="ts">
import { ArrowUpIcon, ArrowDownIcon, CurrencyDollarIcon } from "@heroicons/vue/24/solid"
</script>

<template>
  <section class="summary-container">
    <div class="summary-container__card">
      <header class="summary-container__header">
        <p>Entradas</p>
        <arrow-up-icon class="summary-container__icon summary-container__icon--income"/>
      </header>
      <strong>R$ 17.400,00</strong>
    </div>

    <div class="summary-container__card">
      <header class="summary-container__header">
        <p>Entradas</p>
        <arrow-down-icon class="summary-container__icon summary-container__icon--outcome"/>
      </header>
      <strong>R$ 17.400,00</strong>
    </div>

    <div class="summary-container__card summary-container__card--total">
      <header class="summary-container__header">
        <p>Entradas</p>
        <currency-dollar-icon class="summary-container__icon"/>
      </header>
      <strong>R$ 17.400,00</strong>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "./styles.scss"
</style>
