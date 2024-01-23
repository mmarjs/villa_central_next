import React from "react";
import { fetchGraphQL, gql } from "../lib/fetchHelper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import BigHeaderTextCenter from "../components/BigHeaderTextCenter";
import PhotoBottomContent from "../components/PhotoBottomContent";
import FloorContent from "../components/FloorContent";
import FloorPhotos from "../components/FloorPhotos";
import BookNow from "../components/BookNow";
// import { getApartmentsData } from "../apis/apartments";

export default function PageTheApartments({ result }) {
  // console.log("The Apartments", result)
  // const photos  = ['https://res.cloudinary.com/dmt8jsixt/image/upload/v1662342265/villa-central/floor1_vpysua.png', 'https://res.cloudinary.com/dmt8jsixt/image/upload/v1662342219/villa-central/floor2_uebfve.png', 'https://res.cloudinary.com/dmt8jsixt/image/upload/v1662342293/villa-central/floor4-1_ohidqh.png', 'https://res.cloudinary.com/dmt8jsixt/image/upload/v1662342338/villa-central/floor3_ycb4xs.png'];
  const gallery_floor_1_photos = [];
  const gallery_top_photos = [];

  for( var key in result?.gallery_floor_1){
    if(key.includes('photo')){
      gallery_floor_1_photos.push(result?.gallery_floor_1[key]?.data?.attributes)
    }
  }
  
  for( var key in result?.gallery_top){
    if(key.includes('photo')){
      gallery_top_photos.push(result?.gallery_top[key]?.data?.attributes)
    }
  }

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
      <FloorContent
        background={result?.left_panel?.background?.data?.attributes?.url}
        html={
          result.left_panel !== undefined
            ? result.left_panel.content
            : ""
        }
        type="left"
      />
      <FloorPhotos
        photos={gallery_floor_1_photos}
        title={
          result.gallery_floor_1 !== undefined
            ? result.gallery_floor_1.title
            : ""
        }
      />
      <FloorContent
        background={result?.right_panel?.background?.data?.attributes?.url}
        html={
          result.right_panel !== undefined
            ? result.right_panel.content
            : ""
        }
        type="right"
      />
      <FloorPhotos
        photos={gallery_top_photos}
        title={
          result.gallery_top !== undefined
            ? result.gallery_top.title
            : ""
        }
      />
      <BookNow />
      <Footer />
      <ScrollTop />
    </React.Fragment>
  );
}

// export async function getStaticProps() {
//   const result = await getApartmentsData();
//   return { props: { result } }
// }

export async function getStaticProps() {
  const data = await fetchGraphQL(
    gql`
    query {
      theApartmentsSingular {
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
            left_panel {
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
            gallery_floor_1 {
              title
              photo_1 {
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
              photo_2 {
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
              photo_3 {
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
              photo_4 {
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
            right_panel {
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
            gallery_top {
              title
              photo_1 {
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
              photo_2 {
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
              photo_3 {
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
              photo_4 {
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
      result: data.theApartmentsSingular.data.attributes,
    },
    revalidate: 60,
  };
}
