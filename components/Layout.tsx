import { ReactNode, useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Modal from './Modal'
import { useTheme } from 'next-themes'
interface Props {
  children: ReactNode
  title?: string
  logo?: string
}

export default function Layout(props: Props) {
  const { children, title = 'Sean OReilly' } = props
  const { theme, systemTheme, setTheme } = useTheme()
  const [state, setState] = useState({
    isMobileNavOpen: false,
    mounted: false,
  })

  useEffect(() => {
    state.isMobileNavOpen && (document.body.style.overflow = 'hidden')
    !state.isMobileNavOpen && (document.body.style.overflow = 'unset')
  }, [state.isMobileNavOpen])

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      mounted: true,
    }))
    theme === systemTheme ? theme : setTheme(systemTheme)
  }, [state.mounted])

  return (
    <div className="flex flex-col font-open min-h-screen bg-light dark:bg-dark dark:text-blue-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Sean O'Reilly's Portfolio" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar state={state} setState={setState} title={title} />
      <Modal state={state} />
      <main className="flex-1 w-full h-full relative top-20">{children}</main>
      <Footer />
    </div>
  )
}
