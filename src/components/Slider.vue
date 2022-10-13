<template>
    <div class=" mainWrapper flex overflow-auto flex-row gap-4 ">
        <SliderCard v-for="card in cards" :number="card.number" :title="card.title" :data="card.data" :colorHead="card.color"></SliderCard>
    </div>
</template>

<script setup>
import SliderCard from "./SliderCard.vue";
    let props = defineProps(['cards'])

</script>

<style scoped>
.mainWrapper {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    width: 100vw;
    scroll-snap-type: x mandatory;
}
.mainWrapper::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
</style>