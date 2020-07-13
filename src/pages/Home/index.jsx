import React from 'react';
import logo from '../../assets/logo.png';

import Header from '../components/Header';

export default function Home() {
  return (
    <div className="Home">
      <Header
        imageSource={logo}
        imageTitle="Logo"
      />
    </div>
  )
}
