import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {
    name: 'Alexander Pierce',
    state: {
      color: '#3c763d',
      name: 'Online'
    }
  },
  badges: {
    messages: 0,
    notifications: 0,
    tasks: 0
  }
}

const mutations = {
  UPDATE_BADGE (state, key, value) {
    switch (key) {
      case 'messages':
      case 'notifications':
      case 'tasks':
        break
      default:
        return
    }
    state[key] = value
  }
}

const action = {
  updateBadge ({commit}, key, value) {
    commit('UPDATE_BADGE', key, value)
  }
}

const getters = {
  user: state => state.user,
  badges: state => state.badges
}

export default new Vuex.Store({
  state,
  getters,
  action,
  mutations
})
