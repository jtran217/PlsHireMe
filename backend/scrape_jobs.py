import csv
import sqlite3
import pandas as pd
from jobspy import scrape_jobs

jobs = scrape_jobs(
    site_name=["indeed", "linkedin","glassdoor"], # "google", "bayt", "naukri", "bdjobs"
    search_term="computer science internship",
    google_search_term="software engineer jobs near Calgary, AB since yesterday",
    distance = 100,
    location="Calgary",
    results_wanted=20,
    hours_old=24*7,
    country_indeed='Canada',
    linkedin_fetch_description=True,
    
)
print(f"Found {len(jobs)} jobs")

if jobs is None or jobs.empty:
    print("No jobs found")
else:
    unwanted_col = [
        "emails",
        "interval",
        "listing_type",

        "company_url",
        "company_url_direct",
        "company_addresses",
        "company_num_employees",
        "company_revenue",
        "company_description",

        "vacancy_count",
        "work_from_home_type",

        "salary_source",   
        "company_logo",    
        "company_rating",
        "company_reviews_count"
    ]
    jobs.drop(columns=unwanted_col, inplace=True)
    jobs.to_csv("jobs.csv", quoting=csv.QUOTE_NONNUMERIC, escapechar="\\", index=False) 

    conn = sqlite3.connect('../data/jobs.db')
    try:
        print("Existing Table...")
        existing = pd.read_sql('SELECT * FROM jobs',conn)
    except Exception:
        print("No table found...")
        existing = pd.DataFrame()
    if not existing.empty:
        print("Merge new data into old...")
        combined = pd.concat([existing,jobs], ignore_index=True)
        print("Dedupe...")
        combined.drop_duplicates(subset=['id'],inplace=True,keep='last')
    else:
        combined=jobs
    combined.to_sql('jobs',conn, if_exists='replace',index=False)
    conn.close()
    print("Updated to DB")