import axios from 'axios';

const URL = 'http://localhost:3333'

const api = axios.create({
  baseURL: URL,
})

export const getTransactions = () => {
  return api.get('transactions', {
    params: {
      _sort: 'createdAt',
      _order: 'desc',
      _page: 1,
      _limit: 5,
    }
  })
}
