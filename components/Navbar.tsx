import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import { AnimatePresence, m } from 'framer-motion'

import Link from 'next/link'
interface Props {
  logo?: string
  title?: string
  state: {
    isMobileNavOpen: boolean
  }
  setState: Dispatch<SetStateAction<{ isMobileNavOpen: boolean }>>
}

export default function Navbar(props: Props) {
  const { title, state, setState } = props
  const { theme, setTheme } = useTheme()
  const [color, setColor] = useState('white')
  const [icon, setIcon] = useState(null)

  useEffect(() => {
    setColor(theme === 'dark' ? 'white' : 'black')
    setIcon(
      theme === 'dark' ? (
        <SunIcon className="w-7 transition-opacity duration-500 delay-75 ease-linear" />
      ) : (
        <MoonIcon className="w-7 text-fuchsia-400 transition-opacity duration-500 delay-75 ease-linear" />
      )
    )
  }, [theme])

  function handleMobileNav() {
    setState((prevState) => ({
      ...prevState,
      isMobileNavOpen: !prevState.isMobileNavOpen,
    }))
  }
  function handleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <nav className="fixed h-20 z-10 bg-light/90 dark:bg-dark/90 filter backdrop-blur-sm flex justify-between items-center w-full py-4 px-base">
      <ul>
        <li className="hidden lg:flex">
          <Link href="/">
            <a className="cursor-pointer">{title}</a>
          </Link>
        </li>
        <li className="lg:hidden">
          <Hamburger
            label="Show Menu"
            rounded
            color={color}
            size={24}
            toggled={state.isMobileNavOpen}
            toggle={handleMobileNav}
          />
        </li>
      </ul>
      <ul className="hidden lg:flex space-x-4">
        <li>
          <Link href="/">
            <a className="cursor-pointer">Work</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="cursor-pointer">About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="cursor-pointer">Contact</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <button
            aria-label="Button to change color theme"
            onClick={handleTheme}
            className="relative w-10 h-10"
          >
            <AnimatePresence initial={false}>
              <div className="absolute inset-0 flex justify-center items-center">
                {theme === 'dark' ? (
                  <m.div
                    key="themeButton"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex justify-center items-center"
                  >
                    {icon}
                  </m.div>
                ) : (
                  <m.div
                    key="lightThemeButton"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex justify-center items-center"
                  >
                    {icon}
                  </m.div>
                )}
              </div>
            </AnimatePresence>
          </button>
        </li>
      </ul>
    </nav>
  )
}
