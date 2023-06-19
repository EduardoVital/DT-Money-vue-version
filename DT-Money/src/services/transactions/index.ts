import axios from 'axios';
import { Form } from '../../types/index'

const URL = 'http://localhost:3333'

const api = axios.create({
  baseURL: URL,
})

export const getTransactions = async () => {
  return await api.get('transactions', {
    params: {
      _sort: 'createdAt',
      _order: 'desc',
      _page: 1,
      _limit: 10,
    },
  })
}

export const putTransactions = async (form: Form ) => {
  const { description, price, category, type } = form

  return await api.post('transactions', {
    description,
    price,
    category,
    type,
    createdAt: new Date(),
  })
}

export const getTransaction = async (id: string) => {
  return await api.get(`transactions/${id}`, {
    params: {
      id,
    },
  })
}

export const editTransaction = async (form: Form, id: string ) => {
  const { description, price, category, type } = form

  return await api.put(`transactions/${id}`, {
    description,
    price,
    category,
    type,
    createdAt: new Date(),
  })
}

export const deleteTransaction = async (id: number) => {
  return await api.delete(`transactions/${id}`, {
    params: {
      id,
    },
  })
}