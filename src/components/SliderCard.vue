<template>
    <div  class=" rounded-md border-[1px] border-greyText bg-hoverStyle py-10 min-w-[28.8rem] px-4 pt-2">
       <p :class="colorHead" class="head  text-[4.8rem]">{{number}}</p>
       <h1 class="title text-white text-[1.8rem]">{{title}}</h1>
       <p class=" data text-white text-[1.6rem]">{{data}}</p>
    </div>
</template>

<script setup>
let props = defineProps(['number','title','data','colorHead'])
</script>

<style scoped>
h1,p{
    font-family: "Outfit", sans-serif;
}
.title{
    font-weight: 700;
}
.data{
    font-weight: 300;
}
.head{
    font-family: "Playfair Display", serif; 
}

</style>