<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Blog</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <!-- Page content -->
    <main>
      <slot />
    </main>
    <footer>
      <p>Copyright &copy; 2024</p>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > a {
      color: #fff;
      font-size: 2rem;
      text-decoration: none;
    }
    ul {
      display: flex;
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
footer {
  background-color: #333;
  color: #fff;
  padding: 4px 10px;
  text-align: center;
}
</style>
