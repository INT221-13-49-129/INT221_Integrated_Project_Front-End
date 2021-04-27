 <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />


 <template>
   <div class="store flex flex-row justify items-end  font-sans">
     <h1 class="text-3xl font-bold ml-16">Cars Available</h1>
     <div class="flex-grow"></div>
     <li class="font-light text-2ml px-2">
       <div class=" relative text-gray-300">
         <button type="submit" class="focus:outline-none absolute mt-2 ml-3 ">
           <i class="material-icons ">search</i>
         </button>
         <input
           class="border-2 rounded-lg border-gray-200 bg-gray-800 bg-opacity-5 h-8 px-5 pl-10  text-medium focus:outline-none "
           placeholder="Search ">
       </div>
     </li>
     <div class="bg-gray-200 w-8 h-8 rounded-lg mr-2"></div>
     <div class="bg-gray-200 w-8 h-8 rounded-lg mr-12"></div>
   </div>
   <div class="store flex flex-row justify items-end mt-3 ">
     <div class="flex-grow"></div>
     <p class="my-auto mx-3 text-gray-800"> sort by </p>
     <p class="my-auto px-2 mr-3 text-center bg-gray-100 rounded-sm text-gray-600"> brand </p>
     <p class="my-auto px-2 mr-3 text-center bg-gray-100 rounded-sm text-gray-600 "> name </p>
     <p class="my-auto px-2 mr-3 text-center bg-gray-100 rounded-sm text-gray-600"> power </p>
     <p class="my-auto px-2 mr-3 text-center bg-gray-100 rounded-sm text-gray-600"> weight </p>
     <p class="my-auto px-2 mr-3 text-center bg-gray-100 rounded-sm text-gray-600"> drivertrain </p>
     <p class="my-auto px-2 mr-12 text-center bg-gray-100 rounded-sm text-gray-600"> year of manufacture </p>
   </div>
   <div class="store flex flex-row justify items-end 
   
   gi">
     <div class="flex-grow"></div>
     <p class="my-3 mx-10 mr-12 p-3 text-2xl font-bold bg-gray-100 rounded-lg text-gray-800"> + ADD CAR </p>
   </div>
 </template>



 <div></div>