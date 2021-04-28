<template>
  <div class="home font-sans">
    <div class="flex flex-row items-center w-full h-128 bg-local bg-cover bg-no-repeat bg-center text-white" :style="cssProps">
      <div class="p-5 ml-2 rounded-full bg-black w-4 h-4 flex justify-center items-center opacity-60 hover:opacity-100 cursor-pointer">
        <span @click="nextBg(-1)" class="material-icons ml-2">arrow_back_ios</span></div>
      <div class="w-1/2 h-5/6 ml-28 -mt-32 flex-grow">
        <p class="font-base text-3xl tracking-wider pt-20 ">LAMBORGHINI</p>
        <p class="font-bold text-7xl tracking-wider pt-2 ">OWNERSHIP</p>
        <p
          class="font-normal tracking-wider mt-10 w-1/2 "
        >Automobili Lamborghini is pleased to offer an attentive service thatmeets all the needs of our customers.</p>
        <div class="ml-36 mt-12">
          <router-link to="/store">
            <button
              class="font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none text-xs text-black tracking-wider uppercase w-52 h-10 rounded-lg shadow-2xl bg-gray-200 hover:bg-gray-900 hover:text-black bg-gradient-to-r to-gray-400 via-gray-100 from-gray-400"
            >shop now</button>
          </router-link>
        </div>
      </div>
      <div class="p-5 mr-2 rounded-full bg-black w-4 h-4 flex justify-center items-center opacity-60 hover:opacity-100 cursor-pointer">
        <span @click="nextBg(1)" class="material-icons ml-2">arrow_forward_ios</span></div>
    </div>

    <div class="h-full">
      <p class="font-medium text-base tracking-wider text-white text-center mt-20">
        We are Trusted Name in Car Sales &
        Services
      </p>
      <p class="font-bold text-5xl tracking-wider mt-10 text-white text-center ">WHY <router-link to="/store"><span class="text-gradient bg-gradient-to-r from-purple-500 to-red-400 hover:from-pink-500 hover:to-green-500">CHOOSE</span></router-link> US</p>
      <p class="font-normal text-lg tracking-wider mx-48 mt-16 text-white text-center">
        Car Dealer is the most enticing, creative,modern and multipurpose auto dealer Premium WordPress Theme. Suiable
        ffor any car dealer websides, business or corporate websites. The Theme has been Created
      </p>
      <p class="font-normal text-2xl tracking-wider mt-24 text-white text-center">BEST SELLER</p>
      <p
        class="font-semibold text-4xl tracking-wider mt-2 mb-16 text-white text-center"
      >YOUR STYPE YOU WANT</p>

      <section class="text-gray-700">
        <div
          class="px-5 py-10 mx-auto bg-no-repeat bg-center bg-white shadow-2xl bg-opacity-90 rounded-2xl"
         >
          <div class="flex flex-col justify-center mx-auto">
            <div class="flex flex-row justify-center items-center pt-5 mt-4">
              <div v-for="pro in productRand" :key="pro.productid" @click="productCurrent = pro" :class="{'scale-125 opacity-100': pro.productid==productCurrent.productid}" class="bg-white w-80 bg-opacity-90 opacity-60 hover:opacity-100 rounded-lg shadow-md pb-3 mx-11 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 focus:ring focus:outline-none">
                <base-product :product="pro" :descrip="true" class-text="text-center" class-text-name="text-2xl font-medium" class-div="flex flex-col items-center" class-img="w-10/12"></base-product>
              </div>
            </div>
            <div class="flex flex-row justify-center items-center pt-5 text-center text-7xl text-black mt-12 font-normal">
              <div class="w-52"><div class="ml-6">{{productCurrent.power}}<span class="text-sm">(kW)</span ></div><br><div class="text-2xl -mt-16">POWER</div></div>
              <div class="w-52"><div class="ml-8">{{productCurrent.torque}}<span class="text-sm">(Nm/s)</span ></div><br><div class="text-2xl -mt-16">TORQUE</div></div>
              <div class="w-52"><div class="ml-4">{{productCurrent.weight}}<span class="text-sm">(t)</span ></div><br><div class="text-2xl -mt-16">WEIGHT</div></div>
            </div>
            <router-link to="/store" class="mx-auto ">
            <button
              class="px-14 py-2 mt-14 font-semibold text-white transition duration-500 ease-in-out transform rounded-sm shadow-xl bg-gradient-to-r from-gray-800 hover:from-gray-700 to-gray-700 hover:to-gray-800 hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none"
            >MORE</button></router-link>
          </div>
        </div>
      </section>

      <section class="text-gray-700 body-font pt-20">
        <div
          class="flex flex-row items-center mx-auto px-20 py-16 bg-white shadow-2xl bg-opacity-90 rounded-2xl"
        >
          <div class="w-1/3 container flex flex-col items-center">
            <div>
              <h1
                class="text-xl font-bold tracking-tight text-center text-gray-800"
              >EXTERIOR & INTERIOR TWO-TONE</h1>
              <h1
                class="text-xl font-bold tracking-tight text-center text-gray-800"
              >DESIGN STAND OUT</h1>
              <p
                class="text-sm font-normal tracking-tighter font-sans leading-relaxed text-center text-gray-700 pt-1 pb-7"
              >โดดเด่นกว่าใคร ตัดคู่สีใหม่ ให้ชีวิตไม่ธรรมดา</p>
            </div>
            <div>
              <h1
                class="text-xl font-bold tracking-tight text-center text-gray-800"
              >DRIVING PERFORMANCE & FUEL</h1>
              <h1
                class="text-xl font-bold tracking-tight text-center text-gray-800"
              >SAVING VALUABLE CHOICE</h1>
              <p
                class="text-sm font-normal tracking-tighter font-sans leading-relaxed text-center text-gray-700 pt-1 pb-7"
              >คล่องตัว ไม่ว่าทางไหน ชีวิตก็ไปได้คุ้มกว่า</p>
            </div>
            <div>
              <h1
                class="text-xl font-bold tracking-tight text-center text-gray-800"
              >SMART & ENTERTAINMENT SMART</h1>
              <p
                class="text-sm font-normal tracking-tighter font-sans leading-relaxed text-center text-gray-700 pt-1"
              >เพลิดเพลินในเส้นทางไปกับ Apple CarPlay หน้าจอระบบสัมผัส SDA ขนาด 7 นิ้ว</p>
            </div>
          </div>
          <div class="flex-grow"></div>
          <div class="flex justify-center items-center w-2/3 max-w-2xl -mt-28 ">
            <img class="object-cover" alt="hero" src="../assets/home/homeShow.png" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style>
.text-gradient {
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
<script>
export default {
  name: 'Home',
  data() {
    return {
      cssProps: {
          backgroundImage: `url(${require("../assets/home/bg1.jpg")})`
        },
      imgShow:0,
      bgimage:[ {img:require("../assets/home/bg1.jpg")},
                {img:require("../assets/home/bg2.jpg")},
                {img:require("../assets/home/bg3.webp")},
                {img:require("../assets/home/bg4.jpg")},
                {img:require("../assets/home/bg5.webp")},
                {img:require("../assets/home/bg6.jpg")},
                {img:require("../assets/home/bg7.jpg")},
                {img:require("../assets/home/bg8.jpg")},
                {img:require("../assets/home/bg9.jpg")},
              ],
      productRand:[],
      productCurrent:[],
      url:"http://localhost:3000/product"
    };
  },
  methods: {
    nextBg(i){
      this.imgShow += i;
        if(this.imgShow ==-1){
            this.imgShow = this.bgimage.length-1;
        }
        else if(this.imgShow == this.bgimage.length){
            this.imgShow = 0;
        }
        this.cssProps.backgroundImage = `url(${this.bgimage[this.imgShow].img})`
    },
    async setProductRand(num){
      let numall = [] 
      while(this.productRand.length<3) {
        let randnum = Math.floor(Math.random() * num);
        if (!numall.includes(randnum)) {
          let proRand = await this.fetch(this.url+'/page?pageSize=1&pageNo='+randnum)
          this.productRand.push(proRand.content[0])
          numall.push(randnum)
        }
      }
      this.productCurrent = this.productRand[1]
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
    const rendnum = await this.fetch(this.url+'/count')
    this.setProductRand(rendnum)
  },
}
</script>