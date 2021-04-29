 <template>
   <div class="show font-serif font-light antialiased">
     <div class=" w-full bg-gray-100 mb-5 flex flex-row rounded-xl ">
       <div class="w-1/2 m-5 ">
         <div class="h-full flex flex-row justify-center items-center ">
           <img class="object-contain object-center" alt="addcar" src="../assets/home/add.png">
         </div>
       </div>

       <div class="w-1/2 text-gray-800 flex flex-col ">
         <div class="flex flex-col items-center justify-center ml-5 mr-10 mt-10">
           <div class="h-full w-full flex flex-row text-gray-800">
             <div class="w-2/6 text-sm font-light text-left text-gray-800">
               <div class="mt-2 "> NAME : </div>
               <div class="mt-2 "> BRAND : </div>
               <div class="mt-2 "> POWER : </div>
               <div class="mt-2"> TORQUE :</div>
               <div class="mt-2 "> WEIGHT :</div>
               <div class="mt-2 "> DRIVERTRAIN : </div>
               <div class="mt-2 "> YEAR OF MANUFACTURE :</div>
               <div class="mt-2 "> DESCRIPTION :</div>
             </div>
             <div class="w-4/6 text-sm font-light text-right text-gray-800">
               <div class="mt-2 "> SDGFDGD </div>
               <div class="mt-2 "> fg,hg,</div>
               <div class="mt-2 "> 3545</div>
               <div class="mt-2 "> 56756</div>
               <div class="mt-2 "> 0.4353</div>
               <div class="mt-2 "> 76365 </div>
               <div class="mt-2 "> Y7655</div>
               <div class="mt-2 ">
                 <textarea class="w-full pl-10 bg-opacity-100">kmnhuvygvgvhbhbjhbuhbuhbuhbubhbhbhbhbbjhbjhvgjvghcfcgvbhmjn,km.jhgfcdxcfgvhbjnkmjihugfcdghfghj</textarea>
               </div>
             </div>
           </div>

           <div class="flex flex-grow"></div>
           <div class=" flex flex-row justify-end items-center self-center p-5 w-full">
             <button @click="editcar" class="px-3 mr-3 h-6 font-base text-sm flex flex-row justify-center items-center tracking-wider uppercase
              text-white rounded-lg shadow-xl 
             transition duration-500 ease-in-out transform bg-gradient-to-r from-dark to-red-600 hover:from-red-600 hover:to-dark
             hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
               EDIT
             </button>
             <button @click="deletecar" class="px-3  h-6 font-base text-sm text-center flex flex-row justify-center items-center tracking-wider uppercase text-white rounded-lg shadow-xl 
             transition duration-500 ease-in-out transform bg-gradient-to-l from-dark hover:from-red-600 to-red-600 hover:to-dark
             hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
               DELETE
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
 </template>