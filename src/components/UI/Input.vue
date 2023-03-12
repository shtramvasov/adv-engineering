<script lang="ts" setup>
import { ErrorObject } from '@vuelidate/core'

const props = defineProps({
	errors: {
		type: Array<ErrorObject>,
		reqiured: false,
	},
	modelValue: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div class="input_wrapper">
		<input
			type="text"
			class="input"
			:value="modelValue"
			@input="
				$emit('update:modelValue', ($event.target as HTMLInputElement).value)
			"
			v-bind="$attrs"
		/>
		<span class="error" v-for="error in errors"> {{ error.$message }}</span>
	</div>
</template>

<style lang="scss" scoped>
@import '@assets/styles/colors.scss';

.input_wrapper {
	display: flex;
	flex-direction: column;
	position: relative;
	padding-bottom: 0.5rem;
}

input,
.input {
	border: 1px transparent solid;
	outline: none;
	padding: 0.5rem 1rem;
	border-radius: $rounded-sm;
	transition: $transition;

	&:focus {
		border: 1px $blue solid;
	}
}

.error {
	position: absolute;
	font-size: 12px;
	bottom: -0.7rem;
	color: $red;
}
</style>
