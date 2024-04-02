'use client'
import { useEffect, useState } from 'react'
import styles from './Header.css'
import Image from 'next/image'

export default function Header () {
  const [show, setShow] = useState(true)
  function Links () {
    const links = (
      <div className='links'>
        <a href='#'>Agence web</a>
        <a href='#'>Cration de site</a>
        <a href='#'>Référencement</a>
        <a href='#'>Webmastering et Maintenance</a>
        <a href='/reference'>Nos références</a>
        <a href='/contact'>Contact</a>
      </div>
    )
    const burger = (
        <div className='burger'>
          <a href='#'>Agence web</a>
          <a href='#'>Cration de site</a>
          <a href='#'>Référencement</a>
          <a href='#'>Webmastering et Maintenance</a>
          <a href='/reference'>Nos références</a>
          <a href='/contact'>Contact</a>
        </div>
      )
    return show ? links : burger
  }
  function toggleMenu () {
    if (show == true) setShow(false)
    else setShow(true)
  }
  return (
    <header>
      <nav>
        <div className='logo'>
          <a href='/'>
            <Image
              src='/logo-rural-agency-75px.png'
              width={75}
              height={75}
              alt='logo rural web agency'
            />
            <h1>
              Rural
              <br />
              Web
              <br />
              Agency
            </h1>
          </a>
        </div>
        <Links />
        <button id='button-burger' onClick={toggleMenu}>
          <Image
            src={'/burger-bar.png'}
            width={32}
            height={32}
            alt='icon menu burger'
          />
        </button>
      </nav>
      <div className='search-bar'>
        <input type='search' name='search-bar' id='search' />
      </div>
    </header>
  )
}
