import React from "react";
import { fetchGraphQL, gql } from "../lib/fetchHelper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import BigHeaderTextCenter from "../components/BigHeaderTextCenter";
import PhotoBottomContent from "../components/PhotoBottomContent";
import BookNow from "../components/BookNow";
import PanelOnSide from "../components/PanelOnSide";
import LightBlueBanner from "../components/LightBlueBanner";
// import { getArrivalsData } from '../apis/arrivals';

export default function PageArrivals({ result }) {
  // console.log("Arrivals", result)

  return (
    <React.Fragment>
      <Header />
      <BigHeaderTextCenter
        html={
          result.big_header !== undefined
            ? result.big_header.content
            : ""
        }
        background={result?.big_header?.photo?.data?.attributes?.url}
      />
      <PhotoBottomContent
        html={
          result.photo_bottom_content !== undefined
            ? result.photo_bottom_content.content
            : ""
        }
        background={result?.photo_bottom_content?.photo?.data?.attributes}
      />
      <PanelOnSide
        type="right_white"
        html={
          result.panel_on_side_right !== undefined
            ? result.panel_on_side_right.content
            : ""
        }
        background={result}
      />
      <LightBlueBanner html={result.light_blue_title} />
      <PanelOnSide
        type="left_white"
        html={
          result.panel_on_side_left !== undefined
            ? result.panel_on_side_left.content
            : ""
        }
        background={result}
      />
      <BookNow />
      <Footer />
      <ScrollTop />
    </React.Fragment>
  );
}

// export async function getStaticProps() {
//   const result = await getArrivalsData();
//   return { props: { result } }
// }

export async function getStaticProps() {
  const data = await fetchGraphQL(
    gql`
    query {
      arrival {
        data {
          attributes {
            big_header {
              id
              content
              photo {
                data {
                  attributes {
                    url
                    alternativeText
                    width
                    height
                    placeholder
                  }
                }
              }
            }
            photo_bottom_content {
              id
              content
              photo {
                data {
                  attributes {
                    url
                    alternativeText
                    width
                    height
                    placeholder
                  }
                }
              }
            }
            panel_on_side_right {
              id
              content
              background {
                data {
                  attributes {
                    url
                    alternativeText
                    width
                    height
                    placeholder
                  }
                }
              }
            }
            light_blue_title 
            panel_on_side_left {
              id
              content
              background {
                data {
                  attributes {
                    url
                    alternativeText
                    width
                    height
                    placeholder
                  }
                }
              }
            }
          }
        }
      }
    }
    `
  );
  return {
    props: {
      result: data.arrival.data.attributes,
    },
    revalidate: 60,
  };
}
