<template>
  <div class="product-layout">
    <aside>
      <nav>
        <NuxtLink to="/">Blog</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </aside>
    <!-- Page content -->

    <main>
      <slot />
      <footer>
        <p>Copyright &copy; 2024</p>
      </footer>
    </main>
  </div>
</template>
<style lang="scss" scoped>
.product-layout {
  display: flex;
  gap: 1rem;
  aside {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    height: 100vh;
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      > a {
        color: #fff;
        font-size: 2rem;
        text-decoration: none;
        margin-bottom: 50px;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 30px;
        li {
          margin: 0 1rem;
          a {
            color: #fff;
            text-decoration: none;

            &.router-link-exact-active {
              color: #12b488;
            }
          }
        }
      }
    }
  }
  main {
    flex: 1;
    footer {
      background-color: #333;
      color: #fff;
      padding: 4px 10px;
      text-align: center;
    }
  }
}
</style>
