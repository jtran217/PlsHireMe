import { ClockIcon, MapPinIcon } from "@phosphor-icons/react";
import type { Job, Stage } from "../types";

type Prop = {
  filteredJobs: Job[];
  selectedJob: Job;
  setSelectedId: (id: string) => void;
  stageLabels: Record<Stage, string>;
};
export function JobList({
  filteredJobs,
  selectedJob,
  setSelectedId,
  stageLabels,
}: Prop) {
  return (
    <section className="panel list-panel">
      <div className="panel-head">
        <p className="eyebrow">Queue</p>
        <p className="muted">Prioritized by fit score and freshness.</p>
      </div>
      <div className="job-list">
        {filteredJobs.map((job) => {
          const isActive = job.id === selectedJob.id;
          return (
            <button
              key={job.id}
              className={`job-card ${isActive ? "active" : ""}`}
              onClick={() => setSelectedId(job.id)}
            >
              <div className="job-card-top">
                <div className="stage-pill">{stageLabels[job.stage]}</div>
                <div className="score-chip">{job.score}</div>
              </div>
              <div className="job-title">{job.title}</div>
              <div className="job-meta">
                <MapPinIcon size={14} />
                <span>
                  {job.company} · {job.location}
                </span>
                <span className="dot" />
                <ClockIcon size={14} />
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
          );
        })}
      </div>
    </section>
  );
}
