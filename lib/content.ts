export const profile = {
  name: "Chetan Chadalavada",
  title: "Software Engineer",
  subtitle: "Enterprise Portal Solution Architect at Xtivia",
  location: "Loveland, Colorado",
  email: "chetan.chadalavada@gmail.com",
  github: "https://github.com/chetan552",
  linkedin: "https://www.linkedin.com/in/chetanchad/",
  blurb:
    "I design enterprise platforms by day and ship full-stack products by night. Two decades of building Java/Spring/Liferay systems for insurance, financial services, and Fortune 500 clients — and a growing catalog of Next.js apps on the side.",
};

export const about = [
  "I'm an Enterprise Portal Solution Architect at Xtivia, where I've spent 14+ years designing and delivering Java, Spring Boot, and Liferay portal applications. My day job spans architecture, REST API design, Spring Batch frameworks, OAuth2/Spring Security, and shipping the kind of business-critical software that keeps insurers and enterprises running.",
  "Before Xtivia I was an MTS at Oracle and Sun Microsystems, working on the platforms underneath portals — Glassfish WebSpace, Sun Portal Server, Oracle WebCenter, XMPP/BOSH chat — and contributing to open-source projects including Liferay Portal Server and the NetBeans Portal Pack.",
  "Off the clock I build full-stack products with modern stacks — Next.js, React Native/Expo, Prisma, PostgreSQL, Tailwind, and a healthy dose of AI tooling. I publish them on GitHub and deploy them on Vercel.",
];

export type Job = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "Xtivia, Inc.",
    role: "Enterprise Portal Solution Architect",
    period: "Apr 2025 — Present",
    bullets: [
      "Lead architecture and delivery of Liferay-based enterprise portal solutions across the client portfolio.",
      "Define standards for portal/portlet design, REST API patterns, and Spring-based service layers.",
    ],
  },
  {
    company: "Xtivia, Inc.",
    role: "Senior Enterprise Portal Developer",
    period: "Jan 2012 — May 2025",
    bullets: [
      "Delivered end-to-end Java/JEE/Spring MVC/Liferay/MyBatis portlet applications for an insurance client, including User Administration and Claims web apps.",
      "Designed a Spring Boot framework for batch processing that simplified delivery and standardized patterns across multiple Spring Batch applications.",
      "Built Spring MVC RESTful web services with JUnit-based automated test framework, secured with Spring Security and OAuth2.",
      "Wrote and published technical articles on Flutter + Liferay DXP integration on the Xtivia engineering blog.",
    ],
  },
  {
    company: "Oracle Corporation",
    role: "Member of Technical Staff",
    period: "Sep 2011 — Jan 2012",
    location: "Bangalore",
    bullets: [
      "R&D on Oracle WebCenter — built the Webchat UI in vanilla JavaScript.",
      "JAVA CALDAV integration for the WebCenter Calendar.",
      "Document Manager module for Oracle WebCenter CMS integration.",
    ],
  },
  {
    company: "Sun Microsystems",
    role: "Member of Technical Staff",
    period: "Feb 2008 — Sep 2011",
    bullets: [
      "Contributor to Sun Glassfish Web Space Server (which became Liferay).",
      "Contributed code, features, and bug fixes to the Liferay Portal Server open-source project.",
      "Designed and built key features of the NetBeans Portal Pack — a NetBeans plugin for portlet development — and represented it at external technical events.",
      "Authored sample portlets demonstrating Hibernate, FLEX dashboards, Pentaho, JPA, Dojo, and streaming video integration.",
    ],
  },
  {
    company: "Oracle Corporation",
    role: "Member of Technical Staff",
    period: "2010 — 2011",
    bullets: [
      "Developed XMPP/Presence adapters in JAVA for Oracle WebCenter.",
      "Key contributor to the XMPP/BOSH server implementation for Oracle WebCenter / Beehive integration.",
    ],
  },
  {
    company: "Sapient",
    role: "Associate Technology L2",
    period: "Jun 2006 — Feb 2008",
    bullets: [
      "Technical design and end-to-end development on the Vodafone Vista 3.0 program — Java, J2EE, Oracle Identity Management, Plumtree Portal.",
      "Delivered Reconciliation, Provisioning, and Self-Service Administration modules; authored custom adapters for Oracle Identity Manager.",
      "Owned SOAP web services bridging the Portal Remote portlet server and the VIM Server; analyzed and resolved performance bottlenecks.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  live?: string;
  repo: string;
};

export const projects: Project[] = [
  {
    name: "HuddleBase",
    tagline: "Team command center for coaches, players, and parents.",
    description:
      "Full-stack team management platform with a Next.js web dashboard and a React Native (Expo) mobile app, both backed by a single REST API on PostgreSQL.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Expo", "Prisma", "PostgreSQL"],
    live: "https://huddlebase.vercel.app",
    repo: "https://github.com/chetan552/huddlebase",
  },
  {
    name: "DakSend",
    tagline: "Self-hosted email platform built on Amazon SES.",
    description:
      "Production-ready newsletter and marketing automation platform with a block-based campaign builder, multi-brand subscriber lists, drip automations, GDPR consent tracking, and a dedicated worker for personalization, tracking, and SES delivery.",
    stack: ["Next.js", "PostgreSQL", "Redis", "BullMQ", "Amazon SES"],
    live: "https://dak-send.vercel.app",
    repo: "https://github.com/chetan552/dak-send",
  },
  {
    name: "FamFi",
    tagline: "A family finance bank that teaches kids financial responsibility.",
    description:
      "Cross-platform Expo Router app — iOS, Android, and Web from a single codebase — that lets parents run a family bank with chores, rewards, and interest-bearing savings buckets for their kids. Supabase auth + RLS, Zustand state, React Native Paper UI.",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Zustand"],
    live: "https://famfipiggy.web.app/",
    repo: "https://github.com/chetan552/FamFi",
  },
  {
    name: "VigilBoard",
    tagline: "Self-hosted dashboard for always-on wall displays.",
    description:
      "Personal dashboard optimized for TVs and wall-mounted screens. Drag-and-drop layout builder, twelve widget types (clock, weather, calendar, tasks, RSS, photos, JSON fetcher, …), and zero cloud dependencies.",
    stack: ["Next.js 15", "Prisma", "SQLite", "TypeScript"],
    repo: "https://github.com/chetan552/VigilBoard",
  },
  {
    name: "AI Health Insights",
    tagline: "Personal wellness insights from Garmin + Gemini.",
    description:
      "Connects to Garmin Connect, ingests daily health metrics (steps, sleep, stress) into a SQLite store, and uses Google Gemini to generate personalized wellness narratives behind a Flask dashboard.",
    stack: ["Python", "Flask", "SQLite", "Gemini AI"],
    repo: "https://github.com/chetan552/ai-health-insights",
  },
  {
    name: "Smart Grocery List",
    tagline: "AI-assisted grocery list with shared households.",
    description:
      "Next.js application that combines OpenAI for smart suggestions with a NextAuth-secured multi-user experience and a Prisma data model.",
    stack: ["Next.js 15", "React 19", "Prisma", "NextAuth", "OpenAI"],
    live: "https://smartgrocerylist.vercel.app",
    repo: "https://github.com/chetan552/smartgrocerylist",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "Java", "JavaScript", "Python", "Dart", "Swift", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native", "Expo", "Flutter", "Tailwind CSS", "TipTap"],
  },
  {
    group: "Backend",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Batch",
      "Spring Security",
      "OAuth2",
      "Node.js",
      "Flask",
      "REST / JSON APIs",
      "JPA / Hibernate",
      "MyBatis",
      "Prisma",
    ],
  },
  {
    group: "Enterprise Portal",
    items: [
      "Liferay DXP",
      "Oracle WebCenter",
      "Glassfish WebSpace",
      "Sun Portal Server",
      "Plumtree Portal",
      "JEE Portlets",
      "XMPP / BOSH",
    ],
  },
  {
    group: "Data & Infra",
    items: ["PostgreSQL", "SQLite", "Redis", "BullMQ", "Amazon SES", "Vercel"],
  },
  {
    group: "AI & Tooling",
    items: ["OpenAI", "Google Gemini", "Git", "Agile / Scrum", "Open-source contribution"],
  },
];

export const openSource = [
  {
    name: "Liferay Portal Server",
    note: "Code contributions, feature work, and bug fixes.",
    href: "https://github.com/liferay/liferay-portal",
  },
  {
    name: "NetBeans Portal Pack",
    note: "Designed and shipped key features of the NetBeans plugin for portlet development.",
    href: "https://github.com/chetan552",
  },
];
