import { ArrowRight, Mail } from 'lucide-react'

const translations = {
  ru: {
    tag: '👋 Привет, я начинающий разработчик',
    title1: 'Frontend Developer',
    title2: '& React Enthusiast',
    desc: 'Создаю современные, удобные и интерактивные веб-сайты. Превращаю идеи в стильный цифровой опыт.',
    btn1: 'Смотреть проекты',
    btn2: 'Связаться',
  },
  en: {
    tag: '👋 Hi, I\'m a junior developer',
    title1: 'Frontend Developer',
    title2: '& React Enthusiast',
    desc: 'I build modern, user-friendly and interactive websites. Turning ideas into elegant digital experiences.',
    btn1: 'View Projects',
    btn2: 'Contact Me',
  },
}

export default function Hero({ lang }) {
  const t = translations[lang]

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          {/* Tag */}
          <span className="inline-block self-start bg-amber-100 text-amber-800 text-sm font-medium px-4 py-1.5 rounded-full">
            {t.tag}
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            {t.title1}
            <br />
            <span className="text-blue-600">{t.title2}</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-500 leading-relaxed max-w-md">
            {t.desc}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              {t.btn1}
              <ArrowRight size={18} />
            </a>
            <a
              href="#contacts"
              className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition-all"
            >
              {t.btn2}
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right: avatar */}
        <div className="flex justify-center items-center">
          <div className="relative">
            {/* Decorative blobs */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-300 via-indigo-200 to-purple-200 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-blue-100">
              <img
                src="/avatar.jpg"
                alt="Aidai Akmatalieva"
                className="w-full h-full object-cover"
                onError={(e) => {
                  /* fallback: show initials */
                  e.currentTarget.style.display = 'none'
                }}
              />
              {/* Fallback initials */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-500 text-white text-6xl font-bold select-none">
                AA
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl shadow-lg px-4 py-2 flex items-center gap-2 border border-blue-100">
              <span className="text-green-500 text-lg">●</span>
              <span className="text-sm font-semibold text-slate-700">Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
