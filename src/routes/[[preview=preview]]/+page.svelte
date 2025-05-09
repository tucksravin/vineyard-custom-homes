<script lang='ts'>
  import ScreenWidthImage from '$lib/components/ScreenWidth/ScreenWidthMedia.svelte';
  import vchMark from '$lib/assets/icons/vch-mark-lightsvg.svg'
  import vchVideoThumb from '$lib/assets/images/forest_still.png?as=run'
  import catThumb from '$lib/assets/images/driving_cat_still.png?as=run'
  import ContentWidth from '$lib/components/ContentWidth/ContentWidth.svelte';
  import DefaultButton from '$lib/components/Buttons/DefaultButton.svelte';
  import ContentWidthGallerySlider from '$lib/components/ContentWidth/ContentWidthGallerySlider.svelte';
  import ScreenWidthGallerySliderLarge from '$lib/components/ScreenWidth/ScreenWidthGallerySliderLarge.svelte';
  import TestimonialSlider from '$lib/components/FullWidth/TestimonialSlider.svelte';
  import Slideshow from '$lib/components/FullWidth/Slideshow.svelte';
  import insta1 from '$lib/assets/images/vch_insta1.jpg'
  import insta2 from '$lib/assets/images/vch_insta2.jpg'
  import insta3 from '$lib/assets/images/vch_insta3.jpg'
  import insta4 from '$lib/assets/images/vch_insta4.jpg'
  import ScreenWidthHalfHeightMedia from '$lib/components/ScreenWidth/ScreenWidthHalfHeightMedia.svelte';

  const instaImages = [insta1, insta2, insta3, insta4]

	let { data } = $props();

	let viewpoortWidth=$state(1024)

	let content = data.page.data;

	$effect(()=> {data; content = data.page.data;})
</script>


<svelte:window bind:innerWidth={viewpoortWidth} />

<ScreenWidthHalfHeightMedia darken vimeoId='1082670713' src={vchVideoThumb}>
	<div class='w-full h-full flex items-center justify-center'>
		<img src={vchMark} class='w-24 z-10' alt='vch logomark' />
		</div>
</ScreenWidthHalfHeightMedia>



<section class='py-32'>
	<ContentWidth>
		<h1 class='text-dark uppercase text-center max-w-[900px]'>Building custom homes in the Treasure Valley with the <span class='text-light'>utmost care</span> and attention to detail</h1>
		<div class='flex flex-col items-center justify-center mt-16'>
			<div class='h-0 w-3 border-light border-b-[1px] -translate-x-[0.5px]'></div>
			<div class='h-20 w-0 border-r-1 -translate-x-[0.5px] border-light'></div>
			<div class='w-16 h-16 rounded-full border-1 border-light relative flex flex-col items-center justify-center gap-[3px]'>
				<div class='label text-light translate-x-[0.5px]'> 01 </div>
				<div class='h-[0.5px] w-full bg-light'></div>
				<div class='label text-light translate-x-[0.5px]'> V </div>
			</div>
		</div>
		<p class='text-center max-w-screen-sm text-dark mt-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
		<div class='flex flex-col md:flex-row items-center gap-20 mt-16'>
			<DefaultButton href='/contact'>INQUIRE</DefaultButton>
			<DefaultButton href='/about'>ABOUT US</DefaultButton>
		</div>
	</ContentWidth>
</section>
<ScreenWidthImage vimeoId='1082680429' src={catThumb}></ScreenWidthImage>
<section class='py-32'>
	<ContentWidth>
	<div class='flex flex-col items-center gap-16 mx-auto w-full lg:w-[520px]'>
		<svg xmlns="http://www.w3.org/2000/svg" width="486" height="6" viewBox="0 0 486 6" fill="none">
			<path d="M0 3L5 5.88675V0.113249L0 3ZM486 3L481 0.113249V5.88675L486 3ZM4.5 3.5H481.5V2.5H4.5V3.5Z" fill="#7BA0C4"/>
	  	</svg>
		<div class='flex flex-col items-center gap-8 text-center'>
			<h2 class='text-dark'>PEOPLE FIRST</h2>
			<p class='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.</p>
		</div>
		<div class='flex flex-col items-center gap-8 text-center'>
			<h2 class='text-dark'>YEARS IN THE MAKING</h2>
			<p class='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.</p>
		</div>
		<div class='flex flex-col items-center gap-8 text-center'>
			<h2 class='text-dark'>DETAILS ON DETAILS</h2>
			<p class='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.</p>
		</div>
		<DefaultButton href='/about'>ABOUT US</DefaultButton>

	</div>
	</ContentWidth>
</section>
<section class='py-32'>
	<TestimonialSlider />
</section>
<section class='py-32'>
	<ContentWidth>
		<a href='https://www.instagram.com/vineyardcustomhomes/' target="_blank" aria-label='instagram'><i class='fa-brands fa-instagram fa-2xl text-dark scale-150 hover:text-light transition' ></i></a>
		<h3 class='text-dark mt-12'>VIEW OUR CURRENT PROJECTS</h3>
		<div class='w-full flex flex-row justify-center items-center flex-wrap gap-6 mt-6'>
			{#each instaImages as image}
				<a href='https://www.instagram.com/vineyardcustomhomes/' class='w-full md:w-1/3 xl:w-1/5 aspect-square hover:opacity-80 transition-opacity' aria-label='vch instagram photo'>
					<img src={image} class='w-full h-full object-cover' alt='vch instagram' />
				</a>
			{/each}
			
		</div>
	</ContentWidth>
</section>