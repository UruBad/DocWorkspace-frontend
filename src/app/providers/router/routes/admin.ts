import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'AdminPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/admin',
  component: () => import('@/pages/admin'),
  meta: {
    layout: 'admin'
  },
}
