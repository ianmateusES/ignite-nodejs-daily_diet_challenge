// FastifyRequestContext
import 'fastify'

import { User } from '@/interfaces'

declare module 'fastify' {
  export interface FastifyRequest {
    user?: User
  }
}
