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
            icons: [{
                name: "ghLogo",
                locked: false,
                id: 0,
                url: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                lvl: 0,
                description: "un logo gh stylay",
                author: {
                    name: "@marius.ballot",
                    url: "https://www.instagram.com/marius.ballot/"
                }
            },
            {
                name: "ghLogo",
                locked: false,
                id: 1,
                url: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                lvl: 0,
                description: "un logo gh stylay",
                author: {
                    name: "@marius.ballot",
                    url: "https://www.instagram.com/marius.ballot/"
                }
            },
            {
                name: "ghLogo",
                locked: true,
                id: 2,
                url: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                lvl: 2,
                description: "un logo gh stylay",
                author: {
                    name: "@marius.ballot",
                    url: "https://www.instagram.com/marius.ballot/"
                }
            }]
        }
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