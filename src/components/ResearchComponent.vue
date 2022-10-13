<template>
    <div class="mainWrapper flex flex-row rounded-xl gap-8 py-5 mb-6 px-5 ">
        <div class="icon relative top-2  w-[6rem] h-[6rem] text-[3.2rem]">{{icon}}</div>
        <p class="self-center text-[1.4rem] ">{{data}}</p>
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
.mainWrapper{
    border: 1px solid grey;
}
.icon {
		font-family: "Outfit";
		background: linear-gradient(96.02deg, #ff1392 -1.37%, #7b3ce1 46.36%, #10a9ff 95.6%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
</style>