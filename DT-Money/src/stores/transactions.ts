import { defineStore } from 'pinia'
import { getTransactions, putTransactions } from "../../src/services/transactions/index"
import { Table, Form } from '@/types'
import router from '@/router';

export const useTransactions = defineStore({
  id: 'transactions',
  state: () => ({
    tableData: [] as Table[]
  }),
  actions: {
    getTransactionsData(): void {
      getTransactions().then(({ data }: {data: Table[]}) => {
        this.tableData = data
      })
    },
    createTransaction(form: Form ) {
      putTransactions(form).then(response => {
        const status = response?.status;
        if (status === 201) {
          this.getTransactionsData();
          router.push('/');
        }
      })
    }
  },
  getters: {
    getTableData: (state) => state.tableData
  }
})