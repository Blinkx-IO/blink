<script lang="ts">
	import type { block, options } from './type.js';
	import Block from './block.svelte';

	export let childComponents: block['components'];
	//export let childSlotById :string[]=null;
	export let options: options = null;
</script>

{#each childComponents as child}
	<Block block={child} {options} />
{/each}

