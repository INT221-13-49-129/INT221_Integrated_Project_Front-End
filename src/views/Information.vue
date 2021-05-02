<template>
    <div class="add font-serif font-light antialiased">
        <div class="px-56">
            <div class="px-20 bg-white mt-10 shadow-2xl">
                <h1 class=" font-bold text-4xl text-center py-5 text-gray-800 ">{{ productid }}</h1>
                <div class="items-center flex flex-col w-full">
                    <div class=" border-gray-300 border-4 border-dashed p-2 flex justify-center items-center">
                    <img
                        class="object-cover object-center"
                        alt="addcar"
                        :src="img.url"
                    />
                    </div>
                    <input type="file" class="focus:outline-none mt-3 w-full" @change="uploadImg" />
                </div>
                <div class="flex flex-row flex-wrap justify-center items-center">
                    <div v-for="color in product.colorList" :key="color.colorid" class="h-11 w-11 rounded-full border-black border-2 hover:shadow-lg mx-2 mt-2" v-bind:style="{ backgroundColor: color.colorcode }"></div>
                    <div @click="colorListShow = true"
                        class="h-12 w-12 mt-2 mx-2 rounded-full text-white hover:text-red-600 hover:font-black text-center font-black text-3xl border-4 hover:border-red-600 bg-gradient-to-bl from-green-400 via-red-300 to-blue-700 cursor-pointer"
                    >+</div> <div class="text-red-600 mt-3" v-show="!validate.color&&!validate.from">Please select color!</div>
                </div>
                <div v-if="colorListShow">
                    <base-popup
                        classpop="flex flex-col justify-center w-144 h-128 bg-opacity-95 bg-gray-100  rounded-xl fixed"
                    >
                        <div class="text-center text-4xl mt-4">Color List</div>
                        <div class="flex flex-row flex-wrap mx-3 my-1 py-3 overflow-auto h-96">
                            <div @mouseover=" colorHover = 'Color : '+ color.colorname" @mouseleave="colorHover =''"
                                @click="selectColor(color)"
                                v-for="color in colorList"
                                :key="color.colorid"
                                :class="{'border-red-600':product.colorList.map(c => c.colorid).includes(color.colorid)}"
                                class="flex justify-center items-center w-9 h-9 rounded-full border-black border-2 hover:shadow-xl ease-in-out transform hover:scale-125 hover:border-red-600 m-2 cursor-pointer"
                                v-bind:style="{ backgroundColor: color.colorcode }"
                            >
                                <span
                                    v-if="product.colorList.map(c => c.colorid).includes(color.colorid)"
                                    :class="{ 'text-white': color.colorcode == '#000000' }"
                                    class="material-icons text-3xl"
                                >check</span>
                            </div>
                        </div>
                        <div class="flex flex-row justify-end text-xl mt-5 mr-6">
                            <div class="text-gray-800 text-2xl flex-grow mx-6 mb-3 ">{{colorHover}}</div>
                            <div @click="colorListShow = false,validate.color = product.colorList.length != 0 "
                                class="cursor-pointer mx-3 mb-3 mt-1 font-base px-2 text-center flex flex-row justify-center items-center tracking-wider uppercase text-white rounded-lg shadow-xl transition duration-500 ease-in-out transform bg-gradient-to-l from-dark hover:from-red-600 to-red-600 hover:to-dark hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none"
                            >close</div>
                        </div>
                    </base-popup>
                </div>
                <div>
                    <h1 class="font-base text-2xl text-center my-2 text-gray-800">INFORMATION</h1>
                </div>
                <div class="container flex flex-col mt-5 text-gray-700 font-normal">
                    <div class="text-lg mt-2">
                        <label class="shadow-xl" for="name">NAME : </label><span class="text-red-600" v-show="!validate.name&&!validate.from"> Please enter name!</span>
                        <br />
                        <input id="name" :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.name&&!validate.from}" @keyup="validate.name = product.productname != ''"
                            v-model="product.productname"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10 border-gray-100 border-2"
                        />
                    </div>
                    <div class="text-lg mt-2">
                        <label class="shadow-xl" for="brand">BRAND : </label><span class="text-red-600" v-show="!validate.brand&&!validate.from"> Please select a brand!</span>
                        <br />
                        <select id="brand" class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10 border-gray-100 border-2" v-model="product.brand" :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.brand&&!validate.from}" @change="validate.brand = product.brand.brandid != 0 ">
                            <option
                              v-for=" brand in brandAll"
                              :key="brand.brandid"
                              :value="brand"
                            >{{ brand.brandname }}</option>
                          </select>
                    </div>
                    <div class="text-lg mt-2">
                        <label for="power" class="shadow-xl">POWER <span class="text-xs">(kW)</span> : </label><span class="text-red-600" v-show="!validate.power&&!validate.from"> Please enter power! <span class="text-xs"> (Don't use negative numbers.)</span></span>
                        <br />
                        <input id="power" :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.power&&!validate.from}" @blur="validate.power = product.power != '' && product.power > 0" @keyup="validate.power = product.power != '' && product.power > 0"
                            v-model="product.power"
                            type="number"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10  border-gray-100 border-2"
                        />
                    </div>
                    <div class="text-lg mt-2">
                        <label for="torque" class="shadow-xl">TORQUE <span class="text-xs">(Nm/s)</span> : </label><span class="text-red-600" v-show="!validate.torque&&!validate.from"> Please enter torque! <span class="text-xs"> (Don't use negative numbers.)</span></span>
                        <br />
                        <input id="torque" :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.torque&&!validate.from}" @blur="validate.torque = product.torque != '' && product.torque > 0" @keyup="validate.torque = product.torque != '' && product.torque > 0"
                            v-model="product.torque"
                            type="number"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10 border-gray-100 border-2"
                        />
                    </div>
                    <div class="text-lg mt-2" >
                        <label class="shadow-xl" for="weight">WEIGHT <span class="text-sm">(t)</span> : </label><span class="text-red-600" v-show="!validate.weight&&!validate.from">Please enter weight! <span class="text-xs"> (Don't use negative numbers.)</span></span>
                        <br />
                        <input id="weight" :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.weight&&!validate.from}" @blur="validate.weight = product.weight != '' && product.weight > 0" @keyup="validate.weight = product.weight != '' && product.weight > 0"
                            v-model="product.weight"
                            type="number"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10 border-gray-100 border-2"
                        />
                    </div>
                    <div class="text-lg mt-2">
                        <label class="shadow-xl" for="transmission">DRIVERTRAIN :</label><span class="text-red-600" v-show="!validate.transmission&&!validate.from"> Please enter drivetrain!</span>
                        <br />
                        <input id="transmission" :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.transmission&&!validate.from}"  @keyup="validate.transmission = product.transmission != ''"
                            v-model="product.transmission"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10 border-gray-100 border-2"
                        />
                    </div>
                    <div class="text-lg mt-2">
                        <label class="shadow-xl" for="yom">YEAR OF MANUFACTURE :</label><span class="text-red-600" v-show="!validate.yom&&!validate.from"> Please enter the date!</span>
                        <br />
                        <input id="yom" :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.yom&&!validate.from}" @change="validate.yom = product.yom != ''"
                            v-model="product.yom"
                            type="date"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 h-10 border-gray-100 border-2"
                        />
                    </div>
                    <div class="text-lg mt-2">
                        <label class="shadow-xl" for="description">DESCRIPTION :</label><span class="text-red-600" v-show="!validate.description&&!validate.from">Please enter description!</span>
                        <br />
                        <textarea  id="description" :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.description&&!validate.from}" @keyup="validate.description = product.description != ''"
                            v-model="product.description"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner h-24 w-full bg-white bg-opacity-50 border-gray-100 border-2"
                        ></textarea>
                    </div>
                    <div class="flex flex-row justify-center pt-16 pb-28">
                        <button
                            @click="validateFrom"
                            class="text-lg tracking-wider uppercase px-7 mx-6 h-10 text-white rounded-lg shadow-xl transition duration-500 ease-in-out transform bg-gradient-to-r from-dark to-red-600 hover:from-red-600 hover:to-dark hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none"
                        >submit</button>
                        <router-link to="/store">
                        <button
                            class="text-lg tracking-wider uppercase px-7 mx-6 h-10 text-white rounded-lg shadow-xl transition duration-500 ease-in-out transform bg-gradient-to-l from-dark hover:from-red-600 to-red-600 hover:to-dark hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none"
                        >cancle</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["productid"],
    data() {
        return {
            colorHover:'',
            colorListShow: false,
            colorList: [],
            brandAll: [],
            urlColor: "http://localhost:3000/color",
            urlProduct: "http://localhost:3000/product",
            urlbrand: "http://localhost:3000/brand",
            urlImg:"http://localhost:3000/img",
            img:{url:require("../assets/home/add.png")},
            product: {
                productid: 0,
                productname: '',
                power: '',
                torque: '',
                weight: '',
                transmission: '',
                yom: '',
                description: '',
                brand: {
                    brandid: 0,
                    brandname: ''
                },
                colorList:[]
            },
            validate:{
                name:false,
                power:false,
                torque:false,
                weight:false,
                transmission:false,
                yom:false,
                description:false,
                brand:false,
                color:false,
                from:true,
            }
        };
    },
    methods: {
        clear(){
            this.product = {
                productid: 0,
                productname: '',
                power: '',
                torque: '',
                weight: '',
                transmission: '',
                yom: '',
                description: '',
                brand: {
                    brandid: 0,
                    brandname: ''
                },
                colorList:[]
            };
            this.img={url:require("../assets/home/add.png")}
        },
        validateFrom(){
            this.validate.name = this.product.productname != ''
            this.validate.power = this.product.power != '' && this.product.power > 0
            this.validate.torque = this.product.torque != '' && this.product.torque > 0
            this.validate.weight = this.product.weight != '' && this.product.weight > 0
            this.validate.transmission = this.product.transmission != '' 
            this.validate.yom = this.product.yom != '' 
            this.validate.description = this.product.description != '' 
            this.validate.brand = this.product.brand.brandid != 0 
            this.validate.color = this.product.colorList.length != 0 
            this.validate.from = true
            Object.values(this.validate).forEach( v => {
                this.validate.from = v && this.validate.from
            });
        },
        selectColor(color){
            if(this.product.colorList.map(c => c.colorid).includes(color.colorid)){
                this.product.colorList = this.product.colorList.filter(c => c.colorid != color.colorid)
            }else{
                this.product.colorList.push(color)
            }
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
        this.brandAll = await this.fetch(this.urlbrand)
        this.colorList = await this.fetch(this.urlColor)
        if(!isNaN(this.productid)){
            this.product = await this.fetch(this.urlProduct+'/'+this.productid)
            if(this.product.errorStatus != 1001 ){
                this.img = await fetch(this.urlImg+"/"+this.product.img)
            }else{
                this.$router.push('/404')
            }
        }else if(this.productid != 'add'){
            this.$router.push('/404')
        }
    },watch : {
        productid:function productidCheck() {
            if(this.productid == 'add'){
                this.clear()
            }
        } 
    }
};
</script>