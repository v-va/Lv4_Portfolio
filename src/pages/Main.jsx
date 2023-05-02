import React from 'react'
import Layout from '../components/common/Layout'
import Nav from '../components/common/Nav'
import Header from '../components/common/Header'
import Contents from '../components/main/Contents'
import Footer from '../components/common/Footer'

const Main = () => {
  return (
    <>
      <Layout>
        <Nav />
        <Header />
        <Contents />
        <Footer />
      </Layout>
    </>
  )
}

export default Main
