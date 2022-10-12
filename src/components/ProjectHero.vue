<template>
    <div :class="[bgColor1]" class="mainWrapper h-max pt-[6.3rem]" >
        <img :src="topImage" class="imgTag  pt-[6.7rem]"  alt="top image">
    </div>
</template>

<script setup>

    let props = defineProps(['bgColor1','topImage'])

</script>

<style  scoped>
    .mainWrapper{
        position: relative;
        top: -6.3rem;
        bottom: 47.1rem;
        right: 0;
    }
    img{
        position: relative;
        
    }
</style>