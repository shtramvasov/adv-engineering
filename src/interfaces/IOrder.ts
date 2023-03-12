export interface IOrder {
  id: number
  name: string | undefined
  address: string
  date: string
  status: 'Выполнен' | 'Новый'
  comment: string | undefined
}