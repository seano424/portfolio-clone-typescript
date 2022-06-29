import Image from 'next/image'
import { EyeIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function AltCard() {
  return (
    <div className="h-[500px] lg:h-[400px] w-full shadow-lg bg-red-50 relative rounded-lg">
      <div className="w-full h-1/2 bg-white rounded-t-lg relative">
        <Image
          src="/images/feedback-board.png"
          alt="Project Image"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="w-full h-1/2 bg-white rounded-b-lg p-5 flex flex-col justify-between">
        <div className="grid gap-5">
          <p className="text-primary">Project Name</p>
          <div className="flex items-center gap-4">
            <Image
              src="/svgs/nextjs.svg"
              alt="Next Icon"
              height={20}
              width={20}
            />
            <Image src="/svgs/ts.svg" alt="TS Icon" height={20} width={20} />
            <Image
              src="/svgs/react.svg"
              alt="React Icon"
              height={20}
              width={20}
            />
            <Image
              src="/svgs/tailwind.svg"
              alt="TW Icon"
              height={20}
              width={20}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="flex justify-center gap-5 items-center bg-light p-3 text-primary font-bold text-sm">
              <EyeIcon className="w-6" />
              <span>Visit Site</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex justify-center gap-5 items-center bg-light p-3 text-primary font-bold">
              <Image
                src="/svgs/github.svg"
                alt="Github Icon"
                height={20}
                width={20}
              />
              <span>GitHub Repo</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
