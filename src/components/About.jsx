const translations = {
  ru: {
    heading: 'Обо мне',
    skillsHeading: 'Технологии',
    bio1: '14-летний выпускник курса «Окурмен», фронтенд-разработчик с опытом в брендинге.',
    bio2: 'Создаю сайты с чистым кодом, уделяя внимание деталям и пользовательскому опыту. Люблю React и современные инструменты разработки.',
  },
  en: {
    heading: 'About Me',
    skillsHeading: 'Technologies',
    bio1: 'A 14-year-old graduate of the "Okurmen" course, a frontend developer with branding experience.',
    bio2: 'I build sites with clean code, focusing on details and user experience. I love React and modern development tools.',
  },
}

const skills = [
  { name: 'HTML5', color: 'bg-orange-100 text-orange-700 border-orange-200' },
  { name: 'CSS3', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
  { name: 'React.js', color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
  { name: 'Tailwind CSS', color: 'bg-teal-100 text-teal-700 border-teal-200' },
  { name: 'Vite', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  { name: 'Git & GitHub', color: 'bg-slate-100 text-slate-700 border-slate-200' },
  { name: 'Figma', color: 'bg-pink-100 text-pink-700 border-pink-200' },
  { name: 'Responsive Design', color: 'bg-green-100 text-green-700 border-green-200' },
]

export default function About({ lang }) {
  const t = translations[lang]

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* About text */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">{t.heading}</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">{t.heading}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">{t.bio1}</p>
            <p className="text-slate-600 text-lg leading-relaxed">{t.bio2}</p>

            {/* Decorative stat cards */}
            <div className="flex gap-4 mt-8">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-5 py-4 flex-1 text-center">
                <p className="text-3xl font-extrabold text-blue-600">2+</p>
                <p className="text-sm text-slate-500 mt-1">{lang === 'ru' ? 'Проекта' : 'Projects'}</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-5 py-4 flex-1 text-center">
                <p className="text-3xl font-extrabold text-indigo-600">7+</p>
                <p className="text-sm text-slate-500 mt-1">{lang === 'ru' ? 'Технологий' : 'Technologies'}</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-5 py-4 flex-1 text-center">
                <p className="text-3xl font-extrabold text-purple-600">∞</p>
                <p className="text-sm text-slate-500 mt-1">{lang === 'ru' ? 'Энтузиазм' : 'Enthusiasm'}</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div id="skills">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">{t.skillsHeading}</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">{t.skillsHeading}</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`${skill.color} border text-sm font-semibold px-4 py-2 rounded-xl hover:scale-105 transition-transform cursor-default`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
