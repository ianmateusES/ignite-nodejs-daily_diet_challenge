export interface Meal {
  id: string
  user_id: string
  name: string
  description: string
  is_on_diet: boolean
  date: number // unix timestamp
  created_at: string
  updated_at: string
}
