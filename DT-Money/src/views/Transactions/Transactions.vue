<script setup lang="ts">
import SearchForm from "./SearchForm/SearchForm.vue"
import TransactionsTable from "./TransactionsTable/TransactionsTable.vue"
</script>

<template>
  <section class="transactions-container">
    <SearchForm />
    <TransactionsTable />
  </section>
</template>

<style lang="scss" scoped>
@import "./styles.scss";
</style>