<template>
  <div class="product-list">
    <div class="header">
      <div class="search">
        <input type="text" v-model="searchQuery" placeholder="Search by name..." class="search-input">
        <button @click="applyFilters" class="search-btn">Search</button>
      </div>
      <div class="filters">
        <select v-model="selectedCategory" @change="applyFilters" class="category-select">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
        <input type="number" v-model.number="minPrice" placeholder="Min price" class="price-input">
        <input type="number" v-model.number="maxPrice" placeholder="Max price" class="price-input">
        <button @click="resetFilters" class="reset-btn">Aucun filtre</button>
      </div>
    </div>
    <h2>Products</h2>
    <div class="product-items">
      <div v-for="product in filteredProducts" :key="product.id" class="product-item">
        <img :src="product.image" :alt="product.title" class="product-image" @click="showProductDetails(product)" />
        <div class="product-details">
          <p class="product-title">{{ product.title }}</p>
          <p class="product-price">{{ product.price }}</p>
          <button @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
    <!-- Detailed Product View Modal -->
    <ProductDetailsModal v-if="selectedProduct" :product="selectedProduct" @close="selectedProduct = null" />
  </div>
</template>

<script>
import ProductDetailsModal from '@/components/ProductDetailsModal.vue';

export default {
  data() {
    return {
      products: [],
      filteredProducts: [],
      selectedProduct: null,
      searchQuery: '',
      selectedCategory: '',
      minPrice: null,
      maxPrice: null
    };
  },
  async fetch() {
    const response = await fetch("https://fakestoreapi.com/products");
    this.products = await response.json();
    this.filteredProducts = [...this.products];
  },
  computed: {
    categories() {
      const uniqueCategories = new Set();
      this.products.forEach(product => {
        uniqueCategories.add(product.category);
      });
      return Array.from(uniqueCategories);
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    showProductDetails(product) {
      this.selectedProduct = product;
    },
    applyFilters() {
      this.filteredProducts = this.products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = !this.selectedCategory || product.category === this.selectedCategory;
        const withinPriceRange = (!this.minPrice || product.price >= this.minPrice) &&
                                 (!this.maxPrice || product.price <= this.maxPrice);
        return matchesSearch && matchesCategory && withinPriceRange;
      });
    },
    resetFilters() {
      this.searchQuery = '';
      this.selectedCategory = '';
      this.minPrice = null;
      this.maxPrice = null;
      this.filteredProducts = [...this.products];
    }
  },
  components: {
    ProductDetailsModal
  }
};
</script>

<style scoped>
/* Add responsive styles here */

/* Default styles */
.product-list {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search {
  display: flex;
}

.search-input {
  padding: 10px;
  border: 1px solid #007bff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.search-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
}

.filters {
  display: flex;
  align-items: center;
}

.category-select,
.price-input {
  padding: 10px;
  border: 1px solid #007bff;
  border-radius: 5px;
  margin-right: 10px;
}

.reset-btn {
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: 1px solid #dc3545;
  border-radius: 5px;
  cursor: pointer;
}

.reset-btn:hover {
  background-color: #c82333;
}

.h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.product-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-item {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.product-image {
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  cursor: pointer;
}

.product-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
}

.product-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.product-price {
  font-size: 16px;
  margin-bottom: 10px;
}

.add-to-cart-btn {
  align-self: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart-btn:hover {
  background-color: #0056b3;
}

/* Responsive styles */
@media screen and (max-width: 768px) {
  .header {
    flex-direction: column;
  }

  .filters {
    flex-direction: column;
    align-items: flex-start;
  }

  .category-select,
  .price-input,
  .reset-btn {
    margin-top: 10px;
  }
}
</style>
