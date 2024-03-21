<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <div v-if="cartItems.length === 0" class="empty-cart-message">
      Your cart is empty.
    </div>
    <div v-else>
      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <img :src="item.image" :alt="item.title" class="cart-item-image" />
        <div class="cart-item-details">
          <p class="cart-item-title">{{ item.title }}</p>
          <p class="cart-item-price">Price: {{ item.price }}</p>
          <div class="quantity-controls">
            <input type="number" :value="item.quantity" @input="updateQuantity($event.target.value, index)" min="1" class="quantity-input">
            <button @click="removeFromCart(index)" class="remove-from-cart-btn">Remove</button>
          </div>
        </div>
      </div>
      <div class="checkout-section">
        <h3>Checkout</h3>
        <form @submit.prevent="processOrder" class="checkout-form">
          <input type="text" placeholder="Enter your name" v-model="name" required class="checkout-input">
          <input type="email" placeholder="Enter your email" v-model="email" required class="checkout-input">
          <input type="text" placeholder="Enter your address" v-model="address" required class="checkout-input">
          <button type="submit" class="checkout-btn">Proceed to Checkout</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      address: ''
    };
  },
  computed: {
    cartItems() {
      return this.$store.state.cart;
    }
  },
  methods: {
    updateQuantity(quantity, index) {
      this.$store.commit('updateQuantity', { index, quantity: parseInt(quantity) });
    },
    removeFromCart(index) {
      this.$store.commit('removeFromCart', index);
    },
    processOrder() {
      // Mock payment and shipping process
      alert('Order processed successfully!');
      // Reset form fields
      this.name = '';
      this.email = '';
      this.address = '';
    }
  }
};
</script>

<style scoped>
.shopping-cart {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
}

h2 {
  color: #007bff;
}

.empty-cart-message {
  text-align: center;
}

.cart-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.cart-item-image {
  width: 100px;
  height: auto;
  margin-right: 20px;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-title {
  font-size: 18px;
  margin: 0;
}

.cart-item-price {
  font-size: 16px;
  margin-bottom: 5px;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-input {
  width: 60px;
  margin-right: 10px;
  text-align: center;
}

.remove-from-cart-btn {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-from-cart-btn:hover {
  background-color: #c82333;
}

.checkout-section {
  margin-top: 20px;
}

.checkout-form {
  display: flex;
  flex-direction: column;
}

.checkout-input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.checkout-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.checkout-btn:hover {
  background-color: #0056b3;
}

@media screen and (max-width: 768px) {
  .shopping-cart {
    padding: 10px;
  }

  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .cart-item-image {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .cart-item-details {
    width: 100%;
  }

  .quantity-controls {
    margin-top: 10px;
  }

  .checkout-form {
    margin-top: 20px;
  }
}
</style>
