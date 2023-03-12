<script lang="ts" setup>
import { ref } from 'vue'
import TableRow from './TableRow.vue'
import TableCell from './TableCell.vue'
import Button from '@components/UI/Button.vue'
import Modal from '@components/UI/Modal.vue'
import { useUserStore } from '@store/userStore'
import { useOrdersStore } from '@store/ordersStore'
import { OrdersService } from '@services/ordersService'
import { IOrder } from '@interfaces/IOrder'

const openModal = ref(false)
const deleteId = ref<null | number>(null)

const userStore = useUserStore()
const ordersStore = useOrdersStore()

const props = defineProps({
	columns: {
		type: String,
		required: true,
	},
	data: {
		type: Array<IOrder>,
		required: true,
	},
})

const completeOrder = (order: IOrder) => {
	OrdersService.updateOrder(order)
	ordersStore.updateOrder(order.id)
}

const showModal = (data: number) => {
	openModal.value = true
	deleteId.value = data
}

const deleteOrder = () => {
	OrdersService.deleteOrder(deleteId.value as number)
	ordersStore.deleteOrder(deleteId.value as number)
}
</script>

<template>
	<TableRow
		:key="order.id"
		v-for="(order, index) of data"
		:columns="columns"
		:class="{ row__completed: order.status === 'Выполнен' }"
	>
		<TableCell>{{ index + 1 }}</TableCell>
		<TableCell>{{ order.name }}</TableCell>
		<TableCell>{{ order.address }}</TableCell>
		<TableCell>{{ order.date }}</TableCell>
		<TableCell>{{ order.status }}</TableCell>
		<TableCell>{{ order.comment }}</TableCell>
		<TableCell v-show="userStore.role === 'ADMIN'" v-if="order.status == 'Новый'">
			<Button @click="completeOrder(order)" rounded variant="secondary">
				🖊️
			</Button>
		</TableCell>
		<TableCell v-show="userStore.role === 'ADMIN'">
			<Button @click="showModal(order.id)" rounded variant="danger">🗑️</Button>
		</TableCell>
	</TableRow>
	<Modal @accept="deleteOrder" @close="openModal = false" :isOpen="openModal">
    Вы действительно хотите удалить этот заказ?
  </Modal>
</template>

<style lang="scss" scoped></style>
