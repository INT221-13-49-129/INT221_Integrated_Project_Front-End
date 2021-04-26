<template>
<div class="flex flex-row pb-20 ">

<img :src="require(`../assets/home/${news.image}`)" class="w-5/12 h-auto ml-40 p-1 md:p-2 shadow-2xl rounded-lg bg-gray-200 bg-opacity-30 "> 
<div class="ml-20 container flex flex-col justify-center  ">
<div class="text-3xl">
{{ news.title1 }}
</div>
<div class="text-3xl">
{{ news.title2 }}
</div>
<div class="text-base mr-36">
{{ news.description }}
</div>
</div>

</div>
</template>

<script>
export default {
  name: 'News',
  props: {
    news: Array
  }
}
</script>

