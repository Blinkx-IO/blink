<script lang="ts">
import type { block } from '../../types/content';
import {parseAttributes} from "../attributes";
export let childComponents : block['components'];
export let attributes : any;
export let classes : any;
</script>


<svg {...parseAttributes(attributes, 'obj', classes )}>
    {#each childComponents as child}
        {#if child.tagName == "path"}
            <path {...parseAttributes(child.attributes, 'obj',classes)}></path>
        {:else if child.tagName == "g"}
            <g {...parseAttributes(child.attributes, 'obj',classes)}></g>
        {/if}
        
    {/each}
</svg>