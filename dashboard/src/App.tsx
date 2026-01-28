import { useMemo, useState } from "react";
import "./App.css";
import type { Job, Stage } from "./types";
import { tempData } from "./tempData";
import { Header } from "./components/Header";
import { Toolbar } from "./components/Toolbars";
import { JobList } from "./components/JobList";
import { JobDetail } from "./components/JobDetail";

const stageLabels: Record<Stage, string> = {
  ready: "Ready",
  new: "Discovered",
  applied: "Applied",
  archived: "Archived",
};
const jobData: Job[] = tempData;

function App() {
  const [activeStage, setActiveStage] = useState<Stage | "all">("ready");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string>(jobData[0].id);

  const stats = useMemo(() => {
    const total = jobData.length;
    const byStage = jobData.reduce(
      (acc, job) => {
        acc[job.stage] += 1;
        return acc;
      },
      { ready: 0, new: 0, applied: 0, archived: 0 },
    );
    return { total, byStage };
  }, []);

  const filteredJobs = useMemo(() => {
    return jobData.filter((job) => {
      const matchesStage =
        activeStage === "all" ? true : job.stage === activeStage;
      const term = search.trim().toLowerCase();
      const matchesQuery =
        term.length === 0 ||
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.tags.some((tag) => tag.toLowerCase().includes(term));
      return matchesStage && matchesQuery;
    });
  }, [activeStage, search]);

  const selectedJob = useMemo(() => {
    const current = jobData.find((job) => job.id === selectedId);
    if (current) return current;
    return filteredJobs[0] ?? jobData[0];
  }, [selectedId, filteredJobs]);

  return (
    <div className="app-shell">
      <Header stats={stats} selectedJob={selectedJob} />
      <Toolbar
        activeStage={activeStage}
        setActiveStage={setActiveStage}
        stats={stats}
        search={search}
        setSearch={setSearch}
        onToggleFilters={() => {
          /* open filters UI */
        }}
        onSort={() => {
          /* open sort menu */
        }}
      />

      <div className="grid">
        <JobList
          filteredJobs={filteredJobs}
          selectedJob={selectedJob}
          setSelectedId={setSelectedId}
          stageLabels={stageLabels}
        />
        <JobDetail selectedJob={selectedJob} stageLabels={stageLabels} />
      </div>
    </div>
  );
}

export default App;
