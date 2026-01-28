import {
  ClockIcon,
  GlobeIcon,
  ArrowLineUpRightIcon,
  TrendUpIcon
} from "@phosphor-icons/react";
import type { Job, Stats } from "../types";

export function Header({stats, selectedJob}:{stats:Stats,selectedJob:Job}) {
  return (
    <div>
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
            <ClockIcon size={18} weight="duotone" />
            Recent activity
          </button>
          <button className="ghost-btn">
            <GlobeIcon size={18} weight="duotone" />
            Sources
          </button>
          <button className="primary-btn">
            <ArrowLineUpRightIcon size={18} weight="bold" />
            Run pipeline
          </button>
        </div>
      </header>
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
                    <TrendUpIcon size={18} weight="bold" />
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
    </div>
  );
}
