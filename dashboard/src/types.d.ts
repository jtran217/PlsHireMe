export type Job = {
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

export type Stage = 'ready' | 'new' | 'applied' | 'archived'

export type Stats = {
    total: number;
    byStage: {
        ready: number;
        new: number;
        applied: number;
        archived: number;
    };
}