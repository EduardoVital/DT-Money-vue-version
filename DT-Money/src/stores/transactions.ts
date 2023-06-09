import { defineStore } from 'pinia'
import { getTransactions } from "../../src/services/transactions/index"
import { Table } from '@/types'

export const useTransactions = defineStore({
  id: 'transactions',
  state: () => ({
    tableData: [] as Table[]
  }),
  actions: {
    fetchTableData(): void {
      getTransactions().then(({ data }: {data: Table[]}) => {
        this.tableData = data
      })
    }
  },
  getters: {
    getTableData: (state) => state.tableData
  }
})