import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import AttendanceComponent from '../components/Attendance'

const Attendance = () => (
  <Layout>
    <Seo title='Atendimento' />
    <div className='container'>
      <h2 className='topSectionHeadings'>Onde encontrar nossos produtos?</h2>
      <AttendanceComponent />
    </div>
  </Layout>
)

export default Attendance
