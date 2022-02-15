<script lang="ts">
    import type { block } from '../../types/content';
    import {parseAttributes} from "../attributes";
    //export let childComponents : block['components'];
    export let attributes : any;
    </script>
    
    
    <input {...parseAttributes(attributes, 'obj')} />