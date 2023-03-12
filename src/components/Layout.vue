<script lang="ts" setup async>
import Header from '@components/Header.vue'
</script>

<template>
	<main>
		<Header />
		<section class="wrapper">
			<slot />
		</section>
	</main>
</template>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	padding: 4rem 6rem;
}
</style>
