import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import config from "../utils/config"

const url = "http://localhost:3000"

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

        onLoadIcons(state, data) {
            state.rewards.icons = data
        }

    },
    actions: {
        async register(context, req) {
            const res = await axios.post(url + '/register', req)
            return res.data
        },
        async login(context, req) {
            const userRes = await axios.post(url + '/login', req)
            let currUser = userRes.data.currUser
            const userIconRes = await axios.get(url + '/icon/' + currUser.icon, req)
            currUser.iconObj = userIconRes.data
            this.commit('onLoadCurrUser', currUser)
            return userRes.data
        },
        async loadIcons(context) {
            const res = await axios.get(url + '/icons')
            this.commit('onLoadIcons', res.data)
        },
        async loadCurrUser(context) {
            const res = await axios.get(url + '/user')
            this.commit('onLoadCurrUser', res.data)
        },
    }
})

if (config.fakeUser) {
    store.state.currUser = {
        gametag: "UserName_G@mer",
        icon: 4,
        iconObj: {
            "tex": "cuteTigre",
            "image": [
                {
                    "id": "attTCTqzmQ0pCSCvG",
                    "url": "https://dl.airtable.com/.attachments/585c117c3abfde19fb7db26a049b0b77/02bc256f/giphy.gif",
                    "filename": "giphy.gif",
                    "size": 267023,
                    "type": "image/gif",
                    "thumbnails": {
                        "small": {
                            "url": "https://dl.airtable.com/.attachmentThumbnails/0e21400ec9629971808bb5b26f09b94f/764fc077",
                            "width": 36,
                            "height": 36
                        },
                        "large": {
                            "url": "https://dl.airtable.com/.attachmentThumbnails/ae3ed65ef849c779c6ec16caaa23affd/04ffff8d",
                            "width": 480,
                            "height": 480
                        },
                        "full": {
                            "url": "https://dl.airtable.com/.attachmentThumbnails/cee8f66a9da45b76a37d464aafe6fa8d/bc66d567",
                            "width": 3000,
                            "height": 3000
                        }
                    }
                }
            ],
            "id": 1,
            "description": "Un tit tigre qu'il est chou tsé genre il é trobo",
            "level": 0,
            "authorId": 1
        },
        id: 12,
        level: 0,
        mail: "UserName_G@mer",
        ngames: 0,
        personalbest: 0,
    }
}