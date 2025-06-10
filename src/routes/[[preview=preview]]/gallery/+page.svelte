<script lang='ts'>
  import ScreenWidthImage from '$lib/components/ScreenWidth/ScreenWidthMedia.svelte';
  import vchMark from '$lib/assets/icons/vch-mark-lightsvg.svg'
  import vchVideoThumb from '$lib/assets/images/homethumb.jpg?as=run'
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
  import { PrismicImage } from '@prismicio/svelte';
  import { isFilled } from '@prismicio/client';
  import type { ProjectDocument } from '../../../prismicio-types.js';
  import ProjectImage from '$lib/components/ProjectImage.svelte';
  import ScreenWidthMedia from '$lib/components/ScreenWidth/ScreenWidthMedia.svelte';

	let { data } = $props();

	let viewpoortWidth=$state(1024)

	let content = $state(data.page.data);

    const projects:ProjectDocument[] = data.projects;

   const setProjectFromId = (id: string | undefined): ProjectDocument | null => {
        if(typeof id === 'undefined')
            return null;

        let count = 0; 
        console.log('setProjectFromId', id, projects.length);

        for(const proj of projects) {
            console.log(count, ':', proj.id, id, count++);

            if(proj.id === id) return proj;
        }
        
        
        throw new Error(`Project with id ${id} not found`);
    }
    
    let projectOne:ProjectDocument|null = $state(null); 
    if(isFilled.contentRelationship(content.project_one))
        projectOne = setProjectFromId(content.project_one.id)

    let projectTwo:ProjectDocument|null = $state(null);
    if(isFilled.contentRelationship(content.project_two))
        projectTwo = setProjectFromId(content.project_two.id)

    let projectThree:ProjectDocument|null = $state(null);
    if(isFilled.contentRelationship(content.project_three))
        projectThree = setProjectFromId(content.project_three.id)

    let projectFour:ProjectDocument|null = $state(null);    
    if(isFilled.contentRelationship(content.project_four))
        projectFour = setProjectFromId(content.project_four.id)

    let projectFive:ProjectDocument|null = $state(null);
    if(isFilled.contentRelationship(content.project_five))
        projectFive = setProjectFromId(content.project_five.id)

    let projectSix:ProjectDocument|null = $state(null);
    if(isFilled.contentRelationship(content.project_six))
        projectSix = setProjectFromId(content.project_six.id)
    let projectSeven:ProjectDocument|null = $state(null);
    if(isFilled.contentRelationship(content.project_seven))
        projectSeven = setProjectFromId(content.project_seven.id)

</script>


<svelte:window bind:innerWidth={viewpoortWidth} />

<ScreenWidthMedia darken vimeoId='1092190178' src={vchVideoThumb}>
	<div class='w-full h-full flex items-center justify-center'>
		<img src={vchMark} class='w-24 z-10' alt='vch logomark' />
	</div>
</ScreenWidthMedia>

<section class='py-32'>
	<ContentWidth>
		<h1 class='text-dark uppercase text-center max-w-[900px]'>{content.testimonial}</h1>
        <h3 class='text-dark mt-16'>{content.testimonial_attribution}</h3>
		<div class='flex flex-col items-center justify-center mt-16'>
			<div class='h-0 w-3 border-light border-b-[1px] -translate-x-[0.5px]'></div>
			<div class='h-20 w-0 border-r-1 -translate-x-[0.5px] border-light'></div>
			<div class='w-16 h-16 rounded-full border-1 border-light relative flex flex-col items-center justify-center gap-[3px]'>
				<div class='label text-light translate-x-[0.5px]'> 01 </div>
				<div class='h-[0.5px] w-full bg-light'></div>
				<div class='label text-light translate-x-[0.5px]'> V </div>
			</div>
		</div>
	</ContentWidth>
</section>
<section class='pb-32'>
	<ContentWidth class='flex flex-col gap-9'>
        <ProjectImage class='aspect-[4/3] md:aspect-video' project={projectOne} />
        <div class='w-full flex flex-col md:flex-row gap-9 md:gap-0'>
            <div class='flex flex-col md:pr-9 md:w-2/5 gap-9'>
                <ProjectImage class='aspect-[3/4]' isVertical={true} project={projectTwo} />
                 <ProjectImage class='aspect-[4/3]' project={projectThree} />
                
            </div>
            <div class='flex flex-col md:w-3/5 gap-9'>
                 <ProjectImage class='aspect-[4/3] md:aspect-square' project={projectFour} />
                 <ProjectImage class='aspect-[4/3] md:aspect-auto md:h-full' project={projectFive} />
            </div>
        </div>
        <div class='w-full flex flex-col md:flex-row gap-9 md:gap-0 items-center justify-center'>
            <div class='flex flex-col md:pr-9 md:w-3/5 gap-9'>
                <ProjectImage class='aspect-[4/3] md:aspect-square' project={projectSix} />
                
            </div>
            {#if projectSeven}
            <div class='flex flex-col md:w-2/5 gap-9'>
                 <ProjectImage class='aspect-[4/3] md:aspect-auto md:h-full' isVertical={true} project={projectSeven} />
            </div>
            {/if}
        </div>
	</ContentWidth>
</section>

