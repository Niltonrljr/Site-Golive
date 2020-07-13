import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Link to="/">Go back to the homepage</Link>
    <h1>Quem somos</h1>
    <p>Fundada em 2013, já com 7 anos de operação, atuamos no mercado de viagens à Lazer e Corporativo, dispondo de profissionais com ampla experiência e expertise no segmento de turismo, atendendo clientes em todo o território nacional e também internacional. A Go Live é uma empresa jovem e moderna que se destaca por seu atendimento personalizado e total comprometimento na realização do roteiro de seus clientes, do início ao final da viagem, assegurando os melhores serviços, preços e produtos. Temos parcerias com os principais fornecedores do mercado com todos os registros e qualificações que proporcionam aos seus clientes total confiabilidade.</p>
    <p>Existimos para realizar sonhos e para isso nos comprometemos com sua viagem desde o seu planejamento à chegada. Cuidamos do seu roteiro oferencendo toda a consultoria e cuidados necessários para o seu sucesso, assegurando os melhores serviços e preços disponíveis em circuitos no Brasil e no Mundo! Para isso dispomos de profissionais altamente qualificados e comprometidos, com ampla experiência e atuação no mercado de turismo. O nosso nome já te convida a realizar o melhor que a vida tem a oferecer: Ir ao vivo, vá viver, Go Live! Todos desejamos vivenciar e compartilhar experiências únicas e memoráveis e nada melhor que realizar tudo isso através de uma inesquecível viagem, à sua maneira, contando com toda a nossa dedicação e expertise! Então, já sentiu o desejo de fazer as malas e embarcar?! Vem conversar com quem entende de viagem. Go Live Viagens & Turismo! A Melhor Escolha para o Seu Destino!</p>
    <h1>Conheça nossos consultores</h1>
    <Link to="/index/">Go to index</Link>
    <Link to="/Contato/">Go to Contato</Link>
    
  </Layout>
)

export default SecondPage
