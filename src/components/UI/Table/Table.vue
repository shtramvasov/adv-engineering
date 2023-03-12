<script lang="ts" setup>
import TableHeader from './TableHeader.vue'
import TableBody from './TableBody.vue'
import { IOrder } from '@interfaces/IOrder'
import { tableHeaders, tableSizes } from '@utils/headers.data'

const props = defineProps({
	data: {
		type: Array<IOrder>,
		required: true,
	},
})
</script>

<template>
	<div class="container">
		<TableHeader :headers="tableHeaders" :columns="tableSizes" />
		<TableBody :columns="tableSizes" :data="data" />
	</div>
</template>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>
