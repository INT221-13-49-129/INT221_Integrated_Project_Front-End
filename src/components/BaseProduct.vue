<template>
  <div class="flex flex-col items-center">
    <img src="../assets/home/30129.png" class="w-10/12" />
    <div :class="classText">
      <div class="text-2xl font-medium">{{product.productname}}</div>
      <div>brand : {{product.brand.brandname}}</div>
      <div>Drivetrain : {{product.transmission}}</div>
      <div class="mx-8 my-3 text-sm font-light">
      <div class="h-20 overflow-hidden">{{product.description}}</div>
      <div class="-mt-2 text-lg">...</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Array,
    classText: String
  }
}
</script>

