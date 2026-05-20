<script lang='ts'>
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/state';
	import { repositoryName } from '$lib/prismicio';
	import "../app.css";
	import LandscapeModal from '$lib/components/LandscapeModal.svelte';
	import Nav from '$lib/components/Nav.svelte'
	import Footer from '$lib/components/Footer.svelte'


	let { children } = $props();
</script>

<svelte:head>
	<title>{page.data.title||"Vineyard Custom Homes"}</title>
	{#if page.data.meta_description}
		<meta name="description" content={page.data.meta_description} />
	{/if}
	<meta property="og:title" content={page.data.meta_title || page.data.title || "Vineyard Custom Homes"} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`https://www.vineyardconstruction.com${page.url.pathname === '/' ? '' : page.url.pathname}`} />
	<meta property="og:site_name" content="Vineyard Custom Homes" />
	{#if page.data.meta_description}
		<meta property="og:description" content={page.data.meta_description} />
	{/if}
	{#if page.data.meta_image}
		<meta property="og:image" content={page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={page.data.meta_image.url} />
	{/if}
	<link rel="canonical" href={`https://www.vineyardconstruction.com${page.url.pathname === '/' ? '' : page.url.pathname}`} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">
	</svelte:head>

<main style="overscroll-behavior: auto contain;">
	<Nav />

		{@render children?.()}

	<Footer />
</main>
<LandscapeModal />
<PrismicPreview {repositoryName} />
