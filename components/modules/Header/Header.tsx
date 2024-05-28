'use client'
import Link from 'next/link'
import Logo from '@/components/elements/Logo/Logo'
import { useLang } from '@/hooks/useLang'
import Menu from './Menu'
import { openMenu, openSearchModal } from '@/context/modals'
import {
  addOverflowHiddenToBody,
  handleOpenAuthPopup,
} from '@/lib/utils/common'
import CartPopup from './CartPopup/CartPopup'

const Header = () => {
  const { lang, translations } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
  }

  const handleOpenSearchModal = () => {
    openSearchModal()
    addOverflowHiddenToBody()
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger' onClick={handleOpenMenu}>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='list-reset header__links'>
          <li className='header__links__item'>
            <button
              className='btn-reset header__links__item__btn header__links__item__btn--search'
              onClick={handleOpenSearchModal}
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/comparison'
              className='header__links__item__btn header__links__item__btn--compare'
            />
          </li>
          <li className='header__links__item'>
            {/* <Link
              href='/cart'
              className='header__links__item__btn header__links__item__btn--cart'
            /> */}
            <CartPopup />
          </li>
          <li className='header__links__item header__links__item--profile'>
            <button
              className='btn-reset header__links__item__btn header__links__item__btn--profile'
              onClick={handleOpenAuthPopup}
            />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
