import Image from 'next/image'
import { EyeIcon } from '@heroicons/react/solid'

export default function Card() {
  return (
    <div className="h-[400px] lg:h-[300px] w-full shadow-lg bg-red-50 relative rounded-lg group cursor-pointer">
      <Image
        src="/images/feedback-board.png"
        alt="Project Image"
        layout="fill"
        className="object-cover rounded-lg"
      />
      {/* Inlay with Content */}
      <div className="absolute inset-0 bg-blue-50/90 flex flex-col justify-center items-center gap-5 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-lg">
        <h3 className="h3 font-black">Project Name</h3>
        <div className="flex items-center space-x-4">
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
              className="w-8"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <EyeIcon className="w-8" />
        </div>
        <div className="flex gap-5">
          <Image
            src="/svgs/nextjs.svg"
            alt="Next JS Icon"
            height={30}
            width={30}
          />
          <Image
            src="/svgs/tailwind.svg"
            alt="Next JS Icon"
            height={30}
            width={30}
          />
          <Image src="/svgs/ts.svg" alt="Next JS Icon" height={30} width={30} />
        </div>
      </div>
    </div>
  )
}
