import React from 'react'
import Banner from '../components/Banner'
import CardSection from '../components/CardSection'
import ContactForm from '../components/ContactForm'

const Home = () => {
  return (
    <>
    <Banner title="Driving Excellence Through Evolution & Trust." subtitle="GET TO KNOW US" buttonText="Learn more"  bannerImg="https://themejunction.net/html/bexon/demo/assets/images/hero/hero-img-2.webp"/>

    <CardSection/>

    <ContactForm/>

    </>
  )
}

export default Home