<script lang="ts" setup>
const props = defineProps({
	columns: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div
		class="row"
		:style="{'grid-template-columns': `${columns}`}"
  >
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
@import '@assets/styles/colors.scss';

.row {
	position: relative;
	display: grid;
	gap: 1rem;
	padding: 1rem;
	border-bottom: 1px solid $gray;

	&__completed {
		color: lightslategray;
		text-decoration: line-through;
	}
}
</style>
