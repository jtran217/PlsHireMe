import type { Stage } from '../types'
import { MagnifyingGlassIcon, FunnelSimpleIcon, CaretDownIcon } from '@phosphor-icons/react'

type Stats = { total: number; byStage: Record<Stage, number> }

type Props = {
  activeStage: Stage | 'all'
  setActiveStage: (s: Stage | 'all') => void
  stats: Stats
  search: string
  setSearch: (v: string) => void
  onToggleFilters?: () => void
  onSort?: () => void
}

export function Toolbar({
  activeStage,
  setActiveStage,
  stats,
  search,
  setSearch,
  onToggleFilters,
  onSort,
}: Props) {
  return (
    <div className="toolbar">
      <div className="tabs">
        {(['ready', 'new', 'applied', 'archived', 'all'] as const).map((key) => (
          <button
            key={key}
            className={`tab ${activeStage === key ? 'active' : ''}`}
            onClick={() => setActiveStage(key as Stage | 'all')}
          >
            {key === 'all' ? 'All' : key === 'new' ? 'Discovered' : key.charAt(0).toUpperCase() + key.slice(1)}
            <span className="pill small">
              {key === 'all' ? stats.total : stats.byStage[key as Stage]}
            </span>
          </button>
        ))}
      </div>

      <div className="filters">
        <div className="input">
          <MagnifyingGlassIcon size={16} />
          <input
            placeholder="Search titles, companies, or tags"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="ghost-btn" onClick={onToggleFilters}>
          <FunnelSimpleIcon size={16} /> Filters
        </button>

        <button className="ghost-btn" onClick={onSort}>
          Sort by <CaretDownIcon size={14} weight="bold" />
        </button>
      </div>
    </div>
  )
}