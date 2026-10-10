import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const translations = {
  ru: {
    about: 'Обо мне',
    projects: 'Проекты',
    skills: 'Навыки',
    contacts: 'Контакты',
  },
  en: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contacts: 'Contacts',
  },
}

export default function Navbar({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[lang]

  const navLinks = [
    { label: t.about, href: '#about' },
    { label: t.projects, href: '#projects' },
    { label: t.skills, href: '#skills' },
    { label: t.contacts, href: '#contacts' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-slate-800 tracking-tight hover:text-blue-600 transition-colors">
          Aidai Akmatalieva
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="flex items-center border border-slate-300 rounded-full overflow-hidden text-sm font-semibold">
            <button
              onClick={() => setLang('ru')}
              className={`px-3 py-1 transition-colors ${
                lang === 'ru'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 transition-colors ${
                lang === 'en'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => { setLang('ru'); setMenuOpen(false) }}
              className={`px-4 py-1 rounded-full text-sm font-semibold border transition-colors ${
                lang === 'ru' ? 'bg-slate-800 text-white border-slate-800' : 'border-slate-300 text-slate-500'
              }`}
            >
              RU
            </button>
            <button
              onClick={() => { setLang('en'); setMenuOpen(false) }}
              className={`px-4 py-1 rounded-full text-sm font-semibold border transition-colors ${
                lang === 'en' ? 'bg-slate-800 text-white border-slate-800' : 'border-slate-300 text-slate-500'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
