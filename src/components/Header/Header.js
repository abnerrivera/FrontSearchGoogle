import { Apps, Close, KeyboardVoice, Search, Settings } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar';
import React from 'react'
import logo from '../../assets/logoGoogle.png'

const Header = () => {
  return (
    <div className='header'>

      {/* SEARCH */}
      <div className='header__search'>

        <img src={logo} alt='logo' />

        <div className="header__search--bar">

          <input type="text" />

          <div className="header__search--bar--icons">
            <Close 
            style={{cursor:'pointer', color:'#757b80'}}
            
            />
            <KeyboardVoice 
            style={{cursor:'pointer', color:'#8ab4f8'}}
            />
            <Search 
            style={{cursor:'pointer', color:'#8ab4f8'}}
            />
          </div>
        </div>

      </div>

      {/* USER INFO */}
      <div className='header__user'>

        <Settings style={{marginRight:'20px'}}/>
        <Apps style={{marginRight:'20px'}}/>
        <Avatar style={{marginRight:'20px'}}/>

      </div>

    </div>
  )
}

export default Header