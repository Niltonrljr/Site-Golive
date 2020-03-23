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
    <p>Existimos para realizar sonhos e para isso nos comprometemos com sua viagem desde o seu planejamento à chegada. Cuidamos do seu roteiro oferencendo toda a consultoria e cuidados necessários para o seu sucesso, assegurando os melhores serviços e preços disponíveis em circuitos no Brasil e no Mundo! Para isso dispomos de profissionais altamente qualificados e comprometidos, com ampla experiência e atuação no mercado de turismo. O nosso nome já te convida a realizar o melhor que a vida tem a oferecer: Ir ao vivo, vá viver, Go Live! Todos desejamos vivenciar e compartilhar experiências únicas e memoráveis e nada melhor que realizar tudo isso através de uma inesquecível viagem, à sua maneira, contando com toda a nossa dedicação e expertise! Então, já sentiu o desejo de fazer as malas e embarcar?! Vem conversar com quem entende de viagem. Go Live Viagens & Turismo! A Melhor Escolha para o Seu Destino!</p>
    <h3>...."Bora conhecer esse mundão com a gente"...????</h3>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/contato/">Go to Contato</Link>
  </Layout>
)

export default IndexPage
