
<script lang="ts">
	import type { ImageField } from "@prismicio/client";
	import placeholder from "../../assets/images/background_placeholder.svg";

	import { PrismicImage } from "@prismicio/svelte";
	import Img from "@zerodevx/svelte-img";
  


	let {
		src = placeholder,
		field = null,
		altText = "background image",
		placeholderSide = "right",
		vimeoId = "",
		darken = false,
		backdrop = false,
		class:passedClasses = '',
		children= undefined
	} = $props();
  
	let viewportHeight: number = $state(1024);
	let viewportWidth: number = $state(768);

	console.log(field)
  </script>
  
  <svelte:window
	bind:innerHeight={viewportHeight}
	bind:innerWidth={viewportWidth}
  />
  
  <section
	class="h-[50lvh] w-screen overflow-clip 
	  {backdrop
	  ? 'fixed -z-10 top-0 left-0'
	  : 'relative'}"
  >
	<div
	  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video  
		{viewportHeight * 16 > viewportWidth * 9 ? 'h-screen min-w-full': 'w-screen min-h-full'}"
	>
	  {#if !field && typeof src === 'string'}
		<img
		  {src}
		  alt={altText}
		  class="absolute bottom-0 {placeholderSide}-0 h-full w-full object-cover {passedClasses} -z-10 
		  	{src === placeholder ? 'lg:w-[45%] md:h-auto' : ''}"
		/>
		{:else if src}
		<Img
		  {src}
		  alt={altText}
		  class="absolute bottom-0 {placeholderSide}-0 h-full w-full object-cover {passedClasses} -z-10 
		  	{src === placeholder ? 'lg:w-[45%] md:h-auto' : ''}"
		/>

	  {/if}
	  {#if field}
	  <PrismicImage
		  {field}
		  class="absolute bottom-0 h-full w-full object-cover -z-10 {passedClasses}"
		  loading='eager'
		/>
	{/if}
  
	  {#if vimeoId}
		<iframe
		  title="background video"
		  src={`https://player.vimeo.com/video/${vimeoId}?background=1&muted=1&loop=1&autoplay=1`}
		  class="aspect-video absolute {viewportHeight * 16 > viewportWidth * 9
			? 'h-screen min-w-full'
			: 'w-screen min-h-full'} contrast-[1.15] -z-10"
		  frameborder="0"
		  allowfullscreen
		></iframe>
	  {/if}
  
	  {#if darken}
		<div
		  class="bg-darken-gradient pointer-events-none absolute w-full h-full top-0 left-0 -z-10"></div>
	  {/if}
	
	</div>

		{@render children?.()}
	
  </section>
  
  <style>
	.bg-darken-gradient {
		background: linear-gradient(0deg, rgba(0, 38, 62, 0.50) 0%, rgba(0, 38, 62, 0.50) 100%), linear-gradient(180deg, rgba(0, 38, 62, 0.75) -3.96%, rgba(0, 38, 62, 0.00) 49.92%);
		
	}
  </style>
  