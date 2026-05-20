export default {
  nav: {
    home: "Home",
    journey: "Journey",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },

  home: {
    greeting: "// hi, I'm",
    tagline: "From low-level C to AI — always building.",
    bio: "Epitech Bachelor student. I went from writing printf from scratch in C to building AI-powered assistants in Python. I make things that work, and sometimes things that look good too.",
    btnProjects: "Projects",
    btnJourney: "My journey",
    btnCV: "Download CV",
    meta: "Blagnac, Toulouse · Internship Jun–Aug 2026 · French (native) · English (fluent)",
    aboutTitle: "Beyond the code",
    aboutSub: "What I actually do when there's no deadline.",
    stackTitle: "My tools",
    about: [
      { emoji: "🏚️", label: "Urbex",       desc: "Exploring forgotten places" },
      { emoji: "🛍️", label: "Thrifting",   desc: "Finding gems in old shops"  },
      { emoji: "🎸", label: "90's rock",   desc: "The golden era of guitars"  },
      { emoji: "🎨", label: "Digital art", desc: "Artist on Instagram", href: "https://www.instagram.com/romaricguilbert?igsh=cmxmazV0aGp4ZTFr" },
      { emoji: "🍳", label: "Cooking",     desc: "Always experimenting"       },
    ],
  },

  journey: {
    title: "Journey",
    sub: "From writing C at 3am to training ML models — built project by project.",
    timeline: [
      {
        period: "2026 — now",
        title: "Bachelor — AI & Data",
        tag: "Bachelor",
        content: "Building AI-powered tools in Python: a conversational assistant for pizzerias (EatIA), an NLP analysis engine for classic literature, and ML models predicting customer purchase behaviour. Python became my main tool; AI became my direction.",
      },
      {
        period: "2026",
        title: "Switching to the Bachelor",
        tag: "Pivot",
        content: "Chose to move to the Bachelor track to focus on applied software engineering — Python, AI, data science. The shift wasn't a step back; it was a deliberate pivot toward where I want to go.",
      },
      {
        period: "Jan – Mar 2026",
        title: "Shell & advanced C",
        tag: "Masters",
        content: "Built a fully functional Bash-like shell: forking processes, piping, redirections, and environment variables — all from scratch. Solo timed challenges developed problem-solving skills under pressure.",
      },
      {
        period: "Oct – Dec 2025",
        title: "Systems & Math modules",
        tag: "Masters",
        content: "Tackled Unix system programming (signals, /proc, process trees) and applied mathematics to code — simulating 3D ball trajectories, solving cipher challenges, and modelling architectural constraints.",
      },
      {
        period: "Sep 2025",
        title: "Epitech Masters — C Pool",
        tag: "Masters",
        content: "Jumped straight into C: reimplementing printf, ls, top, and writing a duck-hunting game with CSFML. The pool was intense — no guidance, just a task, a man page, and a deadline.",
      },
    ],
  },

  projects: {
    title: "Projects",
    sub: "A selection of what I built across both programs.",
    mastersComment: "// masters — C & system",
    mastersTitle: "Low-level & systems",
    bachelorComment: "// bachelor — AI & data",
    bachelorTitle: "AI & data science",
    masters: [
      { name: "myprintf",     description: "Full reimplementation of printf in C — format specifiers, flags, width, precision, and variadic arguments from scratch without any standard library.",                     tech: ["C", "Low-level", "Variadic args"],             repo: "https://github.com/Rainingtnt/myprintf" },
      { name: "minishell",    description: "A functional Bash-like shell in C: command parsing, process forking, pipes, redirections, built-ins (cd, env, exit), and environment variable management.",              tech: ["C", "POSIX", "Process management", "Pipes"],  repo: "https://github.com/Rainingtnt/minishell" },
      { name: "myhunter",     description: "A duck-hunting graphical game built with CSFML. Handles sprite animation, mouse input, game state, scoring, and a full game loop.",                                      tech: ["C", "CSFML", "Game dev", "2D graphics"],      repo: "https://github.com/Rainingtnt/myhunter" },
      { name: "myradar",      description: "Air traffic control simulation with animated radar display. Planes follow computed trajectories and trigger alerts when paths intersect.",                                 tech: ["C", "CSFML", "Simulation", "Algorithms"],     repo: "https://github.com/Rainingtnt/myradar" },
      { name: "101pong",      description: "Math project simulating a 3D ball trajectory with vector physics. Determines whether the ball will reach a paddle plane based on initial position and velocity.",        tech: ["C", "Mathematics", "3D vectors", "Physics"],  repo: "https://github.com/Rainingtnt/101pong" },
      { name: "mytop / myls", description: "Reimplementations of the Unix top and ls commands in C — reading /proc, handling signals, formatting output, and supporting key flags.",                                  tech: ["C", "POSIX", "Unix", "/proc"],                repo: "https://github.com/Rainingtnt/mytop" },
    ],
    bachelor: [
      { name: "EatIA",                description: "An AI-powered conversational assistant for pizzerias — takes orders, handles reservations, and answers customers when staff are overwhelmed during peak hours.", tech: ["Python", "AI", "NLP", "Conversational UI"],        repo: "https://github.com/Rainingtnt/EatIA" },
      { name: "Alice in Wonderland",  description: "A CLI NLP tool that analyses literary texts: lexical diversity, character & location extraction, book summary generation, and finding similar books.",          tech: ["Python", "NLP", "Text analysis", "CLI"],          repo: "https://github.com/Rainingtnt/alice-in-wonderland" },
      { name: "NextBuy",              description: "Data science project on grocery e-commerce data: exploratory analysis, visualization, and ML models predicting customer purchase behaviour.",                    tech: ["Python", "Jupyter", "pandas", "scikit-learn"],    repo: "https://github.com/Rainingtnt/nextbuy" },
    ],
  },

  skills: {
    title: "Skills",
    sub: "Built up through a year of project-based learning — from systems to AI.",
    groups: [
      { category: "Languages",          skills: ["C", "Python", "JavaScript", "Bash"] },
      { category: "Frontend",           skills: ["React", "TailwindCSS", "HTML/CSS", "Framer Motion"] },
      { category: "AI & Data",          skills: ["scikit-learn", "pandas", "Jupyter", "NLP", "Machine Learning"] },
      { category: "Systems & Unix",     skills: ["POSIX", "Process management", "Signals", "Pipes", "/proc", "Valgrind", "Makefiles"] },
      { category: "Graphics",           skills: ["CSFML", "Sprite animation", "Game loop", "2D collision"] },
      { category: "Tools",              skills: ["Git", "GitHub", "Linux", "VS Code", "Vite"] },
      { category: "Soft skills",        skills: ["Teamwork", "Adaptability", "Reliability", "Autonomous learning"] },
      { category: "Languages (spoken)", skills: ["French — native", "English — fluent"] },
    ],
  },

  contact: {
    title: "Contact",
    sub: "Pick your platform — I'll get back to you.",
    address1: "35 Rue Léopold Galy",
    address2: "31700 Blagnac, Toulouse",
    cvBtn: "Download CV (PDF)",
    copyEmail: "Copy email",
    copied: "✓ Copied!",
    openPlatform: "Open",
  },

  footer: {
    copy: "© 2026 Romaric Guilbert",
  },
};
