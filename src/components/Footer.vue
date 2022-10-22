<template>
    
    <div class="flex flex-row h-[13rem] md:h-[12.4rem] bg-transparent my-[1.7rem] justify-around lg:justify-around w-full
    
    ">
        <div class="flexLeft flex flex-col text-greyText text-2xl gap-[2rem] justify-between lg:gap-[6rem]   lg:justify-around lg:flex-row">
            <RouterLink :to="{name:'home'}">
                <p class="logo"><span class="font-bold">David</span>Malka</p>
            </RouterLink>
            
            <a class="lg:leading-[2.3rem]" href="mailto:dudu5malka@gmail.com">dudu5malka@gmail.com</a>
            <a class="lg:leading-[2.3rem]" href="tel:+972547951888">+972547951888</a>
        </div>
        <div class="flexRight flex gap-[1.2rem] self-end md:self-baseline  flex-row ">
            <img width="20" height="20" src="../assets/images/icons/Instagram.svg" alt="Instagram icon">
            <img width="20" height="20" src="../assets/images/icons/facebook.svg" alt="facebook icon">
            <img width="20" height="20" src="../assets/images/icons/Linkdin.svg" alt="Linkdin icon">
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