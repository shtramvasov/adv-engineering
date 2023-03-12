<script lang="ts" setup>
import Layout from '@components/Layout.vue'
import Table from '@components/UI/Table/Table.vue'
import { useOrders } from '@hooks/useOrders'

const { orders } = useOrders()
</script>

<template>
	<Layout>
		<Table :data="orders" />
	</Layout>
</template>

<style lang="scss" scoped></style>
