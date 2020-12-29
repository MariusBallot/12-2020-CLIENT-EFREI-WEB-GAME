import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

const url = "http://localhost:3000"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        users: [],
        currUser: {}
    },
    mutations: {
        async loadUser(state) {
            const res = await axios.get(url + '/users')
            state.users = res.data
        },

    },
    actions: {
        async register(req) {

        },
        async login(state, req) {
            const res = await axios.post(url + '/login', req)
            state.currUser = res.data.currUser
            return res.data
        },
    }
}) 