<script lang="ts" setup>
import Button from './Button.vue'

const props = defineProps({
	isOpen: {
		type: Boolean,
		required: true,
	},
})

const emits = defineEmits(['close', 'accept'])

const onAccept = () => {
	emits('accept')
	emits('close')
}
</script>

<template>
	<Teleport to="#modal">
		<div v-show="isOpen" class="modal_container">
			<div class="modal">
				<slot></slot>
				<fieldset>
					<Button variant="danger" @click="onAccept()">Ок</Button>
					<Button variant="secondary" @click="$emit('close')">Отмена</Button>
				</fieldset>
			</div>
		</div></Teleport
	>
</template>

<style lang="scss" scoped>
@import '@assets/styles/colors.scss';

.modal_container {
	position: absolute;
	height: 100vh;
	width: 100vw;
	z-index: 10;
	top: 0;
	background-color: rgba($black, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal {
	display: flex;
	max-width: 30rem;
	flex-direction: column;
	align-items: center;
	background-color: $white;
	padding: 3rem;
	gap: 2rem;
	border-radius: $rounded-sm;

	fieldset {
		display: flex;
		gap: 1rem;
	}
}
</style>
