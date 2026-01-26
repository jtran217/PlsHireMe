import { useMemo, useState } from 'react'
import {
  ArrowLineUpRight,
  CaretDown,
  CheckCircle,
  Clock,
  FunnelSimple,
  Globe,
  ListChecks,
  MagnifyingGlass,
  MapPin,
  PaperPlaneTilt,
  TrendUp,
} from '@phosphor-icons/react'
import './App.css'

type Stage = 'ready' | 'new' | 'applied' | 'archived'

type Job = {
  id: string
  title: string
  company: string
  location: string
  stage: Stage
  score: number
  source: string
  updated: string
  salary?: string
  tags: string[]
  assessment: string
  summary: string
  highlights: string[]
  checklist: { label: string; done: boolean }[]
}

const jobData: Job[] = [
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

const stageLabels: Record<Stage, string> = {
  ready: 'Ready',
  new: 'Discovered',
  applied: 'Applied',
  archived: 'Archived',
}

function App() {
  const [activeStage, setActiveStage] = useState<Stage | 'all'>('ready')
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState<string>(jobData[0].id)

  const stats = useMemo(() => {
    const total = jobData.length
    const byStage = jobData.reduce(
      (acc, job) => {
        acc[job.stage] += 1
        return acc
      },
      { ready: 0, new: 0, applied: 0, archived: 0 },
    )
    return { total, byStage }
  }, [])

  const filteredJobs = useMemo(() => {
    return jobData.filter((job) => {
      const matchesStage = activeStage === 'all' ? true : job.stage === activeStage
      const term = search.trim().toLowerCase()
      const matchesQuery =
        term.length === 0 ||
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.tags.some((tag) => tag.toLowerCase().includes(term))
      return matchesStage && matchesQuery
    })
  }, [activeStage, search])

  const selectedJob = useMemo(() => {
    const current = jobData.find((job) => job.id === selectedId)
    if (current) return current
    return filteredJobs[0] ?? jobData[0]
  }, [selectedId, filteredJobs])

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">PH</div>
          <div>
            <p className="eyebrow">PlsHireMe</p>
            <p className="brand-title">Dashboard</p>
          </div>
        </div>
        <div className="top-actions">
          <button className="ghost-btn">
            <Clock size={18} weight="duotone" />
            Recent activity
          </button>
          <button className="ghost-btn">
            <Globe size={18} weight="duotone" />
            Sources
          </button>
          <button className="primary-btn">
            <ArrowLineUpRight size={18} weight="bold" />
            Run pipeline
          </button>
        </div>
      </header>

      <div className="page">
        <div className="page-head">
          <div>
            <p className="eyebrow">Jobs overview</p>
            <h1>Job tracker</h1>
            <div className="stat-row">
              <span>{stats.total} total</span>
              <span>·</span>
              <span>{stats.byStage.ready} ready</span>
              <span>·</span>
              <span>{stats.byStage.new} discovered</span>
              <span>·</span>
              <span>{stats.byStage.applied} applied</span>
              <span>·</span>
              <span>{stats.byStage.archived} archived</span>
            </div>
          </div>
          <div className="score-card">
            <div>
              <p className="eyebrow">Fit signal</p>
              <div className="score-value">
                <TrendUp size={18} weight="bold" />
                {selectedJob.score}
              </div>
              <p className="muted">Based on skills, location, and recency.</p>
            </div>
            <div className="divider" />
            <div>
              <p className="eyebrow">Next action</p>
              <p className="next-action">{selectedJob.checklist.find((c) => !c.done)?.label ?? 'Maintain momentum'}</p>
              <p className="muted">Keep cadence tight; micro follow-ups win.</p>
            </div>
          </div>
        </div>

        <div className="toolbar">
          <div className="tabs">
            {(['ready', 'new', 'applied', 'archived', 'all'] as const).map((key) => (
              <button
                key={key}
                className={`tab ${activeStage === key ? 'active' : ''}`}
                onClick={() => setActiveStage(key as Stage | 'all')}
              >
                {key === 'all' ? 'All' : stageLabels[key as Stage]}
                <span className="pill small">{key === 'all' ? stats.total : stats.byStage[key as Stage]}</span>
              </button>
            ))}
          </div>
          <div className="filters">
            <div className="input">
              <MagnifyingGlass size={16} />
              <input
                placeholder="Search titles, companies, or tags"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="ghost-btn">
              <FunnelSimple size={16} /> Filters
            </button>
            <button className="ghost-btn">
              Sort by <CaretDown size={14} weight="bold" />
            </button>
          </div>
        </div>

        <div className="grid">
          <section className="panel list-panel">
            <div className="panel-head">
              <p className="eyebrow">Queue</p>
              <p className="muted">Prioritized by fit score and freshness.</p>
            </div>
            <div className="job-list">
              {filteredJobs.map((job) => {
                const isActive = job.id === selectedJob.id
                return (
                  <button
                    key={job.id}
                    className={`job-card ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedId(job.id)}
                  >
                    <div className="job-card-top">
                      <div className="stage-pill">{stageLabels[job.stage]}</div>
                      <div className="score-chip">{job.score}</div>
                    </div>
                    <div className="job-title">{job.title}</div>
                    <div className="job-meta">
                      <MapPin size={14} />
                      <span>
                        {job.company} · {job.location}
                      </span>
                      <span className="dot" />
                      <Clock size={14} />
                      <span>{job.updated}</span>
                    </div>
                    <div className="tag-row">
                      <span className="pill subtle">{job.source}</span>
                      {job.tags.map((tag) => (
                        <span key={tag} className="pill subtle">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </button>
                )
              })}
            </div>
          </section>

          <section className="panel detail-panel">
            <div className="panel-head">
              <div>
                <p className="eyebrow">Selected</p>
                <h2>{selectedJob.title}</h2>
                <div className="job-meta">
                  <MapPin size={16} />
                  <span>
                    {selectedJob.company} · {selectedJob.location}
                  </span>
                  {selectedJob.salary && (
                    <>
                      <span className="dot" />
                      <span>{selectedJob.salary}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="badge-stack">
                <div className="pill subtle">{stageLabels[selectedJob.stage]}</div>
                <div className="pill subtle strong">Score {selectedJob.score}</div>
              </div>
            </div>

            <div className="action-row">
              <button className="ghost-btn">
                <Globe size={16} weight="bold" /> View listing
              </button>
              <button className="ghost-btn">
                <ArrowLineUpRight size={16} weight="bold" /> Open research
              </button>
              <button className="primary-btn">
                <PaperPlaneTilt size={16} weight="bold" /> Mark applied
              </button>
            </div>

              <div className="card warning">
                <div className="card-label">
                  <ListChecks size={16} weight="bold" /> Fit assessment
                </div>
                <p>{selectedJob.assessment}</p>
              </div>

            <div className="split">
              <div className="card">
                <div className="card-label">
                  <TrendUp size={16} weight="bold" /> Tailored summary
                </div>
                <p className="muted">{selectedJob.summary}</p>
                <ul className="bullets">
                  {selectedJob.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="card checklist">
                <div className="card-label">
                  <CheckCircle size={16} weight="bold" /> Next steps
                </div>
                <ul className="checklist-items">
                  {selectedJob.checklist.map((item) => (
                    <li key={item.label}>
                      <span className={`status-dot ${item.done ? 'done' : 'todo'}`} />
                      <span className={item.done ? 'muted' : ''}>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
