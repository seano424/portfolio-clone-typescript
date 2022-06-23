import { AnimatePresence, m } from 'framer-motion'

interface Props {
  state: {
    isMobileNavOpen: boolean
  }
}

const modalLinks = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/' },
  { title: 'Contact', href: '/' },
  { title: 'Resume', href: '/' },
]

export default function Modal(props: Props) {
  const { state } = props
  return (
    <AnimatePresence initial={false}>
      {state.isMobileNavOpen && (
        <m.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-20 bg-light/90 dark:bg-dark/90 filter backdrop-blur-sm min-h-screen z-10 w-full flex justify-center py-base items-start"
        >
          <ul className="px-base py-base text-6xl font-black uppercase text-center grid gap-16 tracking-tighter text-fuchsia-400">
            {modalLinks.map((link, i) => (
              <li key={i}>
                <a
                  className="hover:text-dark dark:hover:text-light transition-all duration-200 ease-linear drop-shadow-2xl"
                  href={link.href}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </m.div>
      )}
    </AnimatePresence>
  )
}
