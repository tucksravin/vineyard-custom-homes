<script lang="ts">
  import { SliceZone } from "@prismicio/svelte";
  import vchMark from "$lib/assets/icons/vch-mark-lightsvg.svg";
  import vchVideoThumb from "$lib/assets/images/forest_still.png?as=run";
  import ScreenWidthHalfHeightMedia from "$lib/components/ScreenWidth/ScreenWidthHalfHeightMedia.svelte";
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";


  let { data } = $props();

  let content = $state(data.page.data);


  
</script>

<ScreenWidthHalfHeightMedia
  class='brightness-80'
  vimeoId={content.hero_vimeo_id || ""}
  field={content.hero_image}
>
  <div class="w-full h-full flex flex-col items-center justify-center gap-9">
    <h1 class='text-white z-10 uppercase'>{content.title}</h1>
    <div class="flex flex-col items-center justify-center">
      <div
        class="h-0 w-3 border-light border-b-[1px] -translate-x-[0.5px]"
      ></div>
      <div class="h-20 w-0 border-r-1 -translate-x-[0.5px] border-light"></div>
      <div
        class="w-16 h-16 rounded-full border-1 border-light relative flex flex-col items-center justify-center gap-[3px]"
      >
        <div class="label text-light translate-x-[0.5px]">01</div>
        <div class="h-[0.5px] w-full bg-light"></div>
        <div class="label text-light translate-x-[0.5px]">V</div>
      </div>
    </div>
  </div>
</ScreenWidthHalfHeightMedia>

<section class='py-32'>
	<ContentWidth class='gap-9 flex flex-col items-center'>
    <h3 class='text-light text-center'>
      Design 
      <br/> 
      <span class='text-dark'>{content.design}</span>
    </h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="60" viewBox="0 0 7 60" fill="none">
      <path d="M3.5 60L6.38675 55L0.613251 55L3.5 60ZM3.5 0L3 2.18557e-08L3 55.5L3.5 55.5L4 55.5L4 -2.18557e-08L3.5 0Z" fill="#7BA0C4"/>
    </svg>
    <h3 class='text-light text-center'>
      Architect 
      <br/> 
      <span class='text-dark'>{content.architect}</span>
    </h3>
    <div>
      <h1 class='text-dark uppercase text-center max-w-[900px] mt-32'>{content.testimonial}</h1>
      <h3 class='text-dark mt-16 text-center'>{content.testimonial_attribution}</h3>
    </div>

    
  </ContentWidth>
</section>

<SliceZone slices={data.page.data.slices} />
