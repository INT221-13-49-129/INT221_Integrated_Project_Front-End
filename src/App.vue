<template>
  <div id class="flex flex-col  bg-gradient-to-br from-dark to-red-600 min-h-screen xl:w-full w-336">
    <div id="nav" class=" w-full h-12 font-serif shadow-2xl bg-black ">
      <div class="mx-auto flex flex-row item-center w-320">
        <div class="w-4/12">
          <router-link to="/">
            <img src="./assets/logoCar.png" class="mt-1 w-10" />
          </router-link>
        </div>
        <ul class="text-white flex-grow text-center">
          <li class="px-10 py-1.5 font-light text-3xl">
            <router-link to="/">
            <span><b>CARS</b></span>
            </router-link>
          </li>
        </ul>
        <ul class="my-auto flex flex-row justify-end h-full text-white font-thin text-lm w-4/12">
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
      </div>
    </div>
    <div class="w-320 mx-auto bgimge flex-grow">
      <router-view />
    </div>
    <footer class="pt-5 mt-10 bg-black bg-opacity-90 shadow-2xl">
      
    </footer>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
.bgimge {
  background-image: url("./assets/Tire.png");
}
</style>