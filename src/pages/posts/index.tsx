import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>March 12th, 2021</time>
            <strong>SaaS: Single tenant ou Multi-tenant, qual escolher?</strong>
            <p>In this guide, you will learn how to create a Serverless applications with AWS Lambda functions. It's simple: build code and just pay for what you use!</p>
          </a>
          <a href="#">
            <time>March 12th, 2021</time>
            <strong>SaaS: Single tenant ou Multi-tenant, qual escolher?</strong>
            <p>In this guide, you will learn how to create a Serverless applications with AWS Lambda functions. It's simple: build code and just pay for what you use!</p>
          </a>
          <a href="#">
            <time>March 12th, 2021</time>
            <strong>SaaS: Single tenant ou Multi-tenant, qual escolher?</strong>
            <p>In this guide, you will learn how to create a Serverless applications with AWS Lambda functions. It's simple: build code and just pay for what you use!</p>
          </a>
          <a href="#">
            <time>March 12th, 2021</time>
            <strong>SaaS: Single tenant ou Multi-tenant, qual escolher?</strong>
            <p>In this guide, you will learn how to create a Serverless applications with AWS Lambda functions. It's simple: build code and just pay for what you use!</p>
          </a>
        </div>
      </main>
    </>
  );
};