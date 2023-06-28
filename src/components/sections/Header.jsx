import logo from '../../assets/shared/desktop/logo-dark.png'
import { NavLink, Link } from "react-router-dom";
import menuOpen from '../../assets/shared/mobile/icon-hamburger.svg'
import menuClose from '../../assets/shared/mobile/icon-close.svg'
import { useState } from 'react';

const Header = () => {
  const [menu, setMenu] = useState(0);

  const clickmenu = () => {
    if (menu === 0) {
      setMenu(1)
    } else {
      setMenu(0)
    }
  }

  const reset = () =>{
    setMenu(0);
  }
  return (
    <>
      <div className="flex items-center justify-between container h-20 md:mx-auto md:w-[71rem] w-[25rem] px-4 md:mt-11">
        <Link to={'/'}><img className='w-56' src={logo} alt="logo" /></Link>
        <nav className='hidden md:flex gap-x-12 text-dmp-black tracking-[2px] text-[14px]'>
          <NavLink to={'/ourcompany'} className={`hover:underline hover:decoration-dmp-dark-gray/30`}>NUESTRA COMPAÑIA</NavLink>
          <NavLink to={'/location'} className={`hover:underline hover:decoration-dmp-dark-gray/30`}>UBICACIONES</NavLink>
          <NavLink to={'/contact'} className={`hover:underline hover:decoration-dmp-dark-gray/30`}>CONTACTO</NavLink>
        </nav>
        {
          menu === 0 ? (
            <img onClick={clickmenu} className='md:hidden cursor-pointer' src={menuOpen} alt="" />
          ) : (
            <img onClick={clickmenu} className='md:hidden cursor-pointer' src={menuClose} alt="" />
          )
        }
      </div>

      {
        menu === 1 ? (
          <>
            <nav className='flex absolute bg-dmp-black text-[22px] pl-6 pt-10 gap-y-7 text-white flex-col z-40 w-[26rem] h-[15rem]'>
              <NavLink onClick={reset} to={'/ourcompany'} className={`hover:underline hover:decoration-dmp-dark-gray/30`}>NUESTRA COMPAÑIA</NavLink>
              <NavLink onClick={reset} to={'/location'} className={`hover:underline hover:decoration-dmp-dark-gray/30`}>UBICACIONES</NavLink>
              <NavLink onClick={reset} to={'/contact'} className={`hover:underline hover:decoration-dmp-dark-gray/30`}>CONTACTO</NavLink>
            </nav>
            <div className='absolute w-[26rem] h-[250rem] mt-[240px] bg-dmp-black/60 z-40'></div>
          </>
        ) : (
          <></>
        )
      }
    </>
  )
}

export default Header