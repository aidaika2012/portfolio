import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [lang, setLang] = useState('ru')

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
      </main>
      <Contact lang={lang} />
    </div>
  )
}
