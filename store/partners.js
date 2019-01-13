import PartnersService from "@/services/api/partners"

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
  async getPartners({ commit, dispatch }) {
    console.log("in store");
    dispatch("SET_LOADING", true);

    let partnersService = new PartnersService();
    let partnersData = await partnersService.getPartners();

    commit("SET_DATA", partnersData);
    commit("SET_LOADING", false);
  },
  setPartnersLoading({ commit }, isLoading) {
    commit("loading", isLoading);
  }
}
