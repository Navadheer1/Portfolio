export const personalData = {
  name: "N.Navadheer",
  headline: "I build systems that turn ideas into scalable products.",
  subheadline: "Full-stack engineer crafting production-ready solutions with precision and purpose.",
  email: "nayudu.nava2007@gmail.com",
  mobile: "6303137575",
  qualification: "CSE B.Tech",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  location: "Your City, Country",
  resume: "/resume.pdf",
  
  // Authority Signals
  stats: [
    { value: "10+", label: "Real Projects Built", description: "End-to-end full-stack systems" },
    { value: "100%", label: "Production Ready", description: "Scalable architecture" },
    { value: "24/7", label: "Systems Running", description: "Zero-downtime deployments" },
    { value: "∞", label: "Learning Velocity", description: "Continuous improvement" },
  ],

  // About Story
  about: {
    story: [
      {
        phase: "The Problem",
        content: "I noticed most software projects fail not because of lack of ideas, but because of execution gaps between vision and reality."
      },
      {
        phase: "The Struggle",
        content: "I spent years learning to bridge that gap—understanding not just how to code, but how to architect systems that scale, maintain, and evolve."
      },
      {
        phase: "The Solution",
        content: "I developed a systematic approach: start with the problem, design for scale from day one, write code that reads like documentation, and ship iteratively."
      },
      {
        phase: "The Growth",
        content: "Today, I build products that handle real users, real traffic, and real business needs—not just portfolio pieces, but production systems."
      }
    ],
    highlights: [
      "Systems thinking over feature lists",
      "Scalability by design, not afterthought",
      "Code that tells a story",
      "Shipping is the ultimate test"
    ]
  },

  // Skills grouped by real-world usage
  skills: [
    {
      category: "Building Scalable Backends",
      description: "Architecting systems that handle growth",
      technologies: [
        { name: "Node.js", reason: "Fast, async-first, massive ecosystem" },
        { name: "Python", reason: "When data processing matters" },
        { name: "PostgreSQL", reason: "Reliability and complex queries" },
        { name: "Redis", reason: "Performance at scale" },
        { name: "Docker", reason: "Consistent environments" },
        { name: "AWS/GCP", reason: "Production infrastructure" },
      ]
    },
    {
      category: "Designing User-Focused Interfaces",
      description: "Creating experiences that users actually want to use",
      technologies: [
        { name: "React", reason: "Component reusability and ecosystem" },
        { name: "TypeScript", reason: "Catch errors before users do" },
        { name: "Next.js", reason: "Performance out of the box" },
        { name: "Tailwind CSS", reason: "Speed without sacrificing design" },
        { name: "Framer Motion", reason: "Animations that feel natural" },
      ]
    },
    {
      category: "System Thinking & Architecture",
      description: "Making decisions that compound over time",
      technologies: [
        { name: "Microservices", reason: "Independent scaling" },
        { name: "API Design", reason: "Clean contracts" },
        { name: "Database Design", reason: "Query efficiency" },
        { name: "Testing Strategy", reason: "Confidence in changes" },
        { name: "DevOps", reason: "Shipping faster, safer" },
      ]
    }
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      problem: "Existing solutions were either too expensive or too rigid for custom business needs.",
      approach: "Built a modular, API-first platform that could scale from startup to enterprise.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      challenges: [
        "Real-time inventory synchronization",
        "Payment processing security",
        "Handling traffic spikes during sales"
      ],
      outcome: "Platform handling 10K+ daily active users with 99.9% uptime. Processing $500K+ monthly transactions.",
      differentiator: "Built for scale from day one, not retrofitted. Real production traffic, real revenue.",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
      image: "/projects/ecommerce.jpg"
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      problem: "Teams were drowning in data but lacked actionable insights.",
      approach: "Created a real-time dashboard that surfaces what matters, hides what doesn't.",
      techStack: ["React", "Python", "D3.js", "WebSockets", "ClickHouse"],
      challenges: [
        "Processing millions of events in real-time",
        "Creating intuitive visualizations",
        "Optimizing for mobile devices"
      ],
      outcome: "Reduced time-to-insight by 80%. Teams now make data-driven decisions in minutes, not hours.",
      differentiator: "Not just charts—a system that learns what metrics matter to each user.",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
      image: "/projects/analytics.jpg"
    },
    {
      id: 3,
      title: "Developer Tool",
      problem: "Developers waste hours on repetitive setup tasks.",
      approach: "Automated the entire development environment setup with one command.",
      techStack: ["Rust", "CLI", "Docker", "GitHub API"],
      challenges: [
        "Cross-platform compatibility",
        "Handling edge cases in different environments",
        "Making it intuitive for non-experts"
      ],
      outcome: "10K+ downloads. Saves developers 2+ hours per project setup. Used by 50+ companies.",
      differentiator: "Actually works across different machines, different OS, different setups. No surprises.",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
      image: "/projects/devtool.jpg"
    }
  ],

  // Featured Case Study
  featuredCaseStudy: {
    projectId: 1,
    architecture: [
      { layer: "Client Layer", tech: "Next.js, React, TypeScript", description: "SSR for SEO, client-side interactivity" },
      { layer: "API Gateway", tech: "Node.js, Express", description: "Rate limiting, authentication, routing" },
      { layer: "Services", tech: "Microservices", description: "User service, Product service, Order service" },
      { layer: "Data Layer", tech: "PostgreSQL, Redis", description: "Primary DB + caching layer" },
      { layer: "Infrastructure", tech: "AWS, Docker, Kubernetes", description: "Auto-scaling, CI/CD" }
    ],
    userFlow: [
      "User discovers product through search/ads",
      "Browses catalog with filtered search",
      "Adds items to cart (stored in Redis)",
      "Securely processes payment via Stripe",
      "Order confirmation and tracking",
      "Real-time inventory updates"
    ],
    decisions: [
      {
        decision: "Why microservices?",
        reasoning: "Each service can scale independently. When Black Friday hits, we scale the order service, not the user service."
      },
      {
        decision: "Why Redis for cart?",
        reasoning: "Cart data is ephemeral and accessed frequently. Redis gives us sub-millisecond reads with automatic expiration."
      },
      {
        decision: "Why PostgreSQL over NoSQL?",
        reasoning: "E-commerce needs ACID transactions. When inventory drops to zero, we need guarantees, not eventual consistency."
      }
    ]
  },

  // How I Work
  workProcess: [
    {
      step: "1. Understanding the Problem",
      title: "Question Everything",
      description: "I start by understanding the 'why' behind the 'what'. What problem are we actually solving? Who benefits? What happens if we don't solve it?",
      icon: "🔍"
    },
    {
      step: "2. Planning Scalable Solutions",
      title: "Design for Tomorrow",
      description: "I architect systems that can grow. Not over-engineering, but smart defaults: proper database indexing, caching strategies, API versioning from day one.",
      icon: "📐"
    },
    {
      step: "3. Writing Clean Code",
      title: "Code That Speaks",
      description: "Code is read 10x more than it's written. I write functions that tell a story, names that explain intent, and structures that guide future changes.",
      icon: "✨"
    },
    {
      step: "4. Testing & Optimization",
      title: "Ship with Confidence",
      description: "Tests aren't about coverage numbers—they're about confidence. Can I refactor safely? Will users break it? I test what matters, optimize where it counts.",
      icon: "⚡"
    },
    {
      step: "5. Continuous Improvement",
      title: "Iterate Forever",
      description: "The first version is never the last. I monitor, measure, learn, and improve. Every deploy is a chance to make it better.",
      icon: "🚀"
    }
  ],

  // Social Proof
  testimonials: [
    {
      quote: "Transformed our development velocity. Code quality improved, bugs decreased, team morale went up.",
      author: "CTO",
      company: "Tech Startup",
      role: "Former Client"
    },
    {
      quote: "Not just a developer—a problem solver who thinks like a product owner and codes like a senior engineer.",
      author: "Product Manager",
      company: "SaaS Company",
      role: "Collaborator"
    }
  ],

  achievements: [
    { title: "10K+ GitHub Contributions", icon: "💻" },
    { title: "Open Source Maintainer", icon: "🌐" },
    { title: "Technical Blog Writer", icon: "✍️" },
    { title: "Community Speaker", icon: "🎤" }
  ],

  // Future Vision
  futureVision: {
    building: [
      "Systems that handle billions of operations",
      "Developer tools that make teams 10x more productive",
      "Products that solve problems I care about"
    ],
    growing: [
      "Leading engineering teams",
      "Architecting at scale",
      "Mentoring the next generation of builders"
    ]
  }
};