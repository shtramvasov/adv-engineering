<script lang="ts" setup>
import { useUserStore } from '@store/userStore'
import { useRouter } from 'vue-router'
import Button from '@components/UI/Button.vue'

const store = useUserStore()
const router = useRouter()

const handleLogout = async () => {
	await store.logout()
	router.push('/login')
}
</script>

<template>
	<header class="header">
		<fieldset class="container">
			<RouterLink to="/">
				<Button variant="link">Все заказы</Button>
			</RouterLink>
			<RouterLink to="/create">
				<Button variant="link">Добавить заказ</Button>
			</RouterLink>
		</fieldset>
		<div class="container">
			<span>{{ store.username }}</span>
			<Button @click="handleLogout">Выйти</Button>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@import '@assets/styles/colors.scss';
.header {
	display: flex;
	justify-content: space-between;
	background-color: $blue;
	padding: 1rem 3rem;
}

.container {
	display: flex;
	align-items: center;
	gap: 2rem;

	span {
		color: $white;
	}
}
</style>
