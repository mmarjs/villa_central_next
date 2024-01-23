import React from "react";
import { fetchGraphQL, gql } from "../lib/fetchHelper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import BigHeader from "../components/BigHeader";
import ContentLeftImage from "../components/ContentLeftImage";
import X5BlueBlocks from "../components/X5BlueBlocks";
import DescriptionForVilla from "../components/DescriptionForVilla";
import LeftWhiteList from "../components/LeftWhiteList";
import Testimonials from "../components/Testimonials";
import BookNow from "../components/BookNow";
// import { getHomeData } from "../apis/home";

export default function Home({ result }) {

  return (
    <React.Fragment>
      <Header />
      <BigHeader slides_data={result.home_big_slider} background={result.home_big_slider_background?.data?.attributes} />
      <ContentLeftImage content={result.welcome_to_split} background={result.welcome_to_split_img?.data?.attributes} />
      <X5BlueBlocks items={result.blue_boxes} />
      <DescriptionForVilla content={result.description_for_villa} first_background={result.description_for_villa_img_1?.data?.attributes} second_background={result.description_for_villa_img_2?.data?.attributes} />
      <LeftWhiteList content={result.left_white_list} />
      <Testimonials
        content={result.testimonials}
        testimonials={result.testimonials_items}
      />
      <BookNow />
      <Footer />
      <ScrollTop />
    </React.Fragment>
  );
}

// export async function getStaticProps() {
//   const result = await getHomeData();
//   return { props: { result } }
// }

export async function getStaticProps() {
  const data = await fetchGraphQL(
    gql`
      query {
        home {
          data {
            attributes {
              home_big_slider {
                id
                content
                singletext
              }
              home_big_slider_background {
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
              welcome_to_split
              welcome_to_split_img {
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
              description_for_villa
              blue_boxes {
                id
                number
                title
              }
              left_white_list {
                id
                list_holder
                right_content
              }
              testimonials {
                id
                top_title
                right_content
                testimonials_img {
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
              testimonials_items {
                id
                content
              }
              description_for_villa
              description_for_villa_img_1 {
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
              description_for_villa_img_2 {
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
    `
  );
  return {
    props: {
      result: data.home.data.attributes,
    },
    revalidate: 60,
  };
}
