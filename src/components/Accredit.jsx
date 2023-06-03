import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Accredit() {
  return (
    <div className='accredit'>
        <h3>Green Acres Hospital: <span>We are</span> HMO <span> Accredited </span></h3>
        <Link to="hmo">Check HMO List</Link>
    </div>
  )
}
