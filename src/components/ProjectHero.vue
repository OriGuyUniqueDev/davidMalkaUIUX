<template>
    <div :class="[bgColor1]" class="mainWrapper h-[45.5rem]  pt-[6.3rem]" >
            <img :src="topImage" class="pt-[6.7rem] scale-105"  alt="top image">
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