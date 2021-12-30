import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function Home({ allPostsData }) {
  const [icon, sizeIcon] = useState(70);

  return (
    <Layout home>
      <Head>
        <title>{"resume"}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>React, Nextjs, Nodejs, Typescirpt, Golang</p>
        <p>Webdeveloper, ServerSide, Crypto Enthusiast </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <small className={utilStyles.lightText}>
          <Link href={"https://github.com/Mooninghnk"}>
            <div
              onMouseEnter={() => sizeIcon(90)}
              onMouseLeave={() => sizeIcon(70)}
              className="link"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <FaGithub
                color="black"
                size={icon}
                style={{ marginRight: "10px" }}
              />
              <h1> My github</h1>
            </div>
          </Link>
        </small>
        <h2 className={utilStyles.headingLg}>My Projects</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
          <Link href={"https://victoria.miami"}> 
            <img src={"/images/vic.gif"}/>
            </Link>
            <h2 className={utilStyles.headingLg}>Design Jobs</h2>
            <Link href={"https://www.figma.com/file/QtfamWaxfRYes9IXFGR6c6/victoria?node-id=0%3A1"}> 
            <img src={"/images/disign.gif"}/>
            </Link>
            <Link href={"https://www.figma.com/file/QtfamWaxfRYes9IXFGR6c6/victoria?node-id=0%3A1"}> 
            <img src={"/images/vic2.gif"}/>
            </Link>
            <br />
          </li>
        </ul>
      </section>
    </Layout>
  );
}
