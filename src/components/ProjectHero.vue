<template>
    <div :class="[bgColor1]" class="mainWrapper h-[40.8rem]  pt-[6.3rem] overflow-hidden " >
            <img :src="topImage" class="mt-[6.7rem] mx-auto relative -top-3 scale-105"  alt="top image">
    </div>
</template>

<script setup>

    let props = defineProps(['bgColor1','topImage'])

</script>

<style  scoped>
    .mainWrapper{
        position: relative;
        top: -7rem;
       
    }
  
    
</style>