import React, { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import { Row, Col } from "reactstrap";
import Link from "next/link";

export default function MainLayout({ children }: { children: ReactElement }) {
  const workclassLogo: string =
    // "https://workclass.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fworkclass%2Fworkclass-logo.64c8e254e080114c740d3d4dd1dc597a.svg&w=384&q=75";
    "https://i.pinimg.com/originals/d1/e2/85/d1e285affc590ce2e87fd225aacfd15a.png";

  return (
    <>
      <div>
        <Head>
          <title>Workclass</title>{" "}
        </Head>
        <Row style={{ height: "70px", position: "relative", margin: "5px" }}>
          <Col>
            <Link href="/">
              <Image
                style={{ cursor: "pointer" }}
                loader={() => workclassLogo}
                layout="fill"
                objectFit="contain"
                alt="workclass"
                src={workclassLogo}
              />
            </Link>
          </Col>
        </Row>
        <Row style={{textAlign:'center', fontFamily:'sans-serif',
      fontWeight: 'bold',color:"#427ba6"}}>
          <Col>ATHIRA</Col>
        </Row>
        <main>{children}</main>
      </div>
    </>
  );
}
