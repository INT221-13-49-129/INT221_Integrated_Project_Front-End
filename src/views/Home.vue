<template>
  <div class="home font-serif antialiased ">
    <div
      class="w-full h-96 md:h-128 flex flex-row items-center bg-local bg-cover bg-no-repeat bg-center text-white shadow-inner md:shadow-2xl"
      :style="cssProps" @mouseover="producthover = false">
      <div
        class="p-3 md:p-5 ml-2 rounded-full bg-black w-4  h-4 flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer">
        <span @click="nextBg(-1)" class="material-icons ml-2 text-lg md:text-2xl font-thin md:font-extralight ">arrow_back_ios</span></div>
      <div class="w-3/12 md:w-1/2 h-5/6 mx-3 md:ml-28 -mt-32 flex-grow">
        <p class="text-sm md:text-3xl font-thin tracking-wider pt-20 italic">Lamborghini</p>
        <p class="text-2xl md:text-7xl font-medium tracking-wider pt-2 ">OWNERSHIP</p>
        <p class="text-xs md:text-base font-thin tracking-wider mt-10 w-full md:w-1/2 ">Automobili Lamborghini is pleased to offer an
          attentive service thatmeets all the needs of our customers.</p>
        <div class="mt-12">
          <router-link to="/store">
            <button class="font-thin text-xs transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none 
              text-white tracking-wider uppercase w-52 h-10 shadow-2xl border
              border-white hover:text-gray-700 hover:bg-gray-100">shop now</button>
          </router-link>
        </div>
      </div>
      <div
        class="p-3 md:p-5 mr-6 md:mr-2 rounded-full bg-black w-4 h-4 flex justify-center  items-center opacity-30 hover:opacity-100 cursor-pointer">
        <span @click="nextBg(1)" class="material-icons md:ml-2 text-lg md:text-2xl font-thin md:font-extralight">arrow_forward_ios</span></div>
    </div>

    <div class="h-full"  @mouseover="producthover = true">
      <p class=" font-light italic text-base tracking-wider text-white text-center mt-24">
        We are Trusted Name in Car Sales & Services
      </p>
      <p class="font-light text-4xl md:text-5xl tracking-wider mt-5 text-white text-center ">WHY
        <router-link to="/store">
          <span
            class="text-gradient bg-gradient-to-r from-purple-500 to-red-400 hover:from-pink-500 hover:to-green-500">
            CHOOSE</span>
        </router-link> US</p>
      <p class="font-thin text-lg tracking-wider mx-4 md:mx-48 mt-5 text-white text-center">
        Car Dealer is the most enticing, creative,modern and multipurpose auto dealer Premium WordPress Theme. Suiable
        ffor any car dealer websides, business or corporate websites. The Theme has been Created
      </p>
      <div class="">
        <section class="text-gray-700 mt-48">
          <div :class="{'-translate-y-28 md:opacity-100':producthover}" class="md:opacity-50 md:px-5 py-10 mx-4 md:mx-auto bg-no-repeat bg-center bg-white bg-opacity-90 rounded-xl shadow-2xl transition duration-700 ease-in-out transform">
          <p class="font-thin text-xl tracking-wider rounded-sm text-black text-center">BEST SELLER</p>
        <p class="font-light text-3xl md:text-4xl tracking-wider mt-5 mb-3 md:mb-12 textgray-900 text-center">YOUR STYPE YOU WANT</p>
            <div class="flex flex-col justify-center mx-auto ">
              <div @mouseover="prodshowhover = false" @mouseleave="prodshowhover = true" class="flex flex-col md:flex-row justify-center items-center pt-5 mt-4 ">
                <div v-for="pro in productRand" :key="pro.productid" @click="productCurrent = pro"
                  :class="{'scale-125 opacity-100': pro.productid==productCurrent.productid}"
                  class="bg-white w-8/12 md:w-72 bg-opacity-90 opacity-60 hover:opacity-100 shadow-xl pb-3 mx-2 my-14 md:my-0 md:mx-14 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-125 focus:ring focus:outline-none">
                  <base-product :product="pro" :descrip="true" class-text="text-center text-sm font-thin"
                    class-text-name="text-xl font-medium text-gray-900" class-div="flex flex-col items-center" class-img="w-10/12">
                  </base-product>
                </div>
              </div>
              <div @mouseover="prodshowhover = true"
                class="flex flex-col md:flex-row justify-center items-center pt-4 text-center text-7xl text-gray-800 mt-0 md:mt-12 font-normal">
                <div class="w-52">
                  <div class="ml-6">{{productCurrent.power}}<span class="text-sm">(kW)</span></div><br>
                  <div class="text-2xl -mt-16 font-thin ">POWER</div>
                </div>
                <div class="w-52">
                  <div class="ml-8">{{productCurrent.torque}}<span class="text-sm">(Nm/s)</span></div><br>
                  <div class="text-2xl -mt-16 font-thin ">TORQUE</div>
                </div>
                <div class="w-52">
                  <div class="ml-4">{{productCurrent.weight}}<span class="text-sm">(t)</span></div><br>
                  <div class="text-2xl -mt-16 font-thin ">WEIGHT</div>
                </div>
              </div>
              <div class="w-full flex justify-center">
                <span @click="random()" class="material-icons mt-2 text-4xl cursor-pointer">
              refresh
                </span></div>
              <router-link to="/store" class="mx-auto ">
                <button
                  class="px-14 py-2 mt-4 font-thin text-white transition duration-500 ease-in-out transform shadow-xl bg-gradient-to-t from-gray-900 hover:from-gray-600 to-gray-600 hover:to-gray-900 hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">MORE</button>
              </router-link>
            </div>
          </div>

        </section>
      </div>
      <section class="text-gray-700 body-font pt-20" @mouseover="prodshowhover = true">
        <div :class="{'-translate-y-20 md:opacity-100':prodshowhover}" class="md:opacity-50 flex md:flex-row flex-col-reverse items-center md:mx-auto px-20 py-16 mx-4 bg-white shadow-2xl bg-opacity-90 rounded-2xl transition duration-1000 ease-in-out transform">
          <div class=" w-full md:w-1/3 container flex flex-col items-center">
            <div>
              <h1 class="text-xl font-bold tracking-tight text-center text-gray-800">EXTERIOR & INTERIOR TWO-TONE</h1>
              <h1 class="text-xl font-bold tracking-tight text-center text-gray-800">DESIGN STAND OUT</h1>
              <p
                class="text-sm font-normal tracking-tighter font-sans leading-relaxed text-center text-gray-700 pt-1 pb-7">
                โดดเด่นกว่าใคร ตัดคู่สีใหม่ ให้ชีวิตไม่ธรรมดา</p>
            </div>
            <div>
              <h1 class="text-xl font-bold tracking-tight text-center text-gray-800">DRIVING PERFORMANCE & FUEL</h1>
              <h1 class="text-xl font-bold tracking-tight text-center text-gray-800">SAVING VALUABLE CHOICE</h1>
              <p
                class="text-sm font-normal tracking-tighter font-sans leading-relaxed text-center text-gray-700 pt-1 pb-7">
                คล่องตัว ไม่ว่าทางไหน ชีวิตก็ไปได้คุ้มกว่า</p>
            </div>
            <div>
              <h1 class="text-xl font-bold tracking-tight text-center text-gray-800">SMART & ENTERTAINMENT SMART</h1>
              <p class="text-sm font-normal tracking-tighter font-sans leading-relaxed text-center text-gray-700 pt-1">
                เพลิดเพลินในเส้นทางไปกับ Apple CarPlay หน้าจอระบบสัมผัส SDA ขนาด 7 นิ้ว</p>
            </div>
          </div>
          <div class="flex-grow"></div>
          <div class="flex justify-center items-center w-2/3 max-w-2xl -mt-14 md:-mt-28 mb-5 md:mb-0">
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
        imgShow: 0,
        bgimage: [{
            img: require("../assets/home/bg1.jpg")
          },
          {
            img: require("../assets/home/bg2.jpg")
          },
          {
            img: require("../assets/home/bg3.webp")
          },
          {
            img: require("../assets/home/bg4.jpg")
          },
          {
            img: require("../assets/home/bg5.png")
          },
          {
            img: require("../assets/home/bg6.jpg")
          },
          {
            img: require("../assets/home/bg7.jpg")
          },
          {
            img: require("../assets/home/bg8.jpg")
          },
          {
            img: require("../assets/home/bg9.jpg")
          },
        ],
        producthover:false,
        prodshowhover:false,
        productRand: [],
        productCurrent: [],
        url: `${process.env.VUE_APP_ROOT_API}product`
      };
    },
    methods: {
      async random(){
        this.productRand = []
        const rendnum = await this.fetch(this.url + '/count')
        this.setProductRand(rendnum)
      },
      nextBg(i) {
        this.imgShow += i;
        if (this.imgShow == -1) {
          this.imgShow = this.bgimage.length - 1;
        } else if (this.imgShow == this.bgimage.length) {
          this.imgShow = 0;
        }
        this.cssProps.backgroundImage = `url(${this.bgimage[this.imgShow].img})`
      },
      async setProductRand(num) {
        let numall = []
        while (this.productRand.length < 3) {
          let randnum = Math.floor(Math.random() * num);
          if (!numall.includes(randnum)) {
            let proRand = await this.fetch(this.url + '/page?pageSize=1&pageNo=' + randnum)
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
      this.random();
    },
  }
</script>