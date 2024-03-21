<template>
  <div class="page-container">
    <div class="product-list">
      <h1>Mini E-commerce Product Gallery</h1>
      <ProductList />
    </div>
    <div class="shopping-cart">
      <ShoppingCart />
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

export default {
  components: {
    ProductList,
    ShoppingCart
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
}

.product-list {
  flex-grow: 1;
}

/* Add media query for smaller screens */
@media screen and (max-width: 768px) {
  .page-container {
    flex-direction: column;
  }

  .product-list, .shopping-cart {
    width: 100%;
  }
}
</style>
