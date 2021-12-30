import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import {FaGithub } from 'react-icons/fa';
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{"resume"}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>React, Nextjs, Nodejs, Typescirpt, Golang</p>
        <p>
         Webdeveloper, ServerSide, Crypto Enthusiast{' '}
         
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Projects</h2>
        <ul className={utilStyles.list}>

            <li className={utilStyles.listItem} >
              
              <br />
              <small className={utilStyles.lightText}>
              <h3><FaGithub />? </h3>
              </small>
            </li>
      
        </ul>
      </section>
    </Layout>
  )
}

