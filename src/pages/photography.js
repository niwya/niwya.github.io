import React from "react";
import {
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import MyGallery from "../components/gallery/gallery";

export default function IndexPage() {
  return (
    <>
      <Seo title="cb ·" />
      <Page useSplashScreenAnimation>
      <MyGallery />
      </Page>
    </>
  );
}
