import React from 'react'

const Header = ({title}) => {
  return (
    <div className="nb-10">
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
  )
}

export default Header
