import type { Job } from "./types";

export const tempData: Job[] = [
  {
    id: 'oxford-fse',
    title: 'Full Stack Engineer — Insights Platform',
    company: 'EIT Oxford',
    location: 'Remote · UK/EU',
    stage: 'ready',
    score: 74,
    source: 'Greenhouse',
    updated: 'Today',
    salary: '£78–92k',
    tags: ['React', 'TypeScript', 'Postgres', 'Terraform'],
    assessment:
      'Strong alignment on React/TypeScript and distributed systems; remote OK offsets location mismatch.',
    summary:
      'Building a metrics surface for research tooling. Looking for someone who can own schema design and tighten DX across the stack.',
    highlights: [
      'Evidence of technical leadership across frontend + platform',
      'Comfortable with data-heavy UI and query optimization',
      'Prioritized developer experience improvements in last role',
    ],
    checklist: [
      { label: 'Tailored resume exported', done: true },
      { label: 'Cover note drafted', done: false },
      { label: 'Referral pinged', done: false },
    ],
  },
  {
    id: 'gresearch-intern',
    title: 'Software Engineering Intern',
    company: 'G-Research',
    location: 'London · Hybrid',
    stage: 'new',
    score: 65,
    source: 'Direct',
    updated: '2d ago',
    tags: ['Python', 'Data', 'Distributed'],
    assessment:
      'Solid Python background; internship timeline fits. Need clearer story on finance interest.',
    summary:
      'Quant research engineering rotation. Collaboration with platform team to productionize models.',
    highlights: [
      'Academic research projects with reproducibility focus',
      'Data pipeline experience from previous contract',
    ],
    checklist: [
      { label: 'Intro email sent', done: true },
      { label: 'Skills matrix attached', done: false },
      { label: 'Follow-up scheduled', done: false },
    ],
  },
  {
    id: 'oliver-retail',
    title: 'Full Stack Developer — Retail Systems',
    company: 'Oliver Wyman',
    location: 'Multiple · Remote friendly',
    stage: 'ready',
    score: 68,
    source: 'Lever',
    updated: '1d ago',
    tags: ['Node', 'Next.js', 'Azure'],
    assessment:
      'Consulting-heavy; strong match on Next.js. Emphasize client-facing delivery wins.',
    summary:
      'Modernizing store tooling with composable services. Needs pragmatic engineer comfortable with ambiguity.',
    highlights: [
      'End-to-end ownership of migration projects',
      'Comfortable presenting architecture to non-technical leads',
    ],
    checklist: [
      { label: 'Case study link added', done: true },
      { label: 'Portfolio screenshot bundle', done: false },
      { label: 'Timezone alignment confirmed', done: true },
    ],
  },
  {
    id: 'lloyds-fe',
    title: 'Frontend Engineer — Digital Banking',
    company: 'Lloyds Banking Group',
    location: 'Leeds · Hybrid',
    stage: 'applied',
    score: 61,
    source: 'Agency',
    updated: '4d ago',
    tags: ['Accessibility', 'Design Systems', 'React'],
    assessment:
      'Applied with DS case study; need to emphasize accessibility and security posture in follow-up.',
    summary:
      'Banking UI modernization with accessibility-first charter. Partnering with design systems guild.',
    highlights: [
      'WCAG audits delivered for previous clients',
      'Experience hardening component libraries',
    ],
    checklist: [
      { label: 'Status follow-up email', done: false },
      { label: 'Ask for panel structure', done: false },
    ],
  },
  {
    id: 'db-ui',
    title: 'Web UI Developer — Markets',
    company: 'Deutsche Bank',
    location: 'London · Onsite',
    stage: 'ready',
    score: 62,
    source: 'Direct',
    updated: 'Today',
    tags: ['React', 'High performance', 'FinTech'],
    assessment:
      'Strong UI perf background aligns. Clarify stance on onsite requirement.',
    summary:
      'Building low-latency dashboards for trading ops. Needs careful perf profiling and DX rigor.',
    highlights: [
      'Profiling experience with React + web vitals',
      'Async data visualization with graceful fallbacks',
    ],
    checklist: [
      { label: 'Perf story bullets added', done: true },
      { label: 'Commute viability checked', done: false },
    ],
  },
  {
    id: 'centrica',
    title: 'Full-Stack Engineer — Customer Ops',
    company: 'Centrica',
    location: 'Remote · EU',
    stage: 'archived',
    score: 52,
    source: 'LinkedIn',
    updated: '1w ago',
    tags: ['React', 'API design'],
    assessment:
      'Withdrawn after scope changed to PHP-heavy role.',
    summary: 'Archived. Keep notes for similar roles; recruiter was helpful.',
    highlights: ['Recruiter willing to refer internally later'],
    checklist: [{ label: 'Send thanks note', done: false }],
  },
  {
    id: 'caspians',
    title: 'Platform Engineer — Genomics',
    company: 'Caspian One',
    location: 'Glasgow · Remote',
    stage: 'ready',
    score: 58,
    source: 'Greenhouse',
    updated: '3d ago',
    tags: ['Kubernetes', 'CI/CD', 'Observability'],
    assessment:
      'Platform focus matches; emphasize research background and reliability wins.',
    summary:
      'Deploying compute for research teams; strong SRE instincts needed to keep experiments flowing.',
    highlights: ['Incident response leadership', 'Tracing/metrics rollout experience'],
    checklist: [
      { label: 'Add SLO case study', done: false },
      { label: 'Line manager on LinkedIn', done: true },
    ],
  },
  {
    id: 'pathogen',
    title: 'Applied Engineer — Health Tech',
    company: 'Pathogen Project',
    location: 'Remote · US',
    stage: 'new',
    score: 57,
    source: 'AngelList',
    updated: '5d ago',
    tags: ['Next.js', 'Data viz', 'Product'],
    assessment:
      'Early stage; highlight ability to build fast with guardrails. Need clarity on equity band.',
    summary: 'First design/eng hire pairing with founder to ship MVP dashboards for clinics.',
    highlights: ['Zero-to-one product delivery', 'Customer interviews experience'],
    checklist: [
      { label: 'Founder intro drafted', done: false },
      { label: 'Equity questions listed', done: false },
    ],
  },
]