<script setup lang="ts">
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/24/solid"

import { ref, watch } from 'vue';
import type { Ref } from 'vue'

interface Form {
  description: string,
  price: string,
  category: string,
  type: string
}

const formData: Ref<Form> = ref({
  description: '',
  price: '',
  category: '',
  type: ''
})

const isDescriptionEmpty: Ref<boolean> = ref(false);
const isPriceEmpty: Ref<boolean> = ref(false);
const isCategoryEmpty: Ref<boolean> = ref(false);
const isTypeEmpty: Ref<boolean> = ref(false);

watch(
  formData,
  () => {
    if (formData.value.description !== '') isDescriptionEmpty.value = false;
    if (formData.value.price !== '') isPriceEmpty.value = false;
    if (formData.value.category !== '') isCategoryEmpty.value = false;
    if (formData.value.type !== '') isTypeEmpty.value = false;
  },
  { deep: true },
);

const submitForm = () => {
  if (!formData.value.description) isDescriptionEmpty.value = true;
  if (!formData.value.price) isPriceEmpty.value = true;
  if (!formData.value.category) isCategoryEmpty.value = true;
  if (!formData.value.type) isTypeEmpty.value = true;
}

const selectedType = (value: string) => {
  formData.value.type = value
}

</script>

<template>
  <section class="create-transaction-container">
    <h1>Nova transação</h1>

    <form class="create-transaction-container__form" >
      <input :class="isDescriptionEmpty ? 'create-transaction-container__form--error' : ''" type="text" placeholder="Descrição" v-model="formData.description">
      <input :class="isPriceEmpty ? 'create-transaction-container__form--error' : ''" type="text" placeholder="Preço" v-model="formData.price">
      <input :class="isCategoryEmpty ? 'create-transaction-container__form--error' : ''" type="text" placeholder="Categoria" v-model="formData.category">

      <div class="create-transaction-container__types">
        <div :class="formData.type === 'income' ? 'create-transaction-container__types--income' : 'create-transaction-container__types--default'" @click.prevent="selectedType('income')">
          <arrow-up-icon class="create-transaction-container__icon-income" />
          <p>Entrada</p>
        </div>
        <div :class="formData.type === 'outcome' ? 'create-transaction-container__types--outcome' : 'create-transaction-container__types--default'" @click.prevent="selectedType('outcome')">
          <arrow-down-icon class="create-transaction-container__icon-outcome" />
          <p>Saída</p>
        </div>
      </div>
      <span v-if="isTypeEmpty">* Necessário escolher um tipo</span>

      <button @click.prevent="submitForm" >Cadastrar</button>

    </form>
  </section>
</template>

<style lang="scss" scoped>
@import './styles.scss'
</style>