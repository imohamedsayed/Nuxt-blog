<template>
  <div class="product-layout flex gap-5">
    <aside class="bg-white border-r-2 p-4">
      <nav>
        <NuxtLink to="/" class="font-bold">Blog</NuxtLink>
        <ul class="flex flex-col gap-12 mt-12">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </aside>
    <!-- Page content -->

    <main class="flex-1 container mx-auto p-10">
      <slot />
      <footer
        class="container mx-auto p-4 flex justify-between border-t-2 mt-12"
      >
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </footer>
    </main>
  </div>
</template>
<style lang="scss" scoped>
.product-layout {
  a {
    &.router-link-exact-active {
      color: #12b488;
    }
  }
  aside {
    height: 100vh;
  }
}
</style>
