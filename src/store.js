import Vue from 'vue'
import Vuex from 'vuex'

import { findIndex } from "@/util";

Vue.use(Vuex)

const options = {
  state: {
    navTags: [],
    isNavMenuOpen: true
  },
  mutations: {
    toggleMenuOpen(state, payload) {
      state.isNavMenuOpen = !state.isNavMenuOpen
    },
    addNavTag(state, view) {
      let index = findIndex(this.state.navTags, 'index', view.meta.index)

      state.navTags.forEach((item) => {
        item.active = false
      })

      if (index == -1) {
        state.navTags.push({
          index: view.meta.index,
          title: view.meta.title,
          active: true
        })
      } else {
        state.navTags[index].active = true
      }
    },
    removeNavTag(state, payload) {
      let index = state.navTags.findIndex((item) => {
        return item.index == payload.index
      })
      if (index == -1) {
        return
      }
      state.navTags.splice(index, 1)
    }
  },
  actions: {
    addNavTag({ state, commit}, view) {
      commit('addNavTag', view)
    },
    removeNavTag({ state, commit}, payload) {
      commit('removeNavTag', payload)
    }
  }
}

const store = new Vuex.Store(options)

export default store