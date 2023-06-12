import { defineStore } from 'pinia'
import { getTransactions, putTransactions } from "../../src/services/transactions/index"
import { Table, Form, SummaryData } from '@/types'
import router from '@/router';

export const useTransactions = defineStore({
  id: 'transactions',
  state: () => ({
    tableData: [] as Table[],
    summary: {
      income: 0,
      outcome: 0,
      total: 0,
    }
  }),
  actions: {
    getTransactionsData(): void {
      getTransactions().then(({ data }: {data: Table[]}) => {
        this.tableData = data
        this.getSummaryInfos(data)
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
    },
    getSummaryInfos(data: Table[]) {
      return data.reduce(
        (acc: SummaryData, transaction: Table ) => {
          if (transaction.type === 'income') {
            acc.income += transaction.price
            acc.total += transaction.price
            this.summary.income = acc.income
            this.summary.total = acc.total
          } else {
            acc.outcome += transaction.price
            acc.total -= transaction.price
            this.summary.outcome = acc.outcome
            this.summary.total = acc.total
          }

          return acc
        },
        {
          income: 0,
          outcome: 0,
          total: 0,
        },
      )
    }
  },
  getters: {
    getTableData: (state) => state.tableData,
    getSummaryData: (state) => state.summary
  }
})
