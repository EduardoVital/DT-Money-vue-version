import { defineStore } from 'pinia'
import { getTransactions, putTransactions, editTransaction } from "../../src/services/transactions/index"
import { Table, Form, SummaryData } from '@/types'
import router from '@/router';

export const useTransactions = defineStore({
  id: 'transactions',
  state: () => ({
    tableData: [] as Table[],
    summary: {
      income: 0 as number,
      outcome: 0 as number,
      total: 0 as number,
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
    editTransaction(form: Form, id: string) {
      editTransaction(form, id).then(response => {
        console.log(response)
        const status = response?.status;
        if (status === 200) {
          this.getTransactionsData();
          router.push('/');
        }
      })
    },
    getSummaryInfos(data: Table[]) {
      return data.reduce(
        (acc: SummaryData, transaction: Table ) => {
          if (transaction.type === 'income') {
            this.summary.income = acc.income += transaction.price
            this.summary.total = acc.total += transaction.price
          } else {
            this.summary.outcome =  acc.outcome += transaction.price
            this.summary.total = acc.total -= transaction.price
          }

          return acc
        },
        {
          income: 0,
          outcome: 0,
          total: 0,
        },
      )
    },
  },
  getters: {
    getTableData: (state) => state.tableData,
    getSummaryData: (state) => state.summary
  }
})
