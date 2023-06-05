<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid"
</script>

<template>
 <div class="transactions-container__search">
    <input type="text" placeholder="Busque uma transação">
    <button>
      <magnifying-glass-icon class="transactions-container__icon"/>
      Buscar
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles.scss";
</style>