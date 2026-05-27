import React from 'react'
import './Info.scss'

const Info = () => {
  return (
    <div className="letter-image">
      <div className="animated-mail">
        <div className="back-fold"></div>
        <div className="letter">
          <div className="letter-title">Saddam Khan</div>
          <div className="letter-context">
            <p>+91-7037141469</p>
            <p>sid99705@gmail.com</p>
            <p>244901, Rampur, U.P, India</p>
          </div>
          <div className="letter-stamp">
            <div className="letter-stamp-inner"></div>
          </div>
        </div>
        <div className="top-fold"></div>
        <div className="body"></div>
        <div className="left-fold"></div>
      </div>
      <div className="shadow"></div>
    </div>
  )
}

export default Info
