import { Mail, MessageCircle, Send, Music, ChevronUp } from 'lucide-react'

// Instagram icon (not in lucide-react, inline SVG)
function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const translations = {
  ru: {
    label: 'Контакты',
    heading: 'Давайте создадим что-то крутое вместе!',
    sub: 'Открыта для фриланса, стажировок и интересных проектов.',
    backToTop: 'Наверх',
    copy: '© 2026 Aidai Akmatalieva',
  },
  en: {
    label: 'Contacts',
    heading: "Let's build something cool together!",
    sub: 'Open to freelance, internships and interesting projects.',
    backToTop: 'Back to top',
    copy: '© 2026 Aidai Akmatalieva',
  },
}

const contacts = [
  {
    icon: <MessageCircle size={20} />,
    label: 'WhatsApp',
    value: '+996 223 565 519',
    href: 'https://wa.me/996223565519',
    color: 'bg-green-100 text-green-700 hover:bg-green-200',
  },
  {
    icon: <Send size={20} />,
    label: 'Telegram',
    value: '@aidai_telegram',
    href: 'https://t.me/aidai_telegram',
    color: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
  },
  {
    icon: <InstagramIcon size={20} />,
    label: 'Instagram',
    value: '@x_aidaika_x_04',
    href: 'https://instagram.com/x_aidaika_x_04',
    color: 'bg-pink-100 text-pink-700 hover:bg-pink-200',
  },
  {
    icon: <Music size={20} />,
    label: 'TikTok',
    value: '@aidai.web',
    href: 'https://tiktok.com/@aidai.web',
    color: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'Aidai@Akmatalieva.com',
    href: 'mailto:Aidai@Akmatalieva.com',
    color: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
  },
]

export default function Contact({ lang }) {
  const t = translations[lang]

  return (
    <footer id="contacts" className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">{t.label}</span>
          <h2 className="text-4xl font-bold mt-2 mb-3">{t.heading}</h2>
          <p className="text-slate-400 text-lg">{t.sub}</p>
        </div>

        {/* Contact buttons grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 ${c.color} font-semibold px-5 py-3 rounded-2xl transition-all hover:scale-105 shadow-sm`}
            >
              {c.icon}
              <div className="text-left">
                <p className="text-xs opacity-70 leading-none mb-0.5">{c.label}</p>
                <p className="text-sm leading-none">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer bottom bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>{t.copy}</p>
          <a
            href="#hero"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors font-medium"
          >
            <ChevronUp size={16} />
            {t.backToTop}
          </a>
        </div>
      </div>
    </footer>
  )
}
