export default {
    state: {
        funds: 10000,
        stocks: []
    },
    getters: {
        // para acessar o saldo é necessario um getter que sera
        // mapeado em uma propriedade computada
        funds(state) {
            return state.funds
        }
    }
}