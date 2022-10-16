<template>
    <div :class="[bgColor1]" class="mainWrapper h-max  pt-[6.3rem]" >
            <img :src="topImage" class="mt-[6.7rem] mx-auto relative -top-3 scale-105"  alt="top image">
    </div>
</template>

<script setup>

    let props = defineProps(['bgColor1','topImage'])

</script>

<style  scoped>
    .mainWrapper{
        position: relative;
        top: -6.3rem;
       
    }
  
    
</style>