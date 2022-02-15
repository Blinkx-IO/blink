<script lang="ts">
    //import type { block } from '$content';
    import {parseAttributes} from "../attributes";
    //export let childComponents : block['components'];
    export let attributes : any;
    export let classes : any;
    </script>
    
    
    <!-- svelte-ignore a11y-missing-attribute -->
    <img {...parseAttributes(attributes, 'obj', classes)} />