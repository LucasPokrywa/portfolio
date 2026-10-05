import { Link } from 'react-router-dom'
import './home.css'
import avatar from '../assets/images/animation.png'

const linkedinUrl = "https://www.linkedin.com/in/lucas-pokrywa/"

export default function Home() {
    return (
        <main className="home-page">
            <section className="home-hero" aria-labelledby="home-title">
                <div className="home-intro">
                    <p className="home-eyebrow">Développement logiciel & DevOps</p>
                    <h1 id="home-title">Lucas Pokrywa<span>Du code aux projets.</span></h1>
                    <p className="home-description">
                        Étudiant ingénieur à l’ESIEE Paris et alternant à la DGFiP.
                        Je développe des logiciels, explore la programmation graphique
                        et automatise des infrastructures.
                    </p>
                    <div className="home-actions">
                        <Link className="home-button home-button-primary" to="/projects">
                            Voir mes projets <span aria-hidden="true">↗</span>
                        </Link>
                        <Link className="home-button" to="/parcours">Mon parcours</Link>
                        <a className="home-button" href="https://github.com/LucasPokrywa" target="_blank" rel="noopener noreferrer">
                            <svg className="home-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.923c.563.104.768-.244.768-.542 0-.267-.01-.974-.015-1.912-3.13.68-3.79-1.508-3.79-1.508-.512-1.3-1.25-1.646-1.25-1.646-1.022-.699.077-.685.077-.685 1.13.08 1.725 1.16 1.725 1.16 1.005 1.723 2.637 1.225 3.278.937.102-.729.393-1.225.715-1.507-2.499-.284-5.126-1.25-5.126-5.563 0-1.228.439-2.232 1.159-3.019-.116-.285-.502-1.429.11-2.979 0 0 .945-.302 3.094 1.153a10.79 10.79 0 0 1 5.625 0c2.148-1.455 3.092-1.153 3.092-1.153.614 1.55.228 2.694.112 2.979.722.787 1.157 1.791 1.157 3.019 0 4.324-2.631 5.276-5.138 5.555.404.35.764 1.042.764 2.1 0 1.516-.014 2.74-.014 3.112 0 .3.203.65.774.54A11.25 11.25 0 0 0 12 .75Z" />
                            </svg>
                            GitHub <span aria-hidden="true">↗</span>
                            <span className="home-sr-only"> (nouvel onglet)</span>
                        </a>
                        <a className="home-button" href={linkedinUrl || undefined} aria-disabled={!linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <svg className="home-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.58 1.96 3.58 4.5v5.28Z" />
                            </svg>
                            LinkedIn <span aria-hidden="true">↗</span>
                            <span className="home-sr-only">{linkedinUrl ? ' (nouvel onglet)' : ' (lien à venir)'}</span>
                        </a>
                    </div>
                </div>

                <div className="home-avatar">
                    <img
                        src={avatar}
                        alt="Avatar de Lucas Pokrywa"
                        width="600"
                        height="600"
                    />
                </div>
            </section>

            <section className="home-interests" aria-label="Mes domaines">
                <div>
                    <h2>Développement logiciel</h2>
                    <p>Des jeux aux applications, construire et comprendre.</p>
                    <span>C / C++ · C# · Rust · TypeScript</span>
                </div>
                <div>
                    <h2>Programmation graphique</h2>
                    <p>Explorer les moteurs de jeu et le rendu d’images.</p>
                    <span>Unity · Ray tracing · OpenGL</span>
                </div>
                <div>
                    <h2>Infrastructure & automatisation</h2>
                    <p>Déployer des services et automatiser leur gestion.</p>
                    <span> Docker / Podman · Ansible · OpenStack ·</span>
                </div>
            </section>
        </main>
        )
}
