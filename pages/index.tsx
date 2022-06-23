import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='flex justify-center'>
        <div className="relative w-80 h-80">
          <Image
            className="object-cover rounded-full"
            src="/images/mebw.jpeg"
            alt="Hero Image"
            layout='fill'
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
