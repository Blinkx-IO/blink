<script lang="ts">
	import type { block, options, optionSlot } from './type.js';
	import TagName from './tagByName.svelte';
	import Components from './components.svelte';
	import { parseAttributes, parseClass } from './utilities.js';
	import { onMount } from 'svelte';

	export let block: block;
	export let options: options | null = null;

	export let blockAllowed = true;

	if (options && options != null) {
		const filterOptions = (id: string) => options!.slot.find((element) => element.id == id) as optionSlot;
		if (block.attributes && block.attributes.id && filterOptions(block.attributes.id)) {
			if (!filterOptions(block.attributes.id).replaceWith) {
				blockAllowed = false;
			} else {
				if (filterOptions(block.attributes.id).replaceWith) block = filterOptions(block.attributes.id).replaceWith as block;
			}
		}
	}
	onMount(() => {
		if (block.script) {
			eval(block.script);
		}
	});
</script>

{#if block.type && blockAllowed}
	{#if block.type == 'box'}
		<div class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
			{#if block.components}
				<Components {options} childComponents={block.components} />
			{/if}
		</div>
	{:else if block.type == 'button'}
		<button class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
			{#if block.components}
				<Components {options} childComponents={block.components} />
			{/if}
		</button>
	{:else if block.type == 'checkbox'}
		<input class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')} />
	{:else if block.type == 'comment'}
		<!---->
	{:else if block.type == 'grid'}
		<div class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
			{#if block.components}
				<Components {options} childComponents={block.components} />
			{/if}
		</div>
	{:else if block.type == 'input'}
		<input class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')} />
	{:else if block.type == 'select'}
		<select class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
			{#if block.components}
				<Components {options} childComponents={block.components} />
			{/if}
		</select>
	{:else if block.type == 'option'}
		<option class={block.classes && parseClass(block.classes)} value={block.attributes.value}>
			{#if block.components}
				<Components {options} childComponents={block.components} />
			{/if}
		</option>
	{:else if block.type == 'image'}
		<!-- svelte-ignore a11y-missing-attribute -->
		<img class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')} />
	{:else if block.type == 'link'}
		<!-- svelte-ignore a11y-missing-attribute -->
		<a sveltekit:prefetch class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
			{#if block.components}
				<Components {options} childComponents={block.components} />
			{/if}
		</a>
	{:else if block.type == 'form'}
		<form class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
			{#if block.components}
				<Components {options} childComponents={block.components} />
			{/if}
		</form>
	{:else if block.type == 'label'}
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>
			{#if block.components}
				<Components {options} childComponents={block.components} />
			{/if}
		</label>
	{:else if block.type == 'section'}
		<section class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
			{#if block.components}
				<Components {options} childComponents={block.components} />
			{/if}
		</section>
	{:else if block.type == 'svelte-component'}
		<svelte:component this={block.svelteComponent} data={block.data ?? null} options={block.options ?? null} />
	{:else if block.type == 'svg'}
		<svg class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
			{#if block.components}
				<Components {options} childComponents={block.components} />
			{/if}
		</svg>
	{:else if block.type == 'svg-in'}
		{#if block.tagName == 'path'}
			<path class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
				{#if block.components}
					<Components {options} childComponents={block.components} />
				{/if}
			</path>
		{:else if block.tagName == 'circle'}
			<circle class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')} />
		{:else if block.tagName == 'g'}
			<g class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
				{#if block.components}
					<Components {options} childComponents={block.components} />
				{/if}
			</g>
		{/if}
	{:else if block.type == 'text'}
		{#if block.tagName}
			<TagName {options} {block} />
		{:else}
			<div class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
				<Components {options} childComponents={block.components} />
			</div>
		{/if}
	{:else if block.type == 'textnode'}
		{block.content}
	{:else if block.type == 'textarea'}
		<textarea class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')} />>
	{:else if block.type == 'video'}
		{#if block.tagName == 'iframe'}
			{#if block.provider == 'yt'}
				<iframe
					class={block.classes && parseClass(block.classes)}
					{...parseAttributes(block.attributes, 'obj')}
					src={block.src}
					title="Video"
				/>
			{/if}
		{/if}
	{:else}
		<div class={block.classes && parseClass(block.classes)} {...parseAttributes(block.attributes, 'obj')}>
			{#if block.components}
				<Components {options} childComponents={block.components} />
			{/if}
		</div>
	{/if}
{:else if block.tagName && blockAllowed}
	<TagName {options} {block} />
{/if}
