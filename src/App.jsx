import { Typography } from '@mui/material'
import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const App = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
      <Banner />
      <Navbar />
      <Section1 />
      <Section2/>
      <Section3 />
    </div>
  )
}

export default App
