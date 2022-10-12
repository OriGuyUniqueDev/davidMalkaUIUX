<template>
    <div :class="[bgColor1]" class=" mainWrapper w-full max-h-max pt-[6.3rem]">
        <img class="pt-[6.7rem] w-full" :src="[topImage]" alt="top image">
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