import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    price: 125,
    total: 0,
    cart: [],
  },
  getters:{
    counter(){
      this.state.count
    }
  },
  mutations: {
    addToCart(state) {
      state.total = state.count * state.price;
      state.cart.push({
        count: state.count,
        price: state.price,
        total: state.total,
      });
    },
  },
});
