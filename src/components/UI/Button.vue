<script lang="ts" setup>
import { ButtonHTMLAttributes } from 'vue'

interface IButton extends ButtonHTMLAttributes {
	variant: 'primary' | 'link' | 'secondary' | 'danger'
	rounded?: boolean
}

const props = withDefaults(defineProps<IButton>(), { variant: 'primary' })
</script>

<template>
	<button :class="['button', `button_${variant}`, { rounded: rounded }]">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
@import '@assets/styles/colors.scss';

button,
.button {
	cursor: pointer;
	outline: none;
	border: none;
	padding: 0.5rem 1.5rem;
	border-radius: $rounded-sm;
	transition: $transition;

	&_primary {
		background-color: $white;
		color: $black;

		&:hover {
			background-color: darken($white, 15);
		}
	}

	&_link {
		background-color: transparent;
		color: $white;
		padding: 0;

		&:hover {
			color: darken($white, 15);
		}
	}

	&_secondary {
		background-color: $blue;
		color: $white;

		&:hover {
			background-color: darken($blue, 15);
		}
	}

	&_danger {
		background-color: $red;
		color: $white;

		&:hover {
			background-color: darken($red, 15);
		}
	}
}

.rounded {
	border-radius: 50%;
	padding: 0.5rem;
  font-size: 14px;
}
</style>
