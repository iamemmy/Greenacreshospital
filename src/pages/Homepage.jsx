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

export default function Homepage() {

  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Accredit />
      <Appointment />
      <Slides />
      <Mobileslide />
      <Footer />
    </>
  )
}
