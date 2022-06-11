import styles from "../styles/homepage.module.css";
import Layout from "../components/main_layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../models/global.model";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import SearchBoxComponent from "../components/search_box";

const HomePage: NextPageWithLayout = () => {
  const upperCircleBGSrc: string =
    "https://workclass.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fpage-landing%2Fblue-circle.04c7673d5ec276a77502acfafaa3996b.svg&w=1920&q=75";
  const bottomCircleBGSrc: string =
    "https://workclass.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fpage-landing%2Fbeige-circle.ef5fad6f1a6546cdd140f6ed1ef52436.svg&w=1920&q=75";

  return (
    <div className={styles.container}>
      <div className={styles["job-search-background"]}>
        <div className={styles["upper-blue-circle-background"]}>
          <img src={upperCircleBGSrc} />
        </div>
        <div className={styles["bottom-blue-circle-background"]}>
          <img src={bottomCircleBGSrc} />
        </div>

        <h1 className={styles["title"]}>Find Jobs in Singapore</h1>
        <SearchBoxComponent/>
      </div>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default HomePage;
