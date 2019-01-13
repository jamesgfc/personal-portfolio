export const state = () => ({
  slideoutOpen: false,
  slideoutAnimating: false,
})

export const mutations = {
  setSlideoutOpen(state, val) {
    state.slideoutOpen = val;
  },

  setSlideoutAnimating(state, val) {
    state.slideoutAnimating = val;
  }
}
