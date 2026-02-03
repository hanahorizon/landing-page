import React from 'react'
import Banner from '../components/Banner'
import CardSection from '../components/CardSection'
import ContactForm from '../components/ContactForm'

const Home = () => {
  return (
    <>
    < Banner title="Welcome to Our Website" subtitle="Discover amazing content and connect with us!" buttonText="Get Started"  bannerImg="public\assets\hero-img-2.webp"/>

    <CardSection/>

    <ContactForm/>

    </>
  )
}

export default Home