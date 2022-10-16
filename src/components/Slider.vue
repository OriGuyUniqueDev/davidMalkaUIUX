<template>
    <div class=" mainWrapper w-[100vw] flex overflow-auto  flex-row gap-4
    md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 md:w-full 
    xl:grid xl:grid-cols-4 xl:grid-rows-1 xl:gap-4  ">
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
    scroll-snap-type: x mandatory;
}
.mainWrapper::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
</style>