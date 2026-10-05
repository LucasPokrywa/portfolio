import './stack.css'

type Level = 0 | 1 | 2 | 3 | 4 | 5

// 0 : à définir, 1 : découverte, 2 : bases, 3 : autonome, 4 : avancé, 5 : expert.
const levelLabels = ['À définir', 'Découverte', 'Bases', 'Autonome', 'Avancé', 'Expert']

const categories: {
    id: string
    title: string
    description: string
    technologies: { name: string; level: Level }[]
}[] = [
    {
        id: 'logiciel',
        title: 'Langages & développement logiciel',
        description: 'Les langages utilisés dans mes applications et mes projets.',
        technologies: [
            { name: 'C / C++', level: 4 },
            { name: 'C#', level: 3 },
            { name: 'Rust', level: 1 },
            { name: 'Python', level: 3 },
            { name: 'Java', level: 2 },
        ],
    },
    {
        id: 'web',
        title: 'Développement web',
        description: 'Pour construire mes interfaces et mes applications web.',
        technologies: [
            { name: 'TypeScript', level: 2 },
            { name: 'JavaScript', level: 3 },
            { name: 'React', level: 1 },
            { name: 'Node.js', level: 3 },
            { name: 'HTML / CSS', level: 3 },
            { name: 'PHP', level: 2 },
        ],
    },
    {
        id: 'donnees',
        title: 'Bases de données',
        description: 'Pour interroger, organiser et stocker les données.',
        technologies: [
            { name: 'SQL', level: 4 },
            { name: 'MySQL', level: 3 },
            { name: 'PostgreSQL', level: 2 },
        ],
    },
    {
        id: 'graphique',
        title: 'Jeux & programmation graphique',
        description: 'Les outils de mes expérimentations en jeux vidéo et en rendu graphique.',
        technologies: [
            { name: 'Unity', level: 3 },
            { name: 'OpenGL', level: 1 },
            { name: 'Raytracing', level: 2 }
        ],
    },
    {
        id: 'infrastructure',
        title: 'Infrastructure & DevOps',
        description: 'Pour déployer des services et automatiser leur gestion.',
        technologies: [
            { name: 'Docker / Podman', level: 3 },
            { name: 'Ansible', level: 3 },
            { name: 'OpenStack', level: 3 },
        ],
    },
    {
        id: 'outils',
        title: 'Outils de développement',
        description: 'Pour versionner le code et préparer les applications.',
        technologies: [
            { name: 'Git', level: 4 },
            { name: 'Vite', level: 1 },
        ],
    },
]

export default function Stack() {
    return (
        <main className="stack-page">
            <h1>Ma stack</h1>
            <p className="stack-intro">Les technologies que j’utilise au fil de mes projets et de mon apprentissage.</p>
            <div className="stack-grid">
                {categories.map((category) => (
                    <section className="stack-category" key={category.id} aria-labelledby={`stack-${category.id}`}>
                        <h2 id={`stack-${category.id}`}>{category.title}</h2>
                        <p>{category.description}</p>
                        <ul>
                            {category.technologies.map((technology) => (
                                <li key={technology.name}>
                                    <div className="stack-skill-heading">
                                        <span>{technology.name}</span>
                                        <span className="stack-level">{levelLabels[technology.level]}</span>
                                    </div>
                                    <div
                                        className="stack-gauge"
                                        role="meter"
                                        aria-label={`Maîtrise de ${technology.name}`}
                                        aria-valuemin={0}
                                        aria-valuemax={5}
                                        aria-valuenow={technology.level}
                                        aria-valuetext={levelLabels[technology.level]}
                                    >
                                        <span style={{ width: `${technology.level * 20}%` }} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </main>
    )
}
