import AboutSection from "@/sections/About/AboutSection";
import Solutions from "@/sections/About/Solutions";
import Breadcrumb from "@/components/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Rankify",
  description: "This is About Page for website",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
      />
      <AboutSection />
       <Solutions />
    </>
  );
};

export default AboutPage;
