import { OrdersService } from './../services/ordersService'
import { IOrder } from '@interfaces/IOrder'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrdersStore = defineStore('orders', () => {
	const orders = ref<IOrder[]>([])
	const sortType = ref<number>(-1)

	async function setOrders() {
		const payload: IOrder[] = await OrdersService.fetchAll()
		orders.value = payload
	}
	async function sortOrders(field: string) {
		const sorter = field === 'Адрес' ? 'address' : 'date'
		const sortOrder = sortType.value
    
		orders.value.sort((a, b) => {
			const comparison = a[sorter].localeCompare(b[sorter])
			return comparison * sortOrder
		})
		sortType.value == 1 ? (sortType.value = -1) : (sortType.value = 1)
	}
	function updateOrder(id: IOrder['id']) {
		const updatedOrder = orders.value.find(order => order.id == id)
		if (updatedOrder) {
			updatedOrder.status = 'Выполнен'
		}
	}
	function deleteOrder(id: IOrder['id']) {
		orders.value = orders.value.filter(order => order.id != id)
	}
	function addOrder(payload: IOrder) {
		orders.value.push(payload)
	}

	return { orders, setOrders, sortOrders, updateOrder, deleteOrder, addOrder }
})
