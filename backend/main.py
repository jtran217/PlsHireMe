from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
from typing import List, Dict

DB_PATH = "../data/jobs.db"

app = FastAPI(title="PlsHireMe Jobs API")

# allow browser frontend during development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # restrict in production
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

def get_conn():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def rows_to_list(rows) -> List[Dict]:
    return [dict(r) for r in rows]

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/jobs")
def list_jobs(limit: int = 100, offset: int = 0):
    conn = get_conn()
    try:
        cur = conn.execute("SELECT * FROM jobs LIMIT ? OFFSET ?", (limit, offset))
        rows = cur.fetchall()
        return {"count": len(rows), "jobs": rows_to_list(rows)}
    finally:
        conn.close()

@app.get("/jobs/{job_id}")
def get_job(job_id: int):
    conn = get_conn()
    try:
        cur = conn.execute("SELECT * FROM jobs WHERE rowid = ?", (job_id,))
        row = cur.fetchone()
        if not row:
            raise HTTPException(status_code=404, detail="Job not found")
        return dict(row)
    finally:
        conn.close()