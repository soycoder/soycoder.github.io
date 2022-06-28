<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../global.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media screen and (min-width: 1024px) {
		main {
			max-width: 85%;
		}
	}

	@media screen and (max-width: 1024px) {
		main {
			max-width: 90%;
		}
	}

	@media screen and (max-width: 992px) {
		main {
			max-width: 95%;
		}
	}
	@media screen and (max-width: 899px) {
		main {
			max-width: 100%;
		}
	}
</style>
