<template>
    <div class="flex flex-row gap-8 mb-6">
        <div class="w-[4.4rem]"><img :src="icon" alt="icon"></div>
        <p class="self-center text-[1.6rem]">{{data}}</p>
    </div>
</template>

<script setup>
    let props = defineProps(['icon','data'])
</script>

<style scoped>
p{
    font-family: 'Outfit';
    font-weight: 300;
    color: white;
}
</style>