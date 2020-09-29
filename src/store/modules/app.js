const SIDEBAR_STATUS = 'sidebarStatus'

const state = {
    sidebar: {
        opened: localStorage.getItem(SIDEBAR_STATUS) ? !!+localStorage.getItem('sidebarStatus') : true,
    },
}

const mutations = {
    TOOGLE_SIDEBAR: state => {
        state.sidebar.opened = !state.sidebar.opened

        localStorage.setItem(SIDEBAR_STATUS, state.sidebar.opened ? 1 : 0)
    },
    CLOSE_SIDEBAR: (state) => {
        localStorage.setItem(SIDEBAR_STATUS, 0)
        state.sidebar.opened = false
    }
}

const actions = {
    toggleSidebar({ commit }) {
        commit('TOOGLE_SIDEBAR')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }