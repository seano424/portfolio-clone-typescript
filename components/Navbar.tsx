import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Squash as Hamburger } from 'hamburger-react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { AnimatePresence, m } from 'framer-motion'

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
  const [navState, setNavState] = useState({
    color: 'white',
    icon: null,
  })

  useEffect(() => {
    setNavState(() => ({
      color: theme === 'dark' ? 'white' : 'black',
      icon:
        theme === 'dark' ? (
          <SunIcon className="w-7 transition-opacity duration-500 delay-75 ease-linear" />
        ) : (
          <MoonIcon className="w-7 text-fuchsia-400 transition-opacity duration-500 delay-75 ease-linear" />
        ),
    }))
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
    <nav className="fixed border-8 h-20 z-10 bg-light/90 dark:bg-dark/90 filter backdrop-blur-sm flex justify-between items-center w-full py-4 px-base">
      <ul>
        <li className="hidden lg:flex uppercase font-bold text-2xl hover:text-primary transition-all duration-700 ease-linear">
          <Link href="/">
            <a className="cursor-pointer">{title}</a>
          </Link>
        </li>
        <li className="lg:hidden">
          <Hamburger
            label="Show Menu"
            rounded
            color={navState.color}
            size={24}
            toggled={state.isMobileNavOpen}
            toggle={handleMobileNav}
          />
        </li>
      </ul>
      <ul className="flex items-center gap-8 uppercase font-bold text-2xl">
        <li className="flex w-10 h-10 justify-center items-center">
          <button
            aria-label="Button to change color theme"
            onClick={handleTheme}
          >
            <AnimatePresence initial={false}>
              <div className="flex ">
                {theme === 'dark' ? (
                  <m.div
                    key="themeButton"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {navState.icon}
                  </m.div>
                ) : (
                  <m.div
                    key="lightThemeButton"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {navState.icon}
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
