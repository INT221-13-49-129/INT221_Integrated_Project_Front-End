 <template>
  <div class="store font-serif font-light antialiased">
    <div v-if="showProd"><show :product="productShow"></show></div>
    <div class="flex flex-row justify items-end mt-5">
      <h1 class="text-3xl font-bold text-white">
        <span class="text-4xl">Cars</span> Available
      </h1>
      <div class="flex-grow"></div>
      <div class="font-light text-2ml px-2">
        <div class="relative text-gray-100">
          <button @click="searchfilter" type="submit" class="focus:outline-none absolute mt-1 ml-3">
            <i class="material-icons">search</i>
          </button>
          <input
            @keyup.enter="searchfilter"
            v-model="searchInput"
            class="border-2 rounded-lg border-gray-100 bg-gray-800 bg-opacity-5 h-8 px-5 pl-10 text-medium focus:outline-none"
            placeholder="Search "
          />
        </div>
      </div>
      <div
      @click="productGrid=false"
      :class="{'bg-gray-200 bg-opacity-70':!productGrid}"
        class="hover:bg-gray-200 hover:bg-opacity-70 text-white w-8 h-8 rounded-lg mr-2 flex justify-center items-center cursor-pointer"
      >
        <span class="material-icons">format_list_bulleted</span>
      </div>
      <div
      @click="productGrid=true"
        :class="{'bg-gray-200 bg-opacity-70':productGrid}"
        class="hover:bg-gray-200 hover:bg-opacity-70 text-white w-8 h-8 rounded-lg flex justify-center items-center cursor-pointer"
      >
        <span class="material-icons">grid_view</span>
      </div>
    </div>

    <div class="store flex flex-row border-b-2 mb-1.5 border-white">
      <router-link to="/add">
        <button
          class="my-4 px-3 py-1 text-lg font-thin  bg-gray-200 rounded-lg text-gray-800 "
        >+ ADD CAR</button>
      </router-link>
      <div class="flex-grow"></div>
      <div class="mt-5 mr-1">
        <span class="text-white text-base">Brand :</span>
        <select class="bg-opacity-5 h-6 w-auto text-black" v-model="brandSelected" @change="brandfilter(brandSelected)">
          <option value>All</option>
          <option
            v-for=" brand in brandAll"
            :key="brand.brandid"
            :value="brand.brandid"
          >{{ brand.brandname }}</option>
        </select>
      </div>
    </div>
    <div v-if="productGrid" class="flex flex-row flex-wrap ml-4">
      <div :class="{'bg-white bg-opacity-30':productShow.productid == pro.productid}" class="w-72 m-3 pb-4 rounded-xl hover:bg-white hover:bg-opacity-30" v-for="pro in productPage.content" :key="pro.productid" @click="showProduct(true,pro)">
      <base-product class-text="text-white text-sm mx-2" class-text-name=" font-medium text-xl" class-div="flex flex-col items-center" class-img="w-10/12" :product="pro"></base-product>
      </div></div>
    <div v-else class="flex flex-col ml-4 divide-y ">
      <div :class="{'bg-white bg-opacity-30':productShow.productid == pro.productid}" class="w-full h-12 hover:bg-white hover:bg-opacity-30" v-for="pro in productPage.content" :key="pro.productid"  @click="showProduct(true,pro)">
      <base-product class-text="text-white text-sm font-extralight mx-2 flex flex-row items-center space-x-6 w-full " 
      class-text-name="font-light text-xl -mt-1 flex-grow" class-div="flex flex-row items-center" class-img="h-12" :product="pro" :power="true" :torque="true" :weight="true"></base-product>
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
      productGrid:true,
      searchInput:"",
      brandSelected: "",
      brandAll: [],
      productPage: [],
      urlbrand: "http://localhost:3000/brand",
      urlProduct: "http://localhost:3000/product",
      urlPage:"",
      showProd:false,
      productShow:[]
    };
  },
  methods: {
    showProduct(showProd,productShow){
      if(showProd){
        this.productShow = productShow;
      }else{
        this.productShow = []
      }
      this.showProd = showProd
    },
    async changPage(n){
      if(this.urlPage.includes("?")){
        this.productPage = await this.fetch(this.urlPage+'&pageNo='+(n-1))
      }else{
        this.productPage = await this.fetch(this.urlPage+'?pageNo='+(n-1))
      }
    },
    async searchfilter() {
        this.urlPage = this.urlProduct + '/page/search?searchData=' + this.searchInput
        this.productPage = await this.fetch(this.urlPage)
        this.brandSelected=""
    },
    async brandfilter(id) {
      if(!id==""){
        this.urlPage = this.urlProduct + '/page/brand?brandId='+id
      }else{
        this.urlPage = this.urlProduct + '/page'
      }
      this.productPage = await this.fetch(this.urlPage)
      this.searchInput=""
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
