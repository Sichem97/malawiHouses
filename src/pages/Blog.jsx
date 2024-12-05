import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BreadCrumbs from './Component/BreadCrumbs'
import SingleNews from './Component/SingleNews'

export default function Blog() {
  return (
    <div>
      <>
      <Header/>
      </>
      <>
      <BreadCrumbs/>

      <SingleNews/>
      </>
      <>
      <Footer/>
      </>
    </div>
  )
}
