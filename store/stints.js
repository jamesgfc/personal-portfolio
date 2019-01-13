import StintsService from "@/services/api/stints"

export const state = () => ({
  loading: false,
  data: []
})

export const mutations = {
  SET_LOADING(state, isLoading) {
    state.loading = isLoading;
  },
  SET_DATA(state, data) {
    state.data = data;
  }
}

export const actions = {
  async getStints({ commit, dispatch }) {
    commit("SET_LOADING", true);

    let stintsService = new StintsService();
    let stintsData = await stintsService.getStints();

    commit("SET_DATA", stintsData);
    commit("SET_LOADING", false);
  },
  setStintsLoading({ commit }, isLoading) {
    commit("loading", isLoading);
  }
}
