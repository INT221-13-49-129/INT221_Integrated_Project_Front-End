<template>
    <div class="add font-serif font-light ">
        <div class="px-56">
            <div class="px-20  bg-white bg-opacity-80 ">
                <h1 class="font-base text-4xl text-center py-5 text-gray-800">Add Carsgit </h1>
                <div class="items-center flex flex-col  w-full ">
                    <img class="object-cover object-center" alt="addcar" src="../assets/home/add.png">
                    <input type="file" class="focus:outline-none" @change="uploadImg" />
                </div>
                <div class="container flex justify-center">
                    <div class="h-10 w-10 rounded-full items-end border-solid border-4 hover:border-red-500 bg-white">
                    </div>
                </div>
                <div>
                    <h1 class="font-base text-2xl text-center my-2 text-gray-800 ">INFORMATION</h1>
                </div>
                <div class="container flex flex-col mt-5 text-gray-700 font-normal ">
                    <div class="text-lg  mt-2 "> <label class="shadow-xl"> NAME : </label><br>
                        <input class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10"> </div>
                    <div class="text-lg  mt-2"> <label class="shadow-xl">BRAND : </label><br>
                        <input class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10"> </div>
                    <div class="text-lg mt-2"> <label class="shadow-xl">POWER : </label><br><input type="number"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10"> </div>
                    <div class="text-lg  mt-2 "> <label class="shadow-xl">TORQUE : </label><br><input type="number"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10"> </div>
                    <div class="text-lg mt-2"> <label class="shadow-xl">WEIGHT : </label><br><input type="number"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10"> </div>
                    <div class="text-lg  mt-2"> <label class="shadow-xl">DRIVERTRAIN : </label><br><input type="number"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10"> </div>
                    <div class="text-lg mt-2 "> <label class="shadow-xl">YEAR OF MANUFACTURE : </label><br><input type="date"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10"> </div>
                    <div class="text-lg mt-2 "> <label class="shadow-xl">DESCRIPTION : </label><br><textarea
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner h-20 w-full bg-white bg-opacity-50 "></textarea>
                    </div>
                    <div class="flex flex-row justify-center mt-5  pt-16 pb-28 ">
                        <button @click="submit" class="text-lg tracking-wider uppercase px-7 mx-6 h-10 text-white rounded-lg shadow-xl 
             transition duration-500 ease-in-out transform bg-gradient-to-r from-dark to-red-600 hover:from-red-600 hover:to-dark
             hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
                            submit
                        </button>
                        <button @click="cancle" class="text-lg tracking-wider uppercase px-7 mx-6 h-10 text-white rounded-lg shadow-xl 
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