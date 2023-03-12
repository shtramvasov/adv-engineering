import { IOrder } from '@interfaces/IOrder'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_APP_ENDPOINT

export const OrdersService = {
	async fetchAll() {
		try {
			const response = await axios.get('/events')
			return response.data
		} catch (error: any) {
			return error.message
		}
	},
	async addOrder(data: Omit<IOrder, 'id'>) {
		try {
			const response = await axios.post('/events', data)
			return { data: null }
		} catch (error: any) {
			return error.message
		}
	},
	async updateOrder(order: IOrder) {
		try {
			const response = await axios.put(`/events/${order.id}`, {
				...order,
				status: 'Выполнен',
			})
			return response.data
		} catch (error: any) {
			return error.message
		}
	},
  async deleteOrder(id: number) {
    try {
      const response = await axios.delete(`/events/${id}`)
      return response.data
    } catch (error: any) {
      return error.message
    }
  }
}
