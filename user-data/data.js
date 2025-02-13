export const bio = [
  "Hello, I'm Vlado Plavsic!",
  "<strong>Backend Software Engineer</strong> with 4+ years of experience building scalable, user-focused web applications.",
  "Skilled in Elixir, OTP and performance optimization, I aim to leverage my expertise in delivering innovative solutions that drive measurable business outcomes.",
  "Passionate about diving deep into tech investigation, teamwork, and continuous improvement in engineering processes.",
];

export const skills = [
  "Elixir, Erlang, Python, JavaScript",
  "GraphQL, REST, gRPC, RabbitMQ, WebSockets, OCPP protocol",
  "Docker, JIRA, Linux, Git, OTP",
];

export const experience = [
  {
    title: "Wellnuts",
    duration: "August 2022 - Present",
    subtitle: "Backend Software Engineer",
    details: [
      "Optimized ETL pipeline: Reduced processing time from 15+ minutes for 300k rows to ~3 minutes for 1.5M rows, significantly improving performance and efficiency.",
      "End-to-end feature development: Led the full lifecycle of feature requests—engaging with clients to gather requirements, breaking down features into tasks, estimating timelines, delegating work, and implementing core functionality while ensuring quality and accountability.",
      "Emergency response & production support: Acted as a key point of contact during critical incidents, quickly diagnosing issues and delivering hotfixes to restore system stability.",
      "Customized third-party libraries: Extended, fixed, and enhanced forks of external libraries to meet specific business needs. Notably, patched the Elixir gRPC library to develop a custom HTTP/2 pooling solution, enabling multi-channel communication. This optimization significantly reduced latency and per-process load, improving system stability and scalability while handling thousands of requests per second.",
      "Scalability & maintainability: Worked on a large, complex codebase, prioritizing clean, modular, and reusable code for long-term maintainability. Ensured comprehensive test coverage to maintain system reliability.",
      "I was part of the core team building complex feature around OTP protocol."
    ],
    tags: ["Elixir", "Erlang", "OTP", "GraphQL", "RabbitMQ", "gRPC", "PostgreSQL", "Redshift", "Cassandra", "Redis"],
    icon: "truck ",
  },
  {
    title: "Deledger",
    duration: "August 2021 - October 2022",
    subtitle: "Software Engineer",
    details: [
      "Developed the backend for an application that allows users to create, share, import, and sign electronic CMR (e-CMR) documents, replacing traditional paper-based workflows for transport companies.",
      "Integrated with external APIs: Implemented SBIS integration for qualified e-signatures, handling a complex third-party API to ensure compliance with legal requirements.",
      "Startup impact: Despite joining with limited experience in Elixir and REST APIs, quickly ramped up, delivering the MVP, which successfully attracted investors.",
      "Full-stack contributions: Assisted the frontend team with React & JavaScript, including extending and fixing certificate management plugins (e.g., crypto-pro).",
    ],
    tags: ["Elixir", "Erlang", "Phoenix", "Linux", "ReactJS"],
    icon: "heartbeat",
  },
  {
    title: "Internship",
    duration: "June 2020 - April 2022",
    subtitle: "Software Engineer",
    details: [
      "Developed the backend for a web application providing study materials (courses) for junior and high school students, working alongside a frontend developer.",
      "Content management system: Enabled full CRUD operations for all content elements—titles, images, videos, and more—giving admins complete control over the platform’s content.",
      "Scalable media storage: Managed large assets (videos, books, images, games) via AWS S3, using pre-signed URLs for secure and efficient access.",
      "Microservice integration: Later expanded the platform by integrating a dictionary service as a separate microservice.",
      "Project recognition: The platform won a grant from the Ministry of Science and Higher Education, leading to a transition to a fully free educational service, requiring removal of the payment system and a UI redesign."
    ],
    tags: ["Python", "PostgreSQL", "Yandex Cloud", "AWS s3", "YooMoney"],
    icon: "qrcode",
  },
];

export const education = [
  {
    title: "Master's degree in Computer Science and Engineering",
    duration: "2023 - 2025",
    subtitle: "Moscow Power Engineering Institute, Moscow",
    details: [],
    tags: [
      "Cryptography and qualified e-signatures",
      "Blockchain",
      "Mobile Development",
      "Computer Networks",
      "Distributed Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Bachelor's degree in Computer Science and Engineering",
    duration: "2018 - 2022",
    subtitle: "Moscow Power Engineering Institute, Moscow",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Links",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/vlado-plavsic-197b98202/",
      },
      {
        text: "Github",
        link: "https://github.com/vladoplavsic/",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [{ text: "Template taken from Vinay Somawat", link: "https://github.com/vinaysomawat/vinaysomawat.github.io" }],
  },
];
