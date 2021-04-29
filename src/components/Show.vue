 <template>
   <div class="show font-serif fixed font-light bg-opacity-20 bg-white flex justify-center items-center  z-20 inset-0 overflow-y-auto overflow-x-auto">
     <div class=" w-320 h-128 bg-opacity-90 bg-gray-100 mb-5 flex flex-row rounded-xl fixed ">
       <div class="w-7/12 bgsvg bg-no-repeat bg-center">
        <div class="text-5xl font-extrabold text-right mt-10 truncate">{{product.productname}}</div>
         <div class="flex flex-row justify-center items-center ">         
           <img class="object-contain object-center -mt-20" alt="addcar" src="../assets/home/30129.png">
         </div>
         <div class="flex flex-row justify-center items-center ">
           <div v-for="color in product.colorList" :key="color.colorid" class="w-9 h-9 rounded-full border-black border-2 shadow-lg mx-2" v-bind:style="{ backgroundColor: color.colorcode }"></div>
         </div>
       </div>
       <div class="w-5/12 mt-4 text-gray-800 flex flex-col ">
        <div class="text-right  mr-4">
        <span class="material-icons text-4xl cursor-pointer" @click="this.$parent.showProduct(false)">
          highlight_off
          </span>
        </div>
         <div class="h-full flex flex-col items-center justify-center ml-5 mr-10 mb-4 mt-5">
           <div class="h-full w-full flex flex-row text-gray-800">
             <div class="text-base font-medium text-left text-gray-800 w-full divide-y-2 divide-gray-300 border-b-2 border-gray-300">
               <div class="mt-2 flex flex-row"> <div class="flex-shrink-0">NAME : </div><div class="flex-grow text-right">{{product.productname}}</div></div>
               <div class="mt-2 flex flex-row"> <div class="flex-shrink-0">BRAND : </div><div class="flex-grow text-right">{{product.brand.brandname}}</div></div>
               <div class="mt-2 flex flex-row"> <div class="flex-shrink-0">POWER : </div><div class="flex-grow text-right">{{product.power}} kW</div></div>
               <div class="mt-2 flex flex-row"> <div class="flex-shrink-0">TORQUE :</div><div class="flex-grow text-right">{{product.torque}} Nm/s</div></div>
               <div class="mt-2 flex flex-row"> <div class="flex-shrink-0">WEIGHT :</div><div class="flex-grow text-right">{{product.weight}} t</div></div>
               <div class="mt-2 flex flex-row"> <div class="flex-shrink-0">DRIVERTRAIN : </div><div class="flex-grow text-right">{{product.transmission}}</div></div>
               <div class="mt-2 flex flex-row"> <div class="flex-shrink-0">YEAR OF MANUFACTURE :</div><div class="flex-grow text-right">{{product.yom}}</div></div>
               <div class="mt-2 flex flex-row"> <div class="flex-shrink-0">DESCRIPTION :</div><div class="flex-grow text-right overflow-auto">{{product.description}}</div></div>
             </div>
           </div>
           <div class=" flex flex-row justify-end items-center self-center p-5 w-full">
             <button class="px-3 mr-3 h-7 font-base text-sm flex flex-row justify-center items-center tracking-wider uppercase
              text-white rounded-lg shadow-xl 
             transition duration-500 ease-in-out transform bg-gradient-to-r from-dark to-red-600 hover:from-red-600 hover:to-dark
             hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
             <router-link :to="{ path: 'add', query: { productid: product.productid }}">
              EDIT
            </router-link>
             </button>
             <button @click="deletecar" class="px-3  h-7 font-base text-sm text-center flex flex-row justify-center items-center tracking-wider uppercase text-white rounded-lg shadow-xl 
             transition duration-500 ease-in-out transform bg-gradient-to-l from-dark hover:from-red-600 to-red-600 hover:to-dark
             hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
               DELETE
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
 </template>
 <style>
  .bgsvg { 
    background-image:url("../assets/Vector1.svg");
    background-size: 80%;
  }
 </style>
<script>
export default {
  name: 'Show',
  props: [
    "product",
  ]
}
</script>