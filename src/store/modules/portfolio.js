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
    },
    mutations: {
        // buyStock é setter de portfolio
        buyStock(state, order) {
            // verifica se o usuário já possui ações desta empresa
            const res = state.stocks.find(e => e.id == order.id)

            if(res) {
                // atualiza a quantidade das ações em posse
                res.quantity += order.quantity
            } else {
                // senão registra uma nova ação no portfolio do usuário
                state.stocks.push({
                    // o id é extremamente importante para o ref. das açoes
                    id: order.id,
                    quantity: order.quantity
                    // o preço não é necessário na carteira do usuário, a menos
                    // que tenha que manter um historico do valor no momento da compra DICA!!!
                    // DIca: implementar um historico de preço da ação com gráficos!
                    // vuetify tem components de gráficos
                })
            }

            // atualiza o saldo do portfolio
            state.funds -= order.quantity * order.price
        }
    }
}