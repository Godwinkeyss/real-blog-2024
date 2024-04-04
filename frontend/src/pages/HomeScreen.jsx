import React from 'react'

import Hero from '../components/hero/Hero'
import SmallBlog from '../components/SmallBlog/SmallBlog'
import Advert from '../components/Advertisment/Advert'

const HomeScreen = () => {
  return (
    <div>
     <Hero />
     <SmallBlog />
     <Advert />
    </div>
  )
}

export default HomeScreen
