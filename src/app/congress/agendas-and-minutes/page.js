// src/app/congress/agendas-and-minutes/page.js
import Head from "next/head";
import Navbar from "../../../components/global/Navbar";
import Header from "../../../components/global/Header";
import MainContent from "../../../components/congress/agendas-and-minutes/AgendasAndMinutes";
import BreadCrumb from "../../../components/congress/agendas-and-minutes/Breadcrumb";

// import Announcement from "../components/homepage/Announcement";
import Footer from "../../../components/global/Footer";

export default function Home() {
  return (
    <div className="bg-neutral-200 flex flex-col min-h-screen">
      <Head>
        <title>Lassonde Student Congress</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <BreadCrumb />
      <div className="container mx-auto flex-grow">
        {/* <Announcement /> */}
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
