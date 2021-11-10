export default {
    namespaced: true,
    state: {
        id: null,
        name: null,
        email: null,
        token: null
    },
    getters: {
        getToken(state, getters) {
            return state.token
        }
    },
    actions: {
        setUser(ctx, obj) {
            ctx.commit('set', obj)
        },
        logoutUser(ctx) {
            Object.keys(ctx.state).forEach(key => {
                ctx.commit('set', {
                    [key]: null
                })
            })
        },
        setUserParam(ctx, obj) {
            ctx.commit('setUserParam', obj)
        }
    },
    mutations: {
        setUserParam(state, obj) {
            state[obj.paramName] = obj.param
        },
        set(state, payload) {
            for (let i in payload) {
                state[i] = payload[i]
            }
        }
    }
}
