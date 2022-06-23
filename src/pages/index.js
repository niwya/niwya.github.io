import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="cb ·" />
      <Page useSplashScreenAnimation>

        <HeroSection sectionId="hero" />
        
        <AboutSection sectionId="about" heading="About Me ·" />

        <ProjectsSection sectionId="projects" heading="Projects In Progress ·" />
       
      </Page>
    </>
  );
}
