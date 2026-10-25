import { ExternalLink, GitBranch } from 'lucide-react'

const translations = {
  ru: {
    label: 'Мои работы',
    heading: 'Долбоорлор галереясы',
    demo: 'Demo',
    code: 'GitHub',
  },
  en: {
    label: 'My Work',
    heading: 'Projects Gallery',
    demo: 'Demo',
    code: 'GitHub',
  },
}

const projects = [
  {
    id: 1,
    titleRu: 'Интерактивный Музей Сайты',
    titleEn: 'Interactive Museum Website',
    descRu: 'Интерактивный сайт музея с бронированием билетов, интерактивной картой и GSAP-анимациями.',
    descEn: 'Interactive museum site with ticket booking, interactive map and GSAP animations.',
    tags: ['React', 'Vite', 'Tailwind', 'GSAP'],
    demo: 'https://remarkable-sherbet-2e5db0.netlify.app/',
    github: '#',
    gradient: 'from-blue-400 to-indigo-500',
    emoji: '🏛️',
  },
  {
    id: 2,
    titleRu: 'Додо Пицца — Адаптивный макет',
    titleEn: 'Dodo Pizza — Responsive Layout',
    descRu: 'Полностью адаптивный макет Додо Пицца с корзиной покупок и формой доставки.',
    descEn: 'Fully responsive Dodo Pizza layout with shopping cart and delivery form.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    demo: 'https://dulcet-salamander-08c010.netlify.app/',
    github: '#',
    gradient: 'from-orange-400 to-red-500',
    emoji: '🍕',
  },
]

function ProjectCard({ project, lang, t }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 group">
      {/* Image / placeholder */}
      <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
        <span className="text-7xl">{project.emoji}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {lang === 'ru' ? project.titleRu : project.titleEn}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          {lang === 'ru' ? project.descRu : project.descEn}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ExternalLink size={15} />
            {t.demo} ↗
          </a>
          <a
            href={project.github}
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <GitBranch size={15} />
            {t.code} ↗
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects({ lang }) {
  const t = translations[lang]

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">{t.label}</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">{t.heading}</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
