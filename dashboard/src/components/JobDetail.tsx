import {
  CheckCircleIcon,
  ListChecksIcon,
  ArrowLineUpRightIcon,
  PaperPlaneTiltIcon,
  MapPinIcon,
  TrendUpIcon,
  GlobeIcon,
} from "@phosphor-icons/react";
import type { Job, Stage } from "../types";

type Prop = {
  selectedJob: Job;
  stageLabels: Record<Stage, string>;
};
export function JobDetail({ selectedJob, stageLabels }: Prop) {
  return (
    <section className="panel detail-panel">
      <div className="panel-head">
        <div>
          <p className="eyebrow">Selected</p>
          <h2>{selectedJob.title}</h2>
          <div className="job-meta">
            <MapPinIcon size={16} />
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
          <GlobeIcon size={16} weight="bold" /> View listing
        </button>
        <button className="ghost-btn">
          <ArrowLineUpRightIcon size={16} weight="bold" /> Open research
        </button>
        <button className="primary-btn">
          <PaperPlaneTiltIcon size={16} weight="bold" /> Mark applied
        </button>
      </div>

      <div className="card warning">
        <div className="card-label">
          <ListChecksIcon size={16} weight="bold" /> Fit assessment
        </div>
        <p>{selectedJob.assessment}</p>
      </div>

      <div className="split">
        <div className="card">
          <div className="card-label">
            <TrendUpIcon size={16} weight="bold" /> Tailored summary
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
            <CheckCircleIcon size={16} weight="bold" /> Next steps
          </div>
          <ul className="checklist-items">
            {selectedJob.checklist.map((item) => (
              <li key={item.label}>
                <span className={`status-dot ${item.done ? "done" : "todo"}`} />
                <span className={item.done ? "muted" : ""}>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
