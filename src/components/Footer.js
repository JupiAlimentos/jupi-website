import React from 'react'
import config from '../../config'

export default function Footer () {
  return (
    <footer id='footer'>
      <ul className='icons'>
        {config.socialLinks.map(social => {
           const { icon, name, url } = social
           return (
             <li>
               <a href={url} class={`icon ${icon}`}><span class='label'>{name}</span></a>
             </li>
           )
         })}
      </ul>
      <ul className='copyright'>
        <li>
          2020 © Jupi Alimentos   |   Todos os Diretios Reservados
        </li>
      </ul>
    </footer>
  )
}
