'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import About from '@/components/About'
import Service from '@/components/Service'
import Clients from '@/components/Clients'
import Insights from '@/components/Insights'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [language, setLanguage] = useState<'ko' | 'jp' | 'en'>('ko')

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        language={language}
        onLanguageChange={setLanguage}
      />

      <Hero language={language}/>
      <About language={language}/>
      <Profile language={language}/>
      <Service language={language}/>
      <Clients language={language}/>
      <Insights language={language}/>
      <Contact language={language}/>
      <Footer language={language}/>
      
    </div>
  )
}

