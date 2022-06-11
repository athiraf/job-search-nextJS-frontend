import Link from "next/link";
import React, { FunctionComponent, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import styles from "../styles/search_box.module.css";
import { addJobPageParam } from "../api/jobs_api";

export interface SearchBoxInterface {
  isLoading : boolean
  prevSearch? : string,
  prevCompany? : string,
}

const SearchBoxComponent: FunctionComponent<SearchBoxInterface> = ({isLoading,prevSearch,prevCompany} : SearchBoxInterface) => {
  let curSearch : string = prevSearch??'';
  let curCompany : string = prevCompany??'';
  let [search,setSearch] = useState(curSearch);
  let [company,setCompany] = useState(curCompany);


  return (
    <div className={styles["search-box-div"]}>
      <Form className={styles.form}>
        <FormGroup row={true}>
          <Input
            className={styles.input}
            type="text"
            placeholder="Job title or keywords"
            value={search}
            onChange={(e)=>{
              setSearch(e.target.value);
            }}
          />
          <Input
            className={styles.input}
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e)=>{
              setCompany(e.target.value);
            }}
          />
          <Link href={addJobPageParam('/jobs',company,search,1)}>
            <Button className={styles["search-button"]} onSubmit={() => {}} 
              onClick={() => {
                //@ts-ignore
                window.location = addJobPageParam('/jobs',company,search,1)}}
              disabled={!!isLoading}
            >
              <i
                className={!!isLoading?"fa fa-spinner fa-spin": "fa fa-search"}
                color="white"
                style={{ color: "white"}}
              />
              {!isLoading &&
              <div style={{ paddingLeft: "5px" }}>
               Search
              </div>
              }
            </Button>
          </Link>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SearchBoxComponent;
