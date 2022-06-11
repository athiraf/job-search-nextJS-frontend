// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { JobsListInterface } from '../models/jobs.model';
import { defaultHeader } from './base_api';
import { ApiURL } from './url'

export type JobModel = {
  job_id: bigint,
  title : string,
  company : string,
  logo_url : string,
  date : Date,
}

export const addJobPageParam : (urlBase: string,company?: string, search? : string,page?:number)=>string = 
  (urlBase,company, search,page)=>{
    let url = urlBase + '/?';
    url += ![null,undefined,''].includes(company)?'company=' + company +'&': '';
    url += ![null,undefined,''].includes(search)? 'search=' + search + '&' : '';
    url += page!=undefined? 'page=' + page?.toString() + '&' : '';
    return url;
}

export default async function JobApi(
  company?: string,
  search?: string,
  page? : number,
) {
  let url :string = ApiURL.GetJobs;
  url = addJobPageParam(url,company,search,page);
  console.log(url);

  const response = await fetch(
    encodeURI(url),
    {
      method: "GET",
      headers: defaultHeader,
    }
  );
  if (response.status && response.status === 200) {
    const resp = response.json();
    return resp;
  } else {
    console.log("Error - response.status:", response.status)
  }
}
