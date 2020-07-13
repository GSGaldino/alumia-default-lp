import React from 'react';

import './styles.css';

export default function Header({imageSource, imageTitle}){
  return (
    <header className="Header">
      <div className="Container">
        <img
          src={imageSource}
          alt={imageTitle}
          title={imageTitle}
        />
      </div>
      <div className="Container">
        <span className="Sandwich">
        </span>
      </div>
    </header>
  )
}
