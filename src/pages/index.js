import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Transforme a viagem de seus sonhos em realidade</h1>
    <h2>Olá somos a Agência de Viagens Go Live & Turismo!</h2>
    <h3>Consultoria especializada na elaboração de seu roteiro de viagem</h3>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <img src="C:\Users\adria\Desktop\Site - Golive\Site-Golive\Imagem\brown-camel-931881.jpg" alt= "Imagem pagina inicial" width="100" height="200"/>
    <Link to="/Quem somos/">Go to Quem somos</Link>
    <Link to="/Contato/">Go to Contato</Link>
  </Layout>
  )

export default IndexPage
