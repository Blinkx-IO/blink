<script lang="ts">
    import type { block } from "../types/content";
    import Block from "./block.svelte";

    export let childComponents : block['components'];
    export let childSlotById :string[]=[];
</script>

{#each childComponents as child}
    <Block block={child}>
    </Block>
{/each}