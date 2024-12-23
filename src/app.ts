import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { usersRoutes, mealsRoutes } from './routes'

export const app = fastify()

app.get('/hello', () => {
  return 'Hello World'
})

app.register(cookie)

app.register(usersRoutes, { prefix: 'users' })
app.register(mealsRoutes, { prefix: 'meals' })
