import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../common/Header'
import Menu from '../../common/Menu'

import './MainLayout.scss'

const MainLayout = () => {
  const [active, setActive] = useState(false)
  return (
    <div className={`container ${active ? 'active' : ''}`}>
      <Header
        active={active}
        setActive={setActive}
      />
      <div className="main-container">
        <div className="main">
          <div className="content">
            <div className="overlay">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
      <Menu
        active={active}
        setActive={setActive}
      />

    </div>
  )
}

export default MainLayout
