import SkillsService from "@/services/api/skills"

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

export const getters = {
  featuredSkills: state => {
    return state.data.filter(skill => skill.featured);
  },

  technicalSkills: state => {
    return state.data.filter(skill => skill.category === "technical");
  },

  professionalSkills: state => {
    return state.data.filter(skill => skill.category === "professional");
  }
}

export const actions = {
  async getSkills({ commit }) {
    commit("SET_LOADING", true);

    let skillsService = new SkillsService();
    let skillsData = await skillsService.getSkills();

    commit("SET_DATA", skillsData);
    commit("SET_LOADING", false);
  },
  setSkillsLoading({ commit }, isLoading) {
    commit("loading", isLoading);
  }
}
