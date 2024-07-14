<template>
  <div>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
definePageMeta({
  layout: "products",
});

// fetching products

const { data: product } = await useFetch(uri, { key: id });
</script>

<style lang="scss" scoped></style>
