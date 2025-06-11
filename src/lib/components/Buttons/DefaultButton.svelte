<script lang="ts">
    import type { MouseEventHandler } from "svelte/elements";
    interface ButtonProps {
   href?: string;
   onclick?: (event: MouseEvent ) => any;
   class?: string;
   children?: any;
   bump?: boolean;
   [key: string]: any;
 }
    let { href = "", onclick = () => {}, bump=true, class:passedClasses = '', children = undefined, ...others  } : ButtonProps = $props();

    const baseClasses = "border-1 border-solid border-dark px-10 pt-[14px] pb-[14px] h-fit hover:bg-light hover:text-white active:bg-dark transition"

</script>

<div class:bump={bump}>
    {#if href}
        <a 
            {href} 
            {onclick} 
            class="{baseClasses} {passedClasses}">
                {@render children?.()}
        </a>
    {:else}
    <button {onclick}
            class="{baseClasses} {passedClasses}">
            {@render children?.()}
    </button>
    {/if}
</div>