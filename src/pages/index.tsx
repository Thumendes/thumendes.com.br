import HeroSection from "components/Hero";
import Layout from "components/Layout";
import WorkingOn from "components/Working";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Arthur Mendes Pereira</title>
      </Head>
      <HeroSection />
      <WorkingOn />
    </Layout>
  );
};

export default Home;
