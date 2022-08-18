import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '@browniebroke/gatsby-image-gallery';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { Amplify, Storage } from 'aws-amplify';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

interface ImageSharpEdge {
    node: {
      childImageSharp: {
        thumb: IGatsbyImageData
        full: IGatsbyImageData
      }
    }
  }
  
  interface PageProps {
    data: {
      images: {
        edges: ImageSharpEdge[]
      }
    }
  }

const MyGallery = () => {
  const data = useStaticQuery(pageQuery)
  
  const images = data.images.edges.map(({ node }, index) => ({
    ...node.childImageSharp,
    // Generate name based on the index as caption.
    caption: `Image ${index}`,
  }))

  return (
        <Gallery images={images} />
  );
};

const pageQuery = graphql`
query ImagesForGallery {
    images: allFile(
        filter: { relativeDirectory: { eq: "gallery" } }
        sort: { fields: name }
      ) {
        edges {
            node {
              childImageSharp {
                thumb: gatsbyImageData(
                  width: 405
                  height: 270
                  placeholder: BLURRED
                )
                full: gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
`;

export default MyGallery;