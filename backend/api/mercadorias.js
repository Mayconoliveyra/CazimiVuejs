module.exports = app => {
  getProduct = async (req, res) => {
    app.db("Cadastro de mercadorias")
      .select("Código da Mercadoria", "Mercadoria", "Preço de Venda", "Unidades em Estoque", "url")
      /*   .where({"Código da Mercadoria": 1}) */
      .then(mercadorias => res.json(mercadorias))
      .catch(err => res.status(500).send(err))
  }

  getProdutosMaisVendidos = async (req, res) => {
    app.db("Cadastro de mercadorias")
      .select("Código da Mercadoria", "Mercadoria", "Preço de Venda", "Unidades em Estoque", "url")
      /*   .where({"Código da Mercadoria": 1}) */
      .then(mercadorias => res.json(mercadorias))
      .catch(err => res.status(500).send(err))
  }

  getProdutosEletrica = async (req, res) => {
    app.db("Cadastro de mercadorias")
      .select("Código da Mercadoria", "Mercadoria", "Preço de Venda", "Unidades em Estoque", "url")
      .where({ "Grupo": "ELETRICA" })
      .then(mercadorias => res.json(mercadorias))
      .catch(err => res.status(500).send(err))
  }

  getProdutosTubos = async (req, res) => {
    app.db("Cadastro de mercadorias")
      .select("Código da Mercadoria", "Mercadoria", "Preço de Venda", "Unidades em Estoque", "url")
      .where({ "Grupo": "TUBOS" })
      .then(mercadorias => res.json(mercadorias))
      .catch(err => res.status(500).send(err))
  }
  
  getProdutosFerragens = async (req, res) => {
    app.db("Cadastro de mercadorias")
      .select("Código da Mercadoria", "Mercadoria", "Preço de Venda", "Unidades em Estoque", "url")
      .where({ "Grupo": "FERRAGENS" })
      .then(mercadorias => res.json(mercadorias))
      .catch(err => res.status(500).send(err))
  }

  getProdutosTintas = async (req, res) => {
    app.db("Cadastro de mercadorias")
      .select("Código da Mercadoria", "Mercadoria", "Preço de Venda", "Unidades em Estoque", "url")
      .where({ "Grupo": "TINTAS" })
      .then(mercadorias => res.json(mercadorias))
      .catch(err => res.status(500).send(err))
  }

  getProdutosReformasContrucao = async (req, res) => {
    app.db("Cadastro de mercadorias")
      .select("Código da Mercadoria", "Mercadoria", "Preço de Venda", "Unidades em Estoque", "url")
      .where({ "Grupo": "REFORMAS E CONSTRUÇÃO" })
      .then(mercadorias => res.json(mercadorias))
      .catch(err => res.status(500).send(err))
  }

  return { getProduct, getProdutosEletrica, getProdutosTubos, getProdutosFerragens, getProdutosTintas, getProdutosReformasContrucao  }
}