<script setup lang="ts">
import { computed } from 'vue';
import { useTransactions } from '../../stores/transactions'

const transactions = useTransactions();

const checkedItems = computed(() => transactions.getCheckedItems)

const handleDeleteTransactions = (id: number) => {
  transactions.deleteTransactions(id);
}
</script>

<template>
  <button v-show="checkedItems.length" class="delete-button" @click="handleDeleteTransactions(checkedItems[0])">
      Deletar
  </button>
</template>

<style lang="scss" scoped>
@import "./styles.scss" 
</style>