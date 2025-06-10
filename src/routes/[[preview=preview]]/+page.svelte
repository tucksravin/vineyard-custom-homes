<script lang='ts'>
  import ScreenWidthImage from '$lib/components/ScreenWidth/ScreenWidthMedia.svelte';
  import vchMark from '$lib/assets/icons/vch-mark-lightsvg.svg'
  import vchVideoThumb from '$lib/assets/images/riverThumb.jpg?as=run'
  import catThumb from '$lib/assets/images/homethumb.jpg?as=run'
  import ContentWidth from '$lib/components/ContentWidth/ContentWidth.svelte';
  import DefaultButton from '$lib/components/Buttons/DefaultButton.svelte';
  import ContentWidthGallerySlider from '$lib/components/ContentWidth/ContentWidthGallerySlider.svelte';
  import ScreenWidthGallerySliderLarge from '$lib/components/ScreenWidth/ScreenWidthGallerySliderLarge.svelte';
  import TestimonialSlider from '$lib/components/FullWidth/TestimonialSlider.svelte';

  import insta1 from '$lib/assets/images/vch_insta1.jpg'
  import insta2 from '$lib/assets/images/vch_insta2.jpg'
  import insta3 from '$lib/assets/images/vch_insta3.jpg'
  import insta4 from '$lib/assets/images/vch_insta4.jpg'
  import enzos from '$lib/assets/images/enzos.jpg'
  import haggetts from '$lib/assets/images/haggetts.jpg'
  import heuser from '$lib/assets/images/heuser.jpg'
  import ScreenWidthHalfHeightMedia from '$lib/components/ScreenWidth/ScreenWidthHalfHeightMedia.svelte';

  const instaImages = [insta1, insta2, insta3, insta4]
  const testimonials = [

	 {
       
            quote: '“I  wanted to share how awesome it’s been working with you. I keep getting such great feedback from others around the job site and also the neighbors that you and the subs are doing an unbelievable job!”',
            attribution: 'Blake H.',
            attributionSubtitle: 'Eagle, ID',
			featuredImage: haggetts,
        },
		{
        
            quote: '“Finding a high integrity, high performance contractor is rare. We feel extremely blessed to have met Josiah, and have him oversee our project. We cannot give him and his team high enough praise! We welcome any prospective client to contact us for additional info on our experiences with Josiah and his crew.”',
            attribution: 'Adam & Melissa Pitale, ENZO’s',
            attributionSubtitle: 'Eagle, ID',
			featuredImage: enzos,
        },
		{
            
            quote: '“They make the process of homebuilding and remodel simple, exceeded my expectations each time I work with them. Attention to detail, great communication and on-time results are words I use when speaking about Vineyard. Although, admittedly, part of me wants to keep them a secret as they are Treasure Valley’s best custom builder!”',
            attribution: 'Ryan H.',
            attributionSubtitle: 'Eagle, ID',
			featuredImage: heuser,
        },
]

	let { data } = $props();

	let viewpoortWidth=$state(1024)

	let content = data.page.data;

	$effect(()=> {data; content = data.page.data;})
</script>


<svelte:window bind:innerWidth={viewpoortWidth} />

<ScreenWidthHalfHeightMedia darken vimeoId='1092191048' src={vchVideoThumb}>
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
		<p class='text-center max-w-screen-sm text-dark mt-16'>With founders who grew up around job sites and craftsmen, we learned the value of doing things the right way—not the easy way. We approach every home as if we were building it for our own family.</p>
		<div class='flex flex-col md:flex-row items-center gap-20 mt-16'>
			<DefaultButton href='/contact'>LET'S CONNECT</DefaultButton>
			<DefaultButton href='/about'>Tell Me More</DefaultButton>
		</div>
	</ContentWidth>
</section>
<ScreenWidthImage vimeoId='1092190178' src={catThumb}></ScreenWidthImage>
<section class='py-32'>
	<ContentWidth>
	<div class='flex flex-col items-center gap-16 mx-auto w-full lg:w-[640px]'>
		<svg xmlns="http://www.w3.org/2000/svg" width="486" height="6" viewBox="0 0 486 6" fill="none">
			<path d="M0 3L5 5.88675V0.113249L0 3ZM486 3L481 0.113249V5.88675L486 3ZM4.5 3.5H481.5V2.5H4.5V3.5Z" fill="#7BA0C4"/>
	  	</svg>
		<div class='flex flex-col items-center gap-8 text-center'>
			<h2 class='text-dark uppercase'>Legacy of Craftsmanship</h2>
			<p class='text-dark'>With generations of building experience behind us, we know that the best homes are built from a deep understanding of the craft. Every line, joint, and finish is executed with precision—because quality should never be a question.</p>
		</div>
		<div class='flex flex-col items-center gap-8 text-center'>
			<h2 class='text-dark uppercase'>Relationships First, Always</h2>
			<p class='text-dark'>Great homes start with great relationships. We take the time to understand your vision, communicate clearly, and guide you through every step. Our clients become collaborators—and often, friends—because trust is the foundation we build on.</p>
		</div>
		<div class='flex flex-col items-center gap-8 text-center'>
			<h2 class='text-dark uppercase'>Details Make the Difference</h2>
			<p class='text-dark'>From intricate woodwork to custom layouts, we embrace complexity and deliver solutions that are both beautiful and lasting. We love rising to the challenge that other builders would avoid. It’s in those details that your home becomes truly yours.</p>
		</div>
		<DefaultButton href='/about'>TELL ME MORE</DefaultButton>

	</div>
	</ContentWidth>
</section>
<section class='py-32'>
	<TestimonialSlider testimonials={testimonials} />
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