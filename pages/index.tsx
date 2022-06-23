import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-base">
        <div className="relative w-80 h-80">
          <Image
            className="object-cover rounded-full"
            src="/images/mebw.jpeg"
            alt="Hero Image"
            layout="fill"
            priority
            sizes="50vw"
          />
        </div>
        <div className="px-base py-base text-center">
          <div className="grid gap-8">
            <h1 className="h1 font-black">Hi! 👋 I'm Sean O'Reilly</h1>
            <h2 className="h3 font-bold -mt-5">
              A front-end developer who loves to explore and learn 🌍
            </h2>
            {/* SocialLinks */}
            <div className="flex space-x-4 justify-center">
              <a
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
                className="hover:text-secondary transition-all duration-500 ease-linear text-primary dark:text-blue-200"
                href="https://www.linkedin.com/in/sea-oreilly/"
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            <p className="leading-relaxed">
              I am a Frontend Developer specializing in React and bringing forth
              beautiful UI, and I love what I do! In my freetime you'll find me
              outside maybe on a run, a bike ride, hiking, doing some goofy
              activities with friends - recently discovered acro yoga and was
              surprisingly fun! I'm also a travel nut, and I'm often moving
              around. This last year I've lived in Mexico City, Kansas City,
              Playa del Carmen, Sayulita, and Puerto Escondido, Mexico. I was
              based in Spain for a couple of years prior to that, and I've lived
              in Thailand, Cambodia, India, and Vietnam. Right now you can find
              me in Kansas City hanging with the fam :).
            </p>
            <p className="leading-relaxed">
              I commonly make websites and apps with TailwindCSS / SASS, Craft
              CMS, NextJS, and JAMstack architecture. I am mostly experienced
              with JavaScript and JS frameworks, but I have also worked in Ruby
              on Rails. If you have any fun projects in mind feel free to reach
              out! Lately, I am learning how to create super efficient sites and
              better understanding how to use web animations.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
