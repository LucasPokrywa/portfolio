import './parcours.css'

export default function Parcours() {
  const timeline = [
    {
      year: '2025-2028',
      title: 'Alternant Ingénieur DevOps',
      company: 'DGFiP',
      description: ['Automatisation avec Ansible', 'OpenStack', 'Podman'],
    },
    {
      year: '2025-2028',
      title: 'Ingénieur Developpement Informatique',
      company: 'ESIEE Paris',
      description: ['Developpement', 'Logiciel', 'Architecture', 'Projet'],
    },
    {
      year: '2025',
      title: 'Stage Développeur Web',
      company: 'Work Experience Agency',
      description: ['CMS','Javascript', 'Design'],
    },
    {
      year: '2025',
      title: 'BTS CIEL-IR',
      company: 'Lycée Louis Armand',
      description: ['Cybersécurité','Développement', 'Réseaux'],
    },
    {
      year: '2022',
      title: 'Baccalauréat Général',
      company: 'Lycée',
      description: ['Mention Bien', 'SVT', 'Physique Chimie', 'Maths Complémentaires'],
    },
  ]

  return (
    <main className="parcours-section">
      <h1>Mon parcours</h1>
      <ol className="parcours-timeline">
        {timeline.map((item) => (
          <li className="parcours-item" key={`${item.year}-${item.title}`}>
            <article className="parcours-card">
              <span className="year">{item.year}</span>
              <h2>{item.title}</h2>
              <h3>{item.company}</h3>
              <ul>
                {item.description.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </main>
  )
}
