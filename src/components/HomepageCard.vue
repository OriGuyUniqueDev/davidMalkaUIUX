<template>
    <div class="mainWrapper flex flex-col hover:scale-110
    w-[34rem] h-[40rem]
    sm:w-full 
    md:w-full 
    lg:w-[80rem]
    xl:w-[56.4rem]
    2xl:w-[69rem]
    ">
        <img :src="props.url" :alt="alt">
        <h1>{{title}}</h1>
        <h2>{{role}}</h2>
        <button type="button">View project</button>
    </div>
</template>

<script setup>
    const props = defineProps(['title',"role","url","alt"])
    console.log(props.url);
</script>

<style scoped>
.mainWrapper{
    transition: all 0.375s linear;
}
</style>