export default {
  nav: {
    home: "Accueil",
    journey: "Parcours",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
  },

  home: {
    greeting: "// salut, c'est",
    tagline: "Du C bas niveau à l'IA — toujours en train de construire.",
    bio: "Étudiant en Bachelor à Epitech. Je suis passé de l'écriture de printf en C à la création d'assistants IA en Python. Je fais des choses qui fonctionnent, et parfois des choses qui ont l'air bien aussi.",
    btnProjects: "Projets",
    btnJourney: "Mon parcours",
    btnCV: "Télécharger le CV",
    meta: "Blagnac, Toulouse · Stage Juin–Août 2026 · Français (natif) · Anglais (courant)",
    aboutTitle: "Au-delà du code",
    aboutSub: "Ce que je fais vraiment quand il n'y a pas de deadline.",
    stackTitle: "Mes outils",
    about: [
      { emoji: "🏚️", label: "Urbex",      desc: "Explorer les lieux oubliés" },
      { emoji: "🛍️", label: "Chiner",     desc: "Dénicher des pépites vintage" },
      { emoji: "🎸", label: "Rock 90's",  desc: "L'âge d'or des guitares" },
      { emoji: "🎨", label: "Art digital", desc: "Artiste sur Instagram", href: "https://www.instagram.com/romaricguilbert?igsh=cmxmazV0aGp4ZTFr" },
      { emoji: "🍳", label: "Cuisine",    desc: "Toujours en expérimentation" },
    ],
  },

  journey: {
    title: "Parcours",
    sub: "De l'écriture de C à 3h du matin à l'entraînement de modèles ML — construit projet par projet.",
    timeline: [
      {
        period: "2026 — maintenant",
        title: "Bachelor — IA & Data",
        tag: "Bachelor",
        content: "Développement d'outils IA en Python : un assistant conversationnel pour pizzerias (EatIA), un moteur d'analyse NLP sur la littérature classique, et des modèles ML prédisant le comportement d'achat. Python est devenu mon outil principal ; l'IA, ma direction.",
      },
      {
        period: "2026",
        title: "Passage en Bachelor",
        tag: "Pivot",
        content: "J'ai choisi de rejoindre le Bachelor pour me concentrer sur le développement logiciel appliqué — Python, IA, data science. Ce n'était pas un recul, mais un pivot délibéré vers là où je veux aller.",
      },
      {
        period: "Jan – Mar 2026",
        title: "Shell & C avancé",
        tag: "Masters",
        content: "Développement d'un shell fonctionnel similaire à Bash : fork de processus, pipes, redirections et variables d'environnement — entièrement from scratch. Des challenges chronométrés en solo ont développé les capacités de résolution de problèmes sous pression.",
      },
      {
        period: "Oct – Déc 2025",
        title: "Systèmes & Mathématiques",
        tag: "Masters",
        content: "Programmation système Unix (signaux, /proc, arbres de processus) et application des mathématiques au code — simulation de trajectoires 3D, résolution de défis de chiffrement, et modélisation de contraintes architecturales.",
      },
      {
        period: "Sep 2025",
        title: "Piscine C — Epitech Masters",
        tag: "Masters",
        content: "Plongé directement dans le C : réimplémentation de printf, ls, top, et développement d'un jeu de chasse aux canards avec CSFML. La piscine était intense — sans filet, juste une tâche, une man page et une deadline.",
      },
    ],
  },

  projects: {
    title: "Projets",
    sub: "Une sélection de ce que j'ai construit dans les deux programmes.",
    mastersComment: "// masters — C & système",
    mastersTitle: "Bas niveau & systèmes",
    bachelorComment: "// bachelor — IA & données",
    bachelorTitle: "IA & data science",
    masters: [
      { name: "myprintf",     description: "Réimplémentation complète de printf en C — spécificateurs de format, flags, largeur, précision et arguments variadiques, sans librairie standard.",                                       tech: ["C", "Bas niveau", "Args variadiques"],         repo: "https://github.com/Rainingtnt/myprintf" },
      { name: "minishell",    description: "Un shell fonctionnel similaire à Bash en C : parsing de commandes, fork de processus, pipes, redirections, commandes intégrées (cd, env, exit) et gestion des variables d'environnement.", tech: ["C", "POSIX", "Gestion de processus", "Pipes"], repo: "https://github.com/Rainingtnt/minishell" },
      { name: "myhunter",     description: "Un jeu graphique de chasse aux canards développé avec CSFML. Gestion des animations de sprites, des entrées souris, de l'état du jeu, du score et d'une boucle de jeu complète.",         tech: ["C", "CSFML", "Jeu", "2D"],                    repo: "https://github.com/Rainingtnt/myhunter" },
      { name: "myradar",      description: "Simulation de contrôle du trafic aérien avec affichage radar animé. Les avions suivent des trajectoires calculées et déclenchent des alertes lorsque leurs routes se croisent.",         tech: ["C", "CSFML", "Simulation", "Algorithmes"],    repo: "https://github.com/Rainingtnt/myradar" },
      { name: "101pong",      description: "Projet de mathématiques simulant la trajectoire 3D d'une balle avec physique vectorielle. Détermine si la balle atteindra un plan de raquette selon sa position et sa vitesse initiales.", tech: ["C", "Mathématiques", "Vecteurs 3D", "Physique"], repo: "https://github.com/Rainingtnt/101pong" },
      { name: "mytop / myls", description: "Réimplémentations des commandes Unix top et ls en C — lecture de /proc, gestion des signaux, formatage de la sortie et prise en charge des principaux flags.",                              tech: ["C", "POSIX", "Unix", "/proc"],                repo: "https://github.com/Rainingtnt/mytop" },
    ],
    bachelor: [
      { name: "EatIA",               description: "Assistant conversationnel IA pour pizzerias — prend les commandes, gère les réservations et répond aux clients lors des pics d'activité quand l'équipe est débordée.", tech: ["Python", "IA", "NLP", "Chatbot"],               repo: "https://github.com/Rainingtnt/EatIA" },
      { name: "Alice au pays",       description: "Outil NLP en ligne de commande analysant des textes littéraires : diversité lexicale, extraction de personnages et lieux, génération de résumé, similarité entre livres.",   tech: ["Python", "NLP", "Analyse textuelle", "CLI"],  repo: "https://github.com/Rainingtnt/alice-in-wonderland" },
      { name: "NextBuy",             description: "Projet data science sur des données d'épicerie en ligne : analyse exploratoire, visualisation et modèles ML prédisant le comportement d'achat des clients.",                 tech: ["Python", "Jupyter", "pandas", "scikit-learn"], repo: "https://github.com/Rainingtnt/nextbuy" },
    ],
  },

  skills: {
    title: "Compétences",
    sub: "Développées au cours d'une année d'apprentissage par projets — des systèmes à l'IA.",
    groups: [
      { category: "Langages",              skills: ["C", "Python", "JavaScript", "Bash"] },
      { category: "Frontend",              skills: ["React", "TailwindCSS", "HTML/CSS", "Framer Motion"] },
      { category: "IA & Data",             skills: ["scikit-learn", "pandas", "Jupyter", "NLP", "Machine Learning"] },
      { category: "Systèmes & Unix",       skills: ["POSIX", "Gestion de processus", "Signaux", "Pipes", "/proc", "Valgrind", "Makefiles"] },
      { category: "Graphisme",             skills: ["CSFML", "Animation sprites", "Boucle de jeu", "Collision 2D"] },
      { category: "Outils",                skills: ["Git", "GitHub", "Linux", "VS Code", "Vite"] },
      { category: "Savoir-être",           skills: ["Travail en équipe", "Adaptabilité", "Fiabilité", "Apprentissage autonome"] },
      { category: "Langues parlées",       skills: ["Français — natif", "Anglais — courant"] },
    ],
  },

  contact: {
    title: "Contact",
    sub: "Choisissez votre plateforme — je vous répondrai.",
    address1: "35 Rue Léopold Galy",
    address2: "31700 Blagnac, Toulouse",
    cvBtn: "Télécharger le CV (PDF)",
    copyEmail: "Copier l'email",
    copied: "✓ Copié !",
    openPlatform: "Ouvrir",
  },

  footer: {
    copy: "© 2026 Romaric Guilbert",
  },
};
