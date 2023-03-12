<script lang="ts" setup>
import { useOrdersStore } from '@store/ordersStore'

const ordersStore = useOrdersStore()

const props = defineProps({
	headers: {
		type: Array,
		required: true,
	},
	columns: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<header
		class="header"
		:style="{'grid-template-columns': `${columns}`}"
	>
		<div class="column" v-for="(column, i) of headers" :key="i">
			<b
				v-bind:class="
        {
					sortable: column === 'Адрес' || column === 'Дата заказа',
				}"
				@click="
					column === 'Адрес' || column === 'Дата заказа'
						? ordersStore.sortOrders(column)
						: null"
        >{{ column }}
      </b>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@import '@assets/styles/colors.scss';

.header {
	display: grid;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	background-color: $gray;
}
.sortable {
	cursor: pointer;
	transition: $transition;

	&:hover {
		color: $blue;
	}
}
</style>
