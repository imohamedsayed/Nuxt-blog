<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product image" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h1 class="text-2xl text-gray-500 font-bold">{{ product.title }}</h1>
        <p class="text-xl font-bold mt-10 mb-5 text-green-500">
          {{ product.price }}$
        </p>
        <p class="text-md font-bold">{{ product.description }}</p>

        <button class="btn flex mt-5">
          <i class="material-icons mr-2">add_shopping_cart </i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped></style>
