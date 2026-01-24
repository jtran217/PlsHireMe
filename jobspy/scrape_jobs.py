import csv
from jobspy import scrape_jobs

jobs = scrape_jobs(
    site_name=["indeed", "linkedin","glassdoor"], # "google", "bayt", "naukri", "bdjobs"
    search_term="computer science internship",
    google_search_term="software engineer jobs near Calgary, AB since yesterday",
    distance = 100,
    location="Calgary",
    results_wanted=20,
    hours_old=24,
    country_indeed='Canada',
    linkedin_fetch_description=True,
    
)
print(f"Found {len(jobs)} jobs")
print(jobs.head())

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

jobs.to_csv("jobs.csv", quoting=csv.QUOTE_NONNUMERIC, escapechar="\\", index=False) # to_excel