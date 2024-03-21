export const state = () => ({
  cart: []
})

export const mutations = {
  addToCart(state, product) {
    const existingItem = state.cart.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      state.cart.push({ ...product, quantity: 1 })
    }
  },
  updateQuantity(state, { index, quantity }) {
    if (quantity <= 0) {
      state.cart.splice(index, 1)
    } else {
      state.cart[index].quantity = quantity
    }
  },
  removeFromCart(state, index) {
    state.cart.splice(index, 1)
  }
}
