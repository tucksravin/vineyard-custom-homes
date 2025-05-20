<script lang='ts'>
    import logo from "$lib/assets/icons/logos/vch_logo.png"

  import ContentWidth from "./ContentWidth/ContentWidth.svelte";
</script>

<nav class=' absolute z-10 top-0 left-0 w-screen'>
    <ContentWidth class='flex flex-row justify-between items-center border-b-1 py-5 border-white relative'>
        <a href='/' class=''><img src={logo} class='h-6 md:h-9 w-auto hover:opacity-80 transition-opacity' alt='home' /></a>
        <div class='flex justify-end gap-9 text-white '>
            <a href='/gallery' class='hover:text-light transition duration-300 ease-fast-slow'>OUR WORK</a>
            <a href='/contact' class='hover:text-light transition duration-300 ease-fast-slow'>INQUIRE</a>
            <a href='/about' class='hover:text-light transition duration-300 ease-fast-slow'>ABOUT US</a>
        </div>

        <div class='w-[0.75px] h-2.5 bg-white absolute left-0 -bottom-[5px]'></div>
        <div class='w-[0.75px] h-2.5 bg-white absolute right-0 -bottom-[5px]'></div>
    </ContentWidth>
</nav>