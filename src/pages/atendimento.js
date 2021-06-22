import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import AttendanceComponent from '../components/Attendance'

const Attendance = () => (
  <Layout>
    <Seo title='Atendimento' />
    <div className='container mt-40'>
      <header className='container'>
        <h2 className='topSectionHeadings mb-30'>
          Onde encontrar nossos produtos?
        </h2>
      </header>
    </div>
    <div className='container'>
      <AttendanceComponent />
    </div>
  </Layout>
)

export default Attendance
