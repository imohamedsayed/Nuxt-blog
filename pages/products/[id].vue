<template>
  <div>
    <h2>Product: {{ id }}</h2>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style lang="scss" scoped></style>
