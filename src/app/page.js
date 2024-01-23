import Image from 'next/image'
import HeroBanner from './components/HeroBanner'
import BannerInfo from './components/BannerInfo'
import BannerAbout from './components/BannerAbout'
import GetQuote from './components/GetQuote'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pb-24 pt-10">
      <HeroBanner/>
      <BannerAbout/>
      <BannerInfo/>
      <GetQuote/>
      


   
    </main>
  )
}
