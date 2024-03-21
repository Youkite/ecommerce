<template>
  <div class="product-details-modal-overlay" @click="$emit('close')">
    <div class="product-details-modal">
      <div class="modal-content">
        <span class="close" @click="$emit('close')">&times;</span>
        <h2>{{ product.title }}</h2>
        <div class="product-details">
          <img :src="product.image" :alt="product.title" class="product-image" @click.stop />
          <div class="details">
            <p class="description">{{ product.description }}</p>
            <p class="price">Price: {{ product.price }}</p>
            <!-- You can add more details here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
};
</script>

<style scoped>
.product-details-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Grey background with transparency */
  z-index: 999; /* Higher z-index to ensure it's on top */
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-details-modal {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 80%;
}

.modal-content {
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.product-details {
  display: flex;
  align-items: center;
}

.product-image {
  max-width: 100px;
  height: auto;
  margin-right: 20px;
  cursor: pointer; /* Change cursor to pointer */
}

.details {
  flex-grow: 1;
}

.description {
  margin-bottom: 10px;
}

.price {
  font-weight: bold;
}
</style>
