// stocks de data, exporta apenas uma array de acoes
import stocks from '@/data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        // setStocks sera chamada pela action initStocks
        setStocks(state, payload) {
            state.stocks = payload
            // Vue-Tools 
            // console.log('stocks', state.stocks)
        }
    },
    actions: {
        // initStocks sera chamada ao estagio created() do component
        // App.vue
        initStocks({ commit }) {
            commit('setStocks', stocks)
        }
    }
}