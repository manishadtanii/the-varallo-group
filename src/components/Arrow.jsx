import React from 'react'

function Arrow({ customClass }) {
  return (
    <div>
        <div className={`w-11 h-11  rounded-full flex items-center justify-center ${customClass}`}>
        <i className="far fa-arrow-right"></i>
        </div>
    </div>
  )
}

export default Arrow