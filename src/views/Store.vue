 <template>
   <div class="store font-serif font-light antialiased">
     <div v-if="showProd">
       <show :product="productShow"></show>
     </div>
     <div class="flex flex-col md:flex-row justify items-end mt-5">
       <h1 class=" text-2xl md:text-3xl font-bold text-white">
         <span class=" md:text-4xl text-3xl ">Cars</span> Available
       </h1>
        <div class="flex-grow"></div>
       <div class="font-light text-2ml px-2 w-full md:w-auto">
         <div class="relative text-gray-100 flex justify-end mt-2 md:mt-0">
           <div class="flex justify-start ">
             <button @click="searchfilter" type="submit" class="focus:outline-none absolute mt-1 ml-3 ">
               <i class="material-icons">search</i>
             </button>
           </div>
           <input @keyup.enter="searchfilter" v-model="searchInput"
             class="border-2 rounded-lg border-gray-100 bg-gray-800 w-full md:w-auto bg-opacity-5 h-8 px-5 pl-10 text-medium focus:outline-none"
             placeholder="Search " />
         </div>
       </div>
       <div class="flex flex-row md:w-auto w-full pt-4 md:pt-0">
         <div @click="productGrid=false" :class="{'bg-gray-200 bg-opacity-70':!productGrid}"
           class="hover:bg-gray-200 hover:bg-opacity-70 text-white md:w-8 w-1/2 h-8 rounded-lg mr-2 flex justify-center items-center cursor-pointer">
           <span class="material-icons">format_list_bulleted</span>
         </div>
         <div @click="productGrid=true" :class="{'bg-gray-200 bg-opacity-70':productGrid}"
           class="hover:bg-gray-200 hover:bg-opacity-70 text-white md:w-8 w-1/2 h-8 rounded-lg flex justify-center items-center cursor-pointer">
           <span class="material-icons">grid_view</span>
         </div>
       </div>
     </div>

     <div class="store md:flex md:flex-row border-b-2 mb-1.5 border-white">
       <router-link to="/info/add">
         <button class="my-4 px-3 py-1 text-lg font-thin bg-gray-200 rounded-lg text-gray-800 
         md:w-auto w-full">+ ADD CAR</button>
       </router-link>
       <div class="md:flex-grow"></div>
       <div class="md:mt-5 flex flex-row">
         <span class="text-white md:mr-1 text-base hidden md:flex">Brand :</span>
         <select class="bg-opacity-5 md:h-6 h-8 md:w-auto text-gray-700 flex-grow" v-model="brandSelected"
           @change="brandfilter(brandSelected)">
           <option value="" disabled>--Brand--</option>
           <option value="">All</option>
           <option v-for=" brand in brandAll" :key="brand.brandid" :value="brand.brandid">{{ brand.brandname }}</option>
         </select>
       </div>
     </div>
     <div>
       <div v-show="searchInputNoresults != ''"
       class="text-center font-thin text-xl py-8 text-gray-300">
       <span class="material-icons text-8xl font-thin pb-6 ">sentiment_very_dissatisfied</span><br>
       No results found <br><span class="font-semibold text-2xl">"{{searchInputNoresults}}"</span></div>
       <div v-if="productGrid" class="flex flex-row flex-wrap ml-4">
         <div :class="{'bg-white bg-opacity-30':productShow.productid == pro.productid}"
           class="md:w-72 w-5/12 m-3 pb-4 rounded-xl hover:bg-white hover:bg-opacity-30"
           v-for="pro in productPage.content" :key="pro.productid" @click="showProduct(true,pro)">
           <base-product class-text="text-white text-sm mx-2" class-text-name=" font-medium text-xl"
             class-div="flex flex-col items-center" class-img="md:w-10/12 w-8/12" :product="pro"></base-product>
         </div>
       </div>
       <div v-else class="flex flex-col ml-4 divide-y ">
         <div :class="{'bg-white bg-opacity-30':productShow.productid == pro.productid}"
           class="w-full md:h-12 hover:bg-white hover:bg-opacity-30" v-for="pro in productPage.content"
           :key="pro.productid" @click="showProduct(true,pro)">
           <base-product
             class-text="text-white text-xs md:text-sm md:font-extralight font-thin mx-2 flex md:flex-row flex-wrap items-center space-x-6 w-full "
             class-text-name="font-light text-xs md:text-xl md:-mt-1 md:flex-grow w-full md:w-auto" class-div="flex flex-row md:items-center"
             class-img="h-12" :product="pro" :power="true" :torque="true" :weight="true"></base-product>
         </div>
       </div>
     </div>
     <div class="w-full">
       <base-page-number :page="productPage"></base-page-number>
     </div>
   </div>
 </template>
 <script>
   import Show from '../components/Show.vue'

   export default {
     components: {
       Show,
     },
     data() {
       return {
         productGrid: true,
         searchInput: "",
         searchInputNoresults: "",
         brandSelected: "",
         brandAll: [],
         productPage: [],
         urlbrand: `${process.env.VUE_APP_ROOT_API}brand`,
         urlProduct: `${process.env.VUE_APP_ROOT_API}product`,
         urlPage: "",
         showProd: false,
         productShow: []
       };
     },
     methods: {
       showProduct(showProd, productShow) {
         if (showProd) {
           this.productShow = productShow;
         } else {
           this.productShow = []
         }
         this.showProd = showProd
       },
       async reloadPage() {
         this.productPage = await this.fetch(this.urlPage)
       },
       async changPage(n) {
         if (this.urlPage.includes("?")) {
           this.productPage = await this.fetch(this.urlPage + '&pageNo=' + (n - 1))
         } else {
           this.productPage = await this.fetch(this.urlPage + '?pageNo=' + (n - 1))
         }
       },
       async searchfilter() {
        var format = /[ `!@#$%^&*()_+/\-=[\]{};':"\\|,.<>?~]/;
        if(!format.test(this.searchInput)){
         this.urlPage = this.urlProduct + '/page/search?searchData=' + this.searchInput
         this.productPage = await this.fetch(this.urlPage)
         if(this.productPage.content != undefined ?this.productPage.content.length==0:false){
          this.searchInputNoresults = this.searchInput
         }else{
          this.searchInputNoresults = ""
         }
        }else{
          this.searchInputNoresults = "Don't use special characters."
          this.productPage = [];
        }
        this.brandSelected = ""
       },
       async brandfilter(id) {
         if (!id == "") {
           this.urlPage = this.urlProduct + '/page/brand?brandId=' + id
         } else {
           this.urlPage = this.urlProduct + '/page'
         }
         this.productPage = await this.fetch(this.urlPage)
         this.searchInputNoresults = ""
         this.searchInput = ""
       },
       async fetch(url) {
         try {
           const res = await fetch(url);
           const data = await res.json();
           return data;
         } catch (error) {
           console.log(error);
         }
       }
     },
     async created() {
       this.brandAll = await this.fetch(this.urlbrand)
       this.urlPage = this.urlProduct + '/page'
       this.productPage = await this.fetch(this.urlPage)
     },
   }
 </script>