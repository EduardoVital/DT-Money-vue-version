import { createRouter, createWebHistory } from 'vue-router';
import Transactions from '@/views/Transactions/Transactions.vue'
import CreateTransaction from '@/views/Transactions/CreateTransaction/CreateTransaction.vue'

const routes = [
  { 
    path: '/', 
    component: Transactions,
  },
  {
    path: '/create-transaction', 
    component: CreateTransaction ,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;