<template>
  <div id="nav" class="bg-red-600 h-1 w-full bg-gradient-to-r to-blue-900 via-red-500 from-purple-800"></div>
  <div id="nav" class="bg-gray-900 w-auto h-1/2 mx-auto flex flex-row item-center font-mono shadow-2xl">
    <ul class="text-white">
      <li class=" px-10 py-1.5 font-normal text-3xl"><router-link to="/"><span><b>CARS</b></span></router-link></li></ul>
    <div class="flex-grow"></div>
    <ul class="my-auto mr-5 flex flex-row item-end justify-center h-full text-white text-sm">
      <li class="px-4">
        <router-link to="/"> <span><b>HOME</b></span></router-link></li>
      <li class="px-4">
        <router-link to="/store"><span><b>STORE</b></span></router-link></li>
      <li class="px-4">
        <router-link to="/about"><span><b>ABOUT US</b></span></router-link></li>
    </ul>
  </div>
  <router-view />
</template>