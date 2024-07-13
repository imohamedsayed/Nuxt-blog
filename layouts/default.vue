<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 justify-between flex">
        <NuxtLink to="/" class="font-bold">Blog</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <!-- Page content -->
    <main class="container mx-auto p-4">
      <slot />
    </main>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
header,
footer {
  a {
    &.router-link-exact-active {
      color: #12b488;
    }
  }
}
</style>
