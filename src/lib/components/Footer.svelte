<script lang="ts">
  import DefaultButton from "./Buttons/DefaultButton.svelte";
  import ContentWidth from "./ContentWidth/ContentWidth.svelte";
  import logomark from '$lib/assets/icons/vch-mark-lightsvg.svg'
  import logo from "$lib/assets/icons/logos/vch_logo.png"

</script>

<style>
    .gradient{
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.01%, rgba(0, 0, 0, 0.20) 63.71%), #00263E;
    }
</style>


<footer class='w-screen pt-32 bg-dark relative'>
    <div class='h-1/6 w-full absolute bottom-0 left-0 gradient'></div>
    <ContentWidth>
        <h1 class='text-white'>BEGIN YOUR DREAM BUILD.</h1>
        <svg class='my-12' xmlns="http://www.w3.org/2000/svg" width="6" height="133" viewBox="0 0 6 133" fill="none">
            <path d="M2.99999 132.963L5.88675 127.963L0.113243 127.963L2.99999 132.963ZM2.5 -2.18557e-08L2.49999 128.463L3.49999 128.463L3.5 2.18557e-08L2.5 -2.18557e-08Z" fill="#7BA0C4"/>
        </svg>
        <DefaultButton class=' border-light text-white' href='/contact'>Let's Connect</DefaultButton>
        <img src={logomark} class='mt-12 mb-32 w-32' alt='vch logomark'/>

        <div class='w-full flex flex-col md:flex-row justify-between'>
            <a href='/'><img src={logo} class='h-6 md:h-9 w-auto hover:opacity-80 transition-opacity' alt='home' /></a>
            <a href='/about' class='text-white hover:text-light transition'>ABOUT VINEYARD</a>
            <a href='/about' class='text-white hover:text-light transition'>CURRENT PROJECTS</a>
            <a href='/contact' class='text-white hover:text-light transition'>CONTACT US</a>
        </div>
        <div class='my-16 copyright text-white'>{'Copyright © '+ new Date().getFullYear() +' Vineyard Custom Homes'}</div>
    </ContentWidth>

</footer>