<script lang='ts'>
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
  import { PrismicImage } from "@prismicio/svelte";
  import type { ContentWidthMediaSlice } from "../../../prismicio-types";

  

  let slice:ContentWidthMediaSlice = $props();
</script>

<ContentWidth class='mt-9 flex flex-col md:flex-row'>
	{#if slice.variation==='default'}
		<div class='aspect-[4/3] md:aspect-video w-full'>
			<PrismicImage field={slice.primary.image} class='w-full h-full' />
			{#if slice.primary.vimeo_id}
				<iframe
				title="background video"
				src={`https://player.vimeo.com/video/${slice.primary.vimeo_id}?background=1&muted=1&loop=1&autoplay=1`}
				class="absolute top-0 left-0 w-full h-full"
				frameborder="0"
				allowfullscreen
				></iframe>
			{/if}
		</div>
	{/if}
	{#if slice.variation==='twoCol'}
		<div class='aspect-[4/3] mt-9 md:mt-0 {slice.primary.image_aspect==='9:16'? "md:aspect-[9/16]":"md:aspect-square"} md:w-1/2 md:pr-4.5'>
			<PrismicImage field={slice.primary.image_one} class='w-full h-full' />
			{#if slice.primary.vimeo_id_one}
				<iframe
				title="background video"
				src={`https://player.vimeo.com/video/${slice.primary.vimeo_id_one}?background=1&muted=1&loop=1&autoplay=1`}
				class="absolute top-0 left-0 w-full h-full"
				frameborder="0"
				allowfullscreen
				></iframe>
			{/if}
		</div>
		<div class='aspect-[4/3] mt-9 md:mt-0 {slice.primary.image_aspect==='9:16'? "md:aspect-[9/16]":"md:aspect-square"} md:w-1/2 md:pl-4.5'>
			<PrismicImage field={slice.primary.image_two} class='w-full h-full' />
			{#if slice.primary.vimeo_id_two}
				<iframe
				title="background video"
				src={`https://player.vimeo.com/video/${slice.primary.vimeo_id_two}?background=1&muted=1&loop=1&autoplay=1`}
				class="absolute top-0 left-0 w-full h-full"
				frameborder="0"
				allowfullscreen
				></iframe>
			{/if}
		</div>
	{/if}
</ContentWidth>