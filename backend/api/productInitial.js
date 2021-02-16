module.exports = app => {
    getProduct = async (req, res) => {
        app.db("Cadastro de mercadorias")
            .select("Código da Mercadoria", "Mercadoria", "Preço de Venda", "Unidades em Estoque", )
          /*   .where({"Código da Mercadoria": 1}) */
            .then(mercadorias => res.json(mercadorias))
            .catch(err => res.status(500).send(err))
    }

    return { getProduct }
}