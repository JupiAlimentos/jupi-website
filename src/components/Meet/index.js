import React from 'react'

import Button from '../Button'

const Meet = () => (
  <div className='container bottomSpacer'>
    <h2 className='sectionHeadings'>Conheça a Jupi</h2>
    <div className='row'>
      <div className='col-8'>
        <div className='baseBox pd-40'>
          <h3>Conheça a Jupi</h3>
        </div>
      </div>
      <div className='col-4'>
        <div className='baseBox pd-40'>
          <h3 className='titleBox'>Onde encontrar nossos produtos?</h3>
          <p className='infoBox'>
            Aqui você encontra uma lista sempre atualizada dos nossos parceiros
          </p>
          <ul>
            <li>
              <div className='infoList'>
                <h4>Extra Supermercado</h4>
                <a href='#'>Onde encontrar ></a>
              </div>
              <img src='' alt='' />
            </li>
            <li>
              <div className='infoList'>
                <h4>Atacadão Supermercado</h4>
                <a href='#'>Onde encontrar ></a>
              </div>
              <img src='' alt='' />
            </li>
            <li>
              <div className='infoList'>
                <h4>Hiper Bompreço</h4>
                <a href='#'>Onde encontrar ></a>
              </div>
              <img src='' alt='' />
            </li>
            <li>
              <div className='infoList'>
                <h4>Comercial Carvalho Atacado</h4>
                <a href='#'>Onde encontrar ></a>
              </div>
              <img src='' alt='' />
            </li>
            <li>
              <div className='infoList'>
                <h4>Extra Supermercado</h4>
                <a href='#'>Onde encontrar ></a>
              </div>
              <img src='' alt='' />
            </li>
            <li>
              <div className='infoList'>
                <h4>Assaí Atacadista</h4>
                <a href='#'>Onde encontrar ></a>
              </div>
              <img src='' alt='' />
            </li>
          </ul>
          <Button
            slug='/atendimento'
            buttonClass='yellowButton'
            buttonTitle='Veja a lista completa'
          >
            Veja a lista completa
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export default Meet
