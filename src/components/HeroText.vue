<template>
	<div>
		<div class="text-white  mainWrapper relative top-[27rem] md:top-[20rem]  z-50  w-[27.5rem] h-[12.4rem] md:w-[34.3rem] md:h-[16rem] lg:w-[48rem] lg:h-[20rem]  ">
            <h2 class="topHeader 
                     text-[1.4rem] leading-3 tracking-[0.08rem]  h-[0rem] relative top-5
                     md:text-[2rem]   md:h-[2.3rem]">
                     Hi, my name is David Malka
                    </h2>
            <h1 class="middleHeader font-bold
                    text-[6.4rem] leading-[6.2rem] w-[27.5rem] h-[12.4rem] 
                    md:text-9xl md:leading-[8rem] md:w-[34.3rem] md:h-[16rem]
                    lg:text-[11.2rem] lg:leading-[10rem]  lg:w-[48rem] lg:h-[20rem]
                    
                    ">UI/UX Designer</h1>
            <p class="bottomHeader
                    text-[2.5rem] leading-[2.93rem]  h-[3.5rem]
                    md:text-[3rem] md:leading-[3.516rem]  md:h-[3.5rem]
                    
                    ">Create. Design. Solve.</p>
        </div>
	</div>
</template>

<script setup></script>

<style lang="css" scoped>
    
	.mainWrapper{
      display: flex;
      flex-flow: column;
      gap: 2.5rem;
    }
    .middleHeader{
        font-family: 'Playfair Display', serif;
        

    }
    .topHeader{
        font-weight: 400;
        font-family: 'Roboto', sans-serif;

    }
</style>
