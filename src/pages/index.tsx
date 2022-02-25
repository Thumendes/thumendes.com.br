import ContactForm from "components/ContactForm";
import HeroSection from "components/Hero";
import Layout from "components/Layout";
import WorkingOn from "components/Working";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <WorkingOn />
      <ContactForm />
    </Layout>
  );
};

export default Home;
