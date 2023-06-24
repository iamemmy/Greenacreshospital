import React from 'react';
import "../style/main.css";
import Hero from "../components/Hero";
import Intro from '../components/Intro';
import Services from '../components/Services';
import Appointment from '../components/Appointment';
import Footer from '../components/Footer';
import Accredit from '../components/Accredit';
import Slides from '../components/Slides';
import Mobileslide from '../components/Mobileslide';
import Faqs from '../components/Faqs';
import Reviews from '../components/Reviews';

export default function Homepage() {

  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Accredit />
      <Appointment />
      <Reviews />
      <Slides />
      <Mobileslide />
      <Faqs />
      <Footer />
    </>
  )
}
