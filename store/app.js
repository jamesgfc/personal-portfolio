export const state = () => ({
  overlayOpen: false,
  overlayAnimating: false,
})

export const mutations = {
  setOverlayOpen(state, val) {
    state.overlayOpen = val;
  },

  setOverlayAnimating(state, val) {
    state.overlayAnimating = val;
  }
}
