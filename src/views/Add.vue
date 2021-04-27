<template>
  <div class="add font-sans ">
    <div class="px-56 ">
    <div class="px-20  bg-white bg-opacity-90 ">
      <h1 class="font-bold text-4xl text-center py-5 text-gray-800">ADD CAR</h1>
      <div class="items-center flex flex-col  w-full ">
        <img class="object-cover object-center" alt="addcar" src="../assets/home/add.png">
        <input type="file" class="focus:outline-none" @change="uploadImg" />
      </div>
      <div>
        <h1 class="text-xl text-center my-5">colors</h1>
      </div>
      <div>
        <h1 class="font-bold text-2xl text-center my-5 text-gray-800 ">INFORMATION</h1>
      </div>
      <div class="container flex flex-col mt-5 text-gray-700 font-semibold ">
        <div class="text-lg  mt-2 flex flex-row"> <label class="w-max"> NAME : </label> <input
           class="flex-grow mr-4 ml-2 rounded-lg shadow-xl w-3/4"> </div>
        <div class="text-lg  mt-2 flex flex-row"> <label class="w-max">BRAND : </label><input 
            class="flex-grow mr-4 ml-2 rounded-lg shadow-xl w-3/4"> </div>
        <div class="text-lg mt-2 flex flex-row"> <label>POWER : </label><input  type="number"
            class="flex-grow mr-4 ml-2 rounded-lg shadow-xl w-3/4"> </div>
        <div class="text-lg  mt-2 flex flex-row"> <label>TORQUE : </label><input type="number"
            class="flex-grow mr-4 ml-2 rounded-lg shadow-xl w-3/4"> </div>
        <div class="text-lg mt-2 flex flex-row"> <label>WEIGHT : </label><input type="number" 
            class="flex-grow mr-4 ml-2 rounded-lg shadow-xl w-3/4"> </div>
        <div class="text-lg  mt-2 flex flex-row"> <label>DRIVERTRAIN : </label><input type="number" 
        class="flex-grow mr-4 ml-2 rounded-lg shadow-xl w-3/4"> </div>
        <div class="text-lg mt-2 flex flex-row"> <label>YEAR OF MANUFACTURE : </label><input type="date" 
            class="flex-grow mr-4 ml-2 rounded-lg shadow-xl w-3/4"> </div>
            <div class="text-lg mt-2 flex flex-row"> <label>DESCRIPTION : </label><textarea 
            class="flex-grow mr-4 ml-2 rounded-lg shadow-xl h-20 w-3/4"></textarea> </div>
        <div class="flex flex-row justify-center mt-5  pt-16 pb-28 ">
          <button @click="submit"
            class="font-bold text-xl tracking-wider uppercase px-7 mx-6 h-10 text-white rounded-lg shadow-xl 
             transition duration-500 ease-in-out transform bg-gradient-to-r from-dark hover:from-red-600 to-red-600 hover:to-dark
             hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
            submit
          </button>
          <button @click="cancle"
            class="font-bold text-xl tracking-wider uppercase px-7 mx-6 h-10 text-white rounded-lg shadow-xl 
             transition duration-500 ease-in-out transform bg-gradient-to-l from-dark hover:from-red-600 to-red-600 hover:to-dark
             hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
             cancle
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>