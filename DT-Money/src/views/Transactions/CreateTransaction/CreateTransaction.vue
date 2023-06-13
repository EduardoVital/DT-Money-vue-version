<script setup lang="ts">
import { ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon } from "@heroicons/vue/24/solid"

import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { ref, onMounted, computed } from 'vue';
import type { Ref } from 'vue'
import router from '@/router';
import { Form } from '../../../types/index'
import { useTransactions } from "@/stores/transactions";
import { useRoute } from 'vue-router';
import { getTransaction } from "@/services/transactions";

const route = useRoute();
const transactions = useTransactions();

const formData: Ref<Form> = ref({
  description: '',
  price: null,
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

const buttonText = computed(() => route.params.id ? 'Editar' : 'Cadastrar')

onMounted(() => {
  if (route.params.id) fetchTransaction();
})

const submitForm = async () => {
  const result = await v$.value.$validate();
  
  if (result) {
    const { description, price, category, type } = formData.value;
    transactions.createTransaction({description, price, category, type})
  }
}

const selectedType = (value: string) => {
  formData.value.type = value
}

const goBackHome = () => {
  router.push('/');
}

const fetchTransaction = () => {
  const id = route.params.id.toString()
  getTransaction(id).then(response => {
    const { category, price, description, type } = response?.data;
    formData.value.category = category
    formData.value.price = price
    formData.value.description = description
    formData.value.type = type
  })
}

</script>

<template>
  <section class="create-transaction-container">
    <div class="create-transaction-container__header">
      <arrow-left-icon class="create-transaction-container__icon-go-back"  @click="goBackHome" />
      <h1>Nova transação</h1>
    </div>

    <form class="create-transaction-container__form" @submit.prevent="submitForm">
      <input :class="v$.description.$error ? 'create-transaction-container__form--error' : ''" type="text" placeholder="Descrição" v-model="formData.description">
      <input :class="v$.price.$error ? 'create-transaction-container__form--error' : ''" type="number" placeholder="Preço" v-model="formData.price">
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

      <button type="submit">{{ buttonText }}</button>

    </form>
  </section>
</template>

<style lang="scss" scoped>
@import './styles.scss'
</style>