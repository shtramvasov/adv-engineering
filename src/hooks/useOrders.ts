import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useOrdersStore } from '@store/ordersStore'

export const useOrders = () => {
	const store = useOrdersStore()
	const { orders } = storeToRefs(store)

	onMounted(() => {
		store.setOrders()
	})

	return { orders }
}
