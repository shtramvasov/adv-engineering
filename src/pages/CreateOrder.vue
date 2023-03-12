<script lang="ts" setup>
import Layout from '@components/Layout.vue'
import Button from '@components/UI/Button.vue'
import Input from '@components/UI/Input.vue'
import { useUserStore } from '@store/userStore'
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { IOrder } from '@interfaces/IOrder'
import { setLocalDate } from '@utils/dateFormat'
import { OrdersService } from '@services/ordersService'

const store = useUserStore()
const router = useRouter()

const formData = reactive<Omit<IOrder, 'id'>>({
	name: store.username,
	address: '',
	date: '',
	status: 'Новый',
	comment: '',
})

const rules = computed(() => {
	return {
		name: { required: helpers.withMessage('Введите имя', required) },
		address: { required: helpers.withMessage('Введите адрес', required) },
	}
})

const v$ = useVuelidate(rules, formData)

const handleSubmit = async () => {
	const validate = await v$.value.$validate()

	if (validate) {
		formData.date = setLocalDate()
		await OrdersService.addOrder(formData)
		router.push('/')
	}
}
</script>

<template>
	<Layout>
		<section class="container">
			<h1>Добавить заказ</h1>
			<form class="form" @submit.prevent="handleSubmit">
				<Input
					v-model="formData.name"
					placeholder="Имя"
					:errors="v$.name.$errors"
				/>
				<Input
					v-model="formData.address"
					placeholder="Введите ваш адрес"
					:errors="v$.address.$errors"
				/>
				<Input v-model="formData.comment" placeholder="Комментарий" />
				<Button variant="secondary">Добавить заказ</Button>
			</form>
		</section>
	</Layout>
</template>

<style lang="scss" scoped>
@import '@assets/styles/colors.scss';

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
}

.form {
	display: flex;
	flex-direction: column;
	width: 25rem;
	background-color: $gray;
	border-radius: $rounded-sm;
	padding: 3rem;
	gap: 2rem;
}
</style>
