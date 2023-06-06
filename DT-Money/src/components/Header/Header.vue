<script setup lang="ts">
import router from '@/router'
import logoImg from "@/assets/logo.svg"

const redirectTocreateNewTransaction = () => {
  router.push('/create-transaction')
}
</script>

<template>
  <header class="header-container">
    <div class="header-container__content">
      <img :src="logoImg"/>
      <button @click="redirectTocreateNewTransaction">
        Nova transação 
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "./styles.scss"
</style>
