import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import Cover from '../components/Cover'

const About = () => (
  <Layout>
    <Seo title='Sobre Nós' />
    <section className='container mt-main'>
      <Cover className='mb-0'>
        <StaticImage
          src='../images/cover-contact-jupi.jpg'
          alt='Visite a Jupi Alimentos'
          placeholder='blurred'
          layout='fullWidth'
        />
      </Cover>
    </section>
    <div className='container verticalSpacer'>
      <div className='row'>
        <div className='col-12 col-lg-10 offset-lg-1 verticalTxtSpacer'>
          <h1 className='postTitle'>Conheça a nossa história</h1>
          <p className='highlightBody'>
            A JUPI Alimentos é uma empresa industrial que emprega os novos
            conceitos gerenciais, administrativos e tecnológicos para se tornar
            a maior do Brasil.
          </p>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='wrapperBoxWhite'>
            <h1>Nossa cultura</h1>
            <p className='bodyLevelUp'>
              A JUPI ALIMENTOS observa os mais rígidos padrões de higiene e
              emprega as melhores práticas para a manutenção do ambiente
              saudável em todas as etapas do processo de produção e, por isso,
              tem o absoluto controle de qualidade dos alimentos que processa.
              Esses cuidados começam no início da cadeia produtiva, quando são
              selecionados os melhores grãos, e continuam durante todo o
              processo, até chegar na fase industrial, onde a Jupi Alimentos
              conta com os melhores equipamentos e pessoal qualificado para
              entregar, na sua mesa, um produto saudável e delicioso.
            </p>
            <hr className='divider' />
            <div className='row'>
              <div className='col-md-6'>
                <div className='contextBox'>
                  <h3>Missão</h3>
                  <p className='bodyLevelUp'>
                    Levar à mesa das famílias brasileiras alimentos nutritivos e
                    de qualidade, respeitando todas as normas de segurança
                    alimentar e, ao mesmo tempo, seguindo os preceitos do
                    desenvolvimento sustentável, observando o respeito ao meio
                    ambiente e à cadeia produtiva, gerando valor aos nossos
                    colaboradores, aos clientes e à sociedade.
                  </p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='contextBox'>
                  <h3>Visão</h3>
                  <p className='bodyLevelUp'>
                    Ser a maior e melhor indústria de alimentos do Brasil,
                    oferecendo produtos que satisfaçam às expectativas dos
                    consumidores e às suas necessidades nutricionais,
                    contribuindo para o desenvolvimento econômico regional,
                    buscando sempre o crescimento contínuo através da gestão
                    participativa e do fortalecimento desse setor na economia
                    nacional.
                  </p>
                </div>
              </div>
              <div className='col-12'>
                <div className='contextBox mb-0'>
                  <h3>Valores</h3>
                  <p className='bodyLevelUp'>
                    Oferecer produtos confiáveis, com uma linha de produção
                    transparente, da plantação ao processamento industrial,
                    utilizando conduta consistente, com:
                  </p>
                </div>
                <hr className='divider' />
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                  <div className='col d-flex flex-column flex-wrap'>
                    <h5>Honestidade</h5>
                    <p className='mb-0'>
                      Nossas ações e relações são baseadas na verdade,
                      integridade, ética, transparência, justiça e bem comum.
                    </p>
                  </div>
                  <div className='col d-flex flex-column flex-wrap'>
                    <h5>Sustentabilidade</h5>
                    <p className='mb-0'>
                      Construímos diariamente um futuro sustentável trazendo
                      para a nossa prática os aspectos ambientais, sociais e
                      econômicos.
                    </p>
                  </div>
                  <div className='col d-flex flex-column flex-wrap'>
                    <h5>Paixão</h5>
                    <p className='mb-0'>
                      Comprometidos de corpo e alma, devemos criar
                      oportunidades, ter sede de fazer sempre mais e realizar.
                    </p>
                  </div>
                  <div className='col d-flex flex-column flex-wrap'>
                    <h5>Foco no Cliente</h5>
                    <p className='mb-0'>
                      Ele é a razão da existência de qualquer negócio. Nossa
                      metodologia de trabalho é inteiramente direcionada às
                      demandas do cliente.
                    </p>
                  </div>
                  <div className='col d-flex flex-column flex-wrap'>
                    <h5>Valorização das Pessoas</h5>
                    <p className='mb-0'>
                      São as pessoas a maior riqueza de qualquer empreendimento
                      e o grande diferencial que torna tudo possível.
                    </p>
                  </div>
                  <div className='col d-flex flex-column flex-wrap'>
                    <h5>Eficiência</h5>
                    <p className='mb-0'>
                      Fazemos com que as atividades e os processos deem certo. O
                      nosso comportamento e uso dos recursos é de
                      responsabilidade de todos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
