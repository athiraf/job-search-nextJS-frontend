import Link from "next/link";
import React, { FunctionComponent, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import styles from "../styles/search_box.module.css";
import { addJobPageParam } from "../api/jobs_api";

const SearchBoxComponent: FunctionComponent = () => {
  let curSearch : string = '';
  let curCompany : string = '';
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
            <Button className={styles["search-button"]} onSubmit={() => {}}>
              <i
                className="fa fa-search"
                color="white"
                style={{ color: "white", paddingRight: "10px" }}
              />
              Search
            </Button>
          </Link>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SearchBoxComponent;
