<template>
    <div class="mainWrapper flex flex-col hover:scale-110">
        <img v-bind:src="url" alt="">
        <h1>{{title}}</h1>
        <h2>{{role}}</h2>
        <button type="button">View project</button>
    </div>
</template>

<script setup>
    const props = defineProps(['title',"role","url"])
    console.log(props.url);
</script>

<style scoped>
.mainWrapper{
    transition: all 0.375s linear;
}
</style>