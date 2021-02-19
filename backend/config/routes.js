module.exports = app => {

    app.route("/")
       .get(app.api.mercadorias.getProduct) 

    app.route("/produtos_grupo_eletrica")
       .get(app.api.mercadorias.getProdutosEletrica) 

    app.route("/produtos_grupo_tubos")
       .get(app.api.mercadorias.getProdutosTubos) 

    app.route("/produtos_grupo_ferragens")
       .get(app.api.mercadorias.getProdutosFerragens) 

    app.route("/produtos_grupo_tintas")
       .get(app.api.mercadorias.getProdutosTintas) 

    app.route("/produtos_grupo_reformas_construcao")
       .get(app.api.mercadorias.getProdutosReformasContrucao) 


}