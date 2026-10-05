import "./projects.css";

function Projects() {

    const projects = [
        {
            title: "AppLecture",
            description: "Une application pour apprendre à lire faite avec C++ Builder",
            url: "https://github.com/LucasPokrywa/AppLecture"
        },
        {
            title: "AQuestToEternity",
            pinned: true,
            description: "Jeu de conquete de planete sur un projet Unity 3D, réalisé en trio",
            url: "https://github.com/LucasPokrywa/AQuestToEternity"
        },
        {
            title: "BatailleNavale-Rust",
            description: "Bataille Navale en réseau, faite en Rust",
            url: "https://github.com/LucasPokrywa/BatailleNavale-Rust"
        },
        {
            title: "BTS_Projets",
            description: "Projets du BTS CIEL-IR",
            url: "https://github.com/LucasPokrywa/BTS_Projets"
        },
        {
            title: "Demineur-CSharp",
            pinned: true,
            description: "Démineur / Minesweeper codé en C# avec MonoGame",
            url: "https://github.com/LucasPokrywa/Demineur-CSharp"
        },
        {
            title: "GameEngine-OpenGL",
            pinned: true,
            description: "Moteur de jeu en OpenGL",
            url: "https://github.com/LucasPokrywa/GameEngine-OpenGL"
        },
        {
            title: "GameJam",
            description: "Game Jam ESIEE 2026",
            url: "https://github.com/LucasPokrywa/GameJam"
        },
        {
            title: "haproxy-deployer",
            description: "Deployement de haproxy",
            url: "https://github.com/LucasPokrywa/haproxy-deployer"
        },
        {
            title: "Math-RayTracer",
            description: "Projet de mathématiques sur le Ray Tracing en python",
            url: "https://github.com/LucasPokrywa/Math-RayTracer"
        },
        {
            title: "portfolio",
            pinned: true,
            description: "Mon Portfolio",
            url: "https://github.com/LucasPokrywa/portfolio"
        },
        {
            title: "Projet-Bibliotheque",
            pinned: true,
            description: "Projet de bibliothèque",
            url: "https://github.com/LucasPokrywa/Projet-Bibliotheque"
        },
        {
            title: "Projet-Data",
            description: "Projet de data science",
            url: "https://github.com/LucasPokrywa/Projet-Data"
        },
        {
            title: "Projet-EvaLabyrinthe",
            description: "Projet EvalBot ESIEE",
            url: "https://github.com/LucasPokrywa/Projet-EvaLabyrinthe"
        },
        {
            title: "Projet-RaPizz",
            description: "Projet de base de données sur une pizzeria",
            url: "https://github.com/LucasPokrywa/Projet-RaPizz"
        },
        {
            title: "ProjetEchec",
            description: "Projet de jeu d'échecs",
            url: "https://github.com/LucasPokrywa/ProjetEchec"
        },
        {
            title: "server-maintainer",
            description: "Outil de maintenance de serveur",
            url: "https://github.com/LucasPokrywa/server-maintainer"
        },
        {
            title: "SpaceInvaders-CSharp",
            description: "Projet scolaire basé sur le jeu Space Invaders, réalisé en duo",
            url: "https://github.com/LucasPokrywa/SpaceInvaders-CSharp"
        },
        {
            title: "Tetris C++",
            pinned: true,
            description: "Tetris implémenté en C++ avec SFML",
            url: "https://github.com/LucasPokrywa/Tetris-CPP"
        }
    ];

    // Ajouter pinned: true à un projet pour l'afficher en tête de liste.
    const sortedProjects = [...projects].sort(
        (a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned))
    );

    return (
        <main className="projects-container">
            <h1>Mes projets</h1>

            <div id="grid-projets">

                {sortedProjects.map((project) => (
                    <a
                        className="project-card"
                        key={project.url}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title}${project.pinned ? ' — projet épinglé' : ''} — voir sur GitHub (nouvel onglet)`}
                    >
                        <div className="project-card-heading">
                            <h2>{project.title}</h2>
                            {project.pinned && (
                                <span className="project-pin" title="Projet épinglé" aria-hidden="true">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 3 21 8l-4 1-3 5v3l-7-7h3l5-3z" />
                                        <path d="m10 14-7 7" />
                                    </svg>
                                </span>
                            )}
                        </div>
                        <p>{project.description}</p>
                        <span className="project-card-link">
                            Voir sur GitHub <span aria-hidden="true">↗</span>
                        </span>
                    </a>
                ))}

            </div>

        </main>
    );
}

export default Projects;
