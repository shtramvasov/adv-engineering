<script lang="ts" setup>
import Button from '@components/UI/Button.vue'
import Input from '@components/UI/Input.vue'
import { UsersService } from '@services/usersService'
import { useUserStore } from '@store/userStore'
import { reactive, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'

const store = useUserStore()
const router = useRouter()

const formData = reactive({
	username: '',
	password: '',
})

const serverError = ref<string | null>(null)

const rules = computed(() => {
	return {
		username: { required: helpers.withMessage('Введите имя', required) },
		password: {
			required: helpers.withMessage('Введите пароль', required),
			minLength: helpers.withMessage('Минимум 8 символов', minLength(8)),
		},
	}
})

const v$ = useVuelidate(rules, formData)

const handleSubmit = async () => {
	const validate = await v$.value.$validate()

	if (validate) {
		const result = await UsersService.authUser(formData)

		typeof result === 'string'
			? (serverError.value = result)
			: store.setUser(result)

		if (store.isAuth) {
			router.push('/')
		}
	}
}
</script>
<template>
	<section class="container">
		<h1>Авторизируйтесь в систему</h1>
		<form class="form" @submit.prevent="handleSubmit">
			<Input
				v-model="formData.username"
				placeholder="Имя"
				:errors="v$.username.$errors"
			/>
			<Input
				v-model="formData.password"
				placeholder="Пароль"
				:errors="v$.password.$errors"
			/>
			<Button variant="secondary">Войти</Button>
			<p class="error" v-if="serverError">{{ serverError }}</p>
		</form>
		<div class="reminder">
			<p>Пользователи: <code>user</code> или <code>admin</code></p>
			<p>Пароль: <code>123456789</code></p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@import '@assets/styles/colors.scss';

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	justify-content: center;
	gap: 1.5rem;
}

.form {
	display: flex;
	flex-direction: column;
	position: relative;
	width: 25rem;
	background-color: $gray;
	border-radius: $rounded-sm;
	padding: 3rem;
	gap: 2rem;
}

.reminder {
	display: flex;
	flex-direction: column;
	font-size: 14px;
	color: lightslategray;
	gap: 1rem;

	code {
		background-color: $gray;
		color: $blue;
		padding: 2px 6px;
	}
}

.error {
	position: absolute;
	font-size: 14px;
	bottom: 1.5rem;
	color: $red;
}
</style>
