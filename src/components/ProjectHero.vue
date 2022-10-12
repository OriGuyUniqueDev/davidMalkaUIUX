<template>
    <div :class="[bgColor1]" class="mainWrapper w-full h-max pt-[6.3rem]" >
        <img :src="topImage" class=" w-full pt-[6.7rem]"  alt="top image">
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
</style>