import 'knex'

import { Meal, User } from '@/interfaces'

declare module 'knex/types/tables' {
  export interface Tables {
    users: User
    meals: Meal
  }
}
