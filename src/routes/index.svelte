<script context="module" lang="ts">
	export const prerender = true;
	let avatar = 'images/avatar/p1.webp';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Apisith W.| Home page." />
</svelte:head>

<section>
	<img class="avatar" src={avatar} alt="profile" />
	<h2>Apisith Wongsorn</h2>
	<h4>Software Developer</h4>
	<h4>🗺️ Chom Thong, Chiang Mai, Thailand</h4>
	<img class="img-divider" src="https://i.imgur.com/waxVImv.png" alt="Divider" />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
	.avatar {
		vertical-align: middle;
		width: 150px;
		height: 150px;
		border-radius: 50%;
	}
	.img-divider {
		margin: 10px 0;
	}
</style>
