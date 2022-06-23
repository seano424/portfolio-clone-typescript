import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className='hidden lg:block'>
          <Image
            priority
            className="object-cover rounded-full"
            src="/images/mebw.jpeg"
            alt="Hero Image"
            height={350}
            width={350}
          />
        </div>
        <div className='lg:hidden'>
          <Image
            priority
            className="object-cover rounded-full"
            src="/images/mebw.jpeg"
            alt="Hero Image"
            height={250}
            width={250}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
