import Link from 'next/link'
import React from 'react'

const Logo = () => (
  <Link className='logo' href='/'>
    <img className='logo__img' src='/img/logo.svg' alt='Rostelecom Logo' />
  </Link>
)

export default Logo
