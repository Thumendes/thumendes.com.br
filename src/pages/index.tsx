import HeroSection from "components/Hero";
import Layout from "components/Layout";
import WorkingOn from "components/Working";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <WorkingOn />
    </Layout>
  );
};

export default Home;
