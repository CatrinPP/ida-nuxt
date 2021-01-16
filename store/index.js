export const state = () => ({
  category: 1,
  productsList: [],
  showCart: false,
  selectedProducts: []
})

export const mutations = {
  SET_CATEGORY (state, category) {
    state.category = category
  },
  SET_PRODUCTS_LIST (state, products) {
    state.productsList = products
  },
  SHOW_CART (state) {
    state.showCart = true
  },
  HIDE_CART (state) {
    state.showCart = false
  },
  ADD_TO_CART (state, id) {
    state.selectedProducts.push(state.productsList.find(it => it.id === id))
  },
  DELETE_FROM_CART (state, id) {
    state.selectedProducts.splice(state.productsList.indexOf(it => it.id === id), 1)
  }
}

export const actions = {
  async getProductsList ({ commit, state }) {
    try {
      const products = await fetch(
        `https://frontend-test.idaproject.com/api/product?category=${state.category}`
      ).then(res => res.json())
      await commit('SET_PRODUCTS_LIST', products)
    } catch (err) {
      console.error(err)
    }
  }
}
