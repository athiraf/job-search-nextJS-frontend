import styles from "../styles/jobs.module.css";
import Layout from "../components/main_layout";
import {
  CardGroup,
  // Pagination,
  // PaginationItem,
  PaginationLink,
} from "reactstrap";
import { Dispatch, ReactElement, ReactNode, useEffect, useState } from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import SearchBoxComponent from "../components/search_box";
import JobCard, { JobSkeletonCard } from "../components/job_card";
import JobApi, { addJobPageParam } from "../api/jobs_api";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { itemPerPage } from "../api/base_api";
import { JobsInterface } from "../models/jobs.model";
import { Pagination, PaginationItem } from "@mui/material";

interface JobsProps {
  page: number;
  company?: string;
  search?: string;
}

type NextPageWithLayoutJobs<JobsProps> = NextPage<JobsProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const JobsListPage: NextPageWithLayoutJobs<JobsProps> = (data) => {
  let [jobs, setJobs] : [JobsInterface[],Dispatch<any>] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [maxPage, setMaxPage] = useState(0);
  const curPage : number = data.page;
  useEffect(() => {
    getJobs(data.page);
  }, []);

  const router = useRouter();
  const curPath = addJobPageParam(router.pathname, data.company, data.search);
  const handlePageChange = (e : any,selectedPage:number) =>{
    const url = curPath + "page=" + selectedPage.toString();
    router.push(url);
    getJobs(selectedPage);
  }

  const getJobs = (page : number)=>{
    setLoading(true);
    JobApi(data.company, data.search, page)
      .then((res) => {
        setJobs(res.results);
        console.log(res.results);
        setMaxPage(Math.ceil(res.count / itemPerPage));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }


  return (
    <>
      <div className={styles.container}>
        <div className={styles["search-area-div"]}>
          <h1 className={styles["title"]}>Find Jobs in Singapore</h1>
          <div style={{ paddingBottom: "20px" }}>
            Search by employment type, category and more!
          </div>
          <SearchBoxComponent />
        </div>

        <CardGroup className={styles["card-group"]}>
          {isLoading && Array.from(Array(5).keys())
            .map((x) => x + 1)
            .map((i) => (
              <JobSkeletonCard key={i}></JobSkeletonCard>
            ))}
          {!isLoading &&
            jobs.map((job) =>
              JobCard({
                jobTitle: job.title,
                company: job.company,
                logoUrl: job.logo_url,
                date: new Date(job.date),
                isLoading: true,
              })
            )}
        </CardGroup>
        <div style={{ display: "block", marginBottom: '50px' }}>
          <Pagination count={maxPage} defaultPage={1} 
          hidePrevButton={curPage==1}
          hideNextButton={curPage==maxPage}
          onChange={
            handlePageChange
          }/>
        </div>
      </div>
    </>
  );
};

JobsListPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  // @ts-ignore
  const company: string = context.query.company ?? "";
  // @ts-ignore
  const search: string = context.query.search ?? "";
  // @ts-ignore
  let page: int = parseInt(context.query.page ?? "1");
  if (page < 1 || page == NaN) page = 1;

  // Pass data to the page via props
  return { props: { company: company, search: search, page: page } };
};

export default JobsListPage;
