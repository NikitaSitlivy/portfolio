export type Locale = "ru" | "en";

export type ProfileData = {
  hero: {
    name: string;
    title: string;
    location: string;
    summary: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
  highlights: string[];
  projects: Array<{
    title: string;
    description: string;
    stack: string[];
    bullets: string[];
    links: Array<{ label: string; href: string; external?: boolean }>;
  }>;
  experience: Array<{
    company: string;
    period: string;
    role: string;
    description: string;
  }>;
  skills: Array<{
    group: string;
    items: string[];
  }>;
  contacts: {
    email: string;
    phone: string;
    telegram: string;
    github: string;
    hh: string;
  };
};

export const profiles: Record<Locale, ProfileData> = {
  ru: {
    hero: {
      name: "Никита Ситливый",
      title: "Middle Frontend Developer (Vue 3 / React, TypeScript)",
      location: "Россия, удаленно",
      summary:
        "Разрабатываю продуктовые интерфейсы с фокусом на архитектуру, UX и надежный продакшн. Беру ответственность за фронтенд end-to-end и уверенно закрываю смежные backend-задачи.",
      ctaPrimary: {
        label: "Связаться",
        href: "#contact"
      },
      ctaSecondary: {
        label: "Проекты",
        href: "#projects"
      }
    },
    highlights: [
      "4+ года коммерческого опыта: SPA, Vue/React, TypeScript",
      "Архитектура интерфейсов, состояние и UX под реальные продуктовые сценарии",
      "Интеграции REST API, авторизация и стабильные клиент-серверные контракты",
      "Понимание backend-части: Node.js и Supabase (Auth/DB/Storage)",
      "Деплой и сопровождение продакшна: домены, HTTPS, окружения"
    ],
    projects: [
      {
        title: "FingerClock",
        description: "Продуктовый интерфейсный проект с упором на производительность и удобный UX.",
        stack: ["Vue", "React", "TypeScript", "SPA"],
        bullets: [
          "Собрал масштабируемую структуру UI и переиспользуемых компонентов",
          "Оптимизировал загрузку и поведение на мобильных устройствах",
          "Подготовил проект к быстрой поставке новых фич"
        ],
        links: [
          { label: "Демо", href: "https://fingercloak.com/", external: true },
          { label: "GitHub", href: "https://github.com/NikitaSitlivy", external: true }
        ]
      },
      {
        title: "Eterium",
        description: "Платформа: автор проекта, frontend и backend разработка.",
        stack: ["Vue 3", "TypeScript", "Node.js", "Supabase"],
        bullets: [
          "Развил SPA-архитектуру и пользовательские потоки продукта",
          "Реализовал backend-логику и API для ключевых сценариев",
          "Выстроил деплой и поддержку окружений под продакшн"
        ],
        links: [
          { label: "Демо", href: "https://eterium.space/", external: true },
          { label: "GitHub", href: "https://github.com/NikitaSitlivy", external: true }
        ]
      }
    ],
    experience: [
      {
        company: "Startup",
        period: "Nov 2024 - Present",
        role: "Fullstack Developer (Frontend-focused)",
        description:
          "Отвечаю за фронтенд целиком: Vue 3/TypeScript, архитектура, состояние, UX, REST API. Дополнительно веду Supabase (Auth/DB/Storage), деплой и эксплуатацию продакшна."
      },
      {
        company: "Nexora Labs",
        period: "Jul 2023 - Nov 2024",
        role: "Fullstack Developer",
        description:
          "Работал над веб-платформой стартапа на ранней стадии. Закрывал задачи полного цикла: от SPA-интерфейсов на Vue.js до серверной логики на Node.js. Фокус: frontend-архитектура компонентов, состояние, REST API, UX, адаптивная верстка. Дополнительно: backend-задачи, REST API, PostgreSQL."
      },
      {
        company: "FastLead",
        period: "Aug 2021 - Jul 2023",
        role: "Frontend Developer",
        description:
          "Разработка на Vue, интеграции REST API, продуктовые формы и таблицы, поддержка и рефакторинг существующего кода, часть задач на fullstack-стыке."
      }
    ],
    skills: [
      {
        group: "Frontend",
        items: ["Vue 3", "React", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS", "BEM"]
      },
      {
        group: "State/API",
        items: ["REST API", "Postman"]
      },
      {
        group: "Backend basics",
        items: ["Node.js", "Nest", "Supabase (Auth, DB, Storage)"]
      },
      {
        group: "Tools",
        items: ["Git", "npm", "Figma"]
      }
    ],
    contacts: {
      email: "nikita.sitlivy@mail.ru",
      phone: "+7 (967) 661-75-33",
      telegram: "",
      github: "https://github.com/NikitaSitlivy",
      hh: ""
    }
  },
  en: {
    hero: {
      name: "Nikita Sitlivy",
      title: "Middle Frontend Developer (Vue 3 / React, TypeScript)",
      location: "Russia, remote",
      summary:
        "I build product interfaces with focus on architecture, UX, and production reliability. I take ownership of frontend end-to-end and confidently handle adjacent backend tasks.",
      ctaPrimary: {
        label: "Contact me",
        href: "#contact"
      },
      ctaSecondary: {
        label: "Projects",
        href: "#projects"
      }
    },
    highlights: [
      "4+ years of commercial experience: SPA, Vue/React, TypeScript",
      "UI architecture, state management, and UX for real product scenarios",
      "REST API integrations, auth flows, and stable client-server contracts",
      "Backend understanding: Node.js and Supabase (Auth/DB/Storage)",
      "Production delivery and operations: domains, HTTPS, environments"
    ],
    projects: [
      {
        title: "FingerClock",
        description: "Product-oriented interface project focused on performance and practical UX.",
        stack: ["Vue", "React", "TypeScript", "SPA"],
        bullets: [
          "Built a scalable UI structure with reusable components",
          "Optimized loading and behavior on mobile devices",
          "Prepared the project for faster feature delivery"
        ],
        links: [
          { label: "Demo", href: "https://fingercloak.com/", external: true },
          { label: "GitHub", href: "https://github.com/NikitaSitlivy", external: true }
        ]
      },
      {
        title: "Eterium",
        description: "Platform project where I handled both frontend and backend.",
        stack: ["Vue 3", "TypeScript", "Node.js", "Supabase"],
        bullets: [
          "Designed SPA architecture and core user flows",
          "Implemented backend logic and API for key scenarios",
          "Set up deployment and environment support for production"
        ],
        links: [
          { label: "Demo", href: "https://eterium.space/", external: true },
          { label: "GitHub", href: "https://github.com/NikitaSitlivy", external: true }
        ]
      }
    ],
    experience: [
      {
        company: "Startup",
        period: "Nov 2024 - Present",
        role: "Fullstack Developer (Frontend-focused)",
        description:
          "Own the frontend end-to-end: Vue 3/TypeScript, architecture, state, UX, and REST API integrations. Also handle Supabase (Auth/DB/Storage), deployment, and production support."
      },
      {
        company: "Nexora Labs",
        period: "Jul 2023 - Nov 2024",
        role: "Fullstack Developer",
        description:
          "Worked on an early-stage startup web platform and delivered full-cycle tasks: from SPA interfaces in Vue.js to server logic in Node.js. Main focus: frontend component architecture, state management, REST API, UX, and responsive layouts. Additional scope: backend tasks, REST API, PostgreSQL."
      },
      {
        company: "FastLead",
        period: "Aug 2021 - Jul 2023",
        role: "Frontend Developer",
        description:
          "Built Vue interfaces, integrated REST APIs, shipped product forms and tables, and maintained/refactored existing code with occasional fullstack tasks."
      }
    ],
    skills: [
      {
        group: "Frontend",
        items: ["Vue 3", "React", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS", "BEM"]
      },
      {
        group: "State/API",
        items: ["REST API", "Postman"]
      },
      {
        group: "Backend basics",
        items: ["Node.js", "Nest", "Supabase (Auth, DB, Storage)"]
      },
      {
        group: "Tools",
        items: ["Git", "npm", "Figma"]
      }
    ],
    contacts: {
      email: "nikita.sitlivy@mail.ru",
      phone: "+7 (967) 661-75-33",
      telegram: "",
      github: "https://github.com/NikitaSitlivy",
      hh: ""
    }
  }
};
