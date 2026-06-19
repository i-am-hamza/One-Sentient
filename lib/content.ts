export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

export interface Service {
  icon:        string
  title:       string
  description: string
  accent:      string
  glow:        string
}

export const SERVICES: Service[] = [
  {
    icon:        'BrainCircuit',
    title:       'AI & Automation',
    description: 'We design and ship intelligent systems — LLM integrations, autonomous agents, and AI-powered product features that hold up in production.',
    accent:      'violet',
    glow:        '#7C3AED',
  },
  {
    icon:        'ShieldCheck',
    title:       'Cybersecurity',
    description: 'Privacy-first security architecture, threat modeling, zero-trust design patterns, and secure-by-default engineering across every layer.',
    accent:      'indigo',
    glow:        '#4F46E5',
  },
  {
    icon:        'TrendingUp',
    title:       'Fintech',
    description: 'End-to-end financial software — dashboards, analytics engines, payment integrations, and compliance-aware data pipelines that scale.',
    accent:      'sky',
    glow:        '#38BDF8',
  },
]

export type BadgeColor = 'emerald' | 'violet' | 'indigo' | 'muted'

export interface Product {
  id:          string
  name:        string
  subtitle:    string
  description: string
  tags:        string[]
  badge:       string
  badgeColor:  BadgeColor
  href:        string | null
  cta:         string
  gradient:    string
}

export const PRODUCTS: Product[] = [
  {
    id:          'finora',
    name:        'Finora',
    subtitle:    'Personal Finance, Reimagined',
    description: 'Track income, debts, EMIs, investments, and budgets in one clean dashboard. Built for how real people actually manage money.',
    tags:        ['Next.js', 'Supabase', 'TypeScript'],
    badge:       'Live',
    badgeColor:  'emerald',
    href:        'https://finora-liard-phi.vercel.app/',
    cta:         'Visit Finora →',
    gradient:    'from-emerald to-sky',
  },
  {
    id:          'apex',
    name:        'Apex',
    subtitle:    'Rank Your Goals. Focus on What Wins.',
    description: 'A PWA that ranks goals using the Hormozi Value Equation — giving you ruthless clarity on what to actually work on next.',
    tags:        ['React', 'Vite', 'PWA', 'Supabase'],
    badge:       'Beta',
    badgeColor:  'violet',
    href:        null,
    cta:         'Join Beta →',
    gradient:    'from-violet to-indigo',
  },
  {
    id:          'lucent',
    name:        'Lucent Labs',
    subtitle:    'Experimental. Opinionated. Independent.',
    description: 'Our research arm. Where we explore the edges of AI, privacy tech, and human-computer interaction — without the pressure of a launch date.',
    tags:        ['Research', 'AI', 'Privacy'],
    badge:       'Exploring',
    badgeColor:  'indigo',
    href:        null,
    cta:         'Learn More →',
    gradient:    'from-indigo to-violet',
  },
  {
    id:          'soon',
    name:        "Something's Brewing",
    subtitle:    'Next project in the pipeline',
    description: "We're building. Follow our journey and be first to know when we ship.",
    tags:        ['Coming Soon'],
    badge:       'Soon',
    badgeColor:  'muted',
    href:        '#contact',
    cta:         'Stay in the Loop →',
    gradient:    'from-border to-surface-2',
  },
]

export const STATS = [
  { value: '4',    label: 'Products Shipped'     },
  { value: '3',    label: 'Technical Verticals'  },
  { value: '2026', label: 'Founded'              },
]
