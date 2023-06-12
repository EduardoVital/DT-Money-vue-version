import { createRouter, createWebHistory } from 'vue-router';
import Transactions from '@/views/Transactions/Transactions.vue'
import CreateTransaction from '@/views/Transactions/CreateTransaction/CreateTransaction.vue'
import { RouteEdit } from '@/types'

const routes = [
  { 
    path: '/', 
    component: Transactions,
  },
  {
    path: '/create-transaction', 
    component: CreateTransaction ,
  },
  {
    path: '/edit-transaction/:id',
    name: 'edit-transaction',
    component: CreateTransaction ,
    props: (route: { params: RouteEdit }) => ({ mode: 'edit', id: route.params.id }),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;