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
        async loadUser() {
            const res = await axios.get(url + '/users')
            let users = res.data
        },

    },
    actions: {
        register(req) {

        },
        async login(state, req) {
            const res = await axios.get(url + '/users')
            console.log(res.data)
        },
    }
}) 