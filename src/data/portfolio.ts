export interface Project {
  id: string;
  number?: string;
  title: string;
  category: string;
  tagline?: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  securityHighlights?: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
  color?: string;
  kanji?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
  description: string;
  color?: string;
  kanji?: string;
  skills: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  pdfUrl?: string;
  badgeColor: string;
  topics: string[];
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface ExperienceItem {
  year: string;
  role: string;
  organization: string;
  summary: string;
  highlights: string[];
  tag: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    logoInitials: string;
    japaneseName: string;
    role: string;
    rolesList: string[];
    bio: string;
    fullBio: string[];
    location: string;
    status: string;
    email: string;
    github: string;
    linkedin: string;
    stats: StatItem[];
  };
  skills: SkillCategory[];
  projects: Project[];
  certificates: Certificate[];
  experience: ExperienceItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "SAURABH KUMAR",
    logoInitials: "SK",
    japaneseName: "ソウラブ・クマール",
    role: "Full Stack Developer & AI Engineer",
    rolesList: [
      "Full Stack Developer",
      "AI Applications Engineer",
      "Software Engineering Student",
      "Web Audio & Systems Builder",
      "Cybersecurity Enthusiast"
    ],
    bio: "Building high-performance full-stack web applications, multi-modal AI systems, and interactive digital experiences with modern web technologies.",
    fullBio: [
      "I am a developer passionate about the intersection of high-performance full-stack engineering, multi-modal artificial intelligence, and interactive web experiences.",
      "My projects span multi-modal AI platforms (CortexAI), encrypted cloud file systems (Disk Drive), financial analytics dashboards (TradePulse), and real-time Web Audio synthesis engines (BeatForge 808 & Harmonix).",
      "Driven by continuous learning, computer science fundamentals, and clean code principles, I craft digital products that are fast, intuitive, and visually compelling."
    ],
    location: "India • Available Worldwide",
    status: "Open for Opportunities & Collaborations",
    email: "saurabh2732006@gmail.com",
    github: "https://github.com/saurabh28102006-pixel",
    linkedin: "https://www.linkedin.com/in/saurabh-kumar-595520421/",
    stats: [
      { label: "Projects Completed", value: "12+", description: "Production apps & security labs" },
      { label: "Vulnerabilities Found", value: "35+", description: "Across Bug Bounties & CTFs" },
      { label: "Technologies Mastered", value: "18+", description: "Languages, tools & frameworks" },
      { label: "Certifications", value: "6+", description: "Industry-recognized credentials" }
    ]
  },
  skills: [
    {
      id: "languages-core",
      title: "Languages & Core CS",
      subtitle: "Systems, algorithmic problem solving & low-level fundamentals",
      icon: "Code2",
      color: "#38bdf8",
      kanji: "技",
      description: "Foundational programming languages, data structures, and computer science concepts.",
      skills: ["C/C++", "Python", "JavaScript", "TypeScript", "Java", "DSA (Algorithms)", "OOP", "Operating Systems"]
    },
    {
      id: "full-stack",
      title: "Full-Stack Development",
      subtitle: "Modern reactive frameworks & scalable server backends",
      icon: "Globe",
      color: "#06b6d4",
      kanji: "網",
      description: "Building responsive, modern, and accessible full-stack applications with high performance.",
      skills: ["Next.js 16", "React.js", "Node.js", "Express.js", "Tailwind CSS", "RESTful APIs", "WebSocket"]
    },
    {
      id: "ai-audio",
      title: "AI & Creative Engineering",
      subtitle: "Multi-modal intelligence & digital audio synthesis",
      icon: "Sparkles",
      color: "#a855f7",
      kanji: "知",
      description: "Developing multi-modal LLM applications, real-time Web Audio engines, and interactive visual graphics.",
      skills: ["LangChain", "Multi-Modal AI", "Web Audio API", "Prompt Engineering", "Computer Vision", "HTML5 Canvas"]
    },
    {
      id: "databases-cloud",
      title: "Databases & Cloud Infrastructure",
      subtitle: "Relational/NoSQL databases & modern deployment pipelines",
      icon: "Database",
      color: "#10b981",
      kanji: "庫",
      description: "Data modeling, distributed cloud storage, and containerized deployment workflows.",
      skills: ["MongoDB", "PostgreSQL", "Cloudinary CDN", "Docker", "Git & GitHub", "Postman", "Vercel", "Netlify"]
    },
    {
      id: "cybersecurity-network",
      title: "Cybersecurity & Networks",
      subtitle: "Offensive tooling, defensive monitoring & protocol analysis",
      icon: "ShieldAlert",
      color: "#ef4444",
      kanji: "盾",
      description: "Network traffic dissection, vulnerability assessment, and defensive systems engineering.",
      skills: ["Network Security", "Linux Hardening", "OWASP Top 10", "Burp Suite", "Nmap", "Wireshark", "Threat Mitigation"]
    }
  ],
  projects: [
    {
      id: "disk-drive",
      number: "01",
      title: "Disk Drive",
      category: "Cloud Storage & Web Application",
      tagline: "Next-Gen Google Drive alternative with Secret Vault & Voice Memos",
      description: "A modern, responsive cloud storage platform featuring Google Drive-style file organization, Starred items, Secret Vault, and integrated Voice Memos.",
      longDescription: "Disk Drive is a full-featured cloud file management and storage platform. It enables seamless file uploads, categorization (My Drive, Starred, Recent, Trash), voice memo recordings, live storage metrics, and an encrypted Secret Vault for sensitive files.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Web APIs"],
      features: [
        "Multi-category file organization (My Drive, Starred, Recent, Trash)",
        "Audio voice memo recording and instant playback",
        "Encrypted Secret Vault for protected sensitive assets",
        "Live storage quota metrics & responsive dark/light UI"
      ],
      securityHighlights: [
        "Protected Secret Vault storage partition",
        "Strict input validation and sanitized file upload handlers"
      ],
      githubUrl: "https://github.com/saurabh28102006-pixel/Disk-Drive",
      liveUrl: "https://disk-drive.vercel.app/",
      image: "/images/disk-drive.png",
      featured: true,
      color: "#38bdf8",
      kanji: "暗号"
    },
    {
      id: "tradepulse",
      number: "02",
      title: "TradePulse",
      category: "FinTech & AI Analytics",
      tagline: "Real-Time Stock Tracker, Interactive Market Heatmap & AI Insights",
      description: "A comprehensive real-time financial tracking and market analysis platform featuring sector heatmaps, portfolio management, stock screeners, and an integrated AI Copilot.",
      longDescription: "TradePulse is an advanced real-time financial intelligence dashboard. It delivers interactive market overviews, dynamic multi-sector stock heatmaps, custom watchlists, stock screeners, side-by-side asset comparison, and an AI-powered Copilot for market insights.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Financial APIs", "Chart.js", "AI Copilot", "Netlify"],
      features: [
        "Dynamic interactive market heatmap with multi-sector drilldowns",
        "Real-time financial asset quotes & multi-timeframe charts",
        "Integrated AI Copilot for intelligent market trend analysis",
        "Custom watchlist, portfolio tracking, and stock screener"
      ],
      securityHighlights: [
        "Secure API integration layer for financial market feeds",
        "Optimized client-side caching & instant search performance"
      ],
      githubUrl: "https://github.com/saurabh28102006-pixel/stock-tracker-app",
      liveUrl: "https://tradepulse-stock-tracker.netlify.app/",
      image: "/images/tradepulse.png",
      featured: true,
      color: "#10b981",
      kanji: "株"
    },
    {
      id: "voxread",
      number: "03",
      title: "VoxRead",
      category: "Conversational AI & Voice Computing",
      tagline: "Smart Voice Library — Transform PDF books into interactive AI voice discussions",
      description: "An AI voice book companion that transforms any PDF into real-time spoken discussions, deep semantic indexing, and natural voice Q&A.",
      longDescription: "VoxRead is an AI-powered conversational book companion and voice library. It features instant PDF ingestion, deep semantic vector indexing, natural voice speech synthesis, and real-time audio Q&A enabling users to verbally explore, discuss, and learn from classic literature and custom uploaded books.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Speech API", "LLM / OpenAI", "PDF Parser", "Vercel"],
      features: [
        "Automated PDF book parsing & deep semantic chunk indexing",
        "Real-time voice conversation with natural speech synthesis",
        "Interactive digital library with classics & custom book uploads",
        "Context-aware semantic Q&A and concept exploration"
      ],
      securityHighlights: [
        "Client-side document streaming with secure sandbox parsing",
        "Zero persistent telemetry on private uploaded literature"
      ],
      githubUrl: "https://github.com/saurabh28102006-pixel/voxread",
      liveUrl: "https://voxread-ten.vercel.app/",
      image: "/images/voxread.png",
      featured: true,
      color: "#f59e0b",
      kanji: "声"
    },
    {
      id: "harmonix-piano",
      number: "04",
      title: "Harmonix Piano Studio",
      category: "Audio Engineering & Interactive Web",
      tagline: "Interactive Piano & Music Theory Studio — Scales, modes, chords & Circle of Fifths",
      description: "An interactive Web Audio music theory studio featuring multi-instrument sound engines, dynamic scale & mode visualization, chord exploration, and ear training.",
      longDescription: "Harmonix Piano Studio is a browser-based musical education and synthesis workbench. Built with the Web Audio API, it features multiple sound engines (Grand Piano, E-Piano, Poly Synth, Marimba), real-time scale and mode mapping across octaves, chord progression exploration, the Circle of Fifths, and an Ear Training quiz module.",
      technologies: ["JavaScript", "Web Audio API", "HTML5 Canvas", "Tailwind CSS", "GitHub Pages"],
      features: [
        "Multi-instrument sound engines (Grand Piano, E-Piano, Poly Synth, Marimba)",
        "Interactive keyboard with computer key & MIDI input binding",
        "Scale & Mode visualizer with Solfege, scale degrees, and BPM player",
        "Chord progression explorer, Circle of Fifths, and Ear Training quiz"
      ],
      securityHighlights: [
        "Zero-latency client-side audio oscillator synthesis",
        "PWA offline playback and high-frequency touch responsiveness"
      ],
      githubUrl: "https://github.com/saurabh28102006-pixel/piano-scale-visualizer",
      liveUrl: "https://saurabh28102006-pixel.github.io/piano-scale-visualizer/",
      image: "/images/harmonix.png",
      featured: true,
      color: "#3b82f6",
      kanji: "音"
    },
    {
      id: "cortex-ai",
      number: "05",
      title: "CortexAI",
      category: "Multi-Modal AI & Web Intelligence",
      tagline: "Next-Gen AI Workspace — Chat, Coding, PDF/PPT Generation, Vision & Live Web Search",
      description: "An advanced multi-modal AI intelligence platform featuring specialized modes for Coding, Chat, Document generation, Vision analysis, and Live Web Search.",
      longDescription: "CortexAI is a unified multi-modal AI intelligence workspace. Built with Next.js and LLM integrations, it empowers users with dedicated operating modes: Auto, Chat, Coding, PDF analysis, PPT presentation creation, Vision analysis, and real-time Web Search with live sources.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI / LLM", "Web Search API", "Vercel"],
      features: [
        "Multi-modal AI modes: Auto, Chat, Coding, PDF, PPT, Vision, and Live Search",
        "Interactive document, report, and slide presentation generation",
        "Real-time web search with synthesized live citations & answers",
        "Integrated developer coding assistant with syntax formatting"
      ],
      securityHighlights: [
        "Encrypted prompt execution & streaming token security",
        "Zero data retention mode on sensitive workspace sessions"
      ],
      githubUrl: "https://github.com/saurabh28102006-pixel/cortex-ai",
      liveUrl: "https://cortex-ai-9pnp.vercel.app/",
      image: "/images/cortex-ai.png",
      featured: true,
      color: "#8b5cf6",
      kanji: "知能"
    },
    {
      id: "beatforge-808",
      number: "06",
      title: "BeatForge 808",
      category: "Audio Synthesis & Web Sound Engine",
      tagline: "Pro Studio — 8-Track Analog Drum Synthesizer & Real-Time Step Sequencer",
      description: "A browser-based professional 8-track analog drum machine featuring 16-step sequencing, spectrum analyzer, swing control, BPM tap, presets, and audio recording.",
      longDescription: "BeatForge 808 is a high-fidelity digital audio workstation built with the Web Audio API. It features multi-track drum synthesis (Kick, Snare, Closed Hat, Open Hat, Clap, Low Tom), custom swing and tempo modulation, live FFT spectrum analyzer, pattern randomization, and session recording/saving.",
      technologies: ["Next.js", "React", "TypeScript", "Web Audio API", "HTML5 Canvas", "Tailwind CSS", "Vercel"],
      features: [
        "8-track analog drum engine with independent velocity & pitch tuning",
        "16-step real-time audio sequencer with customizable presets (90s Hip-Hop, 808 Trap, House, etc.)",
        "Live FFT audio spectrum analyzer & tap-tempo BPM controller",
        "Audio recording pipeline with local pattern export and saving"
      ],
      securityHighlights: [
        "Ultra low-latency client-side Web Audio synthesis buffer",
        "Zero tracking audio sandbox pipeline"
      ],
      githubUrl: "https://github.com/saurabh28102006-pixel/beatforge-808",
      liveUrl: "https://beatforge-808.vercel.app/",
      image: "/images/beatforge-808.png",
      featured: true,
      color: "#f97316",
      kanji: "鼓動"
    }
  ],
  certificates: [
    {
      id: "saylor-cpp",
      title: "CS107: C++ Programming",
      issuer: "Saylor University",
      issueDate: "Mar 2, 2024",
      credentialId: "2901407884SK",
      credentialUrl: "/certificates/cpp-programming.pdf",
      pdfUrl: "/certificates/cpp-programming.pdf",
      badgeColor: "#3B82F6",
      topics: ["C++ Programming", "Object-Oriented Design", "Memory & Pointers", "40 Hours (Grade: 92.50%)"]
    },
    {
      id: "microsoft-python",
      title: "Python Programming",
      issuer: "Microsoft • Skill India Digital Hub",
      issueDate: "September 24, 2024",
      credentialId: "SIDH-MS-PY-2026",
      credentialUrl: "/certificates/python-programming.pdf",
      pdfUrl: "/certificates/python-programming.pdf",
      badgeColor: "#0EA5E9",
      topics: ["Python Fundamentals", "Data Structures & Control Flow", "Scripting & Automation", "40 Hours Course"]
    },
    {
      id: "simplilearn-ai",
      title: "Introduction to Artificial Intelligence",
      issuer: "Simplilearn SkillUp",
      issueDate: "May 29, 2025",
      credentialId: "10582526",
      credentialUrl: "/certificates/artificial-intelligence.pdf",
      pdfUrl: "/certificates/artificial-intelligence.pdf",
      badgeColor: "#F59E0B",
      topics: ["AI Principles", "Machine Learning Concepts", "Neural Networks", "AI Workflows"]
    },
    {
      id: "nasscom-software-developer",
      title: "Software Product Developer",
      issuer: "NASSCOM • Skill India Digital Hub",
      issueDate: "June 5, 2026",
      credentialId: "SIDH-NASSCOM-SPD-2026",
      credentialUrl: "/certificates/software-product-developer.pdf",
      pdfUrl: "/certificates/software-product-developer.pdf",
      badgeColor: "#06B6D4",
      topics: ["Software Product Engineering", "Architecture & Design", "SDLC Methodologies", "Clean Code Practices"]
    },
    {
      id: "nasscom-network-security",
      title: "Network Security Engineer",
      issuer: "NASSCOM • Skill India Digital Hub",
      issueDate: "July 13, 2026",
      credentialId: "SIDH-NASSCOM-NSE-2026",
      credentialUrl: "/certificates/network-security-engineer.pdf",
      pdfUrl: "/certificates/network-security-engineer.pdf",
      badgeColor: "#EF4444",
      topics: ["Network Perimeter Defense", "Firewall Configuration", "Threat Mitigation", "Packet Analysis"]
    }
  ],
  experience: [
    {
      year: "2024",
      role: "Foundations & Systems Exploration",
      organization: "Computer Science & Academic Research",
      summary: "Deep-dived into core computer science foundations, low-level memory architectures, networking protocols, and modern web application development.",
      highlights: [
        "Mastered Data Structures, Algorithms, and Object-Oriented Design in C++ and Python",
        "Built foundational full-stack applications with React, Node.js, and MongoDB",
        "Set up dedicated home lab environments for Linux virtualization and networking experimentation"
      ],
      tag: "Foundations"
    },
    {
      year: "2025",
      role: "Full Stack & DevSecOps Integration",
      organization: "Independent Software Engineering",
      summary: "Focused on building complex, production-grade applications with zero-trust security principles, real-time WebSocket pipelines, and 3D web graphics.",
      highlights: [
        "Developed end-to-end encrypted cloud storage architectures and high-frequency trading simulators",
        "Integrated automated DevSecOps pipelines with static code analysis and container vulnerability scanning",
        "Explored WebGL, Three.js, and React Three Fiber to build state-of-the-art interactive spatial user interfaces"
      ],
      tag: "Engineering"
    },
    {
      year: "2026",
      role: "Cybersecurity Specialization & Offensive Tooling",
      organization: "Security Operations & Detection Engineering",
      summary: "Specializing in offensive security tooling, threat intelligence pipelines, enterprise SIEM configuration, and secure systems architecture.",
      highlights: [
        "Engineered customized vulnerability scanners and automated SOC threat correlation playbooks",
        "Conducted extensive capture-the-flag (CTF) challenges focusing on binary exploitation and web application vulnerabilities",
        "Contributing to open-source security tools and authoring technical security research writeups"
      ],
      tag: "Cybersecurity"
    },
    {
      year: "FUTURE",
      role: "Secure Distributed Systems Architect",
      organization: "Next Horizon",
      summary: "Aspiring to design resilient, privacy-first distributed architectures, quantum-resistant cryptographic systems, and boundary-pushing software products.",
      highlights: [
        "Architecting zero-knowledge cryptographic proof systems for enterprise privacy",
        "Pushing the frontiers of secure distributed computing and immersive web experiences"
      ],
      tag: "Vision"
    }
  ]
};
