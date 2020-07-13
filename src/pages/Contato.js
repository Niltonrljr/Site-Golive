import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Informações de Contato</h1>
    <h2>Gostaríamos muito de auxiliar na preparação de sua próxima viagem. Para nos ajudar a ter uma ideia do que você precisa, preencha este formulário de contato.</h2>
    <h3>Rua Jorge Angel Livraga, 154. Sl. 301
Belo Horizonte - MG
Estado e CEP 31155-420 E-mail: atendimento@goliveturismo.com.br
Telefone: 55-31-3504-3686</h3>
    <Link to="/PagInicial/">Go to PagInicial</Link>
    <Link to="/Quem somos/">Go to Quem somos</Link>
  </Layout>
)

export default NotFoundPage
