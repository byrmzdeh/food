import React from 'react'
import Menu from '../../components/Menu'
import SliderHome from '../../components/Slider'
import Welcome from '../../components/Welcome'
import Services from '../../components/Services'
import SliderWrite from '../../components/SliderWrite'


const Home = () => {
  return (
    <div>
      <SliderHome />
      <Welcome />
      <Menu />
      <Services/>
      <SliderWrite/>

    </div>
  )
}

export default Home