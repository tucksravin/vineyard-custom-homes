<script lang="ts">
	import { swipe, type SwipeCustomEvent } from 'svelte-gestures';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
    import profilePlaceholder from '$lib/assets/images/profile_placeholder.png'
    import featuredPlaceholder from '$lib/assets/images/background_placeholder.svg'
  import ContentWidth from '../ContentWidth/ContentWidth.svelte';
  
	let viewportWidth = $state(1024);

    type Testimonial = {
        title?: string;
        quote: string;
        featuredImage?: string;
        profileImage?: string; 
        attribution?: string;
        attributionSubtitle?: string;
};

interface Props {
    testimonials?: Testimonial[];
}

	let testimonialArray: Testimonial[] = [
        {
            title:'testimonial',
            quote: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.”',
            featuredImage: featuredPlaceholder,
            profileImage: profilePlaceholder,
            attribution: 'Author Name',
            attributionSubtitle: 'CITY, ST'
        },
        {
            title:'testimonial',
            quote: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.”',
            featuredImage: featuredPlaceholder,
            profileImage: profilePlaceholder,
            attribution: 'Author Name',
            attributionSubtitle: 'CITY, ST'
        },
        {
            title:'testimonial',
            quote: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.”',
            featuredImage: featuredPlaceholder,
            profileImage: profilePlaceholder,
            attribution: 'Author Name',
            attributionSubtitle: 'CITY, ST'
        },
    ];
	let tripledTestimonials: Testimonial[] = $state([]);
  

	let sliderIndex = $state(0);
	let isSlideAnimated = $state(true);
	const SLIDER_TRANSITION_LENGTH_IN_MS = 2000;
  
	const resetSliderToStart = () => {
	  setTimeout(() => (isSlideAnimated = false), SLIDER_TRANSITION_LENGTH_IN_MS);
	  setTimeout(() => (sliderIndex = 0), SLIDER_TRANSITION_LENGTH_IN_MS + 20);
	  setTimeout(() => (isSlideAnimated = true), SLIDER_TRANSITION_LENGTH_IN_MS + 40);
	};
  
	const resetSliderToEnd = () => {
	  setTimeout(() => (isSlideAnimated = false), SLIDER_TRANSITION_LENGTH_IN_MS);
	  setTimeout(() => (sliderIndex = testimonialArray.length - 1), SLIDER_TRANSITION_LENGTH_IN_MS + 20);
	  setTimeout(() => (isSlideAnimated = true), SLIDER_TRANSITION_LENGTH_IN_MS + 40);
	};
  
	const slideRight = () => {
	  sliderIndex--;
	  if (sliderIndex < 0) resetSliderToEnd();
	  console.log('Current slide index:', sliderIndex);
	};
  
	const slideLeft = () => {
	  sliderIndex++;
	  if (sliderIndex >= testimonialArray.length) resetSliderToStart();
	  console.log('Current slide index:', sliderIndex);
	};
  
	const handleSwipe = (
	  e: SwipeCustomEvent
	) => {
	  if (e.detail.direction === 'left') slideLeft();
	  if (e.detail.direction === 'right') slideRight();
	};
  
    let { testimonials = [] } : Props = $props();

    onMount(()=>{
        if(testimonials.length>0)
            testimonialArray = testimonials;

        tripledTestimonials = [...testimonialArray, ...testimonialArray, ...testimonialArray];
    })

  </script>
  
  <ContentWidth class=" lg:h-[560px] relative px-0 md:px-8 xl:px-0">
  <div
	class="w-full h-full overflow-hidden relative"
	use:swipe={()=>({ timeframe: 300, minSwipeDistance: 60 })}
	onswipe={handleSwipe}
  >
	{#if tripledTestimonials.length > 0}
	  <div
		style="width: {tripledTestimonials.length * 100}%; transform:translateX({((-sliderIndex / tripledTestimonials.length) - (1/3)) * 100}%);"
		class="flex flex-row justify-between flex-nowrap h-full w-full overflow-hidden
		{isSlideAnimated ? 'transition-transform duration-[2000ms]' : ''}"
	  >
		{#each tripledTestimonials as testimonial, i}
		  <div
			style="width: {100 / tripledTestimonials.length}%;"
			class="h-full relative overflow-hidden bg-dark flex flex-col-reverse gap-12 lg:flex-row p-4 lg:p-0"
		  >
          <div class='w-full lg:h-full flex flex-col justify-center gap-6 lg:gap-12 lg:p-12'>
            <h3 class='text-light uppercase'>{testimonial.title||'From Our Clients'}</h3>
            <p class='text-white max-w-[520px]'>{testimonial.quote}</p>
            <div class='flex gap-9 items-center'>
                <img src={testimonial.profileImage||profilePlaceholder} alt={testimonial.attribution} class='h-16 w-16 rounded-full bg-light' />
                <div class='flex flex-col'>
                    <h4 class='text-light'>{testimonial.attribution}</h4>
                    <div class='label text-light'>{testimonial.attributionSubtitle}</div>
                </div>
            </div>
          </div>
        
                <img
                src={testimonial.featuredImage|| featuredPlaceholder}
                class="lg:h-[560px] w-full lg:w-[560px]"
                alt='slideshow item'
                />
            
		  </div>
		{/each}
	  </div>
	  
	 
	{:else}
	  <div class="w-full h-full flex items-center justify-center">
		<p>No testimonials available</p>
	  </div>
	{/if}
  </div>

  <button class="bump hidden lg:block absolute top-1/2 -translate-y-1/2 left-3 xl:-left-3 -translate-x-full" onclick={slideRight} aria-label='slide right'>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19.375" transform="matrix(-1 0 0 1 40 0)" fill="white" stroke="#7BA0C4" stroke-width="1.25"/>
        <path d="M11.4286 20.0337L17.6786 16.4253V23.6421L11.4286 20.0337ZM40 20.6587H17.0536V19.4087H40V20.6587Z" fill="#7BA0C4"/>
      </svg>
  </button>
  <button class="bump hidden lg:block absolute top-1/2 -translate-y-1/2 right-3 xl:-right-3 translate-x-full " onclick={slideLeft} aria-label='slide left'>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19.375" fill="white" stroke="#7BA0C4" stroke-width="1.25"/>
        <path d="M28.5714 20.0337L22.3214 16.4253V23.6421L28.5714 20.0337ZM0 20.6587H22.9464V19.4087H0V20.6587Z" fill="#7BA0C4"/>
      </svg>
  </button>

  <div
  class="lg:hidden flex flex-row justify-between items-center absolute -bottom-12 left-6 gap-12"
>
  <button class="bump" onclick={slideRight} aria-label='slide right'>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19.375" transform="matrix(-1 0 0 1 40 0)" fill="white" stroke="#7BA0C4" stroke-width="1.25"/>
        <path d="M11.4286 20.0337L17.6786 16.4253V23.6421L11.4286 20.0337ZM40 20.6587H17.0536V19.4087H40V20.6587Z" fill="#7BA0C4"/>
      </svg>
  </button>
  <button class="bump" onclick={slideLeft} aria-label='slide left'>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19.375" fill="white" stroke="#7BA0C4" stroke-width="1.25"/>
        <path d="M28.5714 20.0337L22.3214 16.4253V23.6421L28.5714 20.0337ZM0 20.6587H22.9464V19.4087H0V20.6587Z" fill="#7BA0C4"/>
      </svg>
  </button>
</div>

  </ContentWidth>