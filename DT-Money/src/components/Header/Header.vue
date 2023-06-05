<script setup lang="ts">
import logoImg from "@/assets/logo.svg"
</script>

<template>
  <header class="header-container">
    <div class="header-container__content">
      <img :src="logoImg"/>
      <button>
        Nova transação 
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "./styles.scss"
</style>
