<script lang="ts">
	import type { block, options } from './type.js';
	//import Block from './block.svelte';
	import Components from './components.svelte';
	import { parseAttributes, parseClass } from './utilities.js';
	export let block: block;
	//export let childSlotById: string[] = null;
	export let options: options = null;
</script>

{#if block.tagName == 'b'}
	<b class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</b>
{:else if block.tagName == 'br'}
	<br/>
{:else if block.tagName == 'dd'}
	<dd class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</dd>
{:else if block.tagName == 'dl'}
	<dl class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</dl>
{:else if block.tagName == 'dt'}
	<dt class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</dt>
{:else if block.tagName == 'p'}
	<p class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</p>
{:else if block.tagName == 'font'}
	<span class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</span>
{:else if block.tagName == 'footer'}
	<footer class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</footer>
{:else if block.tagName == 'header'}
	<header class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</header>
{:else if block.tagName == 'h1'}
	<h1 class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</h1>
{:else if block.tagName == 'h2'}
	<h2 class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</h2>
{:else if block.tagName == 'h3'}
	<h3 class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</h3>
{:else if block.tagName == 'h4'}
	<h4 class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</h4>
{:else if block.tagName == 'h5'}
	<h5 class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</h5>
{:else if block.tagName == 'h6'}
	<h6 class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</h6>
{:else if block.tagName == 'link'}
	<link {...parseAttributes(block.attributes, 'obj')}>
{:else if block.tagName == 'main'}
	<main class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</main>
{:else if block.tagName == 'nav'}
	<nav class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}>
	</nav>
{:else if block.tagName == 'span'}
	<span class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</span>
{:else if block.tagName == 'section'}
	<section class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
		{#if block.components}
			<Components {options} childComponents={block.components} />
		{/if}
	</section>
{/if}
