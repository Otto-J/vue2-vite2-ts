import Vue from "vue";
import Vuex, { Store, StoreOptions } from "vuex";
Vue.use(Vuex);

interface TypeState {
  count: number;
}

const state = {
  count: 0,
};

const options: StoreOptions<TypeState> = {
  state,
  mutations: {
    add(state) {
      state.count++;
    },
  },
};
const store = new Store(options);
export default store;
