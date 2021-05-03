<template>
    <div class="flex flex-row mx-auto mt-6 text-center justify-center text-base text-gray-100 font-thin antialiased">
        <div @click="changPage(1)" class="mx-1 md:mx-2    w-7 h-7 bg-black bg-opacity-80 rounded-md shadow-inner hover:bg-gray-300 hover:text-gray-900 cursor-pointer">&lt;&lt;</div>
        <div @click="changPage(page.number)" class="mx-1 md:mx-2    w-7 h-7 bg-black bg-opacity-80 rounded-md shadow-inner hover:bg-gray-300 hover:text-gray-900 cursor-pointer">&lt;</div>
        <div v-for="n in page.totalPages" :key="n" 
        v-show="(n>(page.number+1) && n-(page.number+1) < 2) || (n< (page.number+1) && (page.number+1)-n < 2) || (n==page.number+1) || (n==1) || (n==page.totalPages) || (n == page.number+3 ) || (n == page.number-1) "
        @click="changPage(n)" :class="{'bg-gray-300 text-gray-900 ':page.number+1==n}" class="mx-1 md:mx-2  w-7 h-7 bg-black bg-opacity-80 rounded-md shadow-inner hover:bg-gray-300 hover:text-gray-900 cursor-pointer">{{ ((n == parseInt(page.number)+3 || n == parseInt(page.number)-1) && (n != 1 && n != page.totalPages))  ?'...': n }}</div>
        <div @click="changPage(page.number+2)" class="mx-1 md:mx-2    w-7 h-7 bg-black bg-opacity-80 rounded-md shadow-inner hover:bg-gray-300 hover:text-gray-900 cursor-pointer">&gt;</div>
        <div @click="changPage(page.totalPages)" class="mx-1 md:mx-2   w-7 h-7 bg-black bg-opacity-80 rounded-md shadow-inner hover:bg-gray-300 hover:text-gray-900 cursor-pointer">&gt;&gt;</div>
    </div>
</template>
<script>
export default {
  name: 'BasePageNumber',
  props: [
      "page",
  ],
  methods: {
    changPage(n){
        if(n != this.page.number+1 && n > 0 && n < this.page.totalPages+1){
            this.$parent.changPage(n)
        }
    }
  },
}
</script>