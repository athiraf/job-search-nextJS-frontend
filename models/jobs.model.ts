
export interface JobsListInterface {
    count: number;
    curPage: number;
    next?: string;
    previous?: string;
    results: JobsInterface[];
}

export interface JobsInterface {
    job_id: number;
    company: string;
    title: string;
    logo_url: string;
    date: string;
}