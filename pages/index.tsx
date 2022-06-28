import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { AnimatePresence, m } from 'framer-motion'

const links = [
  {
    title: 'About Me',
    location: 'about',
    backgroundColor: 'bg-[#3a86ff]',
  },
  {
    title: 'Projects',
    location: 'projects',
    backgroundColor: 'bg-[#8338ec]',
  },
  {
    title: 'Contact Me',
    location: 'contact',
    backgroundColor: 'bg-[#ff006e]',
  },
  {
    title: "Sean's Resume",
    location: 'resume',
    backgroundColor: 'bg-[#fb5607]',
  },
]

const showingVariants = {
  active: { opacity: 1 },
  disabled: { opacity: 0 },
}

const linkVariants = {
  shrink: { minWidth: '100px', color: 'white' },
  stretch: { minWidth: '100%', color: 'black' },
}

const Home: NextPage = () => {
  const { theme } = useTheme()
  const [state, setState] = useState({
    textColor: '',
    location: 'about',
    isTopOfPage: true,
  })

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget
      if (window.scrollY > 0) {
        setState((prevState) => ({
          ...prevState,
          isTopOfPage: false,
        }))
      } else {
        setState((prevState) => ({
          ...prevState,
          isTopOfPage: true,
        }))
      }
    },
    [state.isTopOfPage]
  )

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      textColor: theme === 'dark' ? 'white' : 'black',
    }))
    console.log('this is running')
  }, [theme, state.textColor])

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  const handleEnterLocation = (newLocation: string) => {
    setState((prevState) => ({
      ...prevState,
      location: newLocation,
    }))
  }

  return (
    <Layout>
      <AnimatePresence initial={false}>
        <section className="lg:grid grid-cols-8 border-4 lg:mt-20">
          <aside className="hidden border lg:block col-span-3 sticky top-20 self-start py-base">
            <ul
              className={`flex flex-col gap-4 transition-all duration-700 ease-linear items-end border-4
            `}
            >
              {links.map((link) => (
                <m.li
                  key={link.location}
                  variants={linkVariants}
                  animate={state.isTopOfPage ? 'shrink' : 'stretch'}
                  className={`transform transition-all duration-700 ease-in-out`}
                >
                  <a
                    href={`#${link.location}`}
                    className={`px-8 py-4 rounded flex
                  ${
                    state.location === link.location && !state.isTopOfPage
                      ? 'bg-white dark:bg-secondary text-dark dark:text-light'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-100 ease-in-out'
                  }
                  ${
                    state.isTopOfPage &&
                    `${link.backgroundColor} text-white transition-all duration-100 ease-in-out hover:${link.backgroundColor}/40`
                  }
                  `}
                  >
                    {link.title}
                  </a>
                </m.li>
              ))}
              <li
                className={`self-start pt-10 px-8 transition-opacity duration-300 ${
                  state.isTopOfPage ? 'opacity-0' : 'opacity-100 delay-300'
                }`}
              >
                <a
                  className="text-gray-400 hover:text-black transition-colors duration-200"
                  href="/"
                >
                  soreilly424@gmail.com
                </a>
              </li>
              <li
                className={`self-start px-8 transition-opacity duration-300 ${
                  state.isTopOfPage ? 'opacity-0' : 'opacity-100 delay-300'
                }`}
              >
                <a
                  className="text-gray-400 hover:text-black transition-colors duration-200"
                  href="https://github.com/seano424"
                >
                  github.com/seano424
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-span-5 border flex flex-col items-center justify-center py-base">
            <m.section
              onViewportEnter={() => handleEnterLocation('about')}
              viewport={{ margin: '-450px' }}
              id="about"
              className="flex flex-col items-center justify-center border"
            >
              <div className="relative h-64 w-64 sm:w-80 sm:h-80">
                <Image
                  className="object-cover rounded-full"
                  src="/images/mebw.jpeg"
                  alt="Hero Image"
                  layout="fill"
                  priority
                  sizes="50vw"
                />
              </div>
              <div className="py-base text-center px-20">
                <div className="grid gap-8">
                  <h1 className="h1 font-black">
                    Hi! 👋 I'm Sean Patrick O'Reilly
                  </h1>
                  {/* SocialLinks */}
                  <div className="flex space-x-4 justify-center">
                    <a
                      rel="noreferrer"
                      aria-label="Twitter Link"
                      className="hover:text-primary transition-all duration-200 ease-linear text-blue-500 dark:text-white"
                      href="https://twitter.com/sea_oreilly"
                      target="_blank"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a
                      aria-label="GitHub Link"
                      className="hover:text-primary transition-all duration-300 ease-linear text-green-500 dark:text-green-200"
                      href="https://github.com/seano424"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      aria-label="LinkedIn Link"
                      className="hover:text-secondary transition-all duration-700 ease-linear text-primary dark:text-blue-200"
                      href="https://www.linkedin.com/in/sea-oreilly/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                  <h3 className="h3 font-black">
                    Front-end Developer & Designer
                  </h3>
                  <m.p
                    variants={showingVariants}
                    initial={{ opacity: 0 }}
                    whileInView={
                      state.isTopOfPage ? { opacity: 0 } : { opacity: 1 }
                    }
                    // animate={state.isTopOfPage ? 'disabled' : 'active'}
                    className="leading-[1.8] p"
                  >
                    I am a Frontend Developer specializing in React and bringing
                    forth beautiful UI, and I love what I do! I commonly make
                    websites and apps with TailwindCSS / SASS, Craft CMS,
                    NextJS, and JAMstack architecture. I am mostly experienced
                    with JavaScript and JS frameworks, but I have also worked in
                    Ruby on Rails. If you have any projects in mind feel free to
                    reach out!
                  </m.p>
                </div>
              </div>
            </m.section>
            <m.section
              onViewportEnter={() => handleEnterLocation('projects')}
              viewport={{ margin: '-450px' }}
              id="projects"
              className="py-base h-[800px] w-full border-8 border-red-50"
            ></m.section>
            <m.section
              onViewportEnter={() => handleEnterLocation('contact')}
              viewport={{ margin: '-450px' }}
              id="contact"
              className="py-base h-[800px] w-full border-8 border-green-50"
            ></m.section>
            <m.section
              onViewportEnter={() => handleEnterLocation('resume')}
              viewport={{ margin: '-450px' }}
              id="resume"
              className="py-base h-[800px] w-full border-8 border-blue-50"
            ></m.section>
            <button
              aria-label="Go to Top Button"
              className="p-4 mt-10 rounded-full cursor-pointer font-black shadow-xl dark:bg-gray-50 dark:text-gray-900 transition-all duration-200 ease-linear hover:text-2xl  hover:text-primary animate-pulse w-max mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 rotate-180"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </aside>
        </section>
      </AnimatePresence>
    </Layout>
  )
}

export default Home
