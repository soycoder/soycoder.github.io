<script lang="ts">
	export let style: string = null;
</script>

<span class="timeline-dot" {style}>
	<slot />
</span>

<style>
	.timeline-dot {
		background-color: #121212;
		border: solid 3px #121212;
		display: flex;
		align-self: baseline;
		padding: 8px;
		border-radius: 50%;
		margin: 11.5px 0;
	}
</style>
