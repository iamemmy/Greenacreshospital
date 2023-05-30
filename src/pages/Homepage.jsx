import React from 'react';
import "../style/main.css";
import Hero from "../components/Hero";
import Intro from '../components/Intro';
import Services from '../components/Services';

export default function Homepage() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
    </>
  )
}
