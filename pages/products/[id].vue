<template>
  <div>
    <ProductDetails :product="product" />
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

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product Not Found!",
    fatal: true,
  });
}
</script>

<style lang="scss" scoped></style>
