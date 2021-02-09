import React from 'react'
import { Link } from 'gatsby'

import Button from '../Button'
import StyledBackgroundSection from './StyledBG'

import {
  AttendanceList,
  AttendanceTitle,
  AttendanceItem,
  AttendanceContent
} from './style'

import partiner01 from '../../images/partners/partner-1.jpg'
import partiner02 from '../../images/partners/partner-2.jpg'
import partiner03 from '../../images/partners/partner-3.jpg'
import partiner04 from '../../images/partners/partner-4.jpg'
import partiner05 from '../../images/partners/partner-5.jpg'

const Meet = () => (
  <div className='container bottomSpacer'>
    <h2 className='sectionHeadings'>Jupi Alimentos</h2>
    <div className='row'>
      <div className='mb-sm-40 col-md-6 col-xl-8 d-flex'>
        <StyledBackgroundSection className='baseBox dark pd-0' />
      </div>
      <div className='col-md-6 col-xl-4 d-flex'>
        <div className='baseBox'>
          <h3 className='titleBox'>Onde encontrar nossos produtos?</h3>
          <p className='infoBox'>
            Aqui você encontra uma lista sempre atualizada dos nossos parceiros
          </p>
          <AttendanceList>
            <AttendanceItem>
              <AttendanceContent>
                <AttendanceTitle>Extra Supermercado</AttendanceTitle>
                <Link className='linkText' to='/atendimento'>
                  Onde encontrar <span className='arrow' />
                </Link>
              </AttendanceContent>
              <img src={partiner01} alt='Extra Supermercado' />
            </AttendanceItem>
            <AttendanceItem>
              <AttendanceContent>
                <AttendanceTitle>Atacadão Supermercado</AttendanceTitle>
                <Link className='linkText' to='/atendimento'>
                  Onde encontrar <span className='arrow' />
                </Link>
              </AttendanceContent>
              <img src={partiner02} alt='Atacadão Supermercado' />
            </AttendanceItem>
            <AttendanceItem>
              <AttendanceContent>
                <AttendanceTitle>Hiper Bompreço</AttendanceTitle>
                <Link className='linkText' to='/atendimento'>
                  Onde encontrar <span className='arrow' />
                </Link>
              </AttendanceContent>
              <img src={partiner03} alt='Hiper Bompreço' />
            </AttendanceItem>
            <AttendanceItem>
              <AttendanceContent>
                <AttendanceTitle>Comercial Carvalho Atacado</AttendanceTitle>
                <Link className='linkText' to='/atendimento'>
                  Onde encontrar <span className='arrow' />
                </Link>
              </AttendanceContent>
              <img src={partiner04} alt='Comercial Carvalho Atacado' />
            </AttendanceItem>
            <AttendanceItem>
              <AttendanceContent>
                <AttendanceTitle>Assaí Atacadista</AttendanceTitle>
                <Link className='linkText' to='/atendimento'>
                  Onde encontrar <span className='arrow' />
                </Link>
              </AttendanceContent>
              <img src={partiner05} alt='Assaí Atacadista' />
            </AttendanceItem>
          </AttendanceList>
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
