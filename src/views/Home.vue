<template>
  <div class="home font-sans ">
    <div class="w-sreen h-screen items-center justify-end bgimg bg-local bg-cover bg-no-repeat bg-top ">
      <div class="w-1/2 h-5/6">
        <p class="font-base text-3xl tracking-wider  ml-36 pt-20 text-white">LAMBORGHINI</p>
        <p class="font-base text-7xl tracking-wider  ml-36 pt-2  text-white">OWNERSHIP</p>
        <p class="font-normal  tracking-wider  ml-36 mt-12 mr-20 text-white">
          Automobili Lamborghini is pleased to offer an attentive service thatmeets all the needs of our customers.</p>
        <div class="ml-36 mt-12">
          <router-link to="/product">
            <button
              class="text-xs text-black font-base tracking-wider uppercase w-52 bg-white hover:bg-red-300 h-10 rounded-lg ">
              shop now
            </button>
          </router-link>
        </div>
        <div class="h-10 w-10 rounded-3xl bg-white items-end ">
        </div>
      </div>
      <div class="h-1/6 w-screen mt-10 flex items-end bg-white ">
      </div>

    </div>

    <div class="bg-white bg-opacity-20 h-full">
      <p class="font-medium text-base tracking-wider text-koko text-center">We are Trusted Name in Car Sales &
        Services</p>
      <p class="font-medium text-5xl tracking-wider my-2   text-koko text-center">WHY CHOOSE US</p>
      <p class="font-normal text-lg tracking-wider mx-48 mt-16 text-koko text-center">
        Car Dealer is the most enticing, creative,modern and multipurpose auto dealer Premium WordPress Theme. Suiable
        ffor any car dealer websides, business or corporate websites. The Theme has been Created</p>
      <p class="font-normal text-xl tracking-wider mt-32   text-koko text-center">BEST SELLER</p>
      <p class="font-normal text-3xl tracking-wider mt-5 mb-28 text-koko text-center">YOUR STYPE YOU WANT</p>


      <section class="text-gray-700 body-font">
        <div class="container px-5 py-10 mx-auto lg:px-32  bg-auto bg-no-repeat bg-center bg-black bg-opacity-10 rounded-2xl">
          <div class="flex flex-wrap justify-center mx-auto ">
            <div class="flex flex-wrap text-left ">

              <div class="px-8 py-6 lg:w-1/3 md:w-full">
                <div class=" container items-center  p-6 rounded-md bg-blueGray-200 flex flex-col ">
                  <img class="object-cover object-center w-full h-40 mb-6 rounded" src="../assets/home/bg1.jpg"
                    alt="content">
                  <h2 class="text-sm font-semibold text-gray-700  title-font "> Product Name</h2>
                  <p class="mb-4 text-xs leading-relaxed">type product</p>
                  <p class="mb-4 text-xs leading-relaxed">$Price</p>
                  <a href="#"
                    class="inline-flex items-center font-semibold text-gray-700 md:mb-2 lg:mb-0   hover:text-white ">
                    <div class="flex ">
                      <button
                        class="border border-red-200 text-xs font-light tracking-wider uppercase px-7 bg-red-200 bg-opacity-0 hover:bg-black h-10 rounded-sm ">
                        ADD TO BAG
                      </button>
                    </div>
                  </a>
                </div>
              </div>

              <div class="px-8 py-6 lg:w-1/3 md:w-full">
                <div class=" container items-center  p-6 rounded-md bg-blueGray-200 flex flex-col ">
                  <img class="object-cover object-center w-full h-full mb-6 rounded" src="../assets/home/bg1.jpg"
                    alt="content">
                  <h2 class="text-sm font-semibold text-gray-700  title-font "> Product Name
                  </h2>
                  <p class="mb-4 text-xs leading-relaxed">type product</p>
                  <p class="mb-4 text-xs leading-relaxed">$Price</p>
                  <a href="#"
                    class="inline-flex items-center font-semibold text-gray-700 md:mb-2 lg:mb-0   hover:text-white ">
                    <div class="flex ">
                      <button
                        class="border border-red-200 text-xs font-light tracking-wider uppercase px-7 bg-red-200 bg-opacity-0 hover:bg-black h-10 rounded-sm ">
                        ADD TO BAG
                      </button>
                    </div>
                  </a>
                </div>
              </div>

              <div class="px-8 py-6 lg:w-1/3 md:w-full">
                <div class=" container items-center  p-6 rounded-md bg-blueGray-200 flex flex-col ">
                  <img class="object-cover object-center w-full h-40 mb-6 rounded" src="../assets/home/bg1.jpg"
                    alt="content">
                  <h2 class="text-sm font-semibold text-gray-700  title-font "> Product Name
                  </h2>
                  <p class="mb-4 text-xs leading-relaxed">type product</p>
                  <p class="mb-4 text-xs leading-relaxed">$Price</p>
                  <a href="#"
                    class="inline-flex items-center font-semibold text-gray-700 md:mb-2 lg:mb-0   hover:text-white ">
                    <div class="flex ">
                      <button
                        class="border border-red-200 text-xs font-light tracking-wider uppercase px-7 bg-red-200 bg-opacity-0 hover:bg-black h-10 rounded-sm ">
                        ADD TO BAG
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div><div class="flex flex-col items-center pt-5 ">
        <button
          class="flex items-center px-14 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-sm shadow-xl bg-gradient-to-r from-gray-800 hover:from-gray-700 to-gray-700 hover:to-gray-800 hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
          MORE
        </button>
        </div>
        </div>
        

      </section>











      <div v-for="n in news" :key="n.id">
        <News :news="n" />
      </div>
    </div>
  </div>

</template>
<style>
  .bgimg {
    background-image: url("../assets/home/bg1.jpg")
  }
</style>
<script>
  // @ is an alias to /src
  import News from '@/components/News.vue'

  export default {
    name: 'Home',
    components: {
      News
    },
    data() {
      return {
        news: [{
            title: " Best Seller",
            image: "bestseller.jpg",
            description: "พบกับเมนูใหม่ๆของทางร้าน ที่คุณจะต้องตื่นตาตื่นใจมากกว่า 5 เมนู คุณจะต้องหลงไหลกับความมีเสน่ห์ของอาจารย์เหมียวที่สุดจะเซ็กซี่ ด้วยราคาที่น่ารัก รับประกันประสบการณ์ที่คุณจะได้รับจากอาหารเเต่ละจานว่ามันจะต้องเต็มไปด้วยความสุข ของเหล่าสาวก",
            id: 1,
          },
          {
            title: "SLOGAN",
            image: "slogan.jpg",
            description: " Friendly price ",
            id: 2,
          }
        ]
      }
    }
  }
</script>