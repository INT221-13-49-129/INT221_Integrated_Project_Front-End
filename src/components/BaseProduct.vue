<template>
  <div :class="classDiv">
    <img :src="img.url" :class="classImg" />
    <div :class="classText">
      <div :class="classTextName">{{ product.productname }}</div>
      <div>Brand : {{ product.brand.brandname }}</div>
      <div>Drivetrain : {{ product.transmission }}</div>
      <div v-if="descrip" class="mx-8 my-3 text-sm font-light">
        <div class="h-20 overflow-hidden text-xs">{{ product.description }}</div>
        <div class="-mt-2 text-lg">...</div>
      </div>
      <div v-if="power">Power : {{product.power}} kW</div>
      <div v-if="torque">Torque : {{product.torque}} Nm/s</div>
      <div v-if="weight">Weight : {{product.weight}} t</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: [
    "product",
    "classImg",
    "classDiv",
    "classText",
    "classTextName",
    "descrip",
    "power",
    "torque",
    "weight"
  ],
  data() {
    return {
      img:"",
      urlImg:`${process.env.VUE_APP_ROOT_API}img`
    };
  },
  async created() {
    this.img = await fetch(this.urlImg+"/"+this.product.img)
  },
}
</script>

