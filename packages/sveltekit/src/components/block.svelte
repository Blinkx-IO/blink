<script lang="ts">
	import type { block } from '../types/content';
    import Svg from "./elements/svg.svelte";
    import Input from "./elements/input.svelte";
    import Image from "./elements/image.svelte";
    import Link from "./elements/link.svelte";
    import Box from "./elements/box.svelte";
    import {parseAttributes} from "./attributes";
	export let block: block;
    export let childSlotById :string[]=['searchResults'];
    
    
</script>

{#if block.tagName}
	{@html `<${block.tagName} ${parseAttributes(block.attributes,'string',block.classes)}> </${block.tagName}>`}
{:else if block.attributes && childSlotById.includes(block.attributes.id)}

    <Box block={block}>
        <div slot="childSlot">
           
        </div>
        
    </Box>
    <slot name="blockBoxChild"></slot>
{:else}
    {#if block.type == 'link'}
       <Link block={block}/>
    {:else if block.type == 'svg'}
       <Svg attributes={block.attributes} classes={block.classes} childComponents={block.components}/>
    {:else if block.type == 'input'}
       <Input attributes={block.attributes}/>
    {:else if block.type == 'image'}
       <Image attributes={block.attributes} classes={block.classes}/>
    {:else}
        <Box block={block}/>
    {/if}

{/if}
