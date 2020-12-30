import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

const url = "http://localhost:3000"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        users: [],
        currUser: {},
        rewards: {
            icons: []
        }
    },
    mutations: {
        onLoadCurrUser(state, data) {
            state.currUser = data.currUser
            console.log(state)
        },
        onLoadIcons(state, data) {
            state.rewards.icons = data
            console.log(state.rewards.icons)
        }

    },
    actions: {
        async register(context, req) {
            const res = await axios.post(url + '/register', req)
            return res.data
        },
        async login(context, req) {
            const res = await axios.post(url + '/login', req)
            // this.commit('onLoadCurrUser', res.data)

            return res.data
        },
        async loadIcons(context) {
            const res = await axios.get(url + '/icons')
            this.commit('onLoadIcons', res.data)
        },
        async loadCurrUser(context) {
            const res = await axios.get(url + '/user')
            console.log(res.data)
            this.commit('onLoadCurrUser', res.data)
        },
    }
}) 