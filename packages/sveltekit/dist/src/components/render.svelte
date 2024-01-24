<script lang="ts">
    import  { type ContentItem } from "../types/content.js";
	import { onMount } from 'svelte';

    type page = {
        html : ContentItem['body']['html'],
        css : ContentItem['body']['css'],
        seo_fields : ContentItem['seo_fields'],
        js:string | null
    }

	/**
	 * Blink page component, loaded from the sveltekit server side Load function
	 */
	export let page: page;

	/**
	 * Overide for not including default header included with renderer.
	 */
	export let overideHeader: boolean = false;

	/**
	 * Overide to allow Javacript from Blink content item
	 */
	export let allowJS: boolean = false;

	/**
	 * Overide default css position
	 */
	export let cssOveride: boolean = false;

	function javascriptParse(obj: string): Function {
		return Function('"use strict";return (' + obj + ')')();
	}

	onMount(() => {
		
		if (allowJS) {
			if (page.js) {
                
				try {
					const blinkFunction = javascriptParse(page.js);
					blinkFunction();
				} catch (e) {
					console.warn('Blink function from content item is failing remove the following script',e);
				}
				
			}
		}
	});
</script>

<svelte:head>
	{#if !overideHeader}
		<meta name="description" content={page.seo_fields.siteDescription} />
		<meta name="author" content={page.seo_fields.author} />
		<meta name="keywords" content={page.seo_fields.keywords} />
		<title>{page.seo_fields.siteTitle}</title>

        {#if page.seo_fields.favicon}
        <link rel="icon" href={page.seo_fields.favicon}>
        {/if}
	{/if}
	
</svelte:head>

{#if !cssOveride}
{@html page.css}
{/if}
<div class="blinkRenderedContent">{@html page.html}</div>