import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";




export default function Home({ allPostsData }) {


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
        <h2 className={utilStyles.headingLg}>My Projects</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <br />
            <small  className={utilStyles.lightText}>
              <Link href={"https://github.com/Mooninghnk"}>
                <div onMouseOver={e => onH(e)} className="link" style={{display: "inline-flex", alignItems: "center"}}>
                 <FaGithub  color="black" size={80} style={{marginRight: "10px"}}/>
                <h1>{" "} My github</h1>
                 </div>
              
              </Link>
            </small>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
