<template>
  <div id
    class="flex flex-col font-serif antialiased bg-gradient-to-br from-dark to-red-600 min-h-screen xl:w-full md:w-336 w-screen ">
    <div id="nav" class="w-full h-12  shadow-2xl bg-black ">
      <div class="md:mx-auto mx-4 flex flex-row item-center md:w-320">
        <div class="md:w-4/12 w-1/12">
          <router-link to="/">
            <img :src="logo" class="my-1.5 ml-1 h-9" />
          </router-link>
        </div>
        <ul class="text-white flex-grow text-center">
          <li class="px-10 py-1.5 font-light  text-3xl">
            <router-link to="/">
              <span><b>CARS</b></span>
            </router-link>
          </li>
        </ul>
        <ul class="hidden md:flex md:flex-row my-auto justify-end h-full text-white font-thin text-lm md:w-4/12">
          <li class="px-4">
            <router-link to="/">
              <span><b>Home</b></span>
            </router-link>
          </li>
          <li class="px-4">
            <router-link to="/store">
              <span><b>Store</b></span>
            </router-link>
          </li>
          <li class="px-4">
            <router-link to="/info/add">
              <span><b>Add-Car</b></span>
            </router-link>
          </li>
          <li class="pl-4">
            <router-link to="/team">
              <span><b>Team</b></span>
            </router-link>
          </li>
        </ul>
        <div class="my-auto md:hidden">
          <div v-if="menu" @click="menu=false" class="material-icons text-right  w-1/12 mr-2 text-white text-3xl cursor-pointer">
            menu
          </div>
          <div v-else  @click="menu=true" class="material-icons text-right  w-1/12 mr-2 text-white text-3xl cursor-pointer">
            close
            </div>
        </div>
      </div>
      <div  v-if="!menu" @click="menu=true" class="md:hidden w-screen h-52 absolute bg-gray-800 shadow-2xl z-10 text-white text-xl">
        <router-link to="/">
        <div class="w-full h-12 my-0.5 bg-gray-900 hover:bg-black hover:opacity-80 flex items-center hover:text-red-500 cursor-pointer">
          <span class="material-icons text-4xl mx-3">
          home
          </span><span> Home </span></div></router-link>
          <router-link to="/store">
        <div class="w-full h-12 my-1 bg-gray-900 hover:bg-black hover:opacity-80  flex items-center hover:text-red-500 cursor-pointer">
          <span class="material-icons text-4xl mx-3">
            directions_car_filled
            </span><span> Store </span> 
        </div></router-link>
        <router-link to="/info/add">
        <div class="w-full h-12 my-1 bg-gray-900 hover:bg-black hover:opacity-80  flex items-center hover:text-red-500 cursor-pointer">
          <span class="material-icons text-4xl mx-3">
            add_box
            </span><span>Add-Car </span>           
        </div></router-link>
        <router-link to="/team">
        <div class="w-full h-12 my-1 bg-gray-900 hover:bg-black hover:opacity-80  flex items-center hover:text-red-500 cursor-pointer">
          <span class="material-icons text-4xl mx-3">
            groups
            </span><span> Team </span>
        </div>
      </router-link>
      </div>
    </div>
    <div class="w-full md:w-320 px-5 md:px-0 md:mx-auto bgimge flex-grow">
      <router-view />
    </div>
    <footer
      class="pt-5 mt-10 px-3 bg-black bg-opacity-90 shadow-2xl text-gray-500 font-sans text-right flex flex-row ">
      <div class="w-full md:w-320 mx-auto">
      <div class="text-center md:text-left pb-5 md:pl-5 mx-auto text-xs md:text-base">
        <p class="text-gray-400 ">INT221 Integrated Information Technology Project I 2/2563</p>
        <p class=" font-light ">Bachelor of Science Program in Information Technology (B.Sc.IT)</p>
        <div class="flex flex-row text-center divide-x-2 pt-2 justify-center md:justify-start md:-ml-6">
          <div class="flex flex-col w-40 border-gray-500 border-dashed"><p class=" font-light  "> Kamin Tohpradu </p><p class=" font-light text-sm "> -- 62130500013 --</p></div>
          <div class="flex flex-col w-40 border-gray-500 border-dashed"><p class=" font-light  "> Patiphan Thiansuwan  </p><p class=" font-light text-sm "> -- 62130500049 --</p></div>
          <div class="flex flex-col w-40 border-gray-500 border-dashed"><p class=" font-light  "> Priyanut Buadum </p><p class=" font-light text-sm "> -- 62130500129 --</p></div>
        
       </div>
      </div>
      <div class="flex items-end md:justify-end  justify-center">
        <p class="md:-mt-5 mb-4 font-thin text-xs text-right ">Copyright <span @click="logo=require('./assets/logoCarPin.png')">©</span> 2021 King Mongkut’s University of Technology
          Thonburi, All rights reserved.</p>
      </div>
    </div>
    </footer>
  </div>
</template>
<style>
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

  .bgimge {
    background-image: url("./assets/Tire.png");
  }
</style>
<script>
export default {
  data() {
    return {
      menu:!false,
      logo:require("./assets/logoCar.png"),
    };
  }
}
</script>