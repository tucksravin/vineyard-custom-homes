<script lang="ts">
  import type { ProjectDocument } from "../../prismicio-types";
  import { PrismicImage } from "@prismicio/svelte";

  interface ProjectImageProps {
    project?:ProjectDocument,
    class?:string
  }

    let { project, class:passedClasses = '' } = $props()
</script>

{#if project}
    <a class='{passedClasses} w-full transition-opacity duration-500 hover:opacity-95 active:brightness-50 relative' href={'/gallery/'+project.uid}>
        <PrismicImage field={project.data.hero_image} class='h-full w-full object-cover absolute top-0 left-0' />
        <h3 class='text-white text-center w-full absolute bottom-9'>{project.data.title}</h3>
    </a>
{/if}