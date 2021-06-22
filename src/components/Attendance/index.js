import React from 'react'
import { Link } from 'gatsby'

import partiner01 from '../../images/partners/partner-1.jpg'
import partiner02 from '../../images/partners/partner-2.jpg'
import partiner03 from '../../images/partners/partner-3.jpg'
import partiner04 from '../../images/partners/partner-4.jpg'
import partiner05 from '../../images/partners/partner-5.jpg'

import {
  AttendanceBox,
  AttendanceBoxTitle,
  AttendanceBoxContent
} from './style'

const AttendanceComponent = () => (
  <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
    <div className='col d-flex flex-column flex-wrap'>
      <AttendanceBox>
        <AttendanceBoxContent>
          <AttendanceBoxTitle>Extra Supermercado</AttendanceBoxTitle>
          <Link
            className='linkText'
            to='/atendimento'
            title='Ir para Extra Supermercado'
          >
            Onde encontrar <span className='arrow' />
          </Link>
        </AttendanceBoxContent>
        <img src={partiner01} alt='Extra Supermercado' />
      </AttendanceBox>
    </div>
    <div className='col d-flex flex-column flex-wrap'>
      <AttendanceBox>
        <AttendanceBoxContent>
          <AttendanceBoxTitle>Atacadão Supermercado</AttendanceBoxTitle>
          <Link
            className='linkText'
            to='/atendimento'
            title='Ir para Atacadão Supermercado'
          >
            Onde encontrar <span className='arrow' />
          </Link>
        </AttendanceBoxContent>
        <img src={partiner02} alt='Atacadão Supermercado' />
      </AttendanceBox>
    </div>
    <div className='col d-flex flex-column flex-wrap'>
      <AttendanceBox>
        <AttendanceBoxContent>
          <AttendanceBoxTitle>Hiper Bompreço</AttendanceBoxTitle>
          <Link
            className='linkText'
            to='/atendimento'
            title='Ir para Hiper Bompreço'
          >
            Onde encontrar <span className='arrow' />
          </Link>
        </AttendanceBoxContent>
        <img src={partiner03} alt='Hiper Bompreço' />
      </AttendanceBox>
    </div>
    <div className='col d-flex flex-column flex-wrap'>
      <AttendanceBox>
        <AttendanceBoxContent>
          <AttendanceBoxTitle>Comercial Carvalho Atacado</AttendanceBoxTitle>
          <Link
            className='linkText'
            to='/atendimento'
            title='Ir para Comercial Carvalho Atacado'
          >
            Onde encontrar <span className='arrow' />
          </Link>
        </AttendanceBoxContent>
        <img src={partiner04} alt='Comercial Carvalho Atacado' />
      </AttendanceBox>
    </div>
    <div className='col d-flex flex-column flex-wrap'>
      <AttendanceBox>
        <AttendanceBoxContent>
          <AttendanceBoxTitle>Assaí Atacadista</AttendanceBoxTitle>
          <Link
            className='linkText'
            to='/atendimento'
            title='Ir para Assaí Atacadista'
          >
            Onde encontrar <span className='arrow' />
          </Link>
        </AttendanceBoxContent>
        <img src={partiner05} alt='Assaí Atacadista' />
      </AttendanceBox>
    </div>
    <div className='col d-flex flex-column flex-wrap'>
      <AttendanceBox>
        <AttendanceBoxContent>
          <AttendanceBoxTitle>Extra Supermercado</AttendanceBoxTitle>
          <Link
            className='linkText'
            to='/atendimento'
            title='Ir para Extra Supermercado'
          >
            Onde encontrar <span className='arrow' />
          </Link>
        </AttendanceBoxContent>
        <img src={partiner01} alt='Extra Supermercado' />
      </AttendanceBox>
    </div>
    <div className='col d-flex flex-column flex-wrap'>
      <AttendanceBox>
        <AttendanceBoxContent>
          <AttendanceBoxTitle>Atacadão Supermercado</AttendanceBoxTitle>
          <Link
            className='linkText'
            to='/atendimento'
            title='Ir para Atacadão Supermercado'
          >
            Onde encontrar <span className='arrow' />
          </Link>
        </AttendanceBoxContent>
        <img src={partiner02} alt='Atacadão Supermercado' />
      </AttendanceBox>
    </div>
    <div className='col d-flex flex-column flex-wrap'>
      <AttendanceBox>
        <AttendanceBoxContent>
          <AttendanceBoxTitle>Hiper Bompreço</AttendanceBoxTitle>
          <Link
            className='linkText'
            to='/atendimento'
            title='Ir para Hiper Bompreço'
          >
            Onde encontrar <span className='arrow' />
          </Link>
        </AttendanceBoxContent>
        <img src={partiner03} alt='Hiper Bompreço' />
      </AttendanceBox>
    </div>
    <div className='col d-flex flex-column flex-wrap'>
      <AttendanceBox>
        <AttendanceBoxContent>
          <AttendanceBoxTitle>Comercial Carvalho Atacado</AttendanceBoxTitle>
          <Link
            className='linkText'
            to='/atendimento'
            title='Ir para Comercial Carvalho Atacado'
          >
            Onde encontrar <span className='arrow' />
          </Link>
        </AttendanceBoxContent>
        <img src={partiner04} alt='Comercial Carvalho Atacado' />
      </AttendanceBox>
    </div>
    <div className='col d-flex flex-column flex-wrap'>
      <AttendanceBox>
        <AttendanceBoxContent>
          <AttendanceBoxTitle>Assaí Atacadista</AttendanceBoxTitle>
          <Link
            className='linkText'
            to='/atendimento'
            title='Ir para Assaí Atacadista'
          >
            Onde encontrar <span className='arrow' />
          </Link>
        </AttendanceBoxContent>
        <img src={partiner05} alt='Assaí Atacadista' />
      </AttendanceBox>
    </div>
  </div>
)

export default AttendanceComponent
