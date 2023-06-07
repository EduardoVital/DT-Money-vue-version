<script setup lang="ts">
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/24/solid"
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { ref } from 'vue';
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

const rules = {
  description: { required },
  price: { required },
  category: { required },
  type: { required }
}

const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
  const result = await v$.value.$validate();
  
  if (result) {
    console.log('Success')
  }
}

const selectedType = (value: string) => {
  formData.value.type = value
}

</script>

<template>
  <section class="create-transaction-container">
    <h1>Nova transação</h1>

    <form class="create-transaction-container__form" @submit.prevent="submitForm">
      <input :class="v$.description.$error ? 'create-transaction-container__form--error' : ''" type="text" placeholder="Descrição" v-model="formData.description">
      <input :class="v$.price.$error ? 'create-transaction-container__form--error' : ''" type="text" placeholder="Preço" v-model="formData.price">
      <input :class="v$.category.$error ? 'create-transaction-container__form--error' : ''" type="text" placeholder="Categoria" v-model="formData.category">

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
      <span v-if="v$.type.$error">* Necessário escolher um tipo</span>

      <button type="submit">Cadastrar</button>

    </form>
  </section>
</template>

<style lang="scss" scoped>
@import './styles.scss'
</style>