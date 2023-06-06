<script setup lang="ts">
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/24/solid"

import { ref } from 'vue';

const formData = ref({
  description: '',
  price: '',
  category: '',
  type: ''
})

const submitForm = () => {
  console.log(formData.value)
}

const selectedType = (value: string) => {
  formData.value.type = value
}

</script>

<template>
  <section class="create-transaction-container">
    <h1>Nova transação</h1>

    <form action="" class="create-transaction-container__form" @click.prevent="submitForm" >
      <input type="text" placeholder="Descrição" v-model="formData.description">
      <input type="text" placeholder="Preço" v-model="formData.price">
      <input type="text" placeholder="Categoria" v-model="formData.category">

      <div class="create-transaction-container__types">
        <div :class="formData.type === 'income' ? 'create-transaction-container__types--income' : 'create-transaction-container__types--default'" @click="selectedType('income')">
          <arrow-up-icon class="create-transaction-container__icon-income" />
          <p>Entrada</p>
        </div>
        <div :class="formData.type === 'outcome' ? 'create-transaction-container__types--outcome' : 'create-transaction-container__types--default'" @click="selectedType('outcome')">
          <arrow-down-icon class="create-transaction-container__icon-outcome" />
          <p>Saída</p>
        </div>
      </div>

      <button type="submit">Cadastrar</button>

    </form>
  </section>
</template>

<style lang="scss" scoped>
@import './styles.scss'
</style>