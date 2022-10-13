<template>
    <hr class="bg-dividers h-[2px]">
    <div class="flex flex-row bg-transparent justify-around lg:justify-around w-full
    h-[13rem]
    ">
        <div class="flexLeft flex flex-col text-greyText text-2xl gap-[1.2rem] lg:gap-[6rem] my-auto  lg:justify-around lg:flex-row">
            <p class="logo"><span class="font-bold">David</span>Malka</p>
            <a class="lg:leading-[2.3rem]" href="mailto:dudu5malka@gmail.com">dudu5malka@gmail.com</a>
            <a class="lg:leading-[2.3rem]" href="tel:+972547951888">+972547951888</a>
        </div>
        <div class="flexRight flex gap-[1.2rem] self-baseline flex-row my-auto">
            <img src="../assets/images/icons/Instagram.svg" alt="Instagram icon">
            <img src="../assets/images/icons/facebook.svg" alt="facebook icon">
            <img src="../assets/images/icons/Linkdin.svg" alt="Linkdin icon">
        </div>

    </div>
</template>

<script setup>
  
</script>

<style scoped>
.logo {
		font-family: "Playfair Display";
		font-style: normal;
		font-weight: 700;
		font-size: 2.1rem;
		background: linear-gradient(96.02deg, #ff1392 -1.37%, #7b3ce1 46.36%, #10a9ff 95.6%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
    .flexLeft{
        font-family: "Outfit", sans-serif;
        font-size: 1.7rem;
        

    }
</style>