<script lang="ts">
   	import  { type ContentItem } from "../types/content.js";
	import { onMount } from 'svelte';

    interface page {
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
                
				const blinkFunction = javascriptParse(page.js);
				blinkFunction();
			}
		}
	});
</script>

{#if !cssOveride}
{@html page.css}
{/if}
<div class="blinkRenderedContent">{@html page.html}</div>