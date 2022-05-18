import { ClassOutlined, Image, Menu, Newspaper, OndemandVideo, Search } from '@mui/icons-material'
import React from 'react'

const Navbar = () => {
  return (
      <div className='navBar'>
        
        <span>
        <Search style={{marginRight:'5px', width:'15px'}}/>
          Todos
        </span>

        <span>
        <Image style={{marginRight:'5px', width:'15px'}}/>
          Imagenes
        </span>

        <span>
        <Newspaper style={{marginRight:'5px', width:'15px'}}/>
          Noticias
        </span>

        <span>
        <OndemandVideo style={{marginRight:'5px', width:'15px'}}/>
          Videos
        </span>

        <span>
        <ClassOutlined style={{marginRight:'5px', width:'15px'}}/>
          Libros
        </span>

        <span>
        <Menu style={{marginRight:'5px', width:'15px'}}/>
          Mas
        </span>

        <span style={{marginLeft:'20px'}}>
          Herramientas
        </span>
      </div>
  )
}

export default Navbar