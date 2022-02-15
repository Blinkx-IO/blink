<script lang="ts">
	import type { block } from '../../types/content';
	export let block: block;
	import { parseAttributes } from '../attributes';
	import Components from '$blink/component.svelte';
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a sveltekit:prefetch {...parseAttributes(block.attributes, 'obj', block.classes)}>
	{#if block.components}
		<Components childComponents={block.components} />
	{/if}
	{#if block.content}
		{block.content}
	{/if}
</a>
