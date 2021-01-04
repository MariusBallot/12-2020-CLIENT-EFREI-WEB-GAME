import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import config from "../utils/config"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        users: [],
        currUser: null,
        rewards: {
            icons: []
        }
    },
    mutations: {
        onLoadCurrUser(state, data) {
            state.currUser = data

        },
        onLoadUsers(state, data) {
            state.users = data

        },
        onLoadIcons(state, data) {
            state.rewards.icons = data
        },
        onLogOut(state) {
            state.currUser = null
        },
        onNewGame(state) {
            state.currUser.ngames++

        }

    },
    actions: {
        async register(context, req) {
            const res = await axios.post('/api/register', req)
            return res.data
        },
        async login(context, req) {
            const userRes = await axios.post('/api/login', req)
            let currUser = userRes.data.currUser
            console.log(userRes.data)
            if (!userRes.data.loggedIn)
                return userRes.data

            const userIconRes = await axios.get('/api/icon/' + currUser.icon)
            currUser.iconObj = userIconRes.data
            this.commit('onLoadCurrUser', currUser)
            return userRes.data
        },
        async loadIcons(context) {
            const res = await axios.get('/api/icons')
            this.commit('onLoadIcons', res.data)
        },
        async loadCurrUser(context) {
            const userRes = await axios.get('/api/user')
            if (!userRes.data.loggedIn)
                return
            let currUser = userRes.data.currUser
            const userIconRes = await axios.get('/api/icon/' + currUser.icon)
            currUser.iconObj = userIconRes.data
            this.commit('onLoadCurrUser', currUser)
        },
        async loadUsers(context) {
            const usersRes = await axios.get('/api/users')
            let users = usersRes.data
            const iconsRes = await axios.get('/api/icons/')
            let icons = iconsRes.data
            users.forEach(user => {
                icons.forEach(icon => {
                    if (icon.id == user.icon) {
                        user.iconObj = icon
                    }
                })
            });
            console.log(users)

            this.commit('onLoadUsers', usersRes.data)
        },

        async logOut(context) {
            const userRes = await axios.post('/api/logout')
            if (!userRes.data.loggedOut)
                return
            this.commit('onLogOut')
            return userRes.data
        },
        async newGame(context) {
            const newNgames = context.state.currUser.ngames + 1
            const userRes = await axios.put('/api/user', {
                ngames: newNgames
            })
            this.commit('onNewGame')
        },
        async gameFinished(context) {

        },
    }
})