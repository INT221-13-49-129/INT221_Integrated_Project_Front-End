<template>
    <div class="add font-serif font-light antialiased">
        <div class="md:px-56 px-5">
            <div class="md:px-20 px-8 bg-white mt-10 shadow-2xl">
                <h1 class=" font-bold md:text-4xl text-2xl text-center md:pt-9 md:pb-9 pt-5 pb-3 text-gray-800 ">
                    {{ productid=='add'?'Add New Car':'Edit Information' }}</h1>
                <div class="items-center flex flex-col w-full">
                    <div
                        class=" border-gray-300 md:border-4 border-2 border-dashed p-2 flex justify-center items-center">
                        <img class="object-cover object-center" alt="addcar" :src="img.url" />
                    </div>
                    <div class="flex md:flex-row flex-col justify-start w-full">
                        <input type="file" class="focus:outline-none mt-3 flex-grow" @change="uploadImg"
                            ref="imgInput" />
                        <div class="text-red-600 md:mt-3" v-show="!validate.img&&!validate.from">Please add a picture!
                        </div>
                    </div>
                </div>
                <div class="flex flex-row flex-wrap justify-center items-center">
                    <div v-for="color in product.colorList" :key="color.colorid"
                        class="md:h-11 md:w-11 h-7 w-7 rounded-full border-black border-2 hover:shadow-lg mx-2 mt-2"
                        v-bind:style="{ backgroundColor: color.colorcode }"></div>
                    <div @click="colorListShow = true"
                        class="md:h-12 md:w-12 h-7 w-7 mt-2 mx-2 rounded-full text-white hover:text-red-600 hover:font-black text-center font-black md:text-3xl text-sm border-4 hover:border-red-600 bg-gradient-to-bl from-green-400 via-red-300 to-blue-700 cursor-pointer">
                        +</div>
                    <div class="text-red-600 md:mt-3" v-show="!validate.color&&!validate.from">Please select color!</div>
                </div>
                <div v-if="popupShow">
                    <base-popup
                        classpop="flex flex-col justify-center text-center md:h-44 h-1/4 bg-opacity-95 bg-gray-100  rounded-xl fixed">
                        <div :class="popupclass" class="md:text-3xl text-xl font-medium px-8 mt-2">{{popupText}}</div>
                        <div class="w-full flex justify-center md:text-2xl text-xl ">
                            <div @click="popupShow=false,popupText=''"
                                class="mt-9 rounded-md w-24 py-0.5 transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110 hover:border-gray-800 border-gray-400 hover:text-gray-800 text-gray-400 border-2 cursor-pointer">
                                cancel</div>
                        </div>
                    </base-popup>
                </div>
                <div v-if="colorListShow">
                    <base-popup
                        classpop="flex flex-col justify-center md:w-144 w-5/6 h-auto bg-opacity-95 bg-gray-100  rounded-xl fixed">
                        <div class="text-center text-4xl mt-4">Color List</div>
                        <div class="flex flex-row flex-wrap mx-3 my-1 py-3 overflow-auto h-96">
                            <div @mouseover=" colorHover = 'Color : '+ color.colorname" @mouseleave="colorHover =''"
                                @click="selectColor(color)" v-for="color in colorList" :key="color.colorid"
                                :class="{'border-red-600':product.colorList.map(c => c.colorid).includes(color.colorid)}"
                                class="flex justify-center items-center w-9 h-9 rounded-full border-black border-2 hover:shadow-xl ease-in-out transform hover:scale-125 hover:border-red-600 m-2 cursor-pointer"
                                v-bind:style="{ backgroundColor: color.colorcode }">
                                <span v-if="product.colorList.map(c => c.colorid).includes(color.colorid)"
                                    :class="{ 'text-white': color.colorcode == '#000000' }"
                                    class="material-icons text-3xl">check</span>
                            </div>
                        </div>
                        <div class="flex flex-row justify-end text-xl mt-5 mr-6">
                            <div class="text-gray-800 md:text-2xl text-base flex-grow mx-6 mb-3 ">{{colorHover}}</div>
                            <div @click="colorListShow = false,validate.color = product.colorList.length != 0 "
                                class="cursor-pointer mx-3 mb-3 mt-1 font-base px-2 text-center flex flex-row justify-center items-center tracking-wider uppercase text-white rounded-lg shadow-xl transition duration-500 ease-in-out transform bg-gradient-to-l from-dark hover:from-red-600 to-red-600 hover:to-dark hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
                                close</div>
                        </div>
                    </base-popup>
                </div>
                <div>
                    <h1 class="font-base text-2xl text-center md:my-2 text-gray-800">INFORMATION</h1>
                </div>
                <div class="container flex flex-col md:mt-5 text-gray-700 font-normal md:text-lg text-sm ">
                    <div class="md:mt-2">
                        <label class="shadow-xl" for="name">NAME : </label><span class="text-red-600"
                            v-show="!validate.name&&!validate.from"> Please enter name! <span v-if="product.productname.length > 45"
                            class="text-xs"> (Don't exceed 45 characters.)</span></span>
                        <br />
                        <input id="name"
                            :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.name&&!validate.from}"
                            @keyup="validate.name = product.productname != '' && product.productname.length < 46" v-model.trim="product.productname"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 md:h-10 h-8 border-gray-100 border-2" />
                    </div>
                    <div class="mt-2">
                        <label class="shadow-xl" for="brand">BRAND : </label><span class="text-red-600"
                            v-show="!validate.brand&&!validate.from"> Please select a brand!</span>
                        <br />
                        <select id="brand"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 md:h-10 h-8 border-gray-100 border-2"
                            v-model="product.brand"
                            :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.brand&&!validate.from}"
                            @change="validate.brand = product.brand.brandid != 0 ">
                            <option v-for=" brand in brandAll" :key="brand.brandid" :value="brand">{{ brand.brandname }}
                            </option>
                        </select>
                    </div>
                    <div class="mt-2">
                        <label for="power" class="shadow-xl">POWER <span class="text-xs">(kW)</span> : </label><span
                            class="text-red-600" v-show="!validate.power&&!validate.from"> Please enter power! <span
                                class="text-xs">{{  2147483648 > parseInt(product.power) ? '(Don\'t use negative numbers and decimal number.)':'(Don\'t  number more than 2147483647.)'}}</span></span>
                        <br />
                        <input id="power"
                            :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.power&&!validate.from}"
                            @blur="validate.power = product.power != '' && product.power > 0 && product.power % 1 == 0 && product.power < 2147483648"
                            @keyup="validate.power = product.power != '' && product.power > 0 && product.power % 1 == 0 && product.power < 2147483648"
                            v-model="product.power" type="number"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 md:h-10 h-8 border-gray-100 border-2" />
                    </div>
                    <div class="mt-2">
                        <label for="torque" class="shadow-xl">TORQUE <span class="text-xs">(Nm/s)</span> : </label><span
                            class="text-red-600" v-show="!validate.torque&&!validate.from"> Please enter torque! <span
                                class="text-xs">{{  2147483648 > parseInt(product.torque) ? '(Don\'t use negative numbers and decimal number.)':'(Don\'t  number more than 2147483647.)'}}</span></span>
                        <br />
                        <input id="torque"
                            :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.torque&&!validate.from}"
                            @blur="validate.torque = product.torque != '' && product.torque > 0 && product.torque % 1 == 0 && product.torque < 2147483648"
                            @keyup="validate.torque = product.torque != '' && product.torque > 0 && product.torque % 1 == 0 && product.torque < 2147483648"
                            v-model="product.torque" type="number"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 md:h-10 h-8 border-gray-100 border-2" />
                    </div>
                    <div class="mt-2">
                        <label class="shadow-xl" for="weight">WEIGHT <span class="text-sm">(t)</span> : </label><span
                            class="text-red-600" v-show="!validate.weight&&!validate.from">Please enter weight! <span
                                class="text-xs"> (Don't use negative numbers {{parseInt(product.weight) >= 10000000?'and don\'t number more than 10,000,000':''}}.)</span></span>
                        <br />
                        <input id="weight"
                            :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.weight&&!validate.from}"
                            @blur="validate.weight = product.weight != '' && product.weight > 0 && product.weight < 10000000"
                            @keyup="validate.weight = product.weight != '' && product.weight > 0 && product.weight < 10000000"
                            v-model="product.weight" type="number"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 md:h-10 h-8 border-gray-100 border-2" />
                    </div>
                    <div class="mt-2">
                        <label class="shadow-xl" for="transmission">DRIVERTRAIN :</label><span class="text-red-600"
                            v-show="!validate.transmission&&!validate.from"> Please enter drivetrain!</span>
                        <br />
                        <select id="transmission" 
                            :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.transmission&&!validate.from}"
                            @change="validate.transmission = product.transmission != ''" v-model="product.transmission" 
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 md:h-10 h-8 border-gray-100 border-2" 
                            >
                            <option value="AWD">AWD</option>
                            <option value="RWD">RWD</option>
                            <option value="FWD">FWD</option>
                        </select>
                    </div>
                    <div class="mt-2">
                        <label class="shadow-xl" for="yom">YEAR OF MANUFACTURE :</label><span class="text-red-600"
                            v-show="!validate.yom&&!validate.from"> Please enter the date!</span>
                        <br />
                        <input id="yom"
                            :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.yom&&!validate.from}"
                            @change="validate.yom = product.yom != ''" v-model="product.yom" type="date"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner w-full bg-white bg-opacity-50 md:h-10 h-8 border-gray-100 border-2" />
                    </div>
                    <div class="mt-2">
                        <label class="shadow-xl" for="description">DESCRIPTION :</label><span class="text-red-600"
                            v-show="!validate.description&&!validate.from">Please enter description!<span v-if="product.description.length > 255"
                            class="text-xs"> (Don't exceed 255 characters.)</span></span>
                        <br />
                        <textarea id="description"
                            :class="{'bg-red-200 bg-opacity-5 border-red-400 border-2':!validate.description&&!validate.from}"
                            @keyup="validate.description = product.description != '' && this.product.description.length < 256" v-model.trim="product.description"
                            class="flex-grow mr-4 ml-2 rounded-md shadow-inner h-24 w-full bg-white bg-opacity-50 border-gray-100 border-2"></textarea>
                    </div>
                    <div class="flex flex-row justify-center pt-16 md:pb-28 pb-16">
                        <button @click="productid=='add'?addProduct():editProduct()"
                            class="text-lg tracking-wider uppercase px-7 mx-6 h-10 text-white rounded-lg shadow-xl transition duration-500 ease-in-out transform bg-gradient-to-r from-dark to-red-600 hover:from-red-600 hover:to-dark hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">submit</button>
                        <router-link to="/store">
                            <button
                                class="text-lg tracking-wider uppercase px-7 mx-6 h-10 text-white rounded-lg shadow-xl transition duration-500 ease-in-out transform bg-gradient-to-l from-dark hover:from-red-600 to-red-600 hover:to-dark hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">cancel</button>
                        </router-link>
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
                popupclass: '',
                popupShow: false,
                popupText: '',
                imgFile: null,
                colorHover: '',
                colorListShow: false,
                colorList: [],
                brandAll: [],
                urlColor: `${process.env.VUE_APP_ROOT_API}color`,
                urlProduct: `${process.env.VUE_APP_ROOT_API}product`,
                urlbrand: `${process.env.VUE_APP_ROOT_API}brand`,
                urlImg: `${process.env.VUE_APP_ROOT_API}img`,
                img: {
                    url: ""
                },
                imgadd: require("../assets/home/add.png"),
                product: {
                    productid: 0,
                    productname: '',
                    power: '',
                    torque: '',
                    weight: '',
                    transmission: '',
                    yom: '',
                    description: '',
                    img: '',
                    brand: {
                        brandid: 0,
                        brandname: ''
                    },
                    colorList: []
                },
                validate: {
                    name: false,
                    power: false,
                    torque: false,
                    weight: false,
                    transmission: false,
                    yom: false,
                    description: false,
                    brand: false,
                    color: false,
                    img: false,
                    from: true,
                }
            };
        },
        methods: {
            async addProduct() {
                this.validateFrom()
                if (this.validate.from) {
                    this.product.productid = await this.fetch(this.urlProduct + "/maxid") + 1
                    const jsonPro = await JSON.stringify(this.product)
                    const blob = await new Blob([jsonPro], {
                        type: 'application/json'
                    })
                    let formData = new FormData()
                    formData.append('file', this.imgFile, this.product.img)
                    await formData.append('newProduct', blob)
                    const res = await fetch(this.urlProduct + "/add/withimg", {
                        method: 'POST',
                        body: formData
                    })
                    const data = await res.json()
                    console.log(data);
                    if (data.errorStatus == 2002) {
                        this.popupShow = true
                        this.popupText = "Car name already exists, please change it!!"
                        this.popupclass = "text-red-600"
                        this.validate.name = false
                        this.validate.from = false
                        this.product.productname = ''
                    } else if (data.status == 500) {
                        this.popupShow = true
                        this.popupText = "Submission failed,please enter correct information!!"
                        this.popupclass = "text-red-600"
                    } else if (data.productid == this.product.productid) {
                        this.popupShow = true
                        this.popupText = "Successfully added information"
                        this.popupclass = "text-blue-600"
                        this.clear()
                    }
                } else {
                    this.popupShow = true
                    this.popupText = "Please complete all information !!"
                    this.popupclass = "text-red-600"
                }
            },
            async editProduct() {
                this.validateFrom()
                if (this.validate.from) {
                    const jsonPro = await JSON.stringify(this.product)
                    const blob = await new Blob([jsonPro], {
                        type: 'application/json'
                    })
                    let formData = new FormData()
                    await formData.append('updateProduct', blob)
                    let data = null;
                    if (this.imgFile == null) {
                        const res = await fetch(this.urlProduct + "/edit/" + this.product.productid, {
                            method: 'PUT',
                            body: formData
                        })
                        data = await res.json()
                    } else {
                        formData.append('file', this.imgFile, this.product.img)
                        const res = await fetch(this.urlProduct + "/edit/" + this.product.productid + "/withimg", {
                            method: 'PUT',
                            body: formData
                        })
                        data = await res.json()
                    }
                    if (data.errorStatus == 2002) {
                        this.popupShow = true
                        this.popupText = "Car name already exists, please change it!!"
                        this.popupclass = "text-red-600"
                        this.validate.name = false
                        this.validate.from = false
                        this.product.productname = ''
                    } else if (data.status == 500) {
                        this.popupShow = true
                        this.popupText = "Submission failed,please enter correct information!!"
                        this.popupclass = "text-red-600"
                    } else if (data.productid == this.product.productid) {
                        this.popupShow = true
                        this.popupText = "Successfully edited information"
                        this.popupclass = "text-blue-600"
                        this.clear()
                    }
                } else {
                    this.popupShow = true
                    this.popupText = "Please complete all information !!"
                    this.popupclass = "text-red-600"
                }
            },
            uploadImg(event) {
                const file = event.target.files[0]
                if(this.isImage(file.name)){
                const reader = new FileReader()
                this.img = {
                    url: this.imgadd
                };
                reader.onload = (event) => {
                    this.img.url = event.target.result;
                    this.validate.img = this.img.url != this.imgadd
                };
                reader.readAsDataURL(file);
                this.imgFile = file
                this.product.img = file.name
            }else{
                this.popupShow = true
                this.popupText = "Please enter only image files!!"
                this.popupclass = "text-red-600"
                this.$refs.imgInput.value = null;
            }
            },
            getExtension(filename) {
                var parts = filename.split('.');
                return parts[parts.length - 1];
            },
            isImage(filename) {
                var ext = this.getExtension(filename);
                switch (ext.toLowerCase()) {
                case 'jpg':
                case 'gif':
                case 'bmp':
                case 'png':
                return true;
            }
            return false;
            },
            clear() {
                this.product = {
                    productid: 0,
                    productname: '',
                    power: '',
                    torque: '',
                    weight: '',
                    transmission: '',
                    yom: '',
                    description: '',
                    img: '',
                    brand: {
                        brandid: 0,
                        brandname: ''
                    },
                    colorList: []
                };
                this.img = {
                    url: require("../assets/home/add.png")
                }
                this.$refs.imgInput.value = null;
                this.$router.push('/info/add')
            },
            validateFrom() {
                this.validate.name = this.product.productname != '' && this.product.productname.length < 46
                this.validate.power = this.product.power != '' && this.product.power > 0 && this.product.power % 1 == 0 && this.product.power < 2147483648
                this.validate.torque = this.product.torque != '' && this.product.torque > 0 && this.product.torque % 1 == 0 && this.product.torque < 2147483648
                this.product.weight = parseFloat(this.product.weight).toFixed(3)
                this.validate.weight = this.product.weight != '' && this.product.weight > 0 && this.product.weight < 10000000
                this.validate.transmission = this.product.transmission != ''
                this.validate.yom = this.product.yom != ''
                this.validate.description = this.product.description != '' && this.product.description.length < 256
                this.validate.brand = this.product.brand.brandid != 0
                this.validate.color = this.product.colorList.length != 0
                this.validate.img = this.img.url != this.imgadd
                this.validate.from = true
                Object.values(this.validate).forEach(v => {
                    this.validate.from = v && this.validate.from
                });
            },
            selectColor(color) {
                if (this.product.colorList.map(c => c.colorid).includes(color.colorid)) {
                    this.product.colorList = this.product.colorList.filter(c => c.colorid != color.colorid)
                } else {
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
            if (!isNaN(this.productid)) {
                this.product = await this.fetch(this.urlProduct + '/' + this.productid)
                if (this.product.errorStatus != 1001) {
                    this.img = await fetch(this.urlImg + "/" + this.product.img)
                } else {
                    this.$router.push('/404')
                }
            } else if (this.productid == 'add') {
                this.img.url = this.imgadd
            } else {
                this.$router.push('/404')
            }
        },
        watch: {
            productid: function productidCheck() {
                if (this.productid == 'add') {
                    this.clear()
                }
            }
        }
    };
</script>