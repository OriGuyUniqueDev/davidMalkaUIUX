<template>
    <div :class="[bgColor1]" class=" mainWrapper w-full max-h-max pt-[6.3rem]">
        <img class="pt-[6.7rem] w-full" :src="pamonTopImage" alt="top image">
    </div>
</template>

<script setup>
    import pamonTopImage from '../assets/images/projectsImages/paamonim/topImage.svg'
    let props = defineProps(['bgColor1','topImage'])
    console.log(props.topImage);
</script>

<style  scoped>
    .mainWrapper{
        position: relative;
        top: -6.3rem;
    }
</style>