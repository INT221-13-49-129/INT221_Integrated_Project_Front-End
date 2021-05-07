 <template>
   <div
     class="show font-serif fixed font-light bg-opacity-10 bg-black flex justify-center items-center  z-20 inset-0 overflow-y-auto overflow-x-auto">
     <div class=" md:w-320 w-11/12 md:h-144 h-auto bg-opacity-95 bg-gray-100 mb-5 flex md:flex-row flex-col rounded-xl fixed">
       <base-popup v-if="popupShow"
         classpop="flex flex-col justify-center h-60 bg-gray-100  rounded-md fixed shadow-2xl md:mx-0 mx-7">
         <div class="flex flex-col justify-center text-center mx-12 ">
           <p class="text-lg md:text-2xl text-gray-900 font-medium ">Confirm to delete <span
               class="text-red-600 font-semibold">{{product.productid}} {{product.productname}}</span></p>
           <p class="text-sm md:text-xl text-gray-600 font-medium mt-6">Are you sure to delete the <span
               class="text-red-600 font-semibold">{{product.productid}} {{product.productname}}</span> cars?</p>
           <div class="flex flex-row justify-center text-2xl mt-8 space-x-24">
             <div @click="popupShow=false"
               class="rounded-md w-24 py-0.5 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110 border-blue-600 text-blue-600 border-2 cursor-pointer">
               cancel</div>
             <div @click="deleteProduct()"
               class="rounded-md w-24 py-0.5 hover:bg-red-600 hover:text-white hover:border-red-600 transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110 border-red-600  text-red-600 border-2 cursor-pointer">
               delete</div>
           </div>
         </div>
       </base-popup>
       <div class="md:w-7/12 md:pt-6 w-full bgsvg bg-no-repeat bg-center">
         <div class="md:text-5xl text-3xl font-extrabold text-right md:mt-10 mt-3 mr-10  truncate">{{product.productname}}</div>
         <div class="flex flex-row justify-center items-center ">
           <img class="object-contain object-center md:mb-4 -mt-12 md:h-96 h-2/6 " alt="Car product" :src="img.url">
         </div>
         <div class="flex flex-row flex-wrap justify-center items-center overflow-scroll h-28 py-2 ">
           <div v-for="color in product.colorList" :key="color.colorid"
             class="w-9 h-9 rounded-full border-black border-2 hover:shadow-lg mx-2 my-1"
             v-bind:style="{ backgroundColor: color.colorcode }">
             </div>
         </div>
       </div>
       <div class="md:w-5/12 w-full  md:mt-4 mt-0 text-gray-800 flex flex-col ">
         <div class="text-right  mr-4">
           <span class="material-icons md:text-4xl text-xl cursor-pointer" @click="this.$parent.showProduct(false)">
             highlight_off
           </span>
         </div>
         <div class="h-full flex flex-col items-center justify-center ml-5 mr-10 md:mb-4 mb-0 md:mt-5 mt-0">
           <div class="h-full w-full flex flex-row text-gray-800">
             <div
               class="md:text-base text-xs font-medium text-left text-gray-800 w-full divide-y-2 divide-gray-300 border-b-2 border-gray-300">
               <div class="mt-0 md:mt-2 flex flex-row">
                 <div class="flex-shrink-0">NAME : </div>
                 <div class="flex-grow text-right">{{product.productname}}</div>
               </div>
               <div class="mt-0 md:mt-2 flex flex-row">
                 <div class="flex-shrink-0">BRAND : </div>
                 <div class="flex-grow text-right">{{product.brand.brandname}}</div>
               </div>
               <div class="mt-0 md:mt-2 flex flex-row">
                 <div class="flex-shrink-0">POWER : </div>
                 <div class="flex-grow text-right">{{product.power}} kW</div>
               </div>
               <div class="mt-0 md:mt-2 flex flex-row">
                 <div class="flex-shrink-0">TORQUE :</div>
                 <div class="flex-grow text-right">{{product.torque}} Nm/s</div>
               </div>
               <div class="mt-0 md:mt-2 flex flex-row">
                 <div class="flex-shrink-0">WEIGHT :</div>
                 <div class="flex-grow text-right">{{product.weight}} t</div>
               </div>
               <div class="mt-0 md:mt-2 flex flex-row">
                 <div class="flex-shrink-0">DRIVERTRAIN : </div>
                 <div class="flex-grow text-right">{{product.transmission}}</div>
               </div>
               <div class="mt-0 md:mt-2 flex flex-row">
                 <div class="flex-shrink-0">YEAR OF MANUFACTURE :</div>
                 <div class="flex-grow text-right">{{product.yom}}</div>
               </div>
               <div class="mt-0 md:mt-2 flex flex-row">
                 <div class="flex-shrink-0">DESCRIPTION :</div>
                 <div class="flex-grow text-right overflow-auto">{{product.description}}</div>
               </div>
             </div>
           </div>
           <div class=" flex flex-row justify-end items-center self-center p-5 w-full">
             <router-link :to="'/info/'+product.productid">
               <button class="px-3 mr-3 h-7 font-base text-sm flex flex-row justify-center items-center tracking-wider uppercase
              text-white rounded-lg shadow-xl 
             transition duration-500 ease-in-out transform bg-gradient-to-r from-dark to-red-600 hover:from-red-600 hover:to-dark
             hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
                 EDIT
               </button>
             </router-link>
             <button @click="popupShow=true" class="px-3  h-7 font-base text-sm text-center flex flex-row justify-center items-center tracking-wider uppercase text-white rounded-lg shadow-xl 
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
     background-image: url("../assets/Vector1.svg");
     background-size: 80%;
   }
 </style>
 <script>
   export default {
     name: 'Show',
     props: [
       "product",
     ],
     data() {
       return {
         popupShow: false,
         img: "",
         urlImg: `${process.env.VUE_APP_ROOT_API}img`,
         urlproduct: `${process.env.VUE_APP_ROOT_API}product`
       };
     },
     methods: {
       async deleteProduct() {
         try {
           await fetch(this.urlproduct + "/delete/" + this.product.productid, {
             method: 'DELETE'
           })
           this.popupShow = false
           this.$parent.reloadPage()
           this.$parent.showProduct(false)
         } catch (error) {
           console.log(error);
         }
       }
     },
     async created() {
       this.img = await fetch(this.urlImg + "/" + this.product.img)
     },
   }
 </script>