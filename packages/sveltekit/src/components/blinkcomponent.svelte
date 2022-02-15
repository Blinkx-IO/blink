<script lang="ts">
	
    import type {seo_fields} from "../types/content";
	interface page {
	valid: boolean;
	html: string;
	css: string;
	seo_fields: seo_fields;
    }
    import type { blinkComponents } from '../types/content';
	import Block from './block.svelte';
	export let menu: blinkComponents;
	export let css: page['css'];

</script>

{@html css}

<div id="blinkComponent">
	{#each menu as block}
        <Block block={block}>  
        </Block>
               
	{/each}
</div>
